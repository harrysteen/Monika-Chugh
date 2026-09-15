'use client';

import React from 'react';

export default function PressRoomQuoteBanner() {
  return (
    <section className="py-4 my-3">
      <div 
        className="w-100 py-4 px-3 text-center" 
        style={{ 
          backgroundColor: '#FFEECB', 
          borderTop: '1px solid #F4DFB6', 
          borderBottom: '1px solid #F4DFB6' 
        }}
      >
        <div className="container px-3">
          <p className="mb-0 text-center d-inline-block">
            <span 
              style={{ 
                fontFamily: "'Splendid 66', 'Courier New', Courier, monospace", 
                fontWeight: 700, 
                fontStyle: 'normal', 
                fontSize: 'clamp(1.4rem, 2.5vw, 32px)', 
                lineHeight: '140%', 
                letterSpacing: '-0.08em', 
                color: '#422207' 
              }}
            >
              “Be affectionately detached to all.”
            </span>
            {' '}
            <span 
              style={{ 
                fontFamily: "'Splendid 66', 'Courier New', Courier, monospace", 
                fontWeight: 700, 
                fontStyle: 'normal', 
                fontSize: 'clamp(1.5rem, 2.8vw, 36px)', 
                lineHeight: '140%', 
                letterSpacing: '-0.08em', 
                color: '#62350A' 
              }}
            >
              ~ Monika
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
