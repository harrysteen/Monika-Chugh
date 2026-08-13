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

  // Base background page content during flip
  const displayLeft = flipState === 'prev' ? testimonials[prevIndex].left : current.left;
  const displayRight = flipState === 'next' ? testimonials[nextIndex].right : current.right;

  return (
    <section
      id="section-14"
      className="position-relative py-5 overflow-hidden w-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: '#FDF4EB', minHeight: '650px' }}
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
      <div className="container-fluid px-3 px-md-4 position-relative z-1 py-4">

        {/* Section Header */}
        <div className="text-center max-w-800 mx-auto mb-4 mb-md-5">
          <span
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '32px',
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
              fontSize: '38px',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.1',
              letterSpacing: '0.03em'
            }}
          >
            Pirate ipsum me
          </h2>
        </div>

        {/* Book Container Wrapper with Navigation Buttons */}
        <div className="d-flex align-items-center justify-content-center gap-3 gap-md-4 max-w-1100 mx-auto book-wrapper">

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

      </div>
    </section>
  );
}
