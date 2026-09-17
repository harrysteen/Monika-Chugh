'use client';

export default function Hero() {
  return (
    <section id="hero" className="position-relative bg-cream overflow-hidden border-bottom border-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-xl-5">
        <div className="row align-items-center gy-4 gy-lg-0">
          
          {/* Left Column: Lotus Icon & Mixed Typography Headline */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center py-4 py-lg-5 px-3 px-md-4 text-center">
            
            {/* Lotus Emblem with Side Divider Lines (home_hero_icon.svg) */}
            <div className="mb-4 d-flex justify-content-center align-items-center">
              <img 
                src="/images/home_hero_icon.svg" 
                alt="Lotus Emblem" 
                style={{ width: '211px', height: '21px' }}
              />
            </div>

            {/* Headline with Exact 26px Font Size, 104% Line-height, and Color Overrides */}
            <h1 
              className="hero-figma-headline mx-auto mb-0" 
              style={{ 
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '26px', 
                color: '#422207',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '1.08',
                letterSpacing: '0%',
                textAlign: 'center',
                maxWidth: '460px'
              }}
            >
              Hi, I’m Monika. A fellow<br />
              traveler. <span className="hero-italic-accent" style={{ fontSize: '26px', fontStyle: 'italic', color: '#A44E0E' }}>Learning to slow</span><br />
              <span className="hero-italic-accent" style={{ fontSize: '26px', fontStyle: 'italic', color: '#A44E0E' }}>down and live</span> with intention.<br />
              Sharing a little of what I know.<br />
              What I’ve lived. What I’ve<br />
              questioned. What I’m still<br />
              figuring out. Just an <span className="hero-italic-accent" style={{ fontSize: '26px', fontStyle: 'italic', color: '#A44E0E' }}>honest</span><br />
              <span className="hero-italic-accent" style={{ fontSize: '26px', fontStyle: 'italic', color: '#A44E0E' }}>walk</span> and I wouldn&apos;t have it<br />
              any other way.
            </h1>

          </div>

          {/* Right Column: Hero Portrait Image with bottom and left spacing */}
          <div className="col-12 col-lg-6 ps-lg-4 pe-lg-3 pt-2 pt-lg-3 pb-4 pb-lg-5">
            <div className="w-100 overflow-hidden text-start">
              <img 
                src="/images/home_hero_image_version_0.1.svg" 
                alt="Monika Chugh sitting in armchair writing in journal" 
                className="w-100 d-block"
                style={{ 
                  maxHeight: '560px', 
                  objectFit: 'cover', 
                  objectPosition: 'left center' 
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
