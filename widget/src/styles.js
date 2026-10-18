/**
 * widget/src/styles.js
 * Encapsulated CSS stylesheet injected directly inside the Shadow DOM root.
 * Completely immune to host page styles and prevents any style leakage.
 */

export const WIDGET_CSS = `
:host {
  all: initial;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color-scheme: dark;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: inherit;
}

/* CSS Variables */
.bunny-wrapper {
  --bg-primary: #0e0f12;
  --bg-surface: #18191f;
  --bg-surface-elevated: #21232b;
  --bg-bubble-user: #2d303a;
  --border-subtle: #292b35;
  --border-active: #3f4252;
  --accent-neon: #ff2b56;
  --accent-glow: rgba(255, 43, 86, 0.35);
  --online-green: #10b981;
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
  --text-subtle: #6b7280;
  --radius-lg: 18px;
  --radius-md: 12px;
  --radius-sm: 8px;
  --radius-full: 9999px;
  --shadow-panel: 0 20px 50px rgba(0, 0, 0, 0.65), 0 0 1px rgba(255, 255, 255, 0.1);
  --shadow-glow: 0 8px 24px var(--accent-glow);
}

/* Floating Launcher Container */
.bunny-launcher-wrap {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: auto;
}

/* Tooltip Nudge Pill */
.bunny-nudge-pill {
  margin-bottom: 12px;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  padding: 8px 14px;
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s;
  animation: bunny-fade-up 0.3s ease-out;
}
.bunny-nudge-pill:hover {
  transform: translateY(-2px);
  border-color: var(--border-active);
  box-shadow: 0 12px 30px rgba(0,0,0,0.5);
}
.bunny-nudge-close {
  background: none;
  border: none;
  color: var(--text-subtle);
  cursor: pointer;
  padding: 2px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1;
}
.bunny-nudge-close:hover {
  color: var(--text-main);
}

/* Floating Action Button */
.bunny-fab {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1f2128, #0e0f12);
  border: 1.5px solid var(--border-subtle);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s, box-shadow 0.2s;
  user-select: none;
}
.bunny-fab:hover {
  transform: scale(1.06);
  border-color: var(--accent-neon);
  box-shadow: 0 12px 36px rgba(0,0,0,0.6), 0 0 20px var(--accent-glow);
}
.bunny-fab-icon {
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.bunny-fab:hover .bunny-fab-icon {
  transform: rotate(-10deg) scale(1.1);
}
.bunny-online-dot {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 13px;
  height: 13px;
  background-color: var(--online-green);
  border-radius: 50%;
  border: 2.5px solid var(--bg-surface);
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
}

/* Chat Main Panel */
.bunny-panel {
  position: fixed;
  bottom: 96px;
  right: 24px;
  width: 400px;
  height: 630px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 110px);
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 999999;
  animation: bunny-panel-in 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  transition: width 0.18s ease-out, height 0.18s ease-out;
}

.bunny-panel.bunny-resizing {
  transition: none !important;
  user-select: none;
}

/* Top-Left Drag Resize Handle */
.bunny-resize-handle {
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  cursor: nwse-resize;
  z-index: 50;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px;
  user-select: none;
}
.bunny-resize-indicator {
  width: 9px;
  height: 9px;
  border-top: 2px solid var(--text-subtle);
  border-left: 2px solid var(--text-subtle);
  border-top-left-radius: 4px;
  opacity: 0.6;
  transition: opacity 0.15s, border-color 0.15s;
}
.bunny-resize-handle:hover .bunny-resize-indicator,
.bunny-panel.bunny-resizing .bunny-resize-indicator {
  opacity: 1;
  border-color: var(--accent-neon);
}

@keyframes bunny-panel-in {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes bunny-fade-up {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header */
.bunny-header {
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.bunny-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.bunny-header-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: relative;
}
.bunny-header-avatar .bunny-online-dot {
  width: 10px;
  height: 10px;
  top: 0;
  right: 0;
  border-width: 2px;
}
.bunny-header-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.bunny-header-status {
  font-size: 11px;
  color: var(--online-green);
  font-weight: 500;
}
.bunny-header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}
.bunny-btn-icon {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 6px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: color 0.15s, background-color 0.15s;
}
.bunny-btn-icon:hover {
  color: var(--text-main);
  background: var(--bg-surface-elevated);
}

/* Quick Actions Row */
.bunny-quick-actions {
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  overflow-x: auto;
  scrollbar-width: none;
}
.bunny-quick-actions::-webkit-scrollbar {
  display: none;
}
.bunny-quick-btn {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 11.5px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.15s;
}
.bunny-quick-btn:hover {
  color: var(--text-main);
  border-color: var(--border-active);
  background: #2a2c37;
}

/* Messages Area */
.bunny-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-behavior: smooth;
}
.bunny-messages::-webkit-scrollbar {
  width: 5px;
}
.bunny-messages::-webkit-scrollbar-thumb {
  background: var(--border-subtle);
  border-radius: 4px;
}

/* Message Bubble */
.bunny-msg-row {
  display: flex;
  flex-direction: column;
  max-width: 88%;
}
.bunny-msg-user {
  align-self: flex-end;
  align-items: flex-end;
}
.bunny-msg-assistant {
  align-self: flex-start;
  align-items: flex-start;
}
.bunny-bubble {
  padding: 11px 15px;
  border-radius: var(--radius-md);
  font-size: 13.5px;
  line-height: 1.45;
  word-break: break-word;
}
.bunny-msg-user .bunny-bubble {
  background: var(--bg-bubble-user);
  color: #fff;
  border-bottom-right-radius: 4px;
}
.bunny-msg-assistant .bunny-bubble {
  background: var(--bg-surface);
  color: var(--text-main);
  border: 1px solid var(--border-subtle);
  border-bottom-left-radius: 4px;
}

/* Rich Text Formatting inside Bubble */
.bunny-bold {
  font-weight: 700;
  color: #ffffff;
}

.bunny-text-line {
  line-height: 1.5;
  margin-bottom: 4px;
}
.bunny-text-line:last-child {
  margin-bottom: 0;
}

.bunny-line-spacer {
  height: 8px;
}

.bunny-bullet-line {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 6px 0;
  line-height: 1.45;
}
.bunny-bullet-dot {
  color: var(--accent-neon);
  font-size: 15px;
  font-weight: 900;
  line-height: 1.25;
  flex-shrink: 0;
}
.bunny-bullet-num {
  color: var(--accent-neon);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  flex-shrink: 0;
}
.bunny-bullet-content {
  flex: 1;
}

/* Coupon & Promo Code Interactive Badge */
.bunny-code-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 43, 86, 0.1);
  border: 1px dashed var(--accent-neon);
  color: #ffffff;
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.4px;
  cursor: pointer;
  margin: 1px 2px;
  vertical-align: middle;
  transition: all 0.15s ease;
}
.bunny-code-pill:hover {
  background: var(--accent-neon);
  color: #fff;
  border-style: solid;
  box-shadow: 0 0 10px var(--accent-glow);
  transform: translateY(-1px);
}
.bunny-code-icon {
  font-size: 11px;
}
.bunny-code-tip {
  font-size: 9px;
  font-weight: 700;
  padding: 1px 4px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  color: #ffd1dc;
}
.bunny-code-pill:hover .bunny-code-tip {
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
}

/* Preset Starter Chips */
.bunny-starter-wrap {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.bunny-preset-chip {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  font-size: 12px;
  font-weight: 500;
  padding: 7px 12px;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.15s;
}
.bunny-preset-chip:hover {
  background: var(--border-active);
  border-color: var(--text-muted);
  transform: translateY(-1px);
}

/* Horizontal Product Carousel */
.bunny-carousel-container {
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.bunny-carousel-wrap {
  width: 100%;
  overflow-x: auto;
  padding: 4px 2px 10px 2px;
  display: flex;
  gap: 12px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--border-active) transparent;
}
.bunny-carousel-wrap::-webkit-scrollbar {
  height: 5px;
}
.bunny-carousel-wrap::-webkit-scrollbar-track {
  background: transparent;
}
.bunny-carousel-wrap::-webkit-scrollbar-thumb {
  background: var(--border-active);
  border-radius: 4px;
}
.bunny-carousel-wrap::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

/* Floating Navigation Arrows */
.bunny-carousel-nav {
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(24, 25, 31, 0.92);
  border: 1px solid var(--border-active);
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}
.bunny-carousel-nav:hover {
  background: var(--accent-neon);
  color: #fff;
  border-color: var(--accent-neon);
  box-shadow: 0 4px 16px var(--accent-glow);
  transform: translateY(-50%) scale(1.1);
}
.bunny-nav-left {
  left: -8px;
}
.bunny-nav-right {
  right: -8px;
}

/* Product Card */
.bunny-card {
  flex: 0 0 205px;
  max-width: 205px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s, box-shadow 0.2s;
}
.bunny-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-active);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}
.bunny-card-img-wrap {
  width: 100%;
  height: 220px;
  background: #121316;
  position: relative;
  overflow: hidden;
}
.bunny-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.bunny-card:hover .bunny-card-img {
  transform: scale(1.04);
}
.bunny-badge-discount {
  position: absolute;
  top: 8px;
  left: 8px;
  background: var(--accent-neon);
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  padding: 3px 6px;
  border-radius: 4px;
  letter-spacing: 0.5px;
}
.bunny-badge-soldout {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.75);
  color: #ef4444;
  border: 1px solid #ef4444;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 7px;
  border-radius: 4px;
  text-transform: uppercase;
}
.bunny-card-content {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.bunny-card-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.35;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.2px;
}
.bunny-card-price-row {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 8px;
}
.bunny-card-price {
  font-size: 14px;
  font-weight: 800;
  color: #fff;
}
.bunny-card-compare {
  font-size: 11px;
  color: var(--text-subtle);
  text-decoration: line-through;
}
.bunny-card-sizes {
  font-size: 10px;
  color: var(--text-muted);
  margin-bottom: 10px;
}
.bunny-card-btn-row {
  display: flex;
  gap: 6px;
  margin-top: auto;
}
.bunny-btn-view {
  flex: 1;
  background: transparent;
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  padding: 6px 0;
  border-radius: var(--radius-sm);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s;
}
.bunny-btn-view:hover {
  color: var(--text-main);
  border-color: var(--border-active);
  background: var(--bg-surface-elevated);
}
.bunny-btn-cart {
  flex: 1.4;
  background: var(--text-main);
  color: #000;
  border: none;
  padding: 6px 0;
  border-radius: var(--radius-sm);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.bunny-btn-cart:hover {
  background: #fff;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}
.bunny-btn-cart.added {
  background: var(--online-green);
  color: #fff;
}
.bunny-btn-disabled {
  flex: 2;
  background: var(--bg-surface-elevated);
  color: var(--text-subtle);
  border: 1px solid var(--border-subtle);
  padding: 6px 0;
  border-radius: var(--radius-sm);
  font-size: 11px;
  font-weight: 600;
  cursor: not-allowed;
  text-align: center;
}

/* Follow-up Suggestion Chips */
.bunny-suggestions-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}
.bunny-suggestion-chip {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  font-size: 11.5px;
  font-weight: 500;
  padding: 5px 11px;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.15s;
}
.bunny-suggestion-chip:hover {
  background: #2b2e3b;
  border-color: var(--text-muted);
}

/* Typing Indicator */
.bunny-typing-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  width: fit-content;
}
.bunny-dot {
  width: 6px;
  height: 6px;
  background: var(--text-muted);
  border-radius: 50%;
  animation: bunny-bounce 1.4s infinite ease-in-out both;
}
.bunny-dot:nth-child(1) { animation-delay: -0.32s; }
.bunny-dot:nth-child(2) { animation-delay: -0.16s; }
@keyframes bunny-bounce {
  0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
  40% { transform: scale(1); opacity: 1; }
}

/* WhatsApp Hand-off Card */
.bunny-error-card {
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: var(--radius-md);
  padding: 12px 14px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.bunny-error-text {
  font-size: 12.5px;
  color: #fca5a5;
  line-height: 1.4;
}
.bunny-whatsapp-btn {
  background: #25d366;
  color: #000;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: opacity 0.15s;
}
.bunny-whatsapp-btn:hover {
  opacity: 0.9;
}

/* Input Footer */
.bunny-footer {
  padding: 12px 16px;
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.bunny-input {
  flex: 1;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  padding: 10px 16px;
  font-size: 13.5px;
  color: var(--text-main);
  outline: none;
  transition: border-color 0.15s;
}
.bunny-input:focus {
  border-color: var(--accent-neon);
}
.bunny-input::placeholder {
  color: var(--text-subtle);
}
.bunny-send-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--accent-neon);
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s, opacity 0.15s, box-shadow 0.15s;
  flex-shrink: 0;
}
.bunny-send-btn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--accent-glow);
}
.bunny-send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Mobile Fullscreen Panel & Touch Optimization */
@media (max-width: 480px) {
  .bunny-panel {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    width: 100% !important;
    height: 100dvh !important;
    height: 100% !important;
    max-height: 100dvh !important;
    max-width: 100vw !important;
    border-radius: 0 !important;
    border: none !important;
    box-shadow: none !important;
  }

  .bunny-resize-handle {
    display: none !important;
  }

  /* Expand/compact toggle is redundant on mobile full screen */
  .bunny-header-actions .bunny-btn-icon:first-child {
    display: none !important;
  }

  .bunny-header {
    padding: 12px 14px;
  }

  .bunny-messages {
    padding: 12px !important;
    gap: 12px !important;
  }

  .bunny-msg-row {
    max-width: 92% !important;
  }

  /* Responsive Product Cards inside Carousel */
  .bunny-card {
    flex: 0 0 175px !important;
    max-width: 175px !important;
  }

  .bunny-card-img-wrap {
    height: 180px !important;
  }

  .bunny-card-content {
    padding: 8px 10px !important;
  }

  .bunny-card-title {
    font-size: 11px !important;
  }

  .bunny-carousel-nav {
    width: 28px !important;
    height: 28px !important;
    font-size: 18px !important;
  }
  .bunny-nav-left {
    left: -4px !important;
  }
  .bunny-nav-right {
    right: -4px !important;
  }

  /* Input Footer with iPhone safe area */
  .bunny-footer {
    padding: 10px 12px;
    padding-bottom: max(10px, env(safe-area-inset-bottom, 10px));
  }

  /* 16px font-size prevents iOS Safari from auto-zooming input fields */
  .bunny-input {
    font-size: 16px !important;
    padding: 10px 14px;
  }

  .bunny-launcher-wrap {
    bottom: 16px;
    right: 16px;
  }
}
`;
