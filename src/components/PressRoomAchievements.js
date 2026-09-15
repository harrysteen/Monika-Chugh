'use client';

import React from 'react';

export default function PressRoomAchievements() {
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
              fontSize: 'clamp(2rem, 3.5vw, 42px)', 
              fontWeight: 400, 
              color: '#422207' 
            }}
          >
            Where My Words Were Heard
          </h2>
        </div>

        {/* Full-width image replacement for Where My Words Were Heard */}
        <div className="w-100 overflow-hidden shadow-sm" style={{ borderRadius: '2px' }}>
          <img 
            src="/images/where_my_words_were_heard.svg" 
            alt="Where My Words Were Heard - Poetic Recognition & Literary Achievements" 
            className="w-100 h-auto d-block" 
            style={{ width: '100%', height: 'auto', minHeight: '220px' }}
          />
        </div>

      </div>
    </section>
  );
}
