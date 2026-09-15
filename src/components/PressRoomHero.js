'use client';

import React from 'react';

export default function PressRoomHero() {
  return (
    <section className="py-4 py-md-5 bg-cream">
      <div className="container px-3 px-md-4 px-xl-5" style={{ maxWidth: '1240px' }}>
        
        {/* Top Header Title */}
        <div className="text-center mb-4 mb-md-5">
          <h1 
            className="mb-0 text-center" 
            style={{ 
              fontFamily: "'Splendid 66', 'Courier New', Courier, monospace", 
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: 'clamp(2.5rem, 5vw, 64px)', 
              lineHeight: '140%',
              letterSpacing: '-0.07em',
              textAlign: 'center',
              color: '#422207'
            }}
          >
            The Press Room<span style={{ color: '#62350A', fontWeight: 300, letterSpacing: 'normal' }}>|</span>
          </h1>
          
          {/* Horizontal Divider Line */}
          <div 
            className="w-100 my-4" 
            style={{ 
              height: '1px', 
              backgroundColor: '#C5B5A5', 
              opacity: 0.8 
            }}
          ></div>
        </div>

        {/* Hero SVG Banner Image */}
        <div className="w-100 mb-5 overflow-hidden shadow-sm" style={{ borderRadius: '2px' }}>
          <img 
            src="/images/pressroom_hero_image.svg" 
            alt="The Press Room - Monika Chugh" 
            className="w-100 h-auto d-block" 
            style={{ width: '100%', height: 'auto', minHeight: '220px' }}
          />
        </div>

        {/* Sub-headline (Bold) and Two-Line Introductory Paragraph */}
        <div className="text-center max-w-4xl mx-auto pt-2">
          {/* Bold First Content Heading */}
          <h2 
            className="mb-3 text-center" 
            style={{ 
              fontFamily: "'Larken-Medium', 'Larken-Bold', 'Larken', 'Cormorant Garamond', 'Lora', serif", 
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: '22px', 
              lineHeight: '130%',
              letterSpacing: '0.02em',
              textAlign: 'center',
              color: '#592B08' 
            }}
          >
            Where my words have been noticed, remembered, and celebrated.
          </h2>
          
          {/* Second Content Exactly In Two Lines */}
          <p 
            className="mx-auto text-center mb-0" 
            style={{ 
              fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px', 
              lineHeight: '160%',
              letterSpacing: '0.03em',
              textAlign: 'center',
              color: '#73675C', 
              maxWidth: '920px'
            }}
          >
            Explore the recognitions, nominations, features, and literary moments that have been part of my journey.
            <br />
            A quiet archive of the places my writing has reached.
          </p>
        </div>

        {/* Thin Divider Line below Content: border: 1px solid #5D5D5C */}
        <div 
          className="w-100 mt-4 mt-md-5" 
          style={{ 
            borderTop: '1px solid #5D5D5C',
            width: '100%'
          }}
        ></div>

      </div>
    </section>
  );
}
