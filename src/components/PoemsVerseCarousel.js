'use client';

import { useEffect, useRef, useState } from 'react';

const PREVIEW = [
  'stripping my soul',
  'shattering the illusions',
  'grasping the rainbow hues',
  'traveling to a utopian land',
  'shimmering in golden light...'
];

const poems = [
  { id: 'silent-soul', title: 'The Silent Soul', image: '/images/poems/poem_silent_soul.webp' },
  { id: 'who-am-i', title: 'Who Am I?', image: '/images/poems/poem_who_am_i.webp' },
  { id: 'am-i-boring', title: 'Am I Boring?', image: '/images/poems/poem_am_i_boring.webp' },
  { id: 'balance', title: 'Balance', image: '/images/poems/poem_balance.webp' },
  { id: 'unchained', title: 'Unchained', image: '/images/poems/poem_unchained.webp' },
  { id: 'me', title: 'Me', image: '/images/poems/poem_me.webp' }
];

export default function PoemsVerseCarousel() {
  const trackRef = useRef(null);
  // Progress bar: thumb size = visible share of the row, position = how far it is scrolled
  const [bar, setBar] = useState({ size: 0.45, offset: 0 });

  // Mouse users can click and drag the row sideways (touch and trackpads already scroll)
  const drag = useRef(null);
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0 || !trackRef.current) return;
    drag.current = { x: e.clientX, left: trackRef.current.scrollLeft, moved: false };
    trackRef.current.classList.add('is-dragging');
  };
  const onPointerMove = (e) => {
    if (!drag.current || !trackRef.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.left - dx;
  };
  const endDrag = () => {
    if (!drag.current || !trackRef.current) return;
    const el = trackRef.current;
    el.classList.remove('is-dragging');
    // Settle on the nearest card once released
    const card = el.querySelector('.poem-card');
    if (card) {
      const step = card.offsetWidth + (parseFloat(getComputedStyle(el).columnGap) || 0);
      el.scrollTo({ left: Math.round(el.scrollLeft / step) * step, behavior: 'smooth' });
    }
    drag.current = null;
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      const size = Math.min(1, el.clientWidth / el.scrollWidth);
      const max = el.scrollWidth - el.clientWidth;
      setBar({ size, offset: max > 0 ? (el.scrollLeft / max) * (1 - size) : 0 });
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section className="py-5 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">

        {/* Section Header */}
        <div className="text-center mb-5">
          <span
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '34px',
              color: '#A44E0E',
              fontWeight: 400,
              lineHeight: '100%'
            }}
          >
            poems
          </span>
          <h2
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: 'clamp(21px, 2.2vw, 26px)',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.15',
              letterSpacing: '0.02em'
            }}
          >
            Echoes of My Heart Through Verse
          </h2>
        </div>

        <div className="poems-layout">

          {/* Left: intro + View All */}
          <div className="poems-intro text-center text-xl-start">
            <p
              className="mb-4"
              style={{
                fontFamily: "'Larken-Light', serif",
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '145%',
                letterSpacing: '-0.01em',
                color: '#010101A3'
              }}
            >
              My poems come from lived experience. The moments I&apos;ve felt too deeply to stay silent about. Raw emotions. Untold truths. Nothing is polished before it&apos;s honest; I&apos;d rather a line feel true than perfect. Unspoken feelings - the grief, the healing, the tiny wins, so that others might recognize a piece of themselves in it too.
            </p>

            <a
              href="#all-poems"
              className="btn-figma-outline d-inline-flex align-items-center justify-content-center text-decoration-none"
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '15px',
                color: '#62350A',
                border: '0.75px solid #A44E0E',
                borderRadius: 0,
                backgroundColor: 'transparent',
                width: '165px',
                height: '41px',
                padding: '10px',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}
            >
              View All
            </a>
          </div>

          {/* Right: scrolling row of poem cards + progress bar */}
          <div className="poems-carousel">
            <div
              ref={trackRef}
              className="poems-track"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerLeave={endDrag}
            >
              {poems.map((poem) => (
                <article key={poem.id} className="poem-card">
                  <h3
                    className="text-center mb-3"
                    style={{
                      fontFamily: "'Beautique Display', 'Cormorant Garamond', serif",
                      fontSize: '20px',
                      color: '#422207',
                      fontWeight: 400
                    }}
                  >
                    {poem.title}
                  </h3>

                  <div className="overflow-hidden mb-3" style={{ aspectRatio: '206 / 146' }}>
                    <img src={poem.image} alt={poem.title} className="w-100 h-100 d-block" style={{ objectFit: 'cover' }} draggable={false} />
                  </div>

                  <div className="d-flex align-items-end justify-content-between gap-2">
                    <div
                      style={{
                        fontFamily: "'Dancing Script', cursive",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '112%',
                        letterSpacing: '0.01em',
                        color: '#62350A'
                      }}
                    >
                      {PREVIEW.map((line) => (
                        <span key={line} className="d-block">{line}</span>
                      ))}
                    </div>
                    <i className="bi bi-arrow-right flex-shrink-0" style={{ fontSize: '20px', color: '#62350A', lineHeight: 1 }} aria-hidden="true"></i>
                  </div>
                </article>
              ))}
            </div>

            <div className="poems-progress" aria-hidden="true">
              <div
                className="poems-progress-thumb"
                style={{ width: `${bar.size * 100}%`, left: `${bar.offset * 100}%` }}
              ></div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .poems-layout {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .poems-intro {
          max-width: 420px;
          margin: 0 auto;
        }
        .poems-carousel {
          min-width: 0;
        }
        .poems-track {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 4px 12px 18px 4px;
        }
        .poems-track {
          cursor: grab;
          user-select: none;
        }
        .poems-track.is-dragging {
          cursor: grabbing;
          scroll-snap-type: none;
        }
        .poems-track::-webkit-scrollbar {
          display: none;
        }
        .poem-card {
          flex: 0 0 auto;
          width: min(280px, 78vw);
          scroll-snap-align: start;
          background: #FFFDF9;
          border: 3px solid #F8EDD8;
          box-shadow: 0 6px 14px rgba(66, 34, 7, 0.12);
          padding: 20px 20px 16px;
        }
        .poems-progress {
          position: relative;
          height: 4px;
          background: #EADBC6;
          margin-top: 18px;
        }
        .poems-progress-thumb {
          position: absolute;
          top: 0;
          height: 100%;
          background: #62350A;
          transition: left 0.1s linear;
        }
        /* Desktop: intro on the left, cards running off to the right as in the design */
        @media (min-width: 1200px) {
          .poems-layout {
            flex-direction: row;
            align-items: flex-start;
            gap: 4%;
          }
          .poems-intro {
            flex: 0 0 20%;
            margin: 52px 0 0;
          }
          .poems-carousel {
            flex: 1 1 auto;
            margin-right: -3rem;
          }
        }
      `}</style>
    </section>
  );
}
