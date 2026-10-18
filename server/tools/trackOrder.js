/**
 * server/tools/trackOrder.js
 * Tool: track_order(order_number, phone)
 * Strictly verifies that the phone number matches the order record before
 * disclosing any status, customer, item, or tracking information.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ORDERS_PATH = path.resolve(__dirname, '../data/orders.mock.json');

export const toolDefinition = {
  name: "track_order",
  description: "Look up order tracking information. Security rule: requires both the order number (e.g. 'SB1001') and the customer's phone number. Never reveal status without phone matching.",
  parameters: {
    type: "object",
    properties: {
      order_number: {
        type: "string",
        description: "The order number, e.g. 'SB1001'"
      },
      phone: {
        type: ["string", "null"],
        description: "Customer's 10-digit mobile phone number for security verification"
      }
    },
    required: ["order_number"]
  }
};

/**
 * Normalizes phone numbers to last 10 digits
 */
function normalizePhone(rawPhone) {
  if (!rawPhone) return '';
  const digits = String(rawPhone).replace(/\D/g, '');
  return digits.length >= 10 ? digits.slice(-10) : digits;
}

/**
 * Loads mock orders dynamically
 */
async function loadOrders() {
  try {
    const raw = await fs.readFile(ORDERS_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('[trackOrder] Error loading mock orders:', err.message);
    return {};
  }
}

/**
 * Executes track_order tool
 */
export async function trackOrder({ order_number = '', phone = '' } = {}) {
  const cleanOrderNum = String(order_number || '').trim().toUpperCase();
  const cleanPhone = normalizePhone(phone);

  if (!cleanOrderNum) {
    return {
      authenticated: false,
      message: "Please provide an order number (e.g. SB1001)."
    };
  }

  // Security Rule: If phone number is not supplied, refuse to reveal details and prompt for phone
  if (!cleanPhone || cleanPhone.length < 10) {
    return {
      authenticated: false,
      requires_phone: true,
      order_number: cleanOrderNum,
      message: `To protect customer privacy, please share the 10-digit phone number associated with order ${cleanOrderNum} to view tracking details.`
    };
  }

  const orders = await loadOrders();
  const order = orders[cleanOrderNum];

  if (!order) {
    return {
      authenticated: false,
      order_found: false,
      message: `Order ${cleanOrderNum} was not found. Please double-check your order number or contact our team on WhatsApp (+91 63679 70069).`
    };
  }

  // Compare normalized phone numbers (last 10 digits)
  const orderPhoneNormalized = normalizePhone(order.phone);
  if (cleanPhone !== orderPhoneNormalized) {
    // Phone mismatch: DO NOT reveal order details, items, or status
    return {
      authenticated: false,
      order_found: true,
      message: `Authentication failed. The phone number provided does not match the records for order ${cleanOrderNum}. For security reasons, order details cannot be shared. If you need assistance, please connect with us on WhatsApp (+91 63679 70069).`
    };
  }

  // Verified! Return complete tracking details
  return {
    authenticated: true,
    order_number: order.order_number,
    customer_name: order.customer_name,
    status: order.status,
    courier: order.courier,
    tracking_number: order.tracking_number,
    tracking_url: order.tracking_url,
    estimated_delivery: order.estimated_delivery,
    items: order.items,
    timeline: order.timeline
  };
}
