import React, { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductCarousel({ products = [] }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const timer = setTimeout(checkScroll, 150);
    const el = scrollRef.current;
    if (!el) return;

    // Allow vertical mouse wheel to scroll horizontally
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && el.scrollWidth > el.clientWidth) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 0.85;
      }
    };

    el.addEventListener('scroll', checkScroll, { passive: true });
    el.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', checkScroll);

    return () => {
      clearTimeout(timer);
      el.removeEventListener('scroll', checkScroll);
      el.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', checkScroll);
    };
  }, [products]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const distance = direction === 'left' ? -220 : 220;
    el.scrollBy({ left: distance, behavior: 'smooth' });
  };

  if (!products || products.length === 0) return null;

  return (
    <div className="bunny-carousel-container">
      {/* Scroll Left Button */}
      {canScrollLeft && (
        <button
          type="button"
          className="bunny-carousel-nav bunny-nav-left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ‹
        </button>
      )}

      {/* Scrollable Track */}
      <div className="bunny-carousel-wrap" ref={scrollRef}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Scroll Right Button */}
      {canScrollRight && (
        <button
          type="button"
          className="bunny-carousel-nav bunny-nav-right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          ›
        </button>
      )}
    </div>
  );
}
