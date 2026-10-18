import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product.available) return;

    setAdded(true);
    // Dispatch custom event to host window so demo page or Shopify theme can increment cart
    window.dispatchEvent(new CustomEvent('bunny:add-to-cart', {
      detail: product,
      bubbles: true,
      composed: true
    }));

    // If host page registered a callback
    if (typeof window.BUNNY_ON_ADD_TO_CART === 'function') {
      window.BUNNY_ON_ADD_TO_CART(product);
    }

    setTimeout(() => setAdded(false), 2000);
  };

  const hasDiscount = product.discountBadge || (product.compareAtPrice && product.compareAtPrice > product.price);
  const discountLabel = product.discountBadge || (hasDiscount
    ? `${Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}% OFF`
    : null);

  const sizesText = (product.availableSizes && product.availableSizes.length > 0)
    ? `Sizes: ${product.availableSizes.join(', ')}`
    : null;

  return (
    <div className="bunny-card">
      <div className="bunny-card-img-wrap">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="bunny-card-img"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#6b7280', fontSize: '11px' }}>
            SPOILED BUNNY
          </div>
        )}

        {discountLabel && product.available && (
          <span className="bunny-badge-discount">{discountLabel}</span>
        )}

        {!product.available && (
          <span className="bunny-badge-soldout">Sold out</span>
        )}
      </div>

      <div className="bunny-card-content">
        <h4 className="bunny-card-title" title={product.title}>
          {product.title}
        </h4>

        <div className="bunny-card-price-row">
          <span className="bunny-card-price">₹{product.price}</span>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="bunny-card-compare">₹{product.compareAtPrice}</span>
          )}
        </div>

        {sizesText && (
          <div className="bunny-card-sizes">{sizesText}</div>
        )}

        <div className="bunny-card-btn-row">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bunny-btn-view"
          >
            View
          </a>

          {product.available ? (
            <button
              type="button"
              className={`bunny-btn-cart ${added ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
          ) : (
            <button type="button" className="bunny-btn-disabled" disabled>
              Sold out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
