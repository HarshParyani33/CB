/**
 * server/chat.js
 * Implements the multi-turn tool-calling loop, SSE event emissions,
 * and contextual suggestion generation.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { callModel } from './llm.js';
import { toolDefinitions, executeTool } from './tools/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SYSTEM_PROMPT_PATH = path.resolve(__dirname, 'prompts/system.md');

let cachedSystemPrompt = null;

/**
 * Loads system prompt from prompts/system.md
 */
export async function getSystemPrompt() {
  try {
    const content = await fs.readFile(SYSTEM_PROMPT_PATH, 'utf-8');
    cachedSystemPrompt = content;
    return content;
  } catch (err) {
    console.error('[chat] Failed to load system prompt:', err.message);
    return cachedSystemPrompt || 'You are Bunny, the AI shopping assistant for SPOILED BUNNY.';
  }
}

/**
 * Generates 2-3 relevant follow-up suggestion chips based on the conversation
 */
function generateSuggestions(lastUserMessage = '', replyText = '', hasProducts = false) {
  const userLower = (lastUserMessage || '').toLowerCase();
  const replyLower = (replyText || '').toLowerCase();

  if (hasProducts || userLower.includes('tee') || userLower.includes('oversized') || userLower.includes('shirt')) {
    return ["Any discount?", "Check Pants", "Track Order"];
  }

  if (userLower.includes('order') || userLower.includes('track') || replyLower.includes('order')) {
    return ["Return & Exchange", "Shipping time?", "Explore New In"];
  }

  if (userLower.includes('discount') || userLower.includes('offer') || replyLower.includes('prepaid')) {
    return ["Show Oversized Tees", "Pajama Pants", "Track Order"];
  }

  if (userLower.includes('return') || userLower.includes('exchange') || userLower.includes('refund')) {
    return ["Chat on WhatsApp", "Track an Order", "Best Sellers"];
  }

  if (replyLower.includes('sold out') || userLower.includes('restock')) {
    return ["Show Available Tees", "Any Discounts?", "Pajama Pants"];
  }

  return ["Oversized Tees", "Pajama Pants", "Active Offers"];
}

/**
 * Executes chat loop and dispatches callbacks for streaming tokens, products, and suggestions.
 * 
 * @param {Object} params
 * @param {string} params.sessionId - Client session ID
 * @param {Array} params.messages - [{ role, content }]
 * @param {Object} callbacks
 * @param {Function} callbacks.onToken - (chunk) => void
 * @param {Function} callbacks.onProducts - (productCards) => void
 * @param {Function} callbacks.onSuggestions - (chipsArray) => void
 * @param {Function} callbacks.onDone - () => void
 * @param {Function} callbacks.onError - (errObj) => void
 */
