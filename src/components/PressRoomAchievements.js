'use client';

import React, { useState } from 'react';

// Each slide is a finished design image; the View Poem button and the counter sit on top of it
const slides = [
  {
    id: 'rotary-poet-2025',
    image: '/images/press%20room/words_heard_1.webp',
    alt: 'International Rotary Poet of the Year 2025 - Delayed Gratification: Couldn’t Be Happier Than This!',
    poemLink: '#'
  },
  {
    id: 'figments-of-tomorrow',
    image: '/images/press%20room/words_heard_2.webp',
    alt: 'Where my words have found a home - “Unchained” in Figments of Tomorrow, a 2025 anthology',
    poemLink: '#'
  }
];

const pad = (n) => String(n).padStart(2, '0');

export default function PressRoomAchievements() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const goTo = (index) => setCurrent((index + slides.length) % slides.length);

  return (
    <section className="py-4 py-md-5 bg-cream">
      <div className="container px-3 px-md-4 px-xl-5" style={{ maxWidth: '1240px' }}>

        {/* Section Header Title & Cursive Tag */}
        <div className="text-center mb-4 mb-md-5">
          <span
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '34px',
              color: '#A44E0E'
            }}
          >
            poetic recognition and literary achievements
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
            Where My Words Were Heard
          </h2>
        </div>

        {/* Slide: design image with the View Poem button and counter positioned over it */}
        <div className="position-relative w-100 overflow-hidden shadow-sm" style={{ borderRadius: '2px' }}>
          {slides.map((s, idx) => (
            <img
              key={s.id}
              src={s.image}
              alt={s.alt}
              className={`w-100 h-auto d-block words-slide ${idx === current ? 'is-active' : ''}`}
              aria-hidden={idx !== current}
            />
          ))}

          {/* View Poem - in the title band, top right */}
          <a
            href={slide.poemLink}
            className="words-view-btn text-decoration-none d-flex align-items-center justify-content-center"
            {...(slide.poemLink.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            View Poem
          </a>

          {/* Counter - bottom right, below the slide's bottom line */}
          <div className="words-counter d-flex align-items-center">
            <button type="button" className="words-arrow" onClick={() => goTo(current - 1)} aria-label="Previous">
              <i className="bi bi-chevron-left"></i>
            </button>
            <span>
              {slides.map((s, idx) => (
                <React.Fragment key={s.id}>
                  {idx > 0 && <span className="words-sep">/</span>}
                  <button
                    type="button"
                    className={`words-num ${idx === current ? 'is-active' : ''}`}
                    onClick={() => goTo(idx)}
                    aria-label={`Show slide ${idx + 1}`}
                    aria-current={idx === current ? 'true' : undefined}
                  >
                    {pad(idx + 1)}
                  </button>
                </React.Fragment>
              ))}
            </span>
            <button type="button" className="words-arrow" onClick={() => goTo(current + 1)} aria-label="Next">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        /* Slides are stacked; only the active one is visible, with a soft fade */
        .words-slide {
          transition: opacity 0.45s ease;
        }
        .words-slide:not(.is-active) {
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
        }
        .words-slide.is-active {
          position: relative;
          opacity: 1;
        }

        /* Positions are percentages of the slide, so they stay put at every screen size */
        .words-view-btn {
          position: absolute;
          top: 8.4%;
          right: 3.4%;
          transform: translateY(-50%);
          width: 17.5%;
          height: 6.8%;
          min-width: 96px;
          min-height: 28px;
          border: 1px solid #A44E0E;
          background-color: transparent;
          color: #62350A;
          font-family: 'Larken-Light', 'Larken', 'Lora', serif;
          font-size: clamp(11px, 1.15vw, 15px);
          transition: all 0.3s ease;
          z-index: 2;
        }
        .words-view-btn:hover {
          background-color: #804112;
          border-color: #804112;
          color: #FFFDF9;
          box-shadow: 0 4px 12px rgba(128, 65, 18, 0.25);
        }

        .words-counter {
          position: absolute;
          bottom: 1.8%;
          right: 4.2%;
          gap: 4px;
          font-family: 'Larken', 'Lora', serif;
          font-size: clamp(11px, 1.1vw, 15px);
          color: #B9AA99;
          z-index: 2;
        }
        .words-num,
        .words-arrow {
          background: none;
          border: 0;
          padding: 0 2px;
          color: inherit;
          font: inherit;
          cursor: pointer;
        }
        .words-num.is-active {
          color: #422207;
          font-weight: 600;
        }
        .words-num:hover,
        .words-arrow:hover {
          color: #804112;
        }
        .words-sep {
          color: #422207;
        }
        .words-arrow {
          font-size: 0.85em;
        }
      `}</style>
    </section>
  );
}
