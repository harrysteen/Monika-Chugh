'use client';

import React from 'react';

export default function PressRoomGallery() {
  return (
    <section className="py-5 bg-cream position-relative">
      <div className="container-fluid px-3 px-md-4 px-xl-5" style={{ maxWidth: '1440px' }}>
        
        {/* Section Tag & Heading */}
        <div className="text-center mb-5">
          <span 
            className="d-block mb-1" 
            style={{ 
              fontFamily: "'Italianno', cursive", 
              fontSize: '34px', 
              color: '#A44E0E' 
            }}
          >
            featured &amp; published
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

        {/* 4-Column Grid Layout matching design screenshot */}
        <div className="row g-4 align-items-start">
          
          {/* Column 1 */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column gap-4">
            
            {/* Card 1: Who Am I? (Tall) */}
            <div>
              <div className="mb-2 overflow-hidden" style={{ width: '100%', height: '440px' }}>
                <img 
                  src="/images/gallery_who_am_i_1.png" 
                  alt="Who Am I?" 
                  className="w-100 h-100 d-block" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="pt-1">
                <span className="d-block text-muted mb-1" style={{ fontFamily: "'Larken-Light', serif", fontSize: '13px', color: '#7D736A' }}>
                  Featured Poetry
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="mb-0" style={{ fontFamily: "'Larken-Bold', 'Beautique Display', serif", fontSize: '18px', fontWeight: 700, color: '#422207' }}>
                    Who Am I?
                  </h3>
                  <span style={{ fontSize: '20px', color: '#62350A', lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>

            {/* Card 2: Who Am I? (Wide) */}
            <div>
              <div className="mb-2 overflow-hidden" style={{ width: '100%', height: '170px' }}>
                <img 
                  src="/images/gallery_who_am_i_2.png" 
                  alt="Who Am I?" 
                  className="w-100 h-100 d-block" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="pt-1">
                <span className="d-block text-muted mb-1" style={{ fontFamily: "'Larken-Light', serif", fontSize: '13px', color: '#7D736A' }}>
                  Featured Poetry
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="mb-0" style={{ fontFamily: "'Larken-Bold', 'Beautique Display', serif", fontSize: '18px', fontWeight: 700, color: '#422207' }}>
                    Who Am I?
                  </h3>
                  <span style={{ fontSize: '20px', color: '#62350A', lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column gap-4">
            
            {/* Card 1: ME (Horizontal) */}
            <div>
              <div className="mb-2 overflow-hidden" style={{ width: '100%', height: '220px' }}>
                <img 
                  src="/images/gallery_me.png" 
                  alt="ME" 
                  className="w-100 h-100 d-block" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="pt-1">
                <span className="d-block text-muted mb-1" style={{ fontFamily: "'Larken-Light', serif", fontSize: '13px', color: '#7D736A' }}>
                  Featured Poetry
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="mb-0" style={{ fontFamily: "'Larken-Bold', 'Beautique Display', serif", fontSize: '18px', fontWeight: 700, color: '#422207' }}>
                    ME
                  </h3>
                  <span style={{ fontSize: '20px', color: '#62350A', lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>

            {/* Card 2: The Silent Soul (Tall Forest) */}
            <div>
              <div className="mb-2 overflow-hidden" style={{ width: '100%', height: '390px' }}>
                <img 
                  src="/images/gallery_the_silent_soul.png" 
                  alt="The Silent Soul" 
                  className="w-100 h-100 d-block" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="pt-1">
                <span className="d-block text-muted mb-1" style={{ fontFamily: "'Larken-Light', serif", fontSize: '13px', color: '#7D736A' }}>
                  Featured Poetry
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="mb-0" style={{ fontFamily: "'Larken-Bold', 'Beautique Display', serif", fontSize: '18px', fontWeight: 700, color: '#422207' }}>
                    The Silent Soul
                  </h3>
                  <span style={{ fontSize: '20px', color: '#62350A', lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>

          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column gap-4">
            
            {/* Card 1: Balance (Tall Frozen Bubble) */}
            <div>
              <div className="mb-2 overflow-hidden" style={{ width: '100%', height: '420px' }}>
                <img 
                  src="/images/gallery_balance_1.png" 
                  alt="Balance" 
                  className="w-100 h-100 d-block" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="pt-1">
                <span className="d-block text-muted mb-1" style={{ fontFamily: "'Larken-Light', serif", fontSize: '13px', color: '#7D736A' }}>
                  Featured Poetry
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="mb-0" style={{ fontFamily: "'Larken-Bold', 'Beautique Display', serif", fontSize: '18px', fontWeight: 700, color: '#422207' }}>
                    Balance
                  </h3>
                  <span style={{ fontSize: '20px', color: '#62350A', lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>

            {/* Card 2: Balance (Horizontal Dandelion Macro) */}
            <div>
              <div className="mb-2 overflow-hidden" style={{ width: '100%', height: '190px' }}>
                <img 
                  src="/images/gallery_balance_1.png" 
                  alt="Balance" 
                  className="w-100 h-100 d-block" 
                  style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
                />
              </div>
              <div className="pt-1">
                <span className="d-block text-muted mb-1" style={{ fontFamily: "'Larken-Light', serif", fontSize: '13px', color: '#7D736A' }}>
                  Featured Poetry
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="mb-0" style={{ fontFamily: "'Larken-Bold', 'Beautique Display', serif", fontSize: '18px', fontWeight: 700, color: '#422207' }}>
                    Balance
                  </h3>
                  <span style={{ fontSize: '20px', color: '#62350A', lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>

          </div>

          {/* Column 4 */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column gap-4">
            
            {/* Card 1: Unchained (Tall Chain Links) */}
            <div>
              <div className="mb-2 overflow-hidden" style={{ width: '100%', height: '330px' }}>
                <img 
                  src="/images/gallery_unchained.png" 
                  alt="Unchained" 
                  className="w-100 h-100 d-block" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="pt-1">
                <span className="d-block text-muted mb-1" style={{ fontFamily: "'Larken-Light', serif", fontSize: '13px', color: '#7D736A' }}>
                  Featured Poetry
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="mb-0" style={{ fontFamily: "'Larken-Bold', 'Beautique Display', serif", fontSize: '18px', fontWeight: 700, color: '#422207' }}>
                    Unchained
                  </h3>
                  <span style={{ fontSize: '20px', color: '#62350A', lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>

            {/* Card 2: Nurture You (Magazine Cover) */}
            <div>
              <div className="mb-2 overflow-hidden" style={{ width: '100%', height: '280px' }}>
                <img 
                  src="/images/gallery_nurture_you.png" 
                  alt="Nurture You Magazine" 
                  className="w-100 h-100 d-block" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="pt-1">
                <span className="d-block text-muted mb-1" style={{ fontFamily: "'Larken-Light', serif", fontSize: '13px', color: '#7D736A' }}>
                  Featured Magazine
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="mb-0" style={{ fontFamily: "'Larken-Bold', 'Beautique Display', serif", fontSize: '18px', fontWeight: 700, color: '#422207' }}>
                    Nurture You
                  </h3>
                  <span style={{ fontSize: '20px', color: '#62350A', lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
