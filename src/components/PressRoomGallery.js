'use client';

import React from 'react';

// Card shapes (aspect ratios) and column widths follow the Figma design
const galleryColumns = [
  [
    { title: 'Who Am I?', label: 'Featured Poetry', image: '/images/gallery_who_am_i_1.webp', aspect: '248 / 328' },
    { title: 'The Silent Soul', label: 'Featured Poetry', image: '/images/press%20room/gallery_the_silent_soul.webp', aspect: '248 / 213' }
  ],
  [
    { title: 'ME', label: 'Featured Poetry', image: '/images/gallery_me.webp', aspect: '310 / 240' },
    { title: 'Balance', label: 'Featured Poetry', image: '/images/gallery_balance_1.webp', aspect: '310 / 233', position: 'center 62%' }
  ],
  [
    { title: 'Unchained', label: 'Featured Poetry', image: '/images/gallery_unchained.webp', aspect: '229 / 240', position: '62% center' },
    { title: 'Nurture You', label: 'Featured Magazine', image: '/images/gallery_nurture_you.webp', aspect: '229 / 302' }
  ]
];

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
              fontSize: 'clamp(21px, 2.2vw, 26px)', 
              fontWeight: 400, 
              color: '#422207' 
            }}
          >
            Where words found their way beyond the page, into the world
          </h2>
        </div>

        {/* 3 columns of different widths; the middle one starts a little lower (as in the design) */}
        <div className="press-gallery mx-auto">
          {galleryColumns.map((column, colIdx) => (
            <div key={colIdx} className={`press-gallery-col ${colIdx === 1 ? 'is-offset' : ''}`}>
              {column.map((item) => (
                <div key={item.title} className="featured-gallery-card">
                  <div className="overflow-hidden" style={{ aspectRatio: item.aspect }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100 h-100 d-block"
                      style={{ objectFit: 'cover', objectPosition: item.position || 'center' }}
                    />
                  </div>
                  <span
                    className="d-block mt-3 mb-1"
                    style={{ fontFamily: "'Larken-Light', 'Larken', serif", fontSize: '13px', color: '#7D736A' }}
                  >
                    {item.label}
                  </span>
                  <div className="d-flex align-items-center justify-content-between">
                    <h3
                      className="mb-0"
                      style={{ fontFamily: "'Larken', 'Beautique Display', serif", fontSize: '17px', fontWeight: 500, color: '#422207' }}
                    >
                      {item.title}
                    </h3>
                    <i className="bi bi-arrow-right" style={{ fontSize: '20px', color: '#62350A', lineHeight: 1 }}></i>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .press-gallery {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          max-width: 1000px;
        }
        .press-gallery-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        @media (min-width: 768px) {
          .press-gallery {
            grid-template-columns: 248fr 310fr 229fr;
            gap: 34px;
            align-items: start;
          }
          .press-gallery-col.is-offset {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}
