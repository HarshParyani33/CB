/**
 * server/tools/searchProducts.js
 * Tool: search_products(query, category, max_price, size, fit)
 * Semantic search across Spoiled Bunny catalog with theme matching,
 * color & fabric awareness, and smart streetwear styling support.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CATALOG_PATH = path.resolve(__dirname, '../data/catalog.json');

export const toolDefinition = {
  name: "search_products",
  description: "Search for clothing items in the Spoiled Bunny catalog by query keyword, category, max price, size, fit, color, or vibe. Always use this to find products before showing cards.",
  parameters: {
    type: "object",
    properties: {
      query: {
        type: ["string", "null"],
        description: "Search term or keywords (e.g. 'light coloured', 'light weight', 'baggy pants', 'oversized tee', 'crimson ritual')"
      },
      category: {
        type: ["string", "null"],
        description: "Category filter (e.g. 'T-Shirt', 'Pants', 'Tank Top', 'Shirt')"
      },
      color: {
        type: ["string", "null"],
        description: "Color tone or specific shade requested (e.g. 'light', 'white', 'cream', 'dark', 'black', 'grey')"
      },
      max_price: {
        type: ["number", "null"],
        description: "Maximum budget or price in INR (e.g. 1000, 1500, 2000)"
      },
      size: {
        type: ["string", "null"],
        description: "Size needed, e.g. 'S', 'M', 'L', 'XL', '28', '30', '32', etc."
      },
      fit: {
        type: ["string", "null"],
        description: "Fit style, e.g. 'oversized', 'baggy', 'boxy', 'cropped'"
      },
      limit: {
        type: ["number", "null"],
        description: "Max number of items to return (e.g. 1 if user asks for one item, default 4)"
      }
    }
  }
};

/**
 * Semantic themes for streetwear vocabulary
 */
const SEMANTIC_THEMES = [
  {
    name: 'light_color',
    patterns: [/light\s*colo[u]?r/i, /\blight\b/i, /\bwhite\b/i, /\bcream\b/i, /\bbeige\b/i, /\bstone\b/i, /\bash\b/i, /\bcloud\b/i, /\bdust\b/i, /\bpale\b/i, /\bneutral\b/i, /\boff-white\b/i, /\biced\b/i],
    handles: ['cloudflow-pajama-pants', 'stoneflow-pajama-pants', 'ashflow-pajama-pants', 'dustflow-pajama-pants', 'low-void-boxy-waffle-vest', 'all-eyes-boxy-waffle-vest', 'her-favourite-oversized-boxy-shirt', 'worth-it-oversized-boxy-shirt'],
    keywords: ['cloud', 'stone', 'ash', 'dust', 'iced', 'off-white', 'cream', 'beige', 'white']
  },
  {
    name: 'lightweight',
    patterns: [/light\s*weight/i, /\blightweight\b/i, /\bsummer\b/i, /\bbreathable\b/i, /\bairy\b/i, /\bcool\b/i, /\beveryday\b/i],
    handles: ['low-void-boxy-waffle-vest', 'all-eyes-boxy-waffle-vest', 'her-favourite-oversized-boxy-shirt', 'worth-it-oversized-boxy-shirt', 'oceanflow-pajama-pants'],
    keywords: ['220 gsm', 'waffle', 'crepe', 'tank', 'vest', 'shirt', 'pajama']
  },
  {
    name: 'heavyweight_dark',
    patterns: [/heavy\s*weight/i, /\bheavy\b/i, /\bdark\b/i, /\bblack\b/i, /\bcrimson\b/i, /\bred\b/i, /\bgothic\b/i, /\bgrunge\b/i, /\bcharcoal\b/i],
    handles: ['crimson-ritual-oversized-tee', 'risk-protocol-oversized-tee', 'aftermark-waffle-tee-copy', 'duskbelt-utility-pants'],
    keywords: ['240 gsm', 'heavy', 'puff', 'print', 'crimson', 'gothic', 'crocodile', 'black', 'charcoal']
  },
  {
    name: 'pants',
    patterns: [/\bpants?\b/i, /\bbottoms?\b/i, /\btrousers?\b/i, /\bpajama\b/i, /\blower\b/i, /\bcargo\b/i, /\bjeans\b/i],
    categories: ['Pants'],
    keywords: ['pants', 'pajama', 'flow', 'utility', 'belt']
  },
  {
    name: 'tees',
    patterns: [/\btees?\b/i, /\btshirt\b/i, /\bt-shirt\b/i, /\btop\b/i],
    categories: ['T-Shirt'],
    keywords: ['tee', 't-shirt', 'doctor sleeve']
  },
  {
    name: 'tanks',
    patterns: [/\btanks?\b/i, /\bvests?\b/i, /\bsleeveless\b/i, /\bwaffle tank\b/i],
    categories: ['Tank Top'],
    keywords: ['tank', 'vest', 'waffle']
  },
  {
    name: 'shirts',
    patterns: [/\bshirts?\b/i, /\bboxy shirt\b/i, /\bbutton down\b/i],
    categories: ['Shirt'],
    keywords: ['shirt', 'crepe', 'embroidery']
  }
];

