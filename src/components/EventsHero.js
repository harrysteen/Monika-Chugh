'use client';

export default function EventsHero() {
  // Frame one (top reel): event photos, each shown in its own shape at the reel height
  const frameOneImages = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/images/events/frame1_${i + 1}.webp`,
    alt: `Monika Chugh event moment ${i + 1}`
  }));

  // Frame two (bottom reel)
  const frameTwoImages = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    src: `/images/events/frame2_${i + 1}.webp`,
    alt: `Monika Chugh event gathering ${i + 1}`
  }));

  // Duplicate arrays for seamless infinite marquee scroll (the track moves by half its length)
  const topImagesLoop = [...frameOneImages, ...frameOneImages];
  const bottomImagesLoop = [...frameTwoImages, ...frameTwoImages];



  // Sprocket holes generator across full width
  const sprocketHoles = Array.from({ length: 65 });

  return (
    <section className="position-relative py-4 py-lg-5 overflow-hidden bg-cream">
      <div className="container-fluid px-0 overflow-hidden">
        
        {/* ROW 1: Top Header Text (Left) + Top Moving Reel (Right End of Screen) */}
        <div className="row g-0 align-items-center mb-4 mb-lg-5">
          {/* Left Column: Heading & Description (Padded from left container edge) */}
          <div className="col-12 col-lg-5 ps-3 ps-md-5 ps-xl-5 pe-3 pe-lg-4 py-2 events-hero-intro">
            <h1 
              className="font-beautique mb-3" 
              style={{ color: '#422207', fontSize: '34px', lineHeight: '1.15', fontWeight: 400, WebkitTextStroke: '0.6px currentColor' }}
            >
              Moments that bring us <br />
              <span className="d-inline-block mt-2" style={{ color: '#8B4715', fontSize: '36px', fontWeight: 700, letterSpacing: '0.02em', WebkitTextStroke: '1px currentColor' }}>
                TOGETHER
              </span>
            </h1>
            <p 
              className="font-larken mb-0" 
              style={{ color: '#010101A3', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '480px' }}
            >
              From book launches and poetry readings to workshops and intimate gatherings, each milestone has been a chance to bring words off the page and into shared spaces.
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
                    <div key={`top-reel-${idx}`} className="reel-photo-item reel-photo-natural">
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
                    <div key={`bot-reel-${idx}`} className="reel-photo-item reel-photo-natural">
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
              style={{ color: '#010101A3', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '520px' }}
            >
              What began with writing has grown into conversations, connections, and meaningful exchanges.
              <br />
              Along the way have come creative collaborations, art and product showcases, speaking engagements, and moments of celebration. Each one holds a different story, but together they reflect a journey of creating, sharing, and connecting through words, art, and purpose.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}


