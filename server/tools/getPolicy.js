/**
 * server/tools/getPolicy.js
 * Tool: get_policy(topic)
 * Reads policies.json and offers.json fresh at call time to provide
 * up-to-date brand policies, offers, and WhatsApp hand-off links.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const POLICIES_PATH = path.resolve(__dirname, '../data/policies.json');
const OFFERS_PATH = path.resolve(__dirname, '../data/offers.json');

export const toolDefinition = {
  name: "get_policy",
  description: "Retrieve brand policies, active offers/discounts, shipping info, returns/exchanges, or support contact details. Always check this before answering policy or discount questions.",
  parameters: {
    type: "object",
    properties: {
      topic: {
        type: "string",
        enum: ["shipping", "exchange", "return", "refund", "restock", "offers", "discount", "cancellation", "support", "all"],
        description: "The specific policy topic to lookup"
      }
    },
    required: ["topic"]
  }
};

/**
 * Loads policies and offers dynamically
 */
async function loadData() {
  try {
    const [polRaw, offRaw] = await Promise.all([
      fs.readFile(POLICIES_PATH, 'utf-8'),
      fs.readFile(OFFERS_PATH, 'utf-8')
    ]);
    return {
      policies: JSON.parse(polRaw),
      offers: JSON.parse(offRaw)
    };
  } catch (err) {
    console.error('[getPolicy] Error reading policy/offers data:', err.message);
    return {
      policies: {},
      offers: {}
    };
  }
}

/**
 * Executes get_policy tool
 */
export async function getPolicy({ topic = 'all' } = {}) {
  const { policies, offers } = await loadData();
  const normalizedTopic = (topic || 'all').toLowerCase().trim();

  let result = {};

  switch (normalizedTopic) {
    case 'shipping':
    case 'delivery':
      result = {
        topic: 'shipping',
        policy: policies.shipping,
        note: "Zero shipping fee across India. International shipping is NOT offered."
      };
      break;

    case 'exchange':
    case 'size_exchange':
      result = {
        topic: 'exchange',
        policy: policies.exchange,
        note: "Size exchanges allowed within 7 days of delivery with small handling fee. Must hand off to WhatsApp."
      };
      break;

    case 'return':
    case 'refund':
      result = {
        topic: 'return_and_refund',
        policy: policies.return_and_refund,
        note: "No returns or cash refunds for change of mind. For damaged or wrong items, apologise and request WhatsApp hand-off with photos."
      };
      break;

    case 'restock':
    case 'sold_out':
      result = {
        topic: 'restock',
        policy: policies.restock,
        offers_note: offers.no_restock_note,
        note: "Limited drops only. Sold out items are NOT restocked."
      };
      break;

    case 'offer':
    case 'offers':
    case 'discount':
    case 'discounts':
    case 'coupon':
      result = {
        topic: 'offers',
        active_offers: offers.active_offers,
        rules: offers.max_allowed_discount,
        note: "15% off on prepaid orders. No 90% or custom discounts exist."
      };
      break;

    case 'cancellation':
      result = {
        topic: 'cancellation',
        policy: policies.cancellation,
        note: "Orders cannot be cancelled or edited once placed. WhatsApp hand-off required."
      };
      break;

    case 'support':
    case 'contact':
    case 'whatsapp':
      result = {
        topic: 'support',
        support: policies.support,
        whatsapp_number: "+91 63679 70069",
        whatsapp_url: "https://wa.me/916367970069"
      };
      break;

    case 'all':
    default:
      result = {
        topic: 'summary',
        shipping: policies.shipping?.summary,
        exchange: policies.exchange?.summary,
        returns: policies.return_and_refund?.summary,
        restock: policies.restock?.summary,
        offers: offers.active_offers,
        whatsapp: policies.support
      };
      break;
  }

  // Always append support contact for hand-offs
  result.support_contact = {
    whatsapp: "+91 63679 70069",
    url: "https://wa.me/916367970069"
  };

  return {
    success: true,
    ...result
  };
}
