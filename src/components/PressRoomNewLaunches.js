'use client';

import React, { useState } from 'react';

export default function PressRoomNewLaunches() {
  const [notified, setNotified] = useState(false);

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
              fontSize: 'clamp(2rem, 3.5vw, 42px)', 
              fontWeight: 400, 
              color: '#422207' 
            }}
          >
            Pirate ipsum arghhh
          </h2>
        </div>

        {/* 2-Column Side-by-Side Layout with Central Vertical Divider Line */}
        <div className="row g-4 g-lg-5 align-items-center justify-content-center">
          
          {/* Left Book Item (Mindset Mentor) */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4 p-0 bg-transparent">
              
              {/* Book Cover Image - Clean transparent wrapper & exact matching dimensions */}
              <div 
                className="flex-shrink-0 d-flex align-items-center justify-content-center bg-transparent" 
                style={{ width: '230px', height: '310px', maxWidth: '100%' }}
              >
                <img 
                  src="/images/intrudaction_mind.png" 
                  alt="Introducing Mindset Mentor Cover" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain', 
                    display: 'block',
                    background: 'transparent',
                    filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.1))'
                  }}
                />
              </div>

              {/* Book Info Details */}
              <div className="flex-grow-1 text-center text-sm-start pt-1">
                <span 
                  className="d-block text-uppercase mb-1" 
                  style={{ 
                    fontFamily: "'Larken', 'Lora', serif", 
                    fontSize: '12px', 
                    letterSpacing: '0.12em', 
                    color: '#7D736A' 
                  }}
                >
                  THE JOURNAL
                </span>

                <h3 
                  className="mb-1" 
                  style={{ 
                    fontFamily: "'Larken-Bold', 'Larken', 'Cormorant Garamond', serif", 
                    fontSize: '26px', 
                    fontWeight: 700, 
                    color: '#1A1715',
                    lineHeight: '1.2'
                  }}
                >
                  Introducing <br className="d-none d-sm-inline" />Mindset Mentor
                </h3>

                <span 
                  className="d-block fst-italic mb-3" 
                  style={{ 
                    fontFamily: "'Larken', 'Lora', serif", 
                    fontSize: '16px', 
                    color: '#A44E0E' 
                  }}
                >
                  launching soon...
                </span>

                {/* Thin Line Accent */}
                <div 
                  className="mb-3 mx-auto mx-sm-0" 
                  style={{ width: '50px', height: '1px', backgroundColor: '#5D5D5C' }}
                ></div>

                <p 
                  className="mb-4" 
                  style={{ 
                    fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                    fontSize: '14px', 
                    color: '#554C44', 
                    lineHeight: '1.6' 
                  }}
                >
                  Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain.
                </p>

                <button 
                  onClick={() => setNotified(!notified)} 
                  className="btn text-decoration-none px-4 py-2 w-100 w-sm-auto"
                  style={{ 
                    border: '1px solid #A44E0E', 
                    color: '#A44E0E', 
                    backgroundColor: notified ? '#F4EEE5' : 'transparent', 
                    borderRadius: '0px', 
                    fontFamily: "'Larken', serif",
                    fontSize: '14px',
                    minWidth: '160px'
                  }}
                >
                  {notified ? 'Subscribed!' : 'Get Notified'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Book Item (Whispers of the night) */}
          <div className="col-12 col-lg-6 position-relative">
            
            {/* Desktop Vertical Center Line Divider */}
            <div 
              className="d-none d-lg-block position-absolute top-0 bottom-0 start-0" 
              style={{ width: '1px', backgroundColor: '#E2D5C3', transform: 'translateX(-24px)' }}
            ></div>

            <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4 p-0 bg-transparent">
              
              {/* Book Cover Image - Clean transparent wrapper & exact matching dimensions */}
              <div 
                className="flex-shrink-0 d-flex align-items-center justify-content-center bg-transparent" 
                style={{ width: '230px', height: '310px', maxWidth: '100%' }}
              >
                <img 
                  src="/images/wisper_of_the_night.png" 
                  alt="whispers of the night Cover" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain', 
                    display: 'block',
                    background: 'transparent',
                    filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.1))'
                  }}
                />
              </div>

              {/* Book Info Details */}
              <div className="flex-grow-1 text-center text-sm-start pt-1">
                <span 
                  className="d-block text-uppercase mb-1" 
                  style={{ 
                    fontFamily: "'Larken', 'Lora', serif", 
                    fontSize: '12px', 
                    letterSpacing: '0.12em', 
                    color: '#7D736A' 
                  }}
                >
                  THE POEM
                </span>

                <h3 
                  className="mb-1" 
                  style={{ 
                    fontFamily: "'Larken-Bold', 'Larken', 'Cormorant Garamond', serif", 
                    fontSize: '26px', 
                    fontWeight: 700, 
                    color: '#1A1715',
                    lineHeight: '1.2'
                  }}
                >
                  its 12:01 am <br className="d-none d-sm-inline" />whispers of the night
                </h3>

                <span 
                  className="d-block fst-italic mb-3" 
                  style={{ 
                    fontFamily: "'Larken', 'Lora', serif", 
                    fontSize: '16px', 
                    color: '#A44E0E' 
                  }}
                >
                  Reflections
                </span>

                {/* Thin Line Accent */}
                <div 
                  className="mb-3 mx-auto mx-sm-0" 
                  style={{ width: '50px', height: '1px', backgroundColor: '#5D5D5C' }}
                ></div>

                <p 
                  className="mb-4" 
                  style={{ 
                    fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                    fontSize: '14px', 
                    color: '#554C44', 
                    lineHeight: '1.6' 
                  }}
                >
                  Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain.
                </p>

                <a 
                  href="/books" 
                  className="btn text-decoration-none px-4 py-2 w-100 w-sm-auto inline-block"
                  style={{ 
                    border: '1px solid #A44E0E', 
                    color: '#A44E0E', 
                    backgroundColor: 'transparent', 
                    borderRadius: '0px', 
                    fontFamily: "'Larken', serif",
                    fontSize: '14px',
                    minWidth: '160px'
                  }}
                >
                  Explore the book
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
