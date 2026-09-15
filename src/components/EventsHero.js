'use client';

export default function EventsHero() {
  return (
    <section className="position-relative py-5 overflow-hidden bg-cream">
      <div className="container-fluid px-3 px-xl-5">
        
        {/* Top Header Title & Copy */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <h1 className="display-4 font-beautique text-dark fw-normal mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', color: '#422207' }}>
            Moments that bring us <span style={{ color: '#A44E0E' }}>TOGETHER</span>
          </h1>
          <p className="font-larken text-muted fs-5 mx-auto" style={{ maxWidth: '780px', color: '#62350A', lineHeight: '1.7' }}>
            A collection of book launches, creative gatherings and soulful experiences where words, art and meaningful conversations come alive.
          </p>
        </div>

        {/* Dual Filmstrip Staggered Reel Grid */}
        <div className="row g-4 align-items-center justify-content-center pt-2 pb-4">
          
          {/* Left Reel Column */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="filmstrip-reel">
              {/* Top Sprocket Holes */}
              <div className="sprocket-hole-row mb-2">
                {[...Array(9)].map((_, i) => (
                  <div key={`left-top-sprocket-${i}`} className="sprocket-hole"></div>
                ))}
              </div>

              {/* Photo Content */}
              <div className="filmstrip-photo position-relative">
                <div className="camera-meta-header">
                  <span>MONIKACHUGH</span>
                  <span>► 01 BOOKLAUNCH</span>
                </div>
                <img 
                  src="/images/home section 10 row1 img1.png" 
                  alt="Monika Chugh Event Gathering" 
                  style={{ height: '360px', width: '100%', objectFit: 'cover' }}
                />
                <div className="camera-timestamp-badge">
                  03.23.2025 11:04:20
                </div>
              </div>

              {/* Bottom Sprocket Holes */}
              <div className="sprocket-hole-row mt-2">
                {[...Array(9)].map((_, i) => (
                  <div key={`left-bot-sprocket-${i}`} className="sprocket-hole"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Reel Column (Offset/Staggered) */}
          <div className="col-12 col-md-6 col-lg-5 mt-4 mt-md-0">
            <div className="filmstrip-reel" style={{ transform: 'translateY(12px)' }}>
              {/* Top Sprocket Holes */}
              <div className="sprocket-hole-row mb-2">
                {[...Array(9)].map((_, i) => (
                  <div key={`right-top-sprocket-${i}`} className="sprocket-hole"></div>
                ))}
              </div>

              {/* Photo Content */}
              <div className="filmstrip-photo position-relative">
                <div className="camera-meta-header">
                  <span>MONIKACHUGH</span>
                  <span>► 02 THOUGHTSINACUP</span>
                </div>
                <img 
                  src="/images/home section 10 row1 img2.png" 
                  alt="Quote Cafe Celebration" 
                  style={{ height: '360px', width: '100%', objectFit: 'cover' }}
                />
                <div className="camera-timestamp-badge">
                  03.23.2025 12:18:45
                </div>
              </div>

              {/* Bottom Sprocket Holes */}
              <div className="sprocket-hole-row mt-2">
                {[...Array(9)].map((_, i) => (
                  <div key={`right-bot-sprocket-${i}`} className="sprocket-hole"></div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