export async function handleChatStream({ sessionId, messages }, { onToken, onProducts, onSuggestions, onDone, onError }) {
  try {
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error('Messages array must not be empty.');
    }

    const systemPrompt = await getSystemPrompt();

    // Prepare message history
    const conversation = [
      { role: 'system', content: systemPrompt },
      ...messages.map(m => ({
        role: m.role,
        content: typeof m.content === 'string' ? m.content : JSON.stringify(m.content)
      }))
    ];

    const emittedCards = [];
    let lastSearchResults = null;
    const maxToolIterations = 5;
    let iteration = 0;
    let assistantFinalMessage = null;

    // Tool execution loop
    while (iteration < maxToolIterations) {
      iteration++;

      // Non-streaming call during tool identification phase
      const response = await callModel(conversation, toolDefinitions, { stream: false });

      if (!response) {
        throw new Error('No response received from the language model.');
      }

      // Check if model wants to call tools
      if (response.tool_calls && response.tool_calls.length > 0) {
        // Limit to max 3 tool calls per iteration to respect Groq rate limits
        const activeToolCalls = response.tool_calls.slice(0, 3);
        const filteredResponse = { ...response, tool_calls: activeToolCalls };
        conversation.push(filteredResponse);

        for (const toolCall of activeToolCalls) {
          const fnName = toolCall.function.name;
          let parsedArgs = {};
          try {
            parsedArgs = JSON.parse(toolCall.function.arguments || '{}');
          } catch (e) {
            console.warn(`[chat] Could not parse arguments for ${fnName}:`, toolCall.function.arguments);
          }

          console.log(`[chat][${sessionId || 'default'}] Calling tool: ${fnName}`, parsedArgs);

          let toolResult = null;
          try {
            toolResult = await executeTool(fnName, parsedArgs);
          } catch (execErr) {
            toolResult = { error: execErr.message };
          }

          // If show_products was called, collect the exact cards to display
          if (fnName === 'show_products' && toolResult && Array.isArray(toolResult.displayed_cards)) {
            for (const card of toolResult.displayed_cards) {
              if (!emittedCards.some(c => c.id === card.id)) {
                emittedCards.push(card);
              }
            }
          } else if (fnName === 'search_products' && toolResult && Array.isArray(toolResult.products)) {
            lastSearchResults = toolResult.products;
          }

          // Append tool result
          conversation.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: JSON.stringify(toolResult)
          });
        }

        // Loop again so model can evaluate tool results
        continue;
      }

      // No tool calls: model has its final response
      assistantFinalMessage = response;
      break;
    }

    let finalContent = assistantFinalMessage?.content || '';

    // Check if model included a json block with product_ids in text (fallback extraction)
    const jsonMatch = finalContent.match(/```(?:json)?\s*(\{[\s\S]*?"product_ids"[\s\S]*?\})\s*```/i);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1]);
        if (Array.isArray(parsed.product_ids) && parsed.product_ids.length > 0) {
          const showResult = await executeTool('show_products', { product_ids: parsed.product_ids });
          if (showResult && Array.isArray(showResult.displayed_cards)) {
            for (const card of showResult.displayed_cards) {
              if (!emittedCards.some(c => c.id === card.id)) {
                emittedCards.push(card);
              }
            }
          }
        }
      } catch (e) {
        console.warn('[chat] Could not parse inline json products:', e.message);
      }
      // Clean raw JSON code block from final customer-facing text
      finalContent = finalContent.replace(jsonMatch[0], '').trim();
    }

    // Fallback: if show_products was never called by the model, but search_products returned results
    if (emittedCards.length === 0 && lastSearchResults && lastSearchResults.length > 0) {
      const fallbackIds = lastSearchResults.slice(0, 1).map(p => String(p.id));
      const showRes = await executeTool('show_products', { product_ids: fallbackIds });
      if (showRes && Array.isArray(showRes.displayed_cards)) {
        for (const card of showRes.displayed_cards) {
          if (!emittedCards.some(c => c.id === card.id)) {
            emittedCards.push(card);
          }
        }
      }
    }

    // If products were collected but the model didn't write an intro, supply a crisp brand intro
    if (emittedCards.length > 0 && (!finalContent || finalContent.trim().length < 5)) {
      finalContent = "Got you covered fam! Check out this handpicked drop piece:";
    }

    // 1. Stream the final text tokens FIRST so stylist advice appears above the cards
    if (finalContent) {
      const words = finalContent.split(/(\s+)/);
      for (const word of words) {
        if (word) {
          onToken(word);
        }
      }
    }

    // 2. Deliver the product cards immediately after the text so they sit cleanly underneath
    if (emittedCards.length > 0) {
      onProducts(emittedCards);
    }

    // Generate contextual suggestion chips
    const lastUserMsg = messages.filter(m => m.role === 'user').pop()?.content || '';
    const suggestions = generateSuggestions(lastUserMsg, finalContent, emittedCards.length > 0);
    onSuggestions(suggestions);

    onDone();
  } catch (err) {
    console.error('[chat] Chat processing error:', err.message);
    onError({
      message: "Sorry, I hit a snag connecting with the server. You can chat with our team directly on WhatsApp!",
      whatsapp_url: "https://wa.me/916367970069",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
}
