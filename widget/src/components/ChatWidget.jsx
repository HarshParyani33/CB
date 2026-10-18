import React, { useState, useEffect, useRef } from 'react';
import ProductCarousel from './ProductCarousel.jsx';

function resolveApiUrl() {
  if (typeof window !== 'undefined' && window.BUNNY_API_URL) {
    return window.BUNNY_API_URL;
  }
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const script = document.currentScript || document.querySelector('script[src*="bunny-widget"]');
    if (script) {
      const dataApi = script.getAttribute('data-api-url');
      if (dataApi) {
        return dataApi.endsWith('/api/chat') ? dataApi : `${dataApi.replace(/\/$/, '')}/api/chat`;
      }
      try {
        if (script.src && script.src.startsWith('http')) {
          const origin = new URL(script.src).origin;
          if (origin.includes('localhost:5173') || origin.includes('127.0.0.1:5173')) {
            return 'http://localhost:3001/api/chat';
          }
          return `${origin}/api/chat`;
        }
      } catch (e) {}
    }
    if (window.location && window.location.port === '5173') {
      return 'http://localhost:3001/api/chat';
    }
  }
  return '/api/chat';
}

const WHATSAPP_URL = 'https://wa.me/916367970069';

const PRESET_STARTER_CHIPS = [
  'Oversized Tees',
  'Pajama Pants',
  'Waffle Tanks',
  'New In Drops',
  'Any Discounts?'
];

// Normalizes non-breaking spaces, narrow spaces, and unicode hyphens
function normalizeText(str) {
  if (!str) return '';
  return str
    .replace(/[\u00A0\u2000-\u200B\u202F\u205F\u3000\uFEFF]/g, ' ')
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015]/g, '-');
}

function formatInlineText(text, onCopyCode, copiedCode) {
  if (!text) return null;
  const cleanText = normalizeText(text);

  // Match: markdown bold (**...**) and coupon codes (PREPAID15, FREESHIP)
  const tokenRegex = /(\*\*[^*]+\*\*|\b(?:PREPAID15|FREESHIP)\b)/gi;

  const parts = cleanText.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Check bold markdown **...**
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2).trim();

      // Bold promo code like **PREPAID15**
      if (/^(?:PREPAID15|FREESHIP)$/i.test(inner)) {
        const code = inner.toUpperCase();
        return (
          <span
            key={index}
            className="bunny-code-pill"
            onClick={() => onCopyCode(code)}
            title="Click to copy promo code"
          >
            <span className="bunny-code-icon">🏷️</span>
            <strong>{code}</strong>
            <span className="bunny-code-tip">{copiedCode === code ? 'Copied ✓' : 'Copy'}</span>
          </span>
        );
      }

      return <strong key={index} className="bunny-bold">{inner}</strong>;
    }

    // Standalone coupon code
    if (/^(?:PREPAID15|FREESHIP)$/i.test(part)) {
      const code = part.toUpperCase();
      return (
        <span
          key={index}
          className="bunny-code-pill"
          onClick={() => onCopyCode(code)}
          title="Click to copy promo code"
        >
          <span className="bunny-code-icon">🏷️</span>
          <strong>{code}</strong>
          <span className="bunny-code-tip">{copiedCode === code ? 'Copied ✓' : 'Copy'}</span>
        </span>
      );
    }

    return part;
  });
}

