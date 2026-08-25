'use client';

export default function MyStoryAbout() {
  return (
    <section className="py-5 bg-cream position-relative" id="story-about">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1380px' }}>
        
        {/* Section Header */}
        <div className="mb-5 pb-2">
          <span 
            className="d-block mb-1" 
            style={{ 
              fontFamily: "'Italianno', cursive", 
              fontSize: '34px', 
              color: '#A44E0E',
              lineHeight: 1.2
            }}
          >
            a little about me
          </span>
          <h2 
            className="fw-normal" 
            style={{ 
              fontFamily: "'Beautique Display', 'BeautiqueDisplay-Regular', 'Cormorant Garamond', 'Playfair Display', serif", 
              fontSize: '40px',
              color: '#422207',
              letterSpacing: '0.01em',
              lineHeight: 1.25
            }}
          >
            Pirate ipsum me main blimey fluke
          </h2>
        </div>

        {/* 2-Column Content with Botanical Illustration in Center */}
        <div className="row align-items-center justify-content-between g-4 text-start">
          
          {/* Column 1 */}
          <div className="col-lg-5">
            <p 
              className="mb-0" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif", 
                fontSize: '15.5px', 
                color: '#4A423B', 
                lineHeight: '1.85',
                fontWeight: 300
              }}
            >
              Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner.
            </p>
          </div>

          {/* Center Line Illustration (Botanical Flower SVG) */}
          <div className="col-lg-2 text-center py-3 py-lg-0 d-flex justify-content-center align-items-center">
            <img 
              src="/images/mystory/my_story_second_section_icon.svg" 
              alt="Botanical ornament"
              style={{ 
                width: '45px', 
                height: '89px',
                display: 'inline-block'
              }}
            />
          </div>

          {/* Column 2 */}
          <div className="col-lg-5">
            <p 
              className="mb-0" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif", 
                fontSize: '15.5px', 
                color: '#4A423B', 
                lineHeight: '1.85',
                fontWeight: 300
              }}
            >
              Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

