/**
 * server/index.js
 * Main Express server with SSE /api/chat endpoint, CORS, rate limiting, and health checks.
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { handleChatStream } from './chat.js';
import { getModelName } from './llm.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOG_FILE = path.resolve(__dirname, '../logs/conversations.log');

const app = express();
const PORT = process.env.PORT || 3001;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_PER_MINUTE || '30', 10);

// Basic in-memory rate limiting per IP
const ipRequestCounts = new Map();
setInterval(() => {
  ipRequestCounts.clear();
}, 60 * 1000);

function rateLimiter(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress || 'unknown-ip';
  const count = (ipRequestCounts.get(ip) || 0) + 1;
  ipRequestCounts.set(ip, count);

  if (count > RATE_LIMIT_MAX) {
    return res.status(429).json({
      error: "Rate limit exceeded. Too many requests. Please wait a minute or chat with us on WhatsApp.",
      whatsapp_url: "https://wa.me/916367970069"
    });
  }
  next();
}

// Log conversation to file
async function logConversation(sessionId, data) {
  try {
    await fs.mkdir(path.dirname(LOG_FILE), { recursive: true });
    const logLine = JSON.stringify({
      timestamp: new Date().toISOString(),
      sessionId,
      ...data
    }) + '\n';
    await fs.appendFile(LOG_FILE, logLine, 'utf-8');
  } catch (err) {
    console.error('[server] Could not write log:', err.message);
  }
}

// Middleware
const allowedOrigins = ALLOWED_ORIGIN === '*'
  ? true
  : ALLOWED_ORIGIN.split(',').map(s => s.trim()).concat(['http://localhost:5173', 'http://127.0.0.1:5173']);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json({ limit: '1mb' }));
app.use(rateLimiter);

// Serve demo storefront and built widget bundle
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../demo-site')));

// Health endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'bunny-assistant-backend',
    model: getModelName()
  });
});

// Catalog endpoint for demo site
app.get('/api/catalog', async (req, res) => {
  try {
    const catalogPath = path.resolve(__dirname, 'data/catalog.json');
    const raw = await fs.readFile(catalogPath, 'utf-8');
    res.json(JSON.parse(raw));
  } catch (err) {
    res.status(500).json({ error: 'Could not load catalog' });
  }
});

// SSE Chat endpoint
app.post('/api/chat', async (req, res) => {
  const { sessionId = 'anon', messages = [] } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages must be a non-empty array' });
  }

  // Set SSE Headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  if (res.flushHeaders) res.flushHeaders();

  function sendSSE(event, data) {
    if (res.writableEnded) return;
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
  }

  let fullReplyTokens = [];
  let shownProductCards = [];

  await handleChatStream(
    { sessionId, messages },
    {
      onToken: (token) => {
        fullReplyTokens.push(token);
        sendSSE('token', { token });
      },
      onProducts: (products) => {
        shownProductCards = products;
        sendSSE('products', { products });
      },
      onSuggestions: (suggestions) => {
        sendSSE('suggestions', { suggestions });
      },
      onDone: () => {
        sendSSE('done', {});
        res.end();

        logConversation(sessionId, {
          messages,
          reply: fullReplyTokens.join(''),
          shown_products_count: shownProductCards.length
        });
      },
      onError: (errObj) => {
        sendSSE('error', errObj);
        res.end();

        logConversation(sessionId, {
          messages,
          error: errObj.message
        });
      }
    }
  );
});

// Start server if run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, () => {
    console.log(`[Bunny Server] Running on http://localhost:${PORT}`);
    console.log(`[Bunny Server] Configured LLM model: ${getModelName()}`);
  });
}

export default app;
