'use client';

export default function ThirteenthSection() {
  return (
    <section 
      id="section-13" 
      className="position-relative overflow-hidden w-100 section-13-wrapper" 
      style={{ backgroundColor: '#FFFDF9' }}
    >
      {/* Background Watermark Image Pattern */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
        style={{
          backgroundImage: "url('/images/section_13_bg.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.85,
          zIndex: 0
        }}
      />

      {/* ========================================================================= */}
      {/* DESKTOP LAYOUT (Exact Matching 5-Item Design Reference)                   */}
      {/* ========================================================================= */}
      <div className="container-fluid position-relative z-1 d-none d-lg-block">
        <div 
          className="position-relative mx-auto" 
          style={{ width: '1200px', height: '860px' }}
        >
          
          {/* Main Section Header (Centered Top - Prominent Size) */}
          <div 
            className="position-absolute text-center"
            style={{ top: '10px', left: '440px', width: '320px', zIndex: 2 }}
          >
            <span
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '40px',
                color: '#A44E0E',
                fontWeight: 400,
                lineHeight: '1.1'
              }}
            >
              more from monika
            </span>
            <h2
              className="mb-0"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '44px',
                color: '#422207',
                fontWeight: 400,
                lineHeight: '1.1',
                letterSpacing: '0.02em'
              }}
            >
              Pirate ipsum me
            </h2>
          </div>

          {/* 1. Workshops & Events (Top Left) */}
          <div 
            className="position-absolute"
            style={{ top: '70px', left: '110px', width: '225px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '22px',
                    color: '#A44E0E',
                    lineHeight: '1.1',
                    whiteSpace: 'nowrap'
                  }}
                >
                  workshops &amp; events
                </span>
              </div>
              <div 
                style={{ 
                  width: '100%', 
                  height: '1px', 
                  backgroundColor: '#C5A070', 
                  opacity: 0.6 
                }} 
              />
            </div>
            <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
              <img
                src="/images/section_13_workshops.svg"
                alt="workshops & events"
                className="w-100 object-fit-cover d-block"
                style={{ height: '225px' }}
              />
            </div>
          </div>

          {/* 2. Podcasts (Center Top, Vertical Tall Card) */}
          <div 
            className="position-absolute"
            style={{ top: '185px', left: '485px', width: '225px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '22px',
                    color: '#A44E0E',
                    lineHeight: '1.1',
                    whiteSpace: 'nowrap'
                  }}
                >
                  podcasts
                </span>
              </div>
              <div 
                style={{ 
                  width: '100%', 
                  height: '1px', 
                  backgroundColor: '#C5A070', 
                  opacity: 0.6 
                }} 
              />
            </div>
            <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
              <img
                src="/images/section_13_podcasts.svg"
                alt="podcasts"
                className="w-100 object-fit-cover d-block"
                style={{ height: '345px' }}
              />
            </div>
          </div>

          {/* 3. Webinars (Top Right) */}
          <div 
            className="position-absolute"
            style={{ top: '130px', left: '840px', width: '265px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '22px',
                    color: '#A44E0E',
                    lineHeight: '1.1',
                    whiteSpace: 'nowrap'
                  }}
                >
                  webinars
                </span>
              </div>
              <div 
                style={{ 
                  width: '100%', 
                  height: '1px', 
                  backgroundColor: '#C5A070', 
                  opacity: 0.6 
                }} 
              />
            </div>
            <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
              <img
                src="/images/section_13_webinars.svg"
                alt="webinars"
                className="w-100 object-fit-cover d-block"
                style={{ height: '195px' }}
              />
            </div>
          </div>

          {/* 4. Shop (Middle Left) */}
          <div 
            className="position-absolute"
            style={{ top: '440px', left: '80px', width: '260px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '22px',
                    color: '#A44E0E',
                    lineHeight: '1.1',
                    whiteSpace: 'nowrap'
                  }}
                >
                  shop
                </span>
              </div>
              <div 
                style={{ 
                  width: '100%', 
                  height: '1px', 
                  backgroundColor: '#C5A070', 
                  opacity: 0.6 
                }} 
              />
            </div>
            <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
              <img
                src="/images/section_13_shop.svg"
                alt="shop"
                className="w-100 object-fit-cover d-block"
                style={{ height: '195px' }}
              />
            </div>
          </div>

          {/* 5. Youtube (Middle Right Wide Banner) */}
          <div 
            className="position-absolute"
            style={{ top: '560px', left: '680px', width: '380px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '22px',
                    color: '#A44E0E',
                    lineHeight: '1.1',
                    whiteSpace: 'nowrap'
                  }}
                >
                  youtube
                </span>
              </div>
              <div 
                style={{ 
                  width: '100%', 
                  height: '1px', 
                  backgroundColor: '#C5A070', 
                  opacity: 0.6 
                }} 
              />
            </div>
            <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
              <img
                src="/images/section_13_youtube.svg"
                alt="youtube"
                className="w-100 object-fit-cover d-block"
                style={{ height: '220px' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET RESPONSIVE LAYOUT (< 992px)                               */}
      {/* ========================================================================= */}
      <div className="container-fluid px-3 px-sm-4 px-md-4 position-relative z-1 py-5 d-block d-lg-none w-100">
        <div className="max-w-800 mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-4 mb-sm-5">
            <span
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: 'clamp(30px, 6vw, 36px)',
                color: '#A44E0E',
                fontWeight: 400
              }}
            >
              more from monika
            </span>
            <h2
              className="mb-0"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: 'clamp(28px, 5.5vw, 38px)',
                color: '#422207',
                fontWeight: 400,
                lineHeight: '1.15'
              }}
            >
              Pirate ipsum me
            </h2>
          </div>

          {/* Cards Mobile Grid */}
          <div className="row g-4 g-sm-5 justify-content-center">
            
            {/* 1. Workshops & Events */}
            <div className="col-12 col-sm-10 col-md-6">
              <div className="section-13-card-box">
                <div className="w-100 mb-2">
                  <div className="text-end mb-1">
                    <span style={{ fontFamily: "'Italianno', cursive", fontSize: '22px', color: '#A44E0E' }}>
                      workshops &amp; events
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
                </div>
                <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                  <img src="/images/section_13_workshops.svg" alt="workshops & events" className="w-100 object-fit-cover d-block" style={{ height: '220px' }} />
                </div>
              </div>
            </div>

            {/* 2. Podcasts */}
            <div className="col-12 col-sm-10 col-md-6">
              <div className="section-13-card-box">
                <div className="w-100 mb-2">
                  <div className="text-end mb-1">
                    <span style={{ fontFamily: "'Italianno', cursive", fontSize: '22px', color: '#A44E0E' }}>
                      podcasts
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
                </div>
                <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                  <img src="/images/section_13_podcasts.svg" alt="podcasts" className="w-100 object-fit-cover d-block" style={{ height: '260px' }} />
                </div>
              </div>
            </div>

            {/* 3. Webinars */}
            <div className="col-12 col-sm-10 col-md-6">
              <div className="section-13-card-box">
                <div className="w-100 mb-2">
                  <div className="text-end mb-1">
                    <span style={{ fontFamily: "'Italianno', cursive", fontSize: '22px', color: '#A44E0E' }}>
                      webinars
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
                </div>
                <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                  <img src="/images/section_13_webinars.svg" alt="webinars" className="w-100 object-fit-cover d-block" style={{ height: '200px' }} />
                </div>
              </div>
            </div>

            {/* 4. Shop */}
            <div className="col-12 col-sm-10 col-md-6">
              <div className="section-13-card-box">
                <div className="w-100 mb-2">
                  <div className="text-end mb-1">
                    <span style={{ fontFamily: "'Italianno', cursive", fontSize: '22px', color: '#A44E0E' }}>
                      shop
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
                </div>
                <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                  <img src="/images/section_13_shop.svg" alt="shop" className="w-100 object-fit-cover d-block" style={{ height: '200px' }} />
                </div>
              </div>
            </div>

            {/* 5. Youtube */}
            <div className="col-12 col-sm-10 col-md-6">
              <div className="section-13-card-box">
                <div className="w-100 mb-2">
                  <div className="text-end mb-1">
                    <span style={{ fontFamily: "'Italianno', cursive", fontSize: '22px', color: '#A44E0E' }}>
                      youtube
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
                </div>
                <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                  <img src="/images/section_13_youtube.svg" alt="youtube" className="w-100 object-fit-cover d-block" style={{ height: '220px' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .section-13-wrapper {
          min-height: auto;
          height: auto;
        }
        @media (min-width: 992px) {
          .section-13-wrapper {
            min-height: 920px;
            height: 920px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .section-13-card-box {
          max-width: 380px;
          width: 100%;
          margin: 0 auto;
        }
      `}</style>

    </section>
  );
}
