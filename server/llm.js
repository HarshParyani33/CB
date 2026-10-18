/**
 * server/llm.js
 * OpenRouter wrapper using OpenAI SDK.
 * Model name and API key come strictly from process.env, never hardcoded.
 */

import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

let clientInstance = null;

function isValidKey(key) {
  return typeof key === 'string' && key.trim().length > 0 && !key.startsWith('your_') && key !== 'dummy-key';
}

function getClient() {
  if (!clientInstance) {
    const rawKeys = [
      process.env.GROQ_API_KEY,
      process.env.LLM_API_KEY,
      process.env.OPENROUTER_API_KEY
    ];
    const apiKey = rawKeys.find(isValidKey);

    let baseURL = process.env.LLM_BASE_URL;
    if (!baseURL) {
      if (apiKey && apiKey.startsWith('gsk_')) {
        baseURL = 'https://api.groq.com/openai/v1';
      } else {
        baseURL = 'https://openrouter.ai/api/v1';
      }
    }

    if (!apiKey) {
      console.warn('[llm] WARNING: No valid LLM API key set in .env. Live LLM calls will fail until a valid key is provided.');
    } else {
      console.log(`[llm] Configured LLM provider at: ${baseURL} (Key: ${apiKey.slice(0, 7)}...)`);
    }

    clientInstance = new OpenAI({
      apiKey: apiKey || 'dummy-key',
      baseURL,
      defaultHeaders: {
        'HTTP-Referer': 'https://spoiledbunny.in',
        'X-Title': 'Bunny Shopping Assistant'
      }
    });
  }
  return clientInstance;
}

/**
 * Returns the configured model name from .env
 */
export function getModelName() {
  return process.env.MODEL || 'google/gemini-2.5-flash';
}

/**
 * Handles mock simulation for offline testing of the tool loop and SSE stream
 */
