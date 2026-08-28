'use client';

export default function PoemsPushcartSection() {
  return (
    <section className="py-5 position-relative" style={{ backgroundColor: '#F6EEDF' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span 
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '34px',
              color: '#A44E0E',
              fontWeight: 400,
              lineHeight: '100%'
            }}
          >
            milestones along the way
          </span>
          <h2 
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '36px',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.2'
            }}
          >
            Pushcart 2024 Nominated Poem
          </h2>
        </div>

        {/* 3-Part Featured Showcase matching Figma */}
        <div className="row align-items-center g-4 g-lg-5 mb-4 justify-content-center">
          
          {/* Left: Motion Blur White Dress Visual */}
          <div className="col-12 col-md-5 col-lg-4 text-center">
            <div 
              className="overflow-hidden rounded-1 mx-auto shadow-sm"
              style={{
                maxWidth: '380px',
                aspectRatio: '4 / 3'
              }}
            >
              <img 
                src="/images/poems/balance_whitedress.jpg" 
                alt="Pushcart Nominated Poem - Balance" 
                className="w-100 h-100 object-cover d-block"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Center: "Balance" Poem Stanza in Italianno */}
          <div className="col-12 col-md-4 col-lg-4 text-center text-md-start ps-md-4">
            <h3 
              className="mb-3"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '32px',
                color: '#422207',
                fontWeight: 400
              }}
            >
              Balance
            </h3>

            <div className="mb-0">
              <p 
                className="mb-0"
                style={{
                  fontFamily: "'Italianno', cursive",
                  fontSize: '26px',
                  color: '#422207',
                  lineHeight: '1.35'
                }}
              >
                an amalgamation<br />
                of tears and joy<br />
                sometimes on the edge<br />
                sometimes in the middle<br />
                sometimes on the top
              </p>
            </div>
          </div>

          {/* Right: "Unchained" Book Cover */}
          <div className="col-12 col-md-3 col-lg-3 text-center">
            <span 
              className="d-block mb-2"
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '14px',
                color: '#62350A',
                fontWeight: 600,
                letterSpacing: '0.04em'
              }}
            >
              Unchained
            </span>
            <div 
              className="mx-auto overflow-hidden rounded-1 shadow-sm"
              style={{
                maxWidth: '140px'
              }}
            >
              <img 
                src="/images/book_cover.png" 
                alt="Unchained - Figments of Tomorrow" 
                className="img-fluid d-block mx-auto"
                style={{ maxHeight: '200px', objectFit: 'contain' }}
              />
            </div>
          </div>

        </div>

        {/* Narrative Paragraph underneath */}
        <div className="mx-auto text-center mt-4 pt-2" style={{ maxWidth: '980px' }}>
          <p 
            className="mb-0"
            style={{
              fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
              fontSize: '15px',
              color: '#4A423B',
              lineHeight: '1.8',
              fontWeight: 300
            }}
          >
            Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones&apos; fluke sails overhaul man jib schooner. Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones&apos;
          </p>
        </div>

      </div>
    </section>
  );
}