function FormattedMessageBubble({ content, onCopyCode, copiedCode }) {
  if (!content) return null;

  const lines = content.split('\n');

  return (
    <div className="bunny-bubble">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="bunny-line-spacer" />;
        }

        // Bullet line (- item or * item)
        const bulletMatch = trimmed.match(/^[-*•]\s+(.*)$/);
        if (bulletMatch) {
          return (
            <div key={idx} className="bunny-bullet-line">
              <span className="bunny-bullet-dot">›</span>
              <div className="bunny-bullet-content">
                {formatInlineText(bulletMatch[1], onCopyCode, copiedCode)}
              </div>
            </div>
          );
        }

        // Numbered list line (1. item)
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (numMatch) {
          return (
            <div key={idx} className="bunny-bullet-line">
              <span className="bunny-bullet-num">{numMatch[1]}.</span>
              <div className="bunny-bullet-content">
                {formatInlineText(numMatch[2], onCopyCode, copiedCode)}
              </div>
            </div>
          );
        }

        return (
          <div key={idx} className="bunny-text-line">
            {formatInlineText(line, onCopyCode, copiedCode)}
          </div>
        );
      })}
    </div>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [nudgeVisible, setNudgeVisible] = useState(true);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [copiedCode, setCopiedCode] = useState(null);
  const [sessionId] = useState(() => 'sess_' + Math.random().toString(36).slice(2, 9));

  // Resizable state (desktop only)
  const [panelSize, setPanelSize] = useState({ width: 400, height: 630 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 'msg-welcome',
      role: 'assistant',
      content: "Yo! I'm Bunny 🐰 What streetwear drip are you looking for today?",
      isStarter: true
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const resizeRef = useRef({ startX: 0, startY: 0, startWidth: 400, startHeight: 630 });

  // Auto-scroll on new tokens or messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, suggestions]);

  // Focus input on open, and handle Escape key to close
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      // Lock host body scroll on mobile
      if (window.innerWidth <= 480) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Drag Resizing from Top-Left corner
  const handleResizeStart = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 480) return;
    e.preventDefault();
    setIsResizing(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    resizeRef.current = {
      startX: clientX,
      startY: clientY,
      startWidth: panelSize.width,
      startHeight: panelSize.height
    };

    const handleMouseMove = (moveEvent) => {
      const curX = moveEvent.touches ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const curY = moveEvent.touches ? moveEvent.touches[0].clientY : moveEvent.clientY;

      // Dragging left increases width, dragging up increases height
      const deltaX = resizeRef.current.startX - curX;
      const deltaY = resizeRef.current.startY - curY;

      const newWidth = Math.min(Math.max(resizeRef.current.startWidth + deltaX, 360), 680);
      const newHeight = Math.min(Math.max(resizeRef.current.startHeight + deltaY, 480), 850);

      setPanelSize({ width: newWidth, height: newHeight });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => {
      const next = !prev;
      if (next) {
        setPanelSize({ width: 550, height: 750 });
      } else {
        setPanelSize({ width: 400, height: 630 });
      }
      return next;
    });
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    if (nudgeVisible) setNudgeVisible(false);
  };

  const handleCopyCode = (code) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sendMessage = async (userText) => {
    const text = (userText || inputVal).trim();
    if (!text || isLoading) return;

    setInputVal('');
    setSuggestions([]);

    const userMsgId = 'usr_' + Date.now();
    const assistantMsgId = 'ast_' + Date.now();

    const newMessages = [
      ...messages,
      { id: userMsgId, role: 'user', content: text },
      { id: assistantMsgId, role: 'assistant', content: '', products: [], error: null }
    ];

    setMessages(newMessages);
    setIsLoading(true);

    const historyPayload = newMessages
      .filter((m) => !m.isStarter && !m.error)
      .slice(0, -1)
      .map((m) => ({ role: m.role, content: m.content }));

    const apiUrl = resolveApiUrl();

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          messages: historyPayload
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const blocks = buffer.split('\n\n');
        buffer = blocks.pop();

        for (const block of blocks) {
          const eventMatch = block.match(/event:\s*([^\n]+)/);
          const dataMatch = block.match(/data:\s*([^\n]+)/);

          if (eventMatch && dataMatch) {
            const event = eventMatch[1].trim();
            let parsed = {};
            try {
              parsed = JSON.parse(dataMatch[1]);
            } catch (e) {
              continue;
            }

            if (event === 'token' && parsed.token) {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMsgId
                    ? { ...msg, content: msg.content + parsed.token }
                    : msg
                )
              );
            } else if (event === 'products' && Array.isArray(parsed.products)) {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMsgId
                    ? { ...msg, products: parsed.products }
                    : msg
                )
              );
            } else if (event === 'suggestions' && Array.isArray(parsed.suggestions)) {
              setSuggestions(parsed.suggestions);
            } else if (event === 'error') {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMsgId
                    ? {
                        ...msg,
                        error: parsed.message || "Sorry, I hit a snag connecting. Chat with us on WhatsApp!",
                        whatsapp_url: parsed.whatsapp_url || WHATSAPP_URL
                      }
                    : msg
                )
              );
            }
          }
        }
      }
    } catch (err) {
      console.error('[BunnyWidget] Fetch error:', err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMsgId
            ? {
                ...msg,
                error: "Sorry, I hit a snag connecting with the server. You can chat with our team directly on WhatsApp!",
                whatsapp_url: WHATSAPP_URL
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="bunny-wrapper">
      {/* Floating Launcher / Trigger */}
      <div className="bunny-launcher-wrap">
        {!isOpen && nudgeVisible && (
          <div className="bunny-nudge-pill" onClick={toggleOpen}>
            <span>Looking for streetwear? Spill the tea 🐰</span>
            <button
              type="button"
              className="bunny-nudge-close"
              aria-label="Close tooltip"
              onClick={(e) => {
                e.stopPropagation();
                setNudgeVisible(false);
              }}
            >
              ✕
            </button>
          </div>
        )}

        <button
          type="button"
          className="bunny-fab"
          aria-label={isOpen ? "Close Ask Bunny chat" : "Open Ask Bunny chat"}
          onClick={toggleOpen}
        >
          <div className="bunny-fab-icon">{isOpen ? '✕' : '🐰'}</div>
          {!isOpen && <div className="bunny-online-dot" />}
        </button>
      </div>

      {/* Main Chat Panel */}
      {isOpen && (
        <div
          className={`bunny-panel ${isResizing ? 'bunny-resizing' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Ask Bunny Chat Window"
          style={
            typeof window !== 'undefined' && window.innerWidth > 480
              ? {
                  width: `${panelSize.width}px`,
                  height: `${panelSize.height}px`
                }
              : undefined
          }
        >
          {/* Top-Left Drag Resize Handle */}
          <div
            className="bunny-resize-handle"
            title="Drag to resize panel"
            onMouseDown={handleResizeStart}
            onTouchStart={handleResizeStart}
          >
            <div className="bunny-resize-indicator" />
          </div>

          {/* Header */}
          <div className="bunny-header">
            <div className="bunny-header-left">
              <div className="bunny-header-avatar">
                🐰
                <div className="bunny-online-dot" />
              </div>
              <div>
                <div className="bunny-header-title">Ask Bunny</div>
                <div className="bunny-header-status">Online • Spoiled Bunny AI</div>
              </div>
            </div>

            <div className="bunny-header-actions">
              {/* Maximize / Compact Toggle */}
              <button
                type="button"
                className="bunny-btn-icon"
                aria-label={isExpanded ? "Compact view" : "Expand view"}
                title={isExpanded ? "Standard size" : "Expand window"}
                onClick={toggleExpand}
              >
                {isExpanded ? '⤡' : '⤢'}
              </button>

              {/* Close Button */}
              <button
                type="button"
                className="bunny-btn-icon"
                aria-label="Close chat"
                title="Close chat (Esc)"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Quick Actions Row */}
          <div className="bunny-quick-actions">
            <button
              type="button"
              className="bunny-quick-btn"
              onClick={() => sendMessage("Where is my order?")}
            >
              📦 Track Order
            </button>
            <button
              type="button"
              className="bunny-quick-btn"
              onClick={() => sendMessage("How do I exchange my size?")}
            >
              🔄 Return & Exchange
            </button>
            <button
              type="button"
              className="bunny-quick-btn"
              onClick={() => sendMessage("Any discounts or promo codes?")}
            >
              🏷️ Offers
            </button>
          </div>

          {/* Messages Area */}
          <div className="bunny-messages">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`bunny-msg-row ${m.role === 'user' ? 'bunny-msg-user' : 'bunny-msg-assistant'}`}
              >
                {m.content && (
                  <FormattedMessageBubble
                    content={m.content}
                    onCopyCode={handleCopyCode}
                    copiedCode={copiedCode}
                  />
                )}

                {/* Initial Starter Chips */}
                {m.isStarter && (
                  <div className="bunny-starter-wrap">
                    {PRESET_STARTER_CHIPS.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        className="bunny-preset-chip"
                        onClick={() => sendMessage(`Show me ${chip}`)}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}

                {/* Horizontal Product Cards Carousel */}
                {m.products && m.products.length > 0 && (
                  <ProductCarousel products={m.products} />
                )}

                {/* Error Card with WhatsApp Hand-off */}
                {m.error && (
                  <div className="bunny-error-card">
                    <div className="bunny-error-text">{m.error}</div>
                    <a
                      href={m.whatsapp_url || WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bunny-whatsapp-btn"
                    >
                      <span>💬 Chat on WhatsApp (+91 63679 70069)</span>
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="bunny-msg-row bunny-msg-assistant">
                <div className="bunny-typing-indicator" aria-label="Bunny is typing">
                  <div className="bunny-dot" />
                  <div className="bunny-dot" />
                  <div className="bunny-dot" />
                </div>
              </div>
            )}

            {/* Follow-up Suggestion Chips */}
            {!isLoading && suggestions.length > 0 && (
              <div className="bunny-suggestions-wrap">
                {suggestions.map((sug, i) => (
                  <button
                    key={i}
                    type="button"
                    className="bunny-suggestion-chip"
                    onClick={() => sendMessage(sug)}
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form className="bunny-footer" onSubmit={handleFormSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="bunny-input"
              placeholder="Ask about sizing, baggy tees, orders..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bunny-send-btn"
              disabled={isLoading || !inputVal.trim()}
              aria-label="Send message"
            >
              ➔
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
