'use client';

export default function EventsHero() {
  // Exclusively use the 4 user-provided event images
  const fourImages = [
    { id: 1, src: '/images/events/events page image fremeimg1.svg', alt: 'Monika Chugh Event 1' },
    { id: 2, src: '/images/events/events page image fremeimg2.svg', alt: 'Monika Chugh Event 2' },
    { id: 3, src: '/images/events/event page image fremeingimg3.svg', alt: 'Monika Chugh Event 3' },
    { id: 4, src: '/images/events/event page image fremeingimg4.svg', alt: 'Monika Chugh Event 4' },
  ];

  const bottomFourImages = [fourImages[2], fourImages[3], fourImages[0], fourImages[1]];

  // Duplicate arrays for seamless infinite marquee scroll
  const topImagesLoop = [...fourImages, ...fourImages, ...fourImages, ...fourImages];
  const bottomImagesLoop = [...bottomFourImages, ...bottomFourImages, ...bottomFourImages, ...bottomFourImages];



  // Sprocket holes generator across full width
  const sprocketHoles = Array.from({ length: 65 });

  return (
    <section className="position-relative py-4 py-lg-5 overflow-hidden bg-cream">
      <div className="container-fluid px-0 overflow-hidden">
        
        {/* ROW 1: Top Header Text (Left) + Top Moving Reel (Right End of Screen) */}
        <div className="row g-0 align-items-center mb-4 mb-lg-5">
          {/* Left Column: Heading & Description (Padded from left container edge) */}
          <div className="col-12 col-lg-5 ps-3 ps-md-5 ps-xl-5 pe-3 pe-lg-4 py-2">
            <h1 
              className="font-beautique mb-3" 
              style={{ color: '#422207', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', lineHeight: '1.15', fontWeight: 400 }}
            >
              Moments that bring us <br />
              <span style={{ color: '#A44E0E', fontWeight: 700, letterSpacing: '0.02em' }}>
                TOGETHER
              </span>
            </h1>
            <p 
              className="font-larken mb-0" 
              style={{ color: '#62350A', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '480px' }}
            >
              A collection of book launches, creative gatherings and soulful experiences where words, art and meaningful conversations come
            </p>
          </div>

          {/* Right Column: Top Moving Filmstrip Reel (Extends flush to Right End of Screen) */}
          <div className="col-12 col-lg-7 pe-0">
            <div className="golden-filmstrip-reel reel-right-bleed">
              {/* Top Sprocket Holes */}
              <div className="sprocket-holes-strip">
                {sprocketHoles.map((_, i) => (
                  <div key={`top-sprocket-top-${i}`} className="sprocket-hole-square" />
                ))}
              </div>

              {/* Scrolling Photo Track */}
              <div className="reel-track-wrapper">
                <div className="reel-track-inner reel-track-scroll-left">
                  {topImagesLoop.map((img, idx) => (
                    <div key={`top-reel-${idx}`} className="reel-photo-item">
                      <img src={img.src} alt={img.alt} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Sprocket Holes */}
              <div className="sprocket-holes-strip">
                {sprocketHoles.map((_, i) => (
                  <div key={`top-sprocket-bot-${i}`} className="sprocket-hole-square" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Bottom Moving Filmstrip Reel (Left End of Screen) + Paragraph Copy (Right) */}
        <div className="row g-0 align-items-center">
          {/* Left Column: Bottom Moving Filmstrip Reel (Extends flush to Left End of Screen) */}
          <div className="col-12 col-lg-7 ps-0 order-2 order-lg-1">
            <div className="golden-filmstrip-reel reel-left-bleed">
              {/* Top Sprocket Holes */}
              <div className="sprocket-holes-strip">
                {sprocketHoles.map((_, i) => (
                  <div key={`bot-sprocket-top-${i}`} className="sprocket-hole-square" />
                ))}
              </div>

              {/* Scrolling Photo Track */}
              <div className="reel-track-wrapper">
                <div className="reel-track-inner reel-track-scroll-right">
                  {bottomImagesLoop.map((img, idx) => (
                    <div key={`bot-reel-${idx}`} className="reel-photo-item">
                      <img src={img.src} alt={img.alt} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Sprocket Holes */}
              <div className="sprocket-holes-strip">
                {sprocketHoles.map((_, i) => (
                  <div key={`bot-sprocket-bot-${i}`} className="sprocket-hole-square" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Paragraph Copy (Padded from right container edge) */}
          <div className="col-12 col-lg-5 order-1 order-lg-2 pe-3 pe-md-5 pe-xl-5 ps-3 ps-lg-5 py-2">
            <p 
              className="font-larken mb-0" 
              style={{ color: '#62350A', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '520px' }}
            >
              A collection of book launches, creative gatherings and soulful experiences where words, art and meaningful conversations come A collection of book launches, creative gatherings and soulful experiences where words, art and meaningful conversations come
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}


