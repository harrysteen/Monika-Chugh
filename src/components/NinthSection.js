'use client';

import { useState } from 'react';

export default function NinthSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="section-9" className="py-5 overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        
        {/* Top Header Area: Subtitle + Main Title + Description */}
        <div className="text-center max-w-800 mx-auto mb-4">
          <span 
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '32px',
              color: '#A44E0E',
              fontWeight: 400
            }}
          >
            events
          </span>

          <h2 
            className="mb-3"
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

          <p 
            className="mx-auto mb-4"
            style={{
              fontFamily: "'Larken', 'Lora', serif",
              fontSize: '14px',
              color: '#4A423B',
              lineHeight: '1.7',
              maxWidth: '640px',
              fontWeight: 400
            }}
          >
            Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones&apos; fluke.
          </p>

          {/* Navigation Arrows */}
          <div className="d-flex align-items-center justify-content-center gap-3 mb-5">
            <button 
              onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : 2))}
              className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
              style={{
                width: '42px',
                height: '42px',
                border: '1px solid #A44E0E',
                color: '#422207',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease'
              }}
              aria-label="Previous event"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button 
              onClick={() => setActiveSlide((prev) => (prev < 2 ? prev + 1 : 0))}
              className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
              style={{
                width: '42px',
                height: '42px',
                border: '1px solid #A44E0E',
                color: '#422207',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease'
              }}
              aria-label="Next event"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Photo Gallery Collage Grid matching design image exactly */}
        <div className="max-w-1400 mx-auto position-relative">
          <div className="row g-4 align-items-start justify-content-center">
            
            {/* Left Column: Tall Portrait Image + Overlapping Small Image */}
            <div className="col-12 col-md-4 col-lg-4 mb-4 mb-md-0">
              <div className="position-relative mx-auto" style={{ maxWidth: '300px', minHeight: '460px' }}>
                
                {/* Main Tall Image */}
                <div 
                  className="overflow-hidden shadow-sm"
                  style={{ width: '250px', height: '390px' }}
                >
                  <img 
                    src="/images/section_9_img1.svg" 
                    alt="Event portrait" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Overlapping Small Image at Bottom-Right of Tall Image */}
                <div 
                  className="position-absolute overflow-hidden shadow-sm"
                  style={{
                    bottom: '10px',
                    right: '0px',
                    width: '175px',
                    height: '135px',
                    zIndex: 2,
                    border: '4px solid #FFFDF9'
                  }}
                >
                  <img 
                    src="/images/section_9_img2.svg" 
                    alt="Event detail" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

              </div>
            </div>

            {/* Center Column: Big Group Photo + Learn More Button */}
            <div className="col-12 col-md-4 col-lg-4 text-center mb-4 mb-md-0">
              <div className="mx-auto" style={{ maxWidth: '340px' }}>
                <div 
                  className="overflow-hidden shadow-sm mb-4 mx-auto"
                  style={{ width: '100%', height: '420px' }}
                >
                  <img 
                    src="/images/section_9_img3.svg" 
                    alt="Main Event Group" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Learn More Button */}
                <a 
                  href="#learn-more" 
                  className="btn-figma-outline text-decoration-none px-4 py-2 d-inline-block"
                  style={{
                    fontFamily: "'Larken', 'Lora', serif",
                    fontSize: '15px',
                    color: '#422207',
                    border: '1px solid #A44E0E',
                    borderRadius: '2px',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column: 4 Staggered Images exact to image_0 */}
            <div className="col-12 col-md-4 col-lg-4">
              <div className="position-relative mx-auto" style={{ maxWidth: '360px', height: '460px' }}>
                
                {/* Photo 1 (Top Left of Right Cluster) */}
                <div 
                  className="position-absolute overflow-hidden shadow-sm"
                  style={{ top: '0px', left: '0px', width: '140px', height: '110px' }}
                >
                  <img 
                    src="/images/section_9_img2.svg" 
                    alt="Event moment 1" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Photo 2 (Far Top Right - Small) */}
                <div 
                  className="position-absolute overflow-hidden shadow-sm"
                  style={{ top: '60px', right: '20px', width: '75px', height: '65px' }}
                >
                  <img 
                    src="/images/section_9_img2.svg" 
                    alt="Event moment 2" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Photo 3 (Middle Right) */}
                <div 
                  className="position-absolute overflow-hidden shadow-sm"
                  style={{ top: '160px', right: '0px', width: '190px', height: '145px' }}
                >
                  <img 
                    src="/images/section_9_img2.svg" 
                    alt="Event moment 3" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Photo 4 (Bottom Left) */}
                <div 
                  className="position-absolute overflow-hidden shadow-sm"
                  style={{ top: '280px', left: '20px', width: '190px', height: '135px' }}
                >
                  <img 
                    src="/images/section_9_img2.svg" 
                    alt="Event moment 4" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