/**
 * Loads fresh catalog data
 */
async function loadCatalog() {
  try {
    const raw = await fs.readFile(CATALOG_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('[searchProducts] Failed to read catalog:', err.message);
    return [];
  }
}

/**
 * Helper to pull fabric/GSM or fit bullet points if present in description
 */
function extractFitOrFabric(description) {
  if (!description) return null;
  const lines = description.split('\n');
  const relevant = lines.filter(l =>
    /gsm|fabric|fit|sleeve|cotton|printed|waffle|wash/i.test(l)
  );
  return relevant.length > 0 ? relevant.slice(0, 3).join('; ') : null;
}

/**
 * Executes the search_products tool
 */
export async function searchProducts({ query = '', category = '', max_price = null, size = '', fit = '', color = '', limit = 4 } = {}) {
  const resultLimit = typeof limit === 'number' && limit > 0 ? Math.min(limit, 8) : 4;
  const catalog = await loadCatalog();
  if (!catalog || catalog.length === 0) {
    return {
      success: false,
      message: "Catalog is currently unavailable."
    };
  }

  const queryRaw = (query || '').toLowerCase().trim();
  const queryWords = queryRaw ? queryRaw.split(/\s+/).filter(w => w.length > 1) : [];
  const fitLower = fit ? fit.toLowerCase().trim() : '';
  const categoryLower = category ? category.toLowerCase().trim() : '';
  const colorLower = color ? color.toLowerCase().trim() : '';
  const sizeUpper = size ? size.toUpperCase().trim() : '';
  const maxPriceNum = typeof max_price === 'number' ? max_price : (max_price ? parseFloat(max_price) : null);

  const searchIntentText = `${queryRaw} ${colorLower}`;
  const isLightIntent = /(light\s*colo[u]?r|\bwhite\b|\bcream\b|\bbeige\b|\boff-white\b|\bpale\b|\bstone\b|\bcloud\b|\bash\b|\bdust\b|\biced\b)/i.test(searchIntentText);
  const isDarkIntent = /(dark\s*colo[u]?r|\bblack\b|\bcharcoal\b|\bcrimson\b|\bdark\b|\bgothic\b)/i.test(searchIntentText);

  // Detect active semantic themes
  const activeThemes = SEMANTIC_THEMES.filter(theme =>
    theme.patterns.some(p => p.test(queryRaw) || (categoryLower && theme.patterns.some(cp => cp.test(categoryLower))) || (colorLower && theme.patterns.some(cp => cp.test(colorLower))))
  );

  // Score each product
  const scoredProducts = catalog.map(product => {
    let score = 0;
    const titleLower = (product.title || '').toLowerCase();
    const handleLower = (product.handle || '').toLowerCase();
    const typeLower = (product.productType || '').toLowerCase();
    const descLower = (product.description || '').toLowerCase();
    const tagsLower = (product.tags || []).join(' ').toLowerCase();
    const prodColorLower = (product.color || '').toLowerCase();
    const fullText = `${titleLower} ${handleLower} ${typeLower} ${descLower} ${tagsLower} ${prodColorLower}`;

    // 1. Strict filter checks
    if (maxPriceNum !== null && !isNaN(maxPriceNum) && product.price > maxPriceNum) {
      return { product, score: -999, eligible: false };
    }

    if (sizeUpper) {
      const hasSize = (product.variants || []).some(
        v => (v.size.toUpperCase() === sizeUpper || v.size.toUpperCase().includes(sizeUpper)) && v.available
      );
      if (!hasSize) {
        return { product, score: -999, eligible: false };
      }
    }

    if (categoryLower) {
      const matchesCategory = typeLower.includes(categoryLower) || titleLower.includes(categoryLower);
      if (matchesCategory) {
        score += 25;
      } else {
        // If an explicit category filter was passed and doesn't match, penalize or exclude
        return { product, score: -999, eligible: false };
      }
    }

    // 2. Direct term matching
    for (const word of queryWords) {
      if (titleLower.includes(word)) score += 15;
      if (handleLower.includes(word)) score += 12;
      if (typeLower.includes(word)) score += 10;
      if (descLower.includes(word)) score += 4;
      if (tagsLower.includes(word)) score += 5;
      if (prodColorLower.includes(word)) score += 15;
    }

    // 3. Fit matching
    if (fitLower) {
      if (titleLower.includes(fitLower) || descLower.includes(fitLower)) score += 12;
    }

    // 4. Color & Tone Intent Matching (CRITICAL for light vs dark clothes)
    if (isLightIntent) {
      if (product.colorFamily === 'light') {
        score += 40;
      } else if (product.colorFamily === 'dark') {
        score -= 80; // Heavy penalty: black/dark items must never be suggested for light/white queries
      }
    } else if (isDarkIntent) {
      if (product.colorFamily === 'dark') {
        score += 40;
      } else if (product.colorFamily === 'light') {
        score -= 80;
      }
    }

    // 5. Semantic Theme Matching (e.g. "light coloured", "lightweight", "pants")
    for (const theme of activeThemes) {
      if (theme.handles && theme.handles.includes(product.handle)) {
        score += 30; // Direct curated theme boost
      }
      if (theme.categories && theme.categories.some(c => typeLower.includes(c.toLowerCase()))) {
        score += 20;
      }
      if (theme.keywords) {
        for (const kw of theme.keywords) {
          if (fullText.includes(kw)) score += 8;
        }
      }
    }

    // In-stock preference only if there is a match or browsing with no search terms
    const hasSearchIntent = queryWords.length > 0 || fitLower || categoryLower || colorLower || activeThemes.length > 0 || isLightIntent || isDarkIntent;
    const hasMatch = score > 0;

    if (product.available && hasMatch) {
      score += 5;
    }

    const isEligible = hasSearchIntent ? hasMatch : product.available;
    return { product, score, eligible: isEligible };
  });

  // Filter eligible items
  let matched = scoredProducts.filter(item => item.eligible);

  // If no match found from strict words
  if (matched.length === 0) {
    if (!queryRaw && !categoryLower && !colorLower) {
      matched = catalog
        .filter(p => p.available && (maxPriceNum === null || p.price <= maxPriceNum))
        .slice(0, 4)
        .map(p => ({ product: p, score: 1, eligible: true }));
    } else {
      return {
        success: true,
        count: 0,
        products: [],
        note: "No products found matching your search criteria."
      };
    }
  }

  // Sort: In-stock first, then higher score, then lower price
  matched.sort((a, b) => {
    if (a.product.available !== b.product.available) {
      return a.product.available ? -1 : 1;
    }
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.product.price - b.product.price;
  });

  // Limit results to top items (respecting limit parameter)
  const results = matched.slice(0, resultLimit).map(({ product: p }) => {
    const availableSizes = (p.variants || [])
      .filter(v => v.available)
      .map(v => v.size);

    return {
      id: p.id,
      title: p.title,
      price: p.price,
      color: p.color || null,
      colorFamily: p.colorFamily || null,
      available: p.available,
      sizes: availableSizes,
      fit: extractFitOrFabric(p.description)
    };
  });

  return {
    success: true,
    count: results.length,
    products: results
  };
}
