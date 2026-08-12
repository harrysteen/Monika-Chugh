'use client';

export default function EighthSection() {
  return (
    <section id="section-8" className="py-5 overflow-hidden" style={{ backgroundColor: '#FFF8E6', marginTop: '32px' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        
        {/* Section Header + View All Button */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4 mb-md-5 max-w-1400 mx-auto position-relative">
          <div className="mx-auto text-center">
            <h2 
              className="mb-0"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '38px',
                color: '#422207',
                fontWeight: 400,
                lineHeight: '1.1',
                letterSpacing: '0.03em'
              }}
            >
              Pirate ipsum ipsumme
            </h2>
          </div>

          <a 
            href="#view-all" 
            className="btn-figma-outline text-decoration-none px-4 py-2 mt-3 mt-md-0 position-md-absolute end-0"
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
            View All
          </a>
        </div>

        {/* Main Section Content: Left Paragraph + Center Open Book + Right Paragraph */}
        <div className="row align-items-end max-w-1400 mx-auto g-4">
          
          {/* Left Flanking Paragraph (Bottom-Left Aligned) */}
          <div className="col-12 col-lg-3 text-start d-flex flex-column justify-content-end pb-lg-3 order-2 order-lg-1">
            <p 
              className="mb-0 mx-auto mx-lg-0"
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '14px',
                color: '#4A423B',
                lineHeight: '1.65',
                fontWeight: 400,
                maxWidth: '240px'
              }}
            >
              Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying.
            </p>
          </div>

          {/* Center Open Book Display using pristine section_8_book_bg.svg */}
          <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
            <div 
              className="mx-auto" 
              style={{ 
                width: '100%', 
                maxWidth: '680px', 
                aspectRatio: '682 / 428' 
              }}
            >
              {/* Pristine Section 8 Open Book Graphic (contains the photo & text baked-in) */}
              <img 
                src="/images/section_8_book_bg.svg" 
                alt="Section 8 Open Book" 
                className="w-100 h-100 object-fit-contain d-block" 
              />
            </div>
          </div>

          {/* Right Flanking Paragraph (Bottom-Right Aligned) */}
          <div className="col-12 col-lg-3 text-start text-lg-end d-flex flex-column align-items-start align-items-lg-end justify-content-end pb-lg-3 order-3">
            <p 
              className="mb-0 text-start text-lg-start"
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '14px',
                color: '#4A423B',
                lineHeight: '1.65',
                fontWeight: 400,
                maxWidth: '240px'
              }}
            >
              Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
