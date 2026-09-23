'use client';

import { useRef, useState, useEffect } from 'react';

export default function FourthSection() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const books = [
    {
      id: 1,
      title: "quote cafe",
      cover: "/images/home_section4_book1.svg",
      description: "Some stories wait until we find the courage to share them. Quote Café began when I found mine. A sanctuary of reflections, affirmations, and short poems on self-love, forgiveness, and letting go. This is my story. Perhaps you’ll find a little of yours here."
    },
    {
      id: 2,
      title: "a quote zone with affirmations",
      cover: "/images/home_section4_book2.svg",
      description: "“Take care of yourself; the world can wait.” A reminder I often gave my patients, and slowly learned to offer myself. A Quiet Zone With Affirmations began in my journals, with words I needed to hear. In my own company, writing became a daily ritual. Make a little room for yourself here."
    },
    {
      id: 3,
      title: "Rebirth",
      cover: "/images/home_section4_book3.svg",
      description: "The phoenix is the symbol of renewal and rebirth. As one life ends, a nest is built, the old phoenix sets fire to itself, and a new one emerges from the ashes. Rebirth and renewal are never easy, as the stories of these brave women will testify. Each shares a story of a fragmented and fractured life. To feel safe and secure often means stepping through layers of darkness and fragments of yourself to find the light and a way back to who you truly are."
    }
  ];

  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < maxScroll - 10);
      }
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollState);
      updateScrollState();
      return () => el.removeEventListener('scroll', updateScrollState);
    }
  }, []);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -540 : 540;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="my-books" className="py-5 overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-5 px-xl-5">
        
        {/* Section Header with Top Right Navigation Buttons */}
        <div className="position-relative mb-5 mx-auto" style={{ maxWidth: '1380px' }}>
          {/* Centered Title */}
          <div className="text-center">
            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: 'clamp(26px, 3.2vw, 32px)',
                color: '#A44E0E',
                fontWeight: 400,
                lineHeight: '1.1'
              }}
            >
              my books
            </span>
            <h2 
              className="mb-0"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: 'clamp(26px, 3vw, 34px)',
                color: '#422207',
                fontWeight: 400,
                lineHeight: '1.2',
                letterSpacing: '0.01em'
              }}
            >
              Sip slowly. Read deeper.
            </h2>
          </div>

          {/* Top Right Arrow Buttons */}
          <div className="position-absolute end-0 bottom-0 d-flex align-items-center gap-2 pe-2 pe-md-3">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="btn p-0 border-0 d-flex align-items-center justify-content-center top-scroll-btn"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #C4A57B',
                color: '#7B380E',
                backgroundColor: '#FFFDF9',
                opacity: canScrollLeft ? 1 : 0.4,
                cursor: canScrollLeft ? 'pointer' : 'default',
                transition: 'all 0.3s ease'
              }}
              aria-label="Previous books"
              disabled={!canScrollLeft}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="btn p-0 border-0 d-flex align-items-center justify-content-center top-scroll-btn"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #C4A57B',
                color: '#7B380E',
                backgroundColor: '#FFFDF9',
                opacity: canScrollRight ? 1 : 0.4,
                cursor: canScrollRight ? 'pointer' : 'default',
                transition: 'all 0.3s ease'
              }}
              aria-label="Next books"
              disabled={!canScrollRight}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Books Scroll Track (Hidden Bottom Scrollbar) */}
        <div 
          ref={scrollContainerRef}
          className="fourth-section-scroll-track d-flex align-items-start gap-4 gap-lg-5 pb-2 ps-2 ps-lg-4"
        >
          {books.map((book) => (
            <div key={book.id} className="fourth-section-unit flex-shrink-0 d-flex align-items-start gap-3 gap-xl-4">
              
              {/* Left Column: 3D Book Cover + Title Below (single line) */}
              <div className="text-start flex-shrink-0" style={{ width: '225px', maxWidth: '225px' }}>
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="img-fluid d-block"
                  style={{ height: '325px', width: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'top left' }}
                />
                <h3 
                  className="text-start mt-3 mb-0"
                  style={{
                    fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                    fontSize: '15.5px',
                    color: '#7B380E',
                    fontWeight: 400,
                    lineHeight: '1.25',
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {book.title}
                </h3>
              </div>

              {/* Right Column: Description + Short Divider Line + Shop Now Button */}
              <div className="d-flex flex-column justify-content-between text-start" style={{ width: '225px', minHeight: '325px' }}>
                <p 
                  className="mb-0"
                  style={{
                    fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                    fontSize: '12.8px',
                    color: '#4A423B',
                    lineHeight: '1.6',
                    fontWeight: 300,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                >
                  {book.description}
                </p>

                <div className="mt-auto pt-4">
                  {/* Short Accent Divider Line */}
                  <div className="mb-3" style={{ height: '1px', backgroundColor: '#C4A57B', width: '60px' }}></div>
                  
                  {/* Shop Now CTA */}
                  <a 
                    href="#shop" 
                    className="text-decoration-none d-inline-flex align-items-center justify-content-center px-4 py-2 transition-all section4-shop-btn"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                      fontSize: '13px',
                      fontWeight: 300,
                      color: '#7B380E',
                      border: '1px solid #C4A57B',
                      borderRadius: '2px',
                      backgroundColor: '#FFFDF9',
                      minWidth: '125px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Shop Now
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .fourth-section-scroll-track {
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .fourth-section-scroll-track::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .fourth-section-unit {
          scroll-snap-align: start;
          width: 480px;
          flex-shrink: 0;
        }

        @media (max-width: 576px) {
          .fourth-section-unit {
            width: 88vw;
          }
        }

        .top-scroll-btn:hover:not(:disabled) {
          background-color: #7B380E !important;
          color: #FFFDF9 !important;
          border-color: #7B380E !important;
          transform: translateY(-1px);
        }

        .section4-shop-btn:hover {
          background-color: #7B380E !important;
          color: #FFFDF9 !important;
          border-color: #7B380E !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(123, 56, 14, 0.2);
        }
      `}</style>
    </section>
  );
}

