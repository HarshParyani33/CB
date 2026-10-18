/**
 * syncCatalog.js
 * Fetches products from https://spoiledbunny.in/products.json and normalizes them
 * to { id, handle, title, price, compareAtPrice, images[], url, tags[], productType,
 *      description, variants: [{ size, available, quantity? }], available }.
 *
 * If fetch fails or is empty, writes a hand-crafted 12-product fallback with "demo": true.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CATALOG_PATH = path.resolve(__dirname, '../data/catalog.json');

const SHOPIFY_URL = 'https://spoiledbunny.in/products.json?limit=250';

/**
 * Strips HTML tags and entities to clean description text
 */
function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<br\s*[\/]?>/gi, '\n')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\n\s*\n+/g, '\n')
    .trim();
}

/**
 * Infers category / product type if Shopify returned blank
 */
function inferProductType(title, rawType) {
  if (rawType && rawType.trim().length > 0) return rawType.trim();
  const upper = title.toUpperCase();
  if (upper.includes('TEE') || upper.includes('T-SHIRT')) return 'T-Shirt';
  if (upper.includes('TANK')) return 'Tank Top';
  if (upper.includes('PANTS') || upper.includes('TROUSERS')) return 'Pants';
  if (upper.includes('SHIRT')) return 'Shirt';
  if (upper.includes('HOODIE')) return 'Hoodie';
  return 'Apparel';
}

/**
 * 12 fallback demo products if Shopify API is blocked or offline
 */
