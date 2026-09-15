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
    <section className="pt-5 pb-3 bg-cream position-relative">
      <div className="container-fluid px-3 px-xl-5" style={{ maxWidth: '1320px' }}>
        
        {/* Section Cursive Header */}
        <div className="text-center mb-4">
          <span 
            className="d-block mb-1"
            style={{ fontFamily: "'Italianno', cursive", fontSize: '38px', color: '#A44E0E', lineHeight: '1.2' }}
          >
            Moments &amp; Gatherings
          </span>
          <h2 
            className="font-beautique fw-normal mb-0" 
            style={{ color: '#422207', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '0.01em' }}
          >
            Where stories become shared experiences.
          </h2>
        </div>

        {/* Category Carousel & Tab Bar */}
        <div className="position-relative pt-2">
          <div className="d-flex align-items-center justify-content-between gap-2 border-bottom pb-2" style={{ borderColor: '#E2D5C3' }}>
            
            {/* Left Arrow Button */}
            <button 
              className="btn p-0 d-flex align-items-center justify-content-center flex-shrink-0" 
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #D9C5B2',
                backgroundColor: '#FFFDF9',
                color: '#62350A',
                fontSize: '14px',
                transition: 'all 0.2s ease'
              }}
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            {/* Scrollable Tabs */}
            <div 
              ref={scrollContainerRef}
              className="d-flex align-items-center justify-content-center gap-4 overflow-x-auto py-1 no-scrollbar w-100 px-2"
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
                    onClick={() => onTabChange && onTabChange(cat.id)}
                    className="btn p-0 bg-transparent border-0 text-nowrap transition-all"
                    style={{
                      fontFamily: "'Larken', 'Lora', serif",
                      fontSize: '16px',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#A44E0E' : '#62350A',
                      borderBottom: isActive ? '2px solid #A44E0E' : '2px solid transparent',
                      paddingBottom: '6px',
                      borderRadius: 0,
                      opacity: isActive ? 1 : 0.85
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Right Arrow Button */}
            <button 
              className="btn p-0 d-flex align-items-center justify-content-center flex-shrink-0" 
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #D9C5B2',
                backgroundColor: '#FFFDF9',
                color: '#62350A',
                fontSize: '14px',
                transition: 'all 0.2s ease'
              }}
            >
              <i className="bi bi-chevron-right"></i>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

