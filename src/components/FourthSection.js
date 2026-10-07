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
      frame: { svgW: 246, svgH: 355, x: 0, y: 0, w: 245.8, h: 354.3 },
      description: "Some stories wait until we find the courage to share them. Quote Café began when I found mine. A sanctuary of reflections, affirmations, and short poems on self-love, forgiveness, and letting go. This is my story. Perhaps you’ll find a little of yours here."
    },
    {
      id: 2,
      title: "a quote zone with affirmations",
      cover: "/images/home_section4_book2.svg",
      frame: { svgW: 277, svgH: 385, x: 24.2, y: 12.2, w: 245.8, h: 354.3 },
      description: "“Take care of yourself; the world can wait.” A reminder I often gave my patients, and slowly learned to offer myself. A Quiet Zone With Affirmations began in my journals, with words I needed to hear. In my own company, writing became a daily ritual. Make a little room for yourself here."
    },
    {
      id: 3,
      title: "Rebirth",
      cover: "/images/home_section4_book3.svg",
      frame: { svgW: 254, svgH: 355, x: 0, y: 0, w: 253.3, h: 354.3 },
      description: "The phoenix is the symbol of renewal and rebirth. As one life ends, a nest is built, the old phoenix sets fire to itself, and a new one emerges from the ashes. Rebirth and renewal are never easy, as the stories of these brave women will testify. Each shares a story of a fragmented and fractured life."
    }
  ];

  // Every cover is scaled so the book itself (not its SVG canvas) is exactly this tall
  const COVER_HEIGHT = 325;
  const COLUMN_WIDTH = 233;

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
                fontSize: 'clamp(21px, 2.2vw, 26px)',
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
              className="btn rounded-circle p-0 d-flex align-items-center justify-content-center top-scroll-btn"
              style={{
                width: '42px',
                height: '42px',
                border: '1px solid #A44E0E',
                color: '#422207',
                backgroundColor: 'transparent',
                opacity: canScrollLeft ? 1 : 0.4,
                cursor: canScrollLeft ? 'pointer' : 'default',
                transition: 'all 0.3s ease'
              }}
              aria-label="Previous books"
              disabled={!canScrollLeft}
            >
              <i className="bi bi-chevron-left" style={{ fontSize: '14px' }}></i>
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="btn rounded-circle p-0 d-flex align-items-center justify-content-center top-scroll-btn"
              style={{
                width: '42px',
                height: '42px',
                border: '1px solid #A44E0E',
                color: '#422207',
                backgroundColor: 'transparent',
                opacity: canScrollRight ? 1 : 0.4,
                cursor: canScrollRight ? 'pointer' : 'default',
                transition: 'all 0.3s ease'
              }}
              aria-label="Next books"
              disabled={!canScrollRight}
            >
              <i className="bi bi-chevron-right" style={{ fontSize: '14px' }}></i>
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
              <div className="text-start flex-shrink-0" style={{ width: `${COLUMN_WIDTH}px` }}>
                {(() => {
                  const { svgW, svgH, x, y, w, h } = book.frame;
                  const scale = COVER_HEIGHT / h;
                  return (
                    <div className="position-relative" style={{ width: `${w * scale}px`, height: `${COVER_HEIGHT}px` }}>
                      <img 
                        src={book.cover} 
                        alt={book.title} 
                        className="d-block position-absolute"
                        style={{ left: `${-x * scale}px`, top: `${-y * scale}px`, width: `${svgW * scale}px`, height: `${svgH * scale}px`, maxWidth: 'none' }}
                      />
                    </div>
                  );
                })()}
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
              <div className="d-flex flex-column justify-content-between text-start" style={{ width: `${COLUMN_WIDTH}px`, height: `${COVER_HEIGHT}px` }}>
                <p 
                  className="mb-0 section4-book-desc"
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
          width: auto;
          flex-shrink: 0;
        }

        @media (max-width: 576px) {
          .fourth-section-unit {
            width: 88vw;
          }
        }

        /* Keep the description short enough that Shop Now stays level with the book bottom */
        .section4-book-desc {
          display: -webkit-box;
          -webkit-line-clamp: 12;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-top: -0.3em;
        }

        .top-scroll-btn:hover:not(:disabled) {
          background-color: #7B380E !important;
          color: #FFFDF9 !important;
          border-color: #7B380E !important;
          transform: translateY(-1px);
        }

        .section4-shop-btn:hover {
          background-color: #804112 !important;
          color: #FFFDF9 !important;
          border-color: #804112 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(128, 65, 18, 0.2);
        }
      `}</style>
    </section>
  );
}

