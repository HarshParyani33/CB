/**
 * server/scripts/testToolsCli.js
 * CLI verification script that executes and validates all 4 backend tools directly.
 */

import { executeTool } from '../tools/index.js';
import assert from 'node:assert/strict';

let passedTests = 0;
let totalTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✓ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(`    ${err.message}`);
  }
}

async function runAsyncTest(name, fn) {
  totalTests++;
  try {
    await fn();
    console.log(`  ✓ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(`    ${err.message}`);
  }
}

async function main() {
  console.log('\n======================================================');
  console.log('       RUNNING BACKEND TOOLS CLI TEST SUITE           ');
  console.log('======================================================\n');

  // --- 1. search_products Tests ---
  console.log('[1/4] Testing search_products...');

  await runAsyncTest('search_products: find oversized items', async () => {
    const res = await executeTool('search_products', { query: 'oversized' });
    assert.equal(res.success, true);
    assert.ok(res.count > 0, 'Expected at least 1 oversized item');
    assert.ok(
      res.products[0].title.toLowerCase().includes('oversized') ||
      (res.products[0].fitInfo && res.products[0].fitInfo.toLowerCase().includes('oversized'))
    );
  });

  await runAsyncTest('search_products: max_price filter', async () => {
    const res = await executeTool('search_products', { max_price: 1300 });
    assert.equal(res.success, true);
    for (const p of res.products) {
      assert.ok(p.price <= 1300, `Product ${p.title} has price ${p.price} exceeding max 1300`);
    }
  });

  await runAsyncTest('search_products: category filter', async () => {
    const res = await executeTool('search_products', { category: 'Pants' });
    assert.equal(res.success, true);
    assert.ok(res.count > 0, 'Expected pants in catalog');
    for (const p of res.products) {
      assert.ok(p.title.toLowerCase().includes('pants') || p.productType.toLowerCase().includes('pants'));
    }
  });

  await runAsyncTest('search_products: empty match handles gracefully', async () => {
    const res = await executeTool('search_products', { query: 'nonexistent-xyz-parka' });
    assert.equal(res.success, true);
    assert.equal(res.count, 0);
    assert.ok(res.note.includes('No products found'));
  });

  await runAsyncTest('search_products: light color query returns only light-family pieces', async () => {
    const res = await executeTool('search_products', { query: 'light coloured, as in white' });
    assert.equal(res.success, true);
    assert.ok(res.count > 0, 'Expected light items');
    for (const p of res.products) {
      assert.equal(p.colorFamily, 'light', `Expected ${p.title} to be light family, got ${p.colorFamily}`);
      assert.notEqual(p.colorFamily, 'dark', `Dark item ${p.title} returned for light query`);
    }
  });

  await runAsyncTest('search_products: dark color query returns only dark-family pieces', async () => {
    const res = await executeTool('search_products', { query: 'black gothic tee' });
    assert.equal(res.success, true);
    assert.ok(res.count > 0, 'Expected dark items');
    for (const p of res.products) {
      assert.equal(p.colorFamily, 'dark', `Expected ${p.title} to be dark family, got ${p.colorFamily}`);
    }
  });

  // --- 2. show_products Tests ---
  console.log('\n[2/4] Testing show_products...');

  let sampleProduct = null;
  await runAsyncTest('show_products: valid product ID', async () => {
    // Get an ID from catalog search
    const searchRes = await executeTool('search_products', { query: 'tee' });
    assert.ok(searchRes.products.length > 0, 'Need at least one tee');
    sampleProduct = searchRes.products[0];

    const showRes = await executeTool('show_products', { product_ids: [sampleProduct.id] });
    assert.equal(showRes.success, true);
    assert.equal(showRes.card_count, 1);
    const card = showRes.displayed_cards[0];
    assert.equal(card.id, sampleProduct.id);
    assert.equal(typeof card.price, 'number');
    assert.ok(Array.isArray(card.availableSizes));
    assert.ok(card.url.startsWith('https://spoiledbunny.in/products/'));
  });

  await runAsyncTest('show_products: missing / invalid ID handled', async () => {
    const showRes = await executeTool('show_products', { product_ids: ['invalid-id-999999'] });
    assert.equal(showRes.success, false);
    assert.equal(showRes.card_count, 0);
    assert.ok(showRes.missing_ids.includes('invalid-id-999999'));
  });

  // --- 3. get_policy Tests ---
  console.log('\n[3/4] Testing get_policy...');

  await runAsyncTest('get_policy: shipping policy', async () => {
    const res = await executeTool('get_policy', { topic: 'shipping' });
    assert.equal(res.success, true);
    assert.ok(res.policy.charges.toLowerCase().includes('free'));
    assert.ok(res.policy.international.toLowerCase().includes('not offer international'));
  });

  await runAsyncTest('get_policy: offers and discounts', async () => {
    const res = await executeTool('get_policy', { topic: 'offers' });
    assert.equal(res.success, true);
    const prepaidOffer = res.active_offers.find(o => o.code === 'PREPAID15');
    assert.ok(prepaidOffer, 'PREPAID15 offer must be present');
    assert.ok(res.rules.includes('15%'));
  });

  await runAsyncTest('get_policy: restock policy', async () => {
    const res = await executeTool('get_policy', { topic: 'restock' });
    assert.equal(res.success, true);
    assert.ok(res.policy.summary.toLowerCase().includes('not restock'));
  });

  // --- 4. track_order Tests ---
  console.log('\n[4/4] Testing track_order...');

  await runAsyncTest('track_order: refuses without phone number', async () => {
    const res = await executeTool('track_order', { order_number: 'SB1001' });
    assert.equal(res.authenticated, false);
    assert.equal(res.requires_phone, true);
    assert.ok(res.message.includes('10-digit phone number'));
  });

  await runAsyncTest('track_order: refuses with wrong phone number', async () => {
    const res = await executeTool('track_order', { order_number: 'SB1001', phone: '9999999999' });
    assert.equal(res.authenticated, false);
    assert.equal(res.order_found, true);
    assert.ok(res.message.includes('Authentication failed'));
    assert.equal(res.status, undefined, 'Must not reveal order status on failure');
    assert.equal(res.items, undefined, 'Must not reveal order items on failure');
  });

  await runAsyncTest('track_order: succeeds with correct phone number', async () => {
    const res = await executeTool('track_order', { order_number: 'SB1001', phone: '9876543210' });
    assert.equal(res.authenticated, true);
    assert.equal(res.order_number, 'SB1001');
    assert.equal(res.customer_name, 'Aarav Sharma');
    assert.equal(res.status, 'In Transit');
    assert.ok(res.tracking_url.includes('SB1001'));
    assert.ok(Array.isArray(res.items) && res.items.length > 0);
  });

  await runAsyncTest('track_order: unknown order number handled', async () => {
    const res = await executeTool('track_order', { order_number: 'SB9999', phone: '9876543210' });
    assert.equal(res.authenticated, false);
    assert.equal(res.order_found, false);
    assert.ok(res.message.includes('not found'));
  });

  console.log('\n------------------------------------------------------');
  console.log(`Results: ${passedTests}/${totalTests} tests passed.`);
  if (passedTests === totalTests) {
    console.log('VERDICT: PASS');
    console.log('------------------------------------------------------\n');
    process.exit(0);
  } else {
    console.error(`VERDICT: FAIL -- ${totalTests - passedTests} tests failed.`);
    console.log('------------------------------------------------------\n');
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Fatal CLI test runner failure:', err);
  process.exit(1);
});
