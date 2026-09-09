'use client';

import { useState, useEffect } from 'react';

export default function FourteenthSection() {
  const testimonials = [
    {
      id: 1,
      left: {
        text: "Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the.",
        author: "~ himajaindukuri"
      },
      right: {
        text: "Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the.",
        author: "~ himajaindukuri"
      }
    },
    {
      id: 2,
      left: {
        text: "Monika's profound wisdom and poetic eloquence create an extraordinary experience. Her words resonate deeply, guiding us toward mindfulness and creative peace.",
        author: "~ ananya sharma"
      },
      right: {
        text: "Every chapter feels like a quiet sanctuary for the mind. Monika has an unmatched ability to touch souls with simple yet transformative reflections.",
        author: "~ rohan mehta"
      }
    },
    {
      id: 3,
      left: {
        text: "A masterful tapestry of emotion and philosophy. Monika Chugh's publications are a staple on our bookshelf and a source of daily inspiration.",
        author: "~ kavita krishnamurthy"
      },
      right: {
        text: "Through her talks and books, Monika inspires authentic growth. Her guidance helped our community find clarity and creative confidence.",
        author: "~ samir kapoor"
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipState, setFlipState] = useState(null); // 'next' | 'prev' | null
  const [animating, setAnimating] = useState(false);

  const nextIndex = (currentIndex + 1) % testimonials.length;
  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;

  const handleNext = () => {
    if (flipState) return;
    setFlipState('next');
    // Start animation on next frame
    requestAnimationFrame(() => {
      setAnimating(true);
    });
  };

  const handlePrev = () => {
    if (flipState) return;
    setFlipState('prev');
    requestAnimationFrame(() => {
      setAnimating(true);
    });
  };

  const onTransitionEnd = () => {
    if (flipState === 'next') {
      setCurrentIndex(nextIndex);
    } else if (flipState === 'prev') {
      setCurrentIndex(prevIndex);
    }
    setFlipState(null);
    setAnimating(false);
  };

  const current = testimonials[currentIndex];

  // Mobile flattened testimonials (all 6 stories accessible 1-by-1)
  const mobileTestimonials = [
    { id: '1-left', text: testimonials[0].left.text, author: testimonials[0].left.author },
    { id: '1-right', text: testimonials[0].right.text, author: testimonials[0].right.author },
    { id: '2-left', text: testimonials[1].left.text, author: testimonials[1].left.author },
    { id: '2-right', text: testimonials[1].right.text, author: testimonials[1].right.author },
    { id: '3-left', text: testimonials[2].left.text, author: testimonials[2].left.author },
    { id: '3-right', text: testimonials[2].right.text, author: testimonials[2].right.author },
  ];

  const [mobileIndex, setMobileIndex] = useState(0);

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev + 1) % mobileTestimonials.length);
  };

  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev - 1 + mobileTestimonials.length) % mobileTestimonials.length);
  };

  // Base background page content during flip
  const displayLeft = flipState === 'prev' ? testimonials[prevIndex].left : current.left;
  const displayRight = flipState === 'next' ? testimonials[nextIndex].right : current.right;

  return (
    <section
      id="section-14"
      className="position-relative py-4 py-md-5 overflow-hidden w-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: '#FDF4EB', minHeight: '560px' }}
    >
      {/* Dynamic CSS Keyframes & 3D Styles */}
      <style jsx>{`
        .book-wrapper {
          perspective: 1800px;
          perspective-origin: 50% 50%;
        }

        .book-frame {
          box-shadow: 0 20px 50px rgba(66, 34, 7, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04);
          transform-style: preserve-3d;
        }

        .flip-leaf-container {
          position: absolute;
          top: 0;
          height: 100%;
          width: 50%;
          z-index: 15;
          transform-style: preserve-3d;
          transition: transform 0.75s cubic-bezier(0.645, 0.045, 0.355, 1.000);
        }

        .flip-leaf-next {
          right: 0;
          transform-origin: left center;
        }

        .flip-leaf-next.active {
          transform: rotateY(-180deg);
        }

        .flip-leaf-prev {
          left: 0;
          transform-origin: right center;
        }

        .flip-leaf-prev.active {
          transform: rotateY(180deg);
        }

        .leaf-face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background-color: #FFFDF9;
        }

        .leaf-face-back-next {
          transform: rotateY(180deg);
        }

        .leaf-face-back-prev {
          transform: rotateY(-180deg);
        }
      `}</style>

      {/* Main Container */}
      <div className="container-fluid px-3 px-md-4 position-relative z-1 py-3 py-md-4">

        {/* Section Header */}
        <div className="text-center max-w-800 mx-auto mb-4 mb-md-5">
          <span
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: 'clamp(28px, 5.5vw, 34px)',
              color: '#A44E0E',
              fontWeight: 400
            }}
          >
            client love
          </span>

          <h2
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: 'clamp(28px, 6vw, 38px)',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.15',
              letterSpacing: '0.03em'
            }}
          >
            Pirate ipsum me
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP LAYOUT (Dual-Page Open Spiral Notebook with 3D Flip, >= 768px)     */}
        {/* ========================================================================= */}
        <div className="d-none d-md-flex align-items-center justify-content-center gap-3 gap-md-4 max-w-1100 mx-auto book-wrapper">

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            disabled={flipState !== null}
            className="btn rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 transition-all"
            style={{
              width: '46px',
              height: '46px',
              border: '1px solid #C5A070',
              color: '#422207',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              opacity: flipState ? 0.6 : 1
            }}
            aria-label="Previous testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Open Spiral Notebook Book Frame */}
          <div
            className="book-frame position-relative w-100 rounded-2 overflow-hidden"
            style={{
              maxWidth: '860px',
              minHeight: '380px',
              backgroundColor: '#FFFDF9',
              border: '1px solid #EAE0D5'
            }}
          >
            {/* Center Spiral Spine */}
            <div
              className="position-absolute top-0 bottom-0 start-50 translate-middle-x d-flex flex-column justify-content-around py-3 pointer-events-none"
              style={{ zIndex: 30, width: '40px' }}
            >
              {/* Spine Line */}
              <div
                className="position-absolute top-0 bottom-0 start-50 translate-middle-x"
                style={{ width: '4px', backgroundColor: '#B89B7A', opacity: 0.7 }}
              />

              {/* 6 Spiral Rings */}
              {[0, 1, 2, 3, 4, 5].map((idx) => (
                <div key={idx} className="position-relative d-flex align-items-center justify-content-center my-1">
                  <svg width="42" height="14" viewBox="0 0 42 14" fill="none">
                    {/* Ring holes */}
                    <circle cx="5" cy="7" r="3" fill="#4A3425" opacity="0.6" />
                    <circle cx="37" cy="7" r="3" fill="#4A3425" opacity="0.6" />
                    {/* Spiral Metal Wire */}
                    <path
                      d="M 5 7 C 12 1, 30 1, 37 7"
                      stroke="#8D6E63"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 5 7 C 12 13, 30 13, 37 7"
                      stroke="#BCAAA4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Base Book Pages Row (Visible underneath flipping page) */}
            <div className="row g-0 h-100 min-h-380 position-relative z-1">

              {/* Left Page Content */}
              <div
                className="col-12 col-md-6 p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center border-end border-cream position-relative"
                style={{ backgroundColor: '#FFFDF9', minHeight: '380px' }}
              >
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "'Larken', 'Lora', serif",
                    fontSize: '15px',
                    color: '#422207',
                    lineHeight: '1.7',
                    fontWeight: 400,
                    maxWidth: '340px'
                  }}
                >
                  {displayLeft.text}
                </p>
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
                    color: '#A44E0E',
                    fontWeight: 400
                  }}
                >
                  {displayLeft.author}
                </span>
              </div>

              {/* Right Page Content */}
              <div
                className="col-12 col-md-6 p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center position-relative"
                style={{ backgroundColor: '#FFFDF9', minHeight: '380px' }}
              >
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "'Larken', 'Lora', serif",
                    fontSize: '15px',
                    color: '#422207',
                    lineHeight: '1.7',
                    fontWeight: 400,
                    maxWidth: '340px'
                  }}
                >
                  {displayRight.text}
                </p>
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
                    color: '#A44E0E',
                    fontWeight: 400
                  }}
                >
                  {displayRight.author}
                </span>
              </div>

            </div>

            {/* 3D Flipping Leaf for NEXT transition */}
            {flipState === 'next' && (
              <div
                className={`flip-leaf-container flip-leaf-next ${animating ? 'active' : ''}`}
                onTransitionEnd={onTransitionEnd}
              >
                {/* Front Face: Current Right Page */}
                <div className="leaf-face p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center border-start border-cream">
                  <p className="mb-4" style={{ fontFamily: "'Larken', 'Lora', serif", fontSize: '15px', color: '#422207', lineHeight: '1.7', maxWidth: '340px' }}>
                    {current.right.text}
                  </p>
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '28px', color: '#A44E0E' }}>
                    {current.right.author}
                  </span>
                </div>

                {/* Back Face: Next Left Page */}
                <div className="leaf-face leaf-face-back-next p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center border-end border-cream">
                  <p className="mb-4" style={{ fontFamily: "'Larken', 'Lora', serif", fontSize: '15px', color: '#422207', lineHeight: '1.7', maxWidth: '340px' }}>
                    {testimonials[nextIndex].left.text}
                  </p>
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '28px', color: '#A44E0E' }}>
                    {testimonials[nextIndex].left.author}
                  </span>
                </div>
              </div>
            )}

            {/* 3D Flipping Leaf for PREV transition */}
            {flipState === 'prev' && (
              <div
                className={`flip-leaf-container flip-leaf-prev ${animating ? 'active' : ''}`}
                onTransitionEnd={onTransitionEnd}
              >
                {/* Front Face: Current Left Page */}
                <div className="leaf-face p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center border-end border-cream">
                  <p className="mb-4" style={{ fontFamily: "'Larken', 'Lora', serif", fontSize: '15px', color: '#422207', lineHeight: '1.7', maxWidth: '340px' }}>
                    {current.left.text}
                  </p>
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '28px', color: '#A44E0E' }}>
                    {current.left.author}
                  </span>
                </div>

                {/* Back Face: Previous Right Page */}
                <div className="leaf-face leaf-face-back-prev p-4 p-md-5 d-flex flex-column justify-content-center align-items-center text-center border-start border-cream">
                  <p className="mb-4" style={{ fontFamily: "'Larken', 'Lora', serif", fontSize: '15px', color: '#422207', lineHeight: '1.7', maxWidth: '340px' }}>
                    {testimonials[prevIndex].right.text}
                  </p>
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '28px', color: '#A44E0E' }}>
                    {testimonials[prevIndex].right.author}
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            disabled={flipState !== null}
            className="btn rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 transition-all"
            style={{
              width: '46px',
              height: '46px',
              border: '1px solid #C5A070',
              color: '#422207',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              opacity: flipState ? 0.6 : 1
            }}
            aria-label="Next testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE LAYOUT (Single Pocket Journal Card with Top Wire Rings, < 768px)  */}
        {/* ========================================================================= */}
        <div className="d-block d-md-none w-100 mx-auto px-2" style={{ maxWidth: '420px' }}>
          {/* Notebook Card */}
          <div
            className="position-relative rounded-3 overflow-hidden shadow-sm pt-4 pb-4 px-4 text-center"
            style={{
              backgroundColor: '#FFFDF9',
              border: '1px solid #EAE0D5',
              boxShadow: '0 8px 24px rgba(66, 34, 7, 0.07)'
            }}
          >
            {/* Top Spiral Wire Binding Holes & Rings */}
            <div
              className="position-absolute top-0 start-0 w-100 d-flex justify-content-around px-3"
              style={{ transform: 'translateY(-6px)' }}
            >
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <svg key={i} width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <ellipse cx="8" cy="14" rx="3.5" ry="2.5" fill="#4A3425" opacity="0.35" />
                  <path
                    d="M 8 2 C 14 2, 14 14, 8 14 C 2 14, 2 2, 8 2"
                    stroke="#8D6E63"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 7 4 C 11 4, 11 12, 7 12"
                    stroke="#D7CCC8"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                </svg>
              ))}
            </div>

            {/* Decorative Quote Mark */}
            <div
              className="mt-2 mb-2"
              style={{
                fontFamily: "'Beautique Display', serif",
                fontSize: '36px',
                lineHeight: '1',
                color: '#C5A070',
                opacity: 0.6
              }}
            >
              “
            </div>

            {/* Testimonial Quote */}
            <p
              className="mb-4"
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '15px',
                color: '#422207',
                lineHeight: '1.7',
                minHeight: '110px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileTestimonials[mobileIndex].text}
            </p>

            {/* Author signature */}
            <div
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '30px',
                color: '#A44E0E'
              }}
            >
              {mobileTestimonials[mobileIndex].author}
            </div>
          </div>

          {/* Navigation Controls (Below the card so card width is maximized) */}
          <div className="d-flex align-items-center justify-content-between mt-3 px-2">
            {/* Prev Button */}
            <button
              onClick={handleMobilePrev}
              className="btn rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '42px',
                height: '42px',
                border: '1px solid #C5A070',
                color: '#422207',
                backgroundColor: '#FFFDF9',
                boxShadow: '0 2px 8px rgba(66, 34, 7, 0.08)'
              }}
              aria-label="Previous testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="d-flex align-items-center gap-2">
              {mobileTestimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setMobileIndex(idx)}
                  className="p-0 border-0 rounded-circle"
                  style={{
                    width: mobileIndex === idx ? '22px' : '7px',
                    height: '7px',
                    borderRadius: mobileIndex === idx ? '4px' : '50%',
                    backgroundColor: mobileIndex === idx ? '#A44E0E' : '#D5C4B5',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleMobileNext}
              className="btn rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '42px',
                height: '42px',
                border: '1px solid #C5A070',
                color: '#422207',
                backgroundColor: '#FFFDF9',
                boxShadow: '0 2px 8px rgba(66, 34, 7, 0.08)'
              }}
              aria-label="Next testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
