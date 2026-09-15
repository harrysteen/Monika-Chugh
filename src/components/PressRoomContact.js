'use client';

import React, { useState } from 'react';

export default function PressRoomContact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-4 py-md-5 bg-cream">
      <div className="container px-3 px-md-4 px-xl-5" style={{ maxWidth: '1240px' }}>
        
        {/* Contact Banner Image Replacement */}
        <div className="w-100 overflow-hidden shadow-sm position-relative" style={{ borderRadius: '4px' }}>
          <img 
            src="/images/for_features_interviews_collaborations.png" 
            alt="For Features, Interviews & Collaborations - Press Contact" 
            className="w-100 h-auto d-block" 
            style={{ width: '100%', height: 'auto', minHeight: '220px' }}
          />
        </div>

      </div>
    </section>
  );
}
