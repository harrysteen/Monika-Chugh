'use client';

export default function TenthSection() {
  return (
    <section id="section-10" className="py-5 overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        
        {/* Section Header + View All Button */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4 mb-md-5 max-w-1400 mx-auto position-relative">
          <div className="mx-auto text-center">
            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '32px',
                color: '#A44E0E',
                fontWeight: 400
              }}
            >
              canvas &amp; quotations
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
              Pirate ipsum ipsumme
            </h2>

            <p 
              className="mx-auto mb-0"
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
          </div>

          <a 
            href="#view-all" 
            className="btn-figma-outline text-decoration-none px-4 py-2 mt-3 mt-md-0 position-md-absolute end-0 top-0"
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

        {/* 6-Tile Canvas & Quotations Grid (2 Rows x 3 Columns) */}
        <div className="max-w-1400 mx-auto">
          <div className="row g-0">
            
            {/* Tile 1 (Row 1, Col 1): Gold Lotus Oil Artwork */}
            <div className="col-12 col-md-4">
              <div 
                className="w-100 overflow-hidden" 
                style={{ aspectRatio: '1 / 1', minHeight: '340px' }}
              >
                <img 
                  src="/images/section_10_artwork1.png" 
                  alt="Gold Lotus Artwork" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>

            {/* Tile 2 (Row 1, Col 2): Quotation Box (Warm Gold Yellow) */}
            <div className="col-12 col-md-4">
              <div 
                className="w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 text-center"
                style={{ 
                  backgroundColor: '#F8E8B6',
                  aspectRatio: '1 / 1',
                  minHeight: '340px'
                }}
              >
                {/* Quotation Mark Icon */}
                <div className="mb-3">
                  <span 
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '54px',
                      color: '#62350A',
                      lineHeight: '0.8',
                      display: 'block'
                    }}
                  >
                    “
                  </span>
                </div>

                <p 
                  className="mb-0"
                  style={{
                    fontFamily: "'Larken', 'Lora', serif",
                    fontSize: '15px',
                    color: '#422207',
                    lineHeight: '1.65',
                    fontWeight: 400,
                    maxWidth: '300px'
                  }}
                >
                  Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the.
                </p>
              </div>
            </div>

            {/* Tile 3 (Row 1, Col 3): Colorful Tropical Portrait Artwork */}
            <div className="col-12 col-md-4">
              <div 
                className="w-100 overflow-hidden" 
                style={{ aspectRatio: '1 / 1', minHeight: '340px' }}
              >
                <img 
                  src="/images/section_10_artwork2.png" 
                  alt="Colorful Portrait Artwork" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>

            {/* Tile 4 (Row 2, Col 1): Quotation Box (Soft Beige) */}
            <div className="col-12 col-md-4">
              <div 
                className="w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 text-center"
                style={{ 
                  backgroundColor: '#FFF3DC',
                  aspectRatio: '1 / 1',
                  minHeight: '340px'
                }}
              >
                {/* Quotation Mark Icon */}
                <div className="mb-3">
                  <span 
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '54px',
                      color: '#62350A',
                      lineHeight: '0.8',
                      display: 'block'
                    }}
                  >
                    “
                  </span>
                </div>

                <p 
                  className="mb-0"
                  style={{
                    fontFamily: "'Larken', 'Lora', serif",
                    fontSize: '15px',
                    color: '#422207',
                    lineHeight: '1.65',
                    fontWeight: 400,
                    maxWidth: '300px'
                  }}
                >
                  Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the.
                </p>
              </div>
            </div>

            {/* Tile 5 (Row 2, Col 2): Traditional Kamadhenu Cow Pichwai Artwork */}
            <div className="col-12 col-md-4">
              <div 
                className="w-100 overflow-hidden" 
                style={{ aspectRatio: '1 / 1', minHeight: '340px' }}
              >
                <img 
                  src="/images/section_10_artwork3.png" 
                  alt="Indian Pichwai Artwork" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>

            {/* Tile 6 (Row 2, Col 3): Interior Room Framing Artwork */}
            <div className="col-12 col-md-4">
              <div 
                className="w-100 overflow-hidden" 
                style={{ aspectRatio: '1 / 1', minHeight: '340px' }}
              >
                <img 
                  src="/images/section_10_artwork4.png" 
                  alt="Interior Gallery Room" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
