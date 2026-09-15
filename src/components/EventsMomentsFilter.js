'use client';

import { useRef } from 'react';

const CATEGORIES = [
  { id: 'quote-cafe', label: 'Quote Cafe – Book launch' },
  { id: 'arogini', label: 'Arogini' },
  { id: 'travel', label: 'Travel' },
  { id: 'reflections', label: 'Reflections' },
  { id: 'wellness', label: 'Wellness' },
];

export default function EventsMomentsFilter({ activeTab = 'quote-cafe', onTabChange }) {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -240 : 240;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-5 bg-cream position-relative">
      <div className="container-fluid px-3 px-xl-5">
        
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="font-handwriting d-block mb-1">
            Moments & Gatherings
          </span>
          <h2 className="font-beautique display-6 fw-normal" style={{ color: '#422207' }}>
            Where stories become shared experiences.
          </h2>
        </div>

        {/* Category Carousel Controls & Tab Pills */}
        <div className="d-flex align-items-center justify-content-center gap-3 max-w-5xl mx-auto pt-2">
          
          {/* Left Arrow Button */}
          <button 
            className="events-carousel-arrow flex-shrink-0" 
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* Horizontally Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="d-flex align-items-center gap-3 overflow-x-auto py-2 no-scrollbar"
            style={{ 
              scrollBehavior: 'smooth', 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`events-filter-pill ${isActive ? 'active' : ''}`}
                  onClick={() => onTabChange && onTabChange(cat.id)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button 
            className="events-carousel-arrow flex-shrink-0" 
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
          >
            <i className="bi bi-chevron-right"></i>
          </button>

        </div>

      </div>
    </section>
  );
}
