'use client';

export default function Hero() {
  return (
    <section id="hero" className="position-relative bg-cream overflow-hidden border-bottom border-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-center">
          
          {/* Left Column: Lotus Icon & Mixed Typography Headline */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center py-5 px-4 px-md-5 text-center">
            
            {/* Lotus Emblem with Side Divider Lines (home_hero_icon.svg) */}
            <div className="mb-4 d-flex justify-content-center align-items-center">
              <img 
                src="/images/home_hero_icon.svg" 
                alt="Lotus Emblem" 
                style={{ width: '211px', height: '21px' }}
              />
            </div>

            {/* Headline with Exact 32px Font Size and Colors #422207 and #A44E0E */}
            <h1 
              className="hero-figma-headline mx-auto mb-0" 
              style={{ 
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '32px', 
                color: '#422207',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0.04em',
                textAlign: 'center',
                maxWidth: '580px'
              }}
            >
              Pirate <span className="script-inline" style={{ color: '#A44E0E', fontSize: '32px', fontFamily: "'Italianno', cursive", fontWeight: 400 }}>ipsum arrgh</span> bounty warp clipper <span className="script-inline" style={{ color: '#A44E0E', fontSize: '32px', fontFamily: "'Italianno', cursive", fontWeight: 400 }}>fer bounty</span> warp plate log chandler keelhaul.
            </h1>

          </div>

          {/* Right Column: Hero Portrait Image (Fixed position, reduced maxHeight) */}
          <div className="col-12 col-lg-6 p-0 m-0">
            <div className="w-100 h-100 overflow-hidden text-start">
              <img 
                src="/images/home_hero_image.svg" 
                alt="Monika Chugh sitting in armchair writing in journal" 
                className="w-100 h-100 d-block ms-0"
                style={{ minHeight: '480px', maxHeight: '620px', objectFit: 'cover', objectPosition: 'left center' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
