'use client';

export default function MyStoryPurpose() {
  return (
    <section className="py-5 bg-cream position-relative" id="story-purpose">
      <div className="container-fluid px-3 px-md-4 px-xl-5" style={{ maxWidth: '1380px' }}>
        
        {/* Background Card with subtle floral watermark */}
        <div 
          className="position-relative overflow-hidden text-center rounded-3 p-4 p-md-5"
          style={{
            backgroundColor: '#FAF5ED',
            backgroundImage: "linear-gradient(rgba(250, 245, 237, 0.85), rgba(250, 245, 237, 0.85)), url('/images/home_section5_bg.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid #EBDBCB'
          }}
        >
          
          <div className="mx-auto py-2 py-md-4" style={{ maxWidth: '1100px' }}>
            
            {/* Header */}
            <div className="mb-4 pb-2">
              <span 
                className="d-block mb-1" 
                style={{ 
                  fontFamily: "'Italianno', cursive", 
                  fontSize: '34px', 
                  color: '#A44E0E',
                  lineHeight: 1.2
                }}
              >
                purpose behind my work
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

            {/* Paragraph 1 */}
            <p 
              className="mb-4" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                fontSize: '15.5px', 
                color: '#4A423B', 
                lineHeight: '1.85',
                fontWeight: 300
              }}
            >
              Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner. Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner.
            </p>

            {/* Paragraph 2 with bold AROGINI */}
            <p 
              className="mb-0" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                fontSize: '15.5px', 
                color: '#4A423B', 
                lineHeight: '1.85',
                fontWeight: 300
              }}
            >
              Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke <strong style={{ fontWeight: 700, color: '#422207' }}>AROGINI</strong> man jib schooner. Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

