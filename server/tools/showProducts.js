/**
 * server/tools/showProducts.js
 * Tool: show_products(product_ids)
 * Validates product IDs against the catalog and returns verified product cards
 * with live pricing, stock, images, and discount badges.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CATALOG_PATH = path.resolve(__dirname, '../data/catalog.json');

export const toolDefinition = {
  name: "show_products",
  description: "Display product cards in the chat UI carousel for given product IDs. Product data is verified and rendered directly from catalog data.",
  parameters: {
    type: "object",
    properties: {
      product_ids: {
        type: "array",
        items: { type: "string" },
        description: "List of valid product IDs to show cards for"
      }
    },
    required: ["product_ids"]
  }
};

/**
 * Loads fresh catalog data
 */
async function loadCatalog() {
  try {
    const raw = await fs.readFile(CATALOG_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('[showProducts] Failed to load catalog:', err.message);
    return [];
  }
}

/**
 * Executes show_products tool
 */
export async function showProducts({ product_ids = [] } = {}) {
  if (!Array.isArray(product_ids) || product_ids.length === 0) {
    return {
      success: false,
      message: "product_ids must be a non-empty array of product IDs."
    };
  }

  const catalog = await loadCatalog();
  const idMap = new Map(catalog.map(p => [String(p.id), p]));

  const cards = [];
  const missingIds = [];

  for (const rawId of product_ids) {
    const idStr = String(rawId).trim();
    const product = idMap.get(idStr);

    if (!product) {
      missingIds.push(idStr);
      continue;
    }

    // Re-verify current stock
    const availableVariants = (product.variants || []).filter(v => v.available);
    const isAvailable = availableVariants.length > 0;
    const availableSizes = availableVariants.map(v => v.size);

    // Calculate discount badge if compareAtPrice is higher than price
    let discountBadge = null;
    if (product.compareAtPrice && product.compareAtPrice > product.price) {
      const discountPercent = Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
      );
      if (discountPercent > 0) {
        discountBadge = `${discountPercent}% OFF`;
      }
    }

    // Select primary image or placeholder
    const primaryImage = (product.images && product.images.length > 0)
      ? product.images[0]
      : null;

    cards.push({
      id: String(product.id),
      handle: product.handle,
      title: product.title,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      discountBadge,
      image: primaryImage,
      images: product.images || [],
      url: product.url,
      available: isAvailable,
      availableSizes,
      productType: product.productType
    });
  }

  return {
    success: cards.length > 0,
    displayed_cards: cards,
    card_count: cards.length,
    missing_ids: missingIds.length > 0 ? missingIds : undefined,
    message: cards.length > 0
      ? `Displaying ${cards.length} product card(s).`
      : "None of the specified product IDs could be found in the catalog."
  };
}
