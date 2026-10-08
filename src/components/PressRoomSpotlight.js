'use client';

import React from 'react';

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
            Conversations, Features &amp; Moments Along the Way
          </h2>
        </div>

        {/* One row of photos, all the same height; each keeps its own width */}
        <div className="spotlight-row">
          {spotlightItems.map((item) => (
            <figure key={item.id} className="spotlight-item mb-0" style={{ '--ratio': item.ratio }}>
              <img
                src={item.imgUrl}
                alt={item.title}
                className="d-block w-100 h-auto"
              />
              <figcaption
                className="text-center mt-2"
                style={{
                  fontFamily: "'Larken', 'Lora', serif",
                  fontSize: '13px',
                  color: '#422207',
                  lineHeight: 1.3
                }}
              >
                {item.title}
              </figcaption>
            </figure>
          ))}
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
        /* Phones and tablets: swipe through the photos at a fixed height */
        .spotlight-row {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding-bottom: 4px;
        }
        .spotlight-row::-webkit-scrollbar {
          display: none;
        }
        .spotlight-item {
          flex: 0 0 auto;
          width: calc(240px * var(--ratio));
          scroll-snap-align: start;
        }
        /* Desktop: all six fit in one row; widths share the space by each photo's shape,
           which gives every photo the same height */
        @media (min-width: 992px) {
          .spotlight-row {
            overflow: visible;
            gap: 18px;
            align-items: flex-start;
          }
          .spotlight-item {
            flex: var(--ratio) 1 0;
            width: auto;
            min-width: 0;
          }
        }
      `}</style>
    </section>
  );
}
