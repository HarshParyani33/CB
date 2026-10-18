/**
 * server/tools/index.js
 * Central tool registry mapping tool names to functions and exporting definitions for LLM.
 */

import { searchProducts, toolDefinition as searchDef } from './searchProducts.js';
import { showProducts, toolDefinition as showDef } from './showProducts.js';
import { getPolicy, toolDefinition as policyDef } from './getPolicy.js';
import { trackOrder, toolDefinition as trackDef } from './trackOrder.js';

export const toolDefinitions = [
  searchDef,
  showDef,
  policyDef,
  trackDef
];

export const toolHandlers = {
  search_products: searchProducts,
  show_products: showProducts,
  get_policy: getPolicy,
  track_order: trackOrder
};

/**
 * Executes a tool by name with arguments
 */
export async function executeTool(name, args = {}) {
  const handler = toolHandlers[name];
  if (!handler) {
    throw new Error(`Tool "${name}" is not registered.`);
  }
  return await handler(args);
}
