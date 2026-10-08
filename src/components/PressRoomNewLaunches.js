'use client';

import React, { useEffect, useRef, useState } from 'react';

const launches = [
  {
    id: 'pancha',
    label: 'THE ELEMENTS',
    title: 'Introducing',
    titleLine2: 'Pañcha',
    status: 'launching soon...',
    cover: '/images/press%20room/launch_pancha.webp',
    description:
      'Before I studied Ayurveda, I wrote from raw emotions. Later, I discovered the five elements had been there all along. Pañcha is that silent opening: five elements, five poems each, one whole.',
    cta: 'notify'
  },
  {
    id: 'mindset-mentor',
    label: 'THE JOURNAL',
    title: 'Introducing',
    titleLine2: 'Mindset Mentor',
    status: 'launching soon...',
    cover: '/images/press%20room/launch_mindset_mentor.webp',
    description:
      'Mindset mentor is a living collection of affirmation words that shaped my own journey and now belong to you. Let them meet you in your uncertain moments and walk with you toward the person you aspire to be.',
    cta: 'notify'
  },
  {
    id: 'whispers',
    label: 'THE NIGHT',
    title: 'its 12:01 am',
    titleLine2: 'whispers of the night',
    status: 'launching soon...',
    cover: '/images/press%20room/launch_whispers.webp',
    description:
      'My silent conversation with myself, before I close my eyes to sleep at night. I have my favorites, simple yet powerful. And here they are for you.',
    cta: 'notify'
  }
];

export default function PressRoomNewLaunches() {
  const trackRef = useRef(null);
  const [notified, setNotified] = useState({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < maxScroll - 5);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  // Scroll by exactly one book (item width + gap)
  const scrollByItem = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const item = el.querySelector('.launch-item');
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = item ? item.offsetWidth + gap : el.clientWidth;
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  const arrowStyle = (enabled) => ({
    width: '42px',
    height: '42px',
    border: '1px solid #A44E0E',
    color: '#422207',
    backgroundColor: 'transparent',
    opacity: enabled ? 1 : 0.35,
    cursor: enabled ? 'pointer' : 'default'
  });

  const buttonStyle = (active) => ({
    border: '1px solid #A44E0E',
    color: '#A44E0E',
    backgroundColor: active ? '#F4EEE5' : 'transparent',
    borderRadius: '0px',
    fontFamily: "'Larken', serif",
    fontSize: '14px',
    minWidth: '160px'
  });

  return (
    <section className="py-5 bg-cream position-relative">
      <div className="container px-3 px-md-4 px-xl-5" style={{ maxWidth: '1280px' }}>

        {/* Section Tag & Heading matching Figma screenshot */}
        <div className="text-center mb-5">
          <span
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '34px',
              color: '#A44E0E'
            }}
          >
            new launch updates
          </span>
          <h2
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Lora', serif",
              fontSize: 'clamp(21px, 2.2vw, 26px)',
              fontWeight: 400,
              color: '#422207'
            }}
          >
            A little something new, coming from the heart
          </h2>
        </div>

        {/* Books Carousel: arrows either side of a horizontally scrolling track */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          <button
            type="button"
            onClick={() => scrollByItem('left')}
            disabled={!canScrollLeft}
            aria-label="Previous books"
            className="btn rounded-circle p-0 d-flex align-items-center justify-content-center flex-shrink-0"
            style={arrowStyle(canScrollLeft)}
          >
            <i className="bi bi-chevron-left" style={{ fontSize: '14px' }}></i>
          </button>

          <div ref={trackRef} className="launches-track d-flex flex-grow-1">
            {launches.map((book) => (
              <div key={book.id} className="launch-item flex-shrink-0">
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-stretch gap-4 p-0 bg-transparent">

                  {/* Book Cover Image - every cover is the same height; width follows each cover's shape */}
                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center bg-transparent"
                    style={{ height: '320px', maxWidth: '100%' }}
                  >
                    <img
                      src={book.cover}
                      alt={`${book.titleLine2} cover`}
                      style={{
                        width: 'auto',
                        height: '100%',
                        maxWidth: '100%',
                        display: 'block',
                        background: 'transparent',
                        filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.1))'
                      }}
                    />
                  </div>

                  {/* Book Info Details */}
                  <div className="flex-grow-1 d-flex flex-column align-items-center align-items-sm-start text-center text-sm-start launch-info">
                    <span
                      className="d-block text-uppercase mb-1"
                      style={{
                        fontFamily: "'Larken', 'Lora', serif",
                        fontSize: '12px',
                        letterSpacing: '0.12em',
                        color: '#7D736A'
                      }}
                    >
                      {book.label}
                    </span>

                    <h3
                      className="mb-1"
                      style={{
                        fontFamily: "'Larken', 'Cormorant Garamond', serif",
                        fontSize: '22px',
                        fontWeight: 500,
                        color: '#1A1715',
                        lineHeight: '1.2'
                      }}
                    >
                      {book.title} <br className="d-none d-sm-inline" />{book.titleLine2}
                    </h3>

                    <span
                      className="d-block fst-italic mb-2"
                      style={{
                        fontFamily: "'Larken', 'Lora', serif",
                        fontSize: '15px',
                        color: '#A44E0E'
                      }}
                    >
                      {book.status}
                    </span>

                    {/* Thin Line Accent */}
                    <div
                      className="mb-3 mx-auto mx-sm-0"
                      style={{ width: '50px', height: '1px', backgroundColor: '#5D5D5C' }}
                    ></div>

                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                        fontSize: '13px',
                        color: '#554C44',
                        lineHeight: '1.5'
                      }}
                    >
                      {book.description}
                    </p>

                    {book.cta === 'notify' ? (
                      <button
                        onClick={() => setNotified((prev) => ({ ...prev, [book.id]: !prev[book.id] }))}
                        className="btn launch-cta text-decoration-none px-4 py-2 w-100 w-sm-auto mt-auto"
                        style={buttonStyle(notified[book.id])}
                      >
                        {notified[book.id] ? 'Subscribed!' : 'Get Notified'}
                      </button>
                    ) : (
                      <a
                        href="/books"
                        className="btn launch-cta text-decoration-none px-4 py-2 w-100 w-sm-auto mt-auto"
                        style={buttonStyle(false)}
                      >
                        Explore the book
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByItem('right')}
            disabled={!canScrollRight}
            aria-label="Next books"
            className="btn rounded-circle p-0 d-flex align-items-center justify-content-center flex-shrink-0"
            style={arrowStyle(canScrollRight)}
          >
            <i className="bi bi-chevron-right" style={{ fontSize: '14px' }}></i>
          </button>
        </div>

      </div>

      <style jsx>{`
        .launches-track {
          gap: 3rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .launches-track::-webkit-scrollbar {
          display: none;
        }
        /* 1 book per view on phones/tablets, 2 on desktop with the next one peeking in */
        .launch-item {
          scroll-snap-align: start;
          width: 100%;
          position: relative;
        }
        /* Text sits beside the cover: label level with its top, button level with its bottom */
        .launch-info {
          padding-top: 2px;
        }
        .launch-cta {
          min-width: 175px;
        }
        .launch-cta:hover {
          background-color: #804112 !important;
          border-color: #804112 !important;
          color: #FFFDF9 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(128, 65, 18, 0.25);
        }
        @media (min-width: 992px) {
          .launch-item {
            width: calc((100% - 3rem) / 2.15);
          }
          /* Thin vertical divider between books */
          .launch-item + .launch-item::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: -1.5rem;
            width: 1px;
            background-color: #A44E0E;
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}