const FALLBACK_CATALOG = [
  {
    id: "demo-1",
    handle: "crimson-ritual-oversized-tee",
    title: "CRIMSON RITUAL OVERSIZED TEE",
    price: 1549,
    compareAtPrice: 1999,
    images: ["https://cdn.shopify.com/s/files/1/0713/4589/7537/files/LayeredGrungeStreetwearBackPortrait.png"],
    url: "https://spoiledbunny.in/products/crimson-ritual-oversized-tee",
    tags: ["oversized", "tee", "heavyweight"],
    productType: "T-Shirt",
    description: "240 GSM Heavy Cotton Fabric. Doctor Sleeve T-shirt. All over-print + Puff printed. Oversized Cropped Fit.",
    variants: [
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true }
    ],
    available: true,
    demo: true
  },
  {
    id: "demo-2",
    handle: "risk-protocol-oversized-tee",
    title: "RISK PROTOCOL OVERSIZED TEE",
    price: 1549,
    compareAtPrice: null,
    images: ["https://cdn.shopify.com/s/files/1/0713/4589/7537/files/MoodyGraphicTeeStudioPortrait.png"],
    url: "https://spoiledbunny.in/products/risk-protocol-oversized-tee",
    tags: ["oversized", "tee", "graphic"],
    productType: "T-Shirt",
    description: "240 GSM Heavy Cotton Fabric. All over-print + Puff printed. Oversized Fit. Crocodile skin effect. Washed Fabric.",
    variants: [
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true }
    ],
    available: true,
    demo: true
  },
  {
    id: "demo-3",
    handle: "stoneflow-pajama-pants",
    title: "STONEFLOW PAJAMA PANTS",
    price: 1899,
    compareAtPrice: null,
    images: [],
    url: "https://spoiledbunny.in/products/stoneflow-pajama-pants",
    tags: ["pants", "baggy", "pajama"],
    productType: "Pants",
    description: "Relaxed baggy pajama pants designed for casual daily wear.",
    variants: [
      { size: "28", available: true },
      { size: "30", available: true },
      { size: "32", available: true },
      { size: "34", available: true },
      { size: "36", available: true },
      { size: "38", available: true }
    ],
    available: true,
    demo: true
  },
  {
    id: "demo-4",
    handle: "dustflow-pajama-pants",
    title: "DUSTFLOW PAJAMA PANTS",
    price: 1899,
    compareAtPrice: null,
    images: [],
    url: "https://spoiledbunny.in/products/dustflow-pajama-pants",
    tags: ["pants", "baggy", "flow"],
    productType: "Pants",
    description: "Loose cut relaxed streetwear pants in dust wash tone.",
    variants: [
      { size: "28", available: true },
      { size: "30", available: true },
      { size: "32", available: true },
      { size: "34", available: true },
      { size: "36", available: true },
      { size: "38", available: true }
    ],
    available: true,
    demo: true
  },
  {
    id: "demo-5",
    handle: "oceanflow-pajama-pants",
    title: "OCEANFLOW PAJAMA PANTS",
    price: 1899,
    compareAtPrice: null,
    images: [],
    url: "https://spoiledbunny.in/products/oceanflow-pajama-pants",
    tags: ["pants", "baggy"],
    productType: "Pants",
    description: "Lightweight baggy casual pajama pants.",
    variants: [
      { size: "28", available: true },
      { size: "30", available: true },
      { size: "32", available: true },
      { size: "34", available: true }
    ],
    available: true,
    demo: true
  },
  {
    id: "demo-6",
    handle: "her-favourite-oversized-boxy-shirt",
    title: "HER FAVOURITE OVERSIZED BOXY SHIRT",
    price: 1799,
    compareAtPrice: 2199,
    images: [],
    url: "https://spoiledbunny.in/products/her-favourite-oversized-boxy-shirt",
    tags: ["shirt", "oversized", "boxy"],
    productType: "Shirt",
    description: "Boxy fit button down streetwear shirt.",
    variants: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true }
    ],
    available: true,
    demo: true
  },
  {
    id: "demo-7",
    handle: "worth-the-wait-oversized-boxy-shirt",
    title: "WORTH THE WAIT OVERSIZED BOXY SHIRT",
    price: 1799,
    compareAtPrice: null,
    images: [],
    url: "https://spoiledbunny.in/products/worth-the-wait-oversized-boxy-shirt",
    tags: ["shirt", "boxy"],
    productType: "Shirt",
    description: "Oversized silhouette boxy casual shirt.",
    variants: [
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true }
    ],
    available: true,
    demo: true
  },
  {
    id: "demo-8",
    handle: "low-void-boxy-waffle-tank",
    title: "LOW VOID BOXY WAFFLE TANK",
    price: 1299,
    compareAtPrice: null,
    images: [],
    url: "https://spoiledbunny.in/products/low-void-boxy-waffle-tank",
    tags: ["tank", "waffle", "boxy"],
    productType: "Tank Top",
    description: "Waffle knit boxy tank top designed for layering or warm weather.",
    variants: [
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true }
    ],
    available: true,
    demo: true
  },
  {
    id: "demo-9",
    handle: "all-eyes-boxy-waffle-tank",
    title: "ALL EYES BOXY WAFFLE TANK",
    price: 1299,
    compareAtPrice: null,
    images: [],
    url: "https://spoiledbunny.in/products/all-eyes-boxy-waffle-tank",
    tags: ["tank", "waffle"],
    productType: "Tank Top",
    description: "Boxy waffle tank with signature graphic branding.",
    variants: [
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true }
    ],
    available: true,
    demo: true
  },
  {
    id: "demo-10",
    handle: "all-eyes-oversized-tee",
    title: "ALL EYES OVERSIZED TEE",
    price: 1499,
    compareAtPrice: 1799,
    images: [],
    url: "https://spoiledbunny.in/products/all-eyes-oversized-tee",
    tags: ["oversized", "tee", "soldout"],
    productType: "T-Shirt",
    description: "Limited run graphic tee. Sold out and will not be restocked.",
    variants: [
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: false },
      { size: "XL", available: false }
    ],
    available: false,
    demo: true
  },
  {
    id: "demo-11",
    handle: "basebelt-baggy-pants",
    title: "BASEBELT BAGGY PANTS",
    price: 2199,
    compareAtPrice: null,
    images: [],
    url: "https://spoiledbunny.in/products/basebelt-baggy-pants",
    tags: ["pants", "baggy", "soldout"],
    productType: "Pants",
    description: "Heavyweight baggy pants with belted waist detail. Sold out.",
    variants: [
      { size: "28", available: false },
      { size: "30", available: false },
      { size: "32", available: false }
    ],
    available: false,
    demo: true
  },
  {
    id: "demo-12",
    handle: "duskbelt-utility-pants",
    title: "DUSKBELT UTILITY PANTS",
    price: 2299,
    compareAtPrice: null,
    images: [],
    url: "https://spoiledbunny.in/products/duskbelt-utility-pants",
    tags: ["pants", "utility"],
    productType: "Pants",
    description: "Utility tactical streetwear pants with pocket detailing.",
    variants: [
      { size: "28", available: true },
      { size: "30", available: true },
      { size: "32", available: true },
      { size: "34", available: true }
    ],
    available: true,
    demo: true
  }
];

