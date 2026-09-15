'use client';

import React from 'react';

export default function PressRoomSpotlight() {
  const spotlightItems = [
    {
      id: 1,
      title: 'Book Publication',
      imgUrl: '/images/spotlight_book_publication.png'
    },
    {
      id: 2,
      title: 'Pirate ipsum sloop chandler',
      imgUrl: '/images/spotlight_pirate_ipsum.png'
    },
    {
      id: 3,
      title: 'Podcast',
      imgUrl: '/images/spotlight_podcast.png'
    },
    {
      id: 4,
      title: 'Intreview',
      imgUrl: '/images/spotlight_interview.png'
    }
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
              fontSize: 'clamp(2rem, 3.5vw, 38px)', 
              fontWeight: 400, 
              color: '#422207' 
            }}
          >
            Conversations, Features &amp; Moments Along the Way
          </h2>
        </div>

        {/* 4 Card Columns Side-by-Side */}
        <div className="row g-4 justify-content-center">
          {spotlightItems.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-3">
              <div className="d-flex flex-column h-100">
                {/* Photo Card Frame */}
                <div 
                  className="mb-3 overflow-hidden rounded-2 shadow-sm bg-white p-1" 
                  style={{ width: '100%', height: '380px' }}
                >
                  <img 
                    src={item.imgUrl} 
                    alt={item.title} 
                    className="w-100 h-100 d-block" 
                    style={{ objectFit: 'cover', borderRadius: '2px' }}
                  />
                </div>

                {/* Title Below Image */}
                <h3 
                  className="text-center mb-0" 
                  style={{ 
                    fontFamily: "'Larken-Bold', 'Beautique Display', 'Lora', serif", 
                    fontSize: '18px', 
                    fontWeight: 700, 
                    color: '#422207' 
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
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
    </section>
  );
}