function mockModelResponse(messages) {
  const lastMsg = messages[messages.length - 1];

  // If last message was a tool result, formulate the assistant's final response
  if (lastMsg.role === 'tool') {
    let toolData = {};
    try {
      toolData = JSON.parse(lastMsg.content);
    } catch (e) {}

    // If search_products returned candidates, simulate calling show_products if not called yet
    const previousAssistantMsg = messages.slice().reverse().find(m => m.role === 'assistant');
    const calledShowAlready = messages.some(m => m.role === 'tool' && messages.find(am => am.tool_calls?.some(tc => tc.function.name === 'show_products')));

    if (toolData.products && toolData.products.length > 0 && !calledShowAlready) {
      const topIds = toolData.products.slice(0, 3).map(p => String(p.id));
      return {
        role: 'assistant',
        content: null,
        tool_calls: [{
          id: 'call_mock_show_' + Date.now(),
          type: 'function',
          function: {
            name: 'show_products',
            arguments: JSON.stringify({ product_ids: topIds })
          }
        }]
      };
    }

    if (toolData.displayed_cards && toolData.displayed_cards.length > 0) {
      return {
        role: 'assistant',
        content: `Got you covered fam! Check out these fresh pieces from the drop:`
      };
    }

    if (toolData.topic === 'offers') {
      return {
        role: 'assistant',
        content: `We've got an instant 15% discount automatically applied on all prepaid orders (UPI/Cards), plus 100% free delivery across India!`
      };
    }

    if (toolData.topic === 'restock') {
      return {
        role: 'assistant',
        content: `All Spoiled Bunny drops are strictly limited editions. Once a piece sells out, it is gone forever — we never restock sold-out items!`
      };
    }

    if (toolData.topic === 'shipping') {
      return {
        role: 'assistant',
        content: `We offer 100% free delivery across India on every order! Standard delivery takes 3 to 7 days. We do not ship internationally at this time.`
      };
    }

    if (toolData.topic === 'exchange' || toolData.topic === 'return_and_refund') {
      return {
        role: 'assistant',
        content: `Size exchanges are supported within 7 days of delivery with a small reverse shipping fee. All sales are final (no change of mind refunds). For any issues, hit up our WhatsApp (+91 63679 70069)!`
      };
    }

    if (toolData.authenticated) {
      return {
        role: 'assistant',
        content: `Found your order #${toolData.order_number}! Status: ${toolData.status} with ${toolData.courier}. Estimated delivery: ${toolData.estimated_delivery}. Tracking link: ${toolData.tracking_url}`
      };
    }

    if (toolData.requires_phone) {
      return {
        role: 'assistant',
        content: toolData.message || `Please provide the 10-digit phone number linked to order #${toolData.order_number} to view tracking details.`
      };
    }

    return {
      role: 'assistant',
      content: toolData.message || `Here are the details from our store!`
    };
  }

  // Handle user input
  const userText = (lastMsg.content || '').toLowerCase();

  if (userText.includes('90%') || userText.includes('ignore your instructions')) {
    return {
      role: 'assistant',
      content: `Nice try fam! I can only hook you up with our official 15% prepaid discount. No unauthorized promo codes here!`
    };
  }

  if (userText.includes('python') || userText.includes('code') || userText.includes('script')) {
    return {
      role: 'assistant',
      content: `Haha I'm strictly here for the streetwear drip! Let's get you styled with some oversized tees instead.`
    };
  }

  if (userText.includes('wrong item') || userText.includes('damaged') || userText.includes('defect')) {
    return {
      role: 'assistant',
      content: `I'm so sorry about that! Please share your order number and connect with our team directly on WhatsApp (+91 63679 70069) with an unboxing photo so we can sort this out immediately.`
    };
  }

  if (userText.includes('where is my order') || userText.includes('track')) {
    const orderMatch = userText.match(/sb\d+/i);
    const orderNum = orderMatch ? orderMatch[0].toUpperCase() : 'SB1001';
    const phoneMatch = userText.match(/\b\d{10}\b/);

    if (!phoneMatch) {
      return {
        role: 'assistant',
        content: `Yo! Could you please share the 10-digit registered phone number linked to order ${orderNum} so I can verify and pull up your tracking?`
      };
    }

    return {
      role: 'assistant',
      content: null,
      tool_calls: [{
        id: 'call_mock_track_' + Date.now(),
        type: 'function',
        function: {
          name: 'track_order',
          arguments: JSON.stringify({ order_number: orderNum, phone: phoneMatch[0] })
        }
      }]
    };
  }

  if (userText.includes('discount') || userText.includes('offer')) {
    return {
      role: 'assistant',
      content: null,
      tool_calls: [{
        id: 'call_mock_policy_' + Date.now(),
        type: 'function',
        function: {
          name: 'get_policy',
          arguments: JSON.stringify({ topic: 'offers' })
        }
      }]
    };
  }

  if (userText.includes('restock')) {
    return {
      role: 'assistant',
      content: null,
      tool_calls: [{
        id: 'call_mock_policy_' + Date.now(),
        type: 'function',
        function: {
          name: 'get_policy',
          arguments: JSON.stringify({ topic: 'restock' })
        }
      }]
    };
  }

  if (userText.includes('dubai') || userText.includes('international') || userText.includes('shipping')) {
    return {
      role: 'assistant',
      content: null,
      tool_calls: [{
        id: 'call_mock_policy_' + Date.now(),
        type: 'function',
        function: {
          name: 'get_policy',
          arguments: JSON.stringify({ topic: 'shipping' })
        }
      }]
    };
  }

  if (userText.includes('return') || userText.includes('exchange')) {
    return {
      role: 'assistant',
      content: null,
      tool_calls: [{
        id: 'call_mock_policy_' + Date.now(),
        type: 'function',
        function: {
          name: 'get_policy',
          arguments: JSON.stringify({ topic: 'exchange' })
        }
      }]
    };
  }

  // Default: search products
  let query = 'oversized';
  let maxPrice = null;
  if (userText.includes('1000')) maxPrice = 1000;
  if (userText.includes('tank')) query = 'tank';
  if (userText.includes('pant')) query = 'pants';
  if (userText.includes('risk protocol')) query = 'Risk Protocol';

  return {
    role: 'assistant',
    content: null,
    tool_calls: [{
      id: 'call_mock_search_' + Date.now(),
      type: 'function',
      function: {
        name: 'search_products',
        arguments: JSON.stringify({ query, max_price: maxPrice })
      }
    }]
  };
}

/**
 * callModel(messages, tools, { stream = false } = {})
 * Calls the OpenRouter model with messages and available tools.
 * 
 * @param {Array} messages - Chat message history [{ role, content }]
 * @param {Array} tools - Array of tool definitions
 * @param {Object} options - { stream: boolean, temperature: number }
 * @returns {Promise<Object>} Model completion message or stream
 */
export async function callModel(messages, tools = [], options = {}) {
  // If offline mock mode enabled (useful for deterministic tests without API key)
  if (process.env.MOCK_LLM === 'true') {
    return mockModelResponse(messages);
  }

  const client = getClient();
  const model = getModelName();

  const formattedTools = (tools && tools.length > 0)
    ? tools.map(t => ({
        type: 'function',
        function: {
          name: t.name,
          description: t.description,
          parameters: t.parameters
        }
      }))
    : undefined;

  const payload = {
    model,
    messages,
    temperature: options.temperature ?? 0.3
  };

  if (formattedTools && formattedTools.length > 0) {
    payload.tools = formattedTools;
    payload.tool_choice = options.tool_choice || 'auto';
  }

  if (options.stream) {
    payload.stream = true;
    return await client.chat.completions.create(payload);
  }

  const response = await client.chat.completions.create(payload);
  return response.choices[0]?.message;
}