export async function syncCatalog() {
  console.log(`[syncCatalog] Fetching products from ${SHOPIFY_URL}...`);
  try {
    const res = await fetch(SHOPIFY_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(10000)
    });

    if (!res.ok) {
      throw new Error(`Shopify products.json returned HTTP status ${res.status}`);
    }

    const data = await res.json();
    if (!data.products || !Array.isArray(data.products) || data.products.length === 0) {
      throw new Error('No products found in Shopify response');
    }

    const normalized = data.products.map(p => {
      const variants = (p.variants || []).map(v => ({
        size: v.title || v.option1 || "Standard",
        available: Boolean(v.available),
        price: parseFloat(v.price) || 0,
        compareAtPrice: v.compare_at_price ? parseFloat(v.compare_at_price) : null
      }));

      // Calculate lowest price among variants
      const prices = variants.map(v => v.price).filter(p => p > 0);
      const minPrice = prices.length > 0 ? Math.min(...prices) : 0;

      // Check compareAtPrice if available
      const comparePrices = variants.map(v => v.compareAtPrice).filter(cp => cp && cp > minPrice);
      const compareAtPrice = comparePrices.length > 0 ? Math.max(...comparePrices) : null;

      const isAvailable = variants.some(v => v.available);
      const images = (p.images || []).map(img => img.src).filter(Boolean);

      const tags = Array.isArray(p.tags)
        ? p.tags
        : typeof p.tags === 'string' && p.tags.length > 0
          ? p.tags.split(',').map(t => t.trim())
          : [];

      return {
        id: String(p.id),
        handle: p.handle,
        title: p.title,
        price: minPrice,
        compareAtPrice: compareAtPrice,
        images,
        url: `https://spoiledbunny.in/products/${p.handle}`,
        tags,
        productType: inferProductType(p.title, p.product_type),
        description: cleanHtml(p.body_html),
        variants: variants.map(v => ({
          size: v.size,
          available: v.available
        })),
        available: isAvailable,
        demo: false
      };
    });

    await fs.mkdir(path.dirname(CATALOG_PATH), { recursive: true });
    await fs.writeFile(CATALOG_PATH, JSON.stringify(normalized, null, 2), 'utf-8');

    const inStock = normalized.filter(p => p.available).length;
    const soldOut = normalized.length - inStock;
    console.log(`[syncCatalog] Successfully synced ${normalized.length} products (${inStock} in stock, ${soldOut} sold out) to ${CATALOG_PATH}`);
    return normalized;
  } catch (err) {
    console.warn(`[syncCatalog] Failed to fetch live products (${err.message}). Using fallback demo catalog.`);
    await fs.mkdir(path.dirname(CATALOG_PATH), { recursive: true });
    await fs.writeFile(CATALOG_PATH, JSON.stringify(FALLBACK_CATALOG, null, 2), 'utf-8');
    console.log(`[syncCatalog] Wrote ${FALLBACK_CATALOG.length} fallback demo products to ${CATALOG_PATH}`);
    return FALLBACK_CATALOG;
  }
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  syncCatalog().catch(err => {
    console.error('[syncCatalog] Fatal error:', err);
    process.exit(1);
  });
}
