import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatWidget from './components/ChatWidget.jsx';
import { WIDGET_CSS } from './styles.js';

/**
 * Initializes and mounts Bunny Assistant inside an isolated Shadow DOM
 */
export function initBunnyWidget(options = {}) {
  // If already mounted, avoid duplicates
  if (document.getElementById('bunny-widget-container')) {
    return;
  }

  // Set global options if passed
  if (options.apiUrl) {
    window.BUNNY_API_URL = options.apiUrl;
  }
  if (options.onAddToCart) {
    window.BUNNY_ON_ADD_TO_CART = options.onAddToCart;
  }

  // 1. Create host element
  const hostElement = document.createElement('div');
  hostElement.id = 'bunny-widget-container';
  document.body.appendChild(hostElement);

  // 2. Attach Shadow Root (mode: 'open' for complete style isolation)
  const shadowRoot = hostElement.attachShadow({ mode: 'open' });

  // 3. Inject encapsulated CSS into shadow root
  const styleEl = document.createElement('style');
  styleEl.textContent = WIDGET_CSS;
  shadowRoot.appendChild(styleEl);

  // 4. Create mount point
  const mountPoint = document.createElement('div');
  mountPoint.id = 'bunny-widget-app';
  shadowRoot.appendChild(mountPoint);

  // 5. Mount React
  const root = ReactDOM.createRoot(mountPoint);
  root.render(
    <React.StrictMode>
      <ChatWidget />
    </React.StrictMode>
  );

  console.log('[BunnyWidget] Initialized inside isolated Shadow DOM.');
}

// Auto-initialize when the script is loaded
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  try {
    const currentScript = document.currentScript || document.querySelector('script[src*="bunny-widget"]');
    if (currentScript) {
      const dataApi = currentScript.getAttribute('data-api-url');
      if (dataApi) {
        window.BUNNY_API_URL = dataApi.endsWith('/api/chat') ? dataApi : `${dataApi.replace(/\/$/, '')}/api/chat`;
      }
    }
  } catch (e) {
    // Ignore fallback
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initBunnyWidget());
  } else {
    initBunnyWidget();
  }
}
