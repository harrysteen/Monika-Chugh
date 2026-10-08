'use client';

import React, { useEffect, useRef } from 'react';

export default function PressRoomSpotlight() {
  // Photos already include their soft shadow; width/height is each image's own shape
  const spotlightItems = [
    { id: 1, title: 'Book Launches & Publications', imgUrl: '/images/press%20room/spotlight_1.webp', ratio: 619 / 800 },
    { id: 2, title: 'Author Talks & Readings', imgUrl: '/images/press%20room/spotlight_2.webp', ratio: 1129 / 800 },
    { id: 3, title: 'Workshops & Gatherings', imgUrl: '/images/press%20room/spotlight_3.webp', ratio: 578 / 800 },
    { id: 4, title: 'Art & Creative Showcases', imgUrl: '/images/press%20room/spotlight_4.webp', ratio: 681 / 800 },
    { id: 5, title: 'Collaborations & Community', imgUrl: '/images/press%20room/spotlight_5.webp', ratio: 669 / 800 },
    { id: 6, title: 'YouTube & Media Engagements', imgUrl: '/images/press%20room/spotlight_6.webp', ratio: 1119 / 800 }
  ];

  // The photos are rendered three times in a row. We keep the view inside the middle copy:
  // whenever it drifts into the first or last copy we jump back by one copy's width, which
  // looks identical, so the row never ends in either direction.
  const COPIES = 3;
  const SPEED = 40; // auto-scroll speed in px per second

  const rowRef = useRef(null);
  const drag = useRef(null);
  const paused = useRef(false);
  const pos = useRef(0); // exact scroll position (scrollLeft alone can round to whole pixels)

  const setWidth = () => (rowRef.current ? rowRef.current.scrollWidth / COPIES : 0);

  const wrap = () => {
    const el = rowRef.current;
    const w = setWidth();
    if (!el || !w) return;
    if (pos.current < w * 0.5) pos.current += w;
    else if (pos.current > w * 1.5) pos.current -= w;
    el.scrollLeft = pos.current;
  };

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const start = () => {
      pos.current = setWidth();
      el.scrollLeft = pos.current;
    };
    start();
    window.addEventListener('resize', start);

    // Manual scrolling (trackpad, touch, drag) also wraps around
    const onScroll = () => {
      if (Math.abs(el.scrollLeft - pos.current) > 1) {
        pos.current = el.scrollLeft;
        wrap();
      }
    };
    el.addEventListener('scroll', onScroll, { passive: true });

    // Gentle continuous drift; paused while hovered, touched or dragged, and off for reduced motion
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(now - last, 100) / 1000;
      last = now;
      if (!paused.current && !drag.current) {
        pos.current += SPEED * dt;
        wrap();
      }
      frame = requestAnimationFrame(tick);
    };
    if (!reduceMotion) frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', start);
      el.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Mouse users can drag the row sideways (touch and trackpads scroll natively)
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || !rowRef.current) return;
    drag.current = { x: e.clientX, left: pos.current };
    rowRef.current.classList.add('is-dragging');
  };
  const onPointerMove = (e) => {
    if (!drag.current || !rowRef.current) return;
    pos.current = drag.current.left - (e.clientX - drag.current.x);
    rowRef.current.scrollLeft = pos.current;
  };
  const endDrag = () => {
    if (!drag.current) return;
    drag.current = null;
    rowRef.current?.classList.remove('is-dragging');
    wrap();
  };

  return (
    <section className="py-5 bg-cream position-relative">
      <div className="container-fluid px-3 px-md-4 px-xl-5" style={{ maxWidth: '1440px' }}>
        
        {/* Section Header Tag & Title */}
        <div className="text-center mb-5">
          <span 
            className="d-block mb-1" 
            style={{ 
              fontFamily: "'Italianno', cursive", 
              fontSize: '34px', 
              color: '#A44E0E' 
            }}
          >
            in the spotlight
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
            Conversations &amp; Moments Along the Way
          </h2>
        </div>

        {/* One scrolling row of photos, all the same height; each keeps its own width */}
        <div
          ref={rowRef}
          className="spotlight-row"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={(e) => {
            endDrag();
            if (e.pointerType === 'mouse') paused.current = false;
          }}
          onPointerEnter={(e) => {
            if (e.pointerType === 'mouse') paused.current = true;
          }}
          onTouchStart={() => { paused.current = true; }}
          onTouchEnd={() => { paused.current = false; }}
        >
          {Array.from({ length: COPIES }, (_, copy) => spotlightItems.map((item) => (
            <figure
              key={`${copy}-${item.id}`}
              className="spotlight-item mb-0"
              style={{ '--ratio': item.ratio }}
              aria-hidden={copy !== 1 ? 'true' : undefined}
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="d-block w-100 h-auto"
                draggable={false}
              />
              <figcaption
                className="mt-3"
                style={{
                  fontFamily: "'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#422207',
                  lineHeight: 1.3
                }}
              >
                {item.title}
              </figcaption>
            </figure>
          )))}
        </div>

        {/* Bottom Horizontal Divider Line */}
        <div 
          className="w-100 mt-5 pt-3" 
          style={{ 
            borderTop: '1px solid #C5B5A5', 
            opacity: 0.8 
          }}
        ></div>

      </div>

      <style jsx>{`
        /* Photos share one height and keep their own shape; the row scrolls sideways */
        .spotlight-row {
          --spot-h: clamp(220px, 25vw, 340px);
          display: flex;
          gap: clamp(20px, 2.5vw, 32px);
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 4px;
          cursor: grab;
          user-select: none;
        }
        .spotlight-row::-webkit-scrollbar {
          display: none;
        }
        .spotlight-row.is-dragging {
          cursor: grabbing;
        }
        .spotlight-item {
          flex: 0 0 auto;
          width: calc(var(--spot-h) * var(--ratio));
        }
      `}</style>
    </section>
  );
}
