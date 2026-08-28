'use client';

export default function PoemsHero() {
  return (
    <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '520px', backgroundColor: '#F9F4EC' }}>
      {/* Background with soft blurred art overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url(/images/poems/hero_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.28,
          filter: 'blur(8px)',
          transform: 'scale(1.05)'
        }}
      ></div>

      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto position-relative z-2">
        <div className="row align-items-center g-4 g-lg-5">
          
          {/* Left Column: Poetic Verse in Italianno */}
          <div className="col-12 col-lg-6 text-center text-lg-start pe-lg-4">
            <p 
              className="mb-2"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '34px',
                color: '#62350A',
                lineHeight: '1.4',
                fontWeight: 400
              }}
            >
              Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns s hot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice.
            </p>

            <span 
              className="d-block mt-2"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '30px',
                color: '#A44E0E'
              }}
            >
              ~monikachugh
            </span>
          </div>

          {/* Right Column: Torn Paper Frame Art & Paragraph */}
          <div className="col-12 col-lg-6 text-center text-lg-start ps-lg-4">
            <div className="d-flex flex-column align-items-center align-items-lg-start">
              
              {/* Torn Paper Framed Artwork */}
              <div 
                className="torn-paper-card p-2 mb-4 mx-auto mx-lg-0"
                style={{
                  maxWidth: '320px',
                  aspectRatio: '1 / 1'
                }}
              >
                <img 
                  src="/images/poems/hero_bg.jpg" 
                  alt="Poems & Articles" 
                  className="w-100 h-100 object-cover d-block"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Description Paragraph */}
              <p 
                className="mb-0 text-center text-lg-start"
                style={{
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#4A423B',
                  lineHeight: '1.7',
                  maxWidth: '520px',
                  fontWeight: 300
                }}
              >
                Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones&apos; fluke sails overhaul man jib schooner.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
