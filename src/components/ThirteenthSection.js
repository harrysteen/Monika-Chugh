'use client';

export default function ThirteenthSection() {
  return (
    <section 
      id="section-13" 
      className="position-relative overflow-hidden w-100 d-flex align-items-center justify-content-center" 
      style={{ backgroundColor: '#FFFDF9', minHeight: '1207px', height: '1207px' }}
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
      {/* DESKTOP LAYOUT (Exact Matching image_0.png Reference)                       */}
      {/* ========================================================================= */}
      <div className="container-fluid position-relative z-1 d-none d-lg-block">
        <div 
          className="position-relative mx-auto" 
          style={{ width: '1140px', height: '1080px' }}
        >
          
          {/* Main Section Header (Centered Top) */}
          <div 
            className="position-absolute text-center"
            style={{ top: '10px', left: '430px', width: '280px', zIndex: 2 }}
          >
            <span
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '32px',
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
                fontSize: '38px',
                color: '#422207',
                fontWeight: 400,
                lineHeight: '1.1',
                letterSpacing: '0.03em'
              }}
            >
              Pirate ipsum me
            </h2>
          </div>

          {/* 1. Workshops & Events (Top Left) */}
          <div 
            className="position-absolute"
            style={{ top: '60px', left: '40px', width: '215px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
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
                style={{ height: '215px' }}
              />
            </div>
          </div>

          {/* 2. Podcasts (Center Top, Vertical Tall Card) */}
          <div 
            className="position-absolute"
            style={{ top: '170px', left: '440px', width: '205px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
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
                style={{ height: '340px' }}
              />
            </div>
          </div>

          {/* 3. Webinars (Top Right) */}
          <div 
            className="position-absolute"
            style={{ top: '220px', left: '770px', width: '255px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
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
                style={{ height: '190px' }}
              />
            </div>
          </div>

          {/* 4. Shop (Middle Left) */}
          <div 
            className="position-absolute"
            style={{ top: '450px', left: '0px', width: '255px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
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
                style={{ height: '190px' }}
              />
            </div>
          </div>

          {/* 5. Youtube (Middle Right Wide Banner) */}
          <div 
            className="position-absolute"
            style={{ top: '590px', left: '590px', width: '380px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
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

          {/* 6. Founder (Bottom Center-Left) */}
          <div 
            className="position-absolute"
            style={{ top: '740px', left: '230px', width: '185px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
                    color: '#A44E0E',
                    lineHeight: '1.1',
                    whiteSpace: 'nowrap'
                  }}
                >
                  founder
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
                alt="founder"
                className="w-100 object-fit-cover d-block"
                style={{ height: '155px' }}
              />
            </div>
          </div>

          {/* 7. Substack (Bottom Right) */}
          <div 
            className="position-absolute"
            style={{ top: '890px', left: '470px', width: '255px' }}
          >
            <div className="w-100 mb-2">
              <div className="text-end mb-1">
                <span
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
                    color: '#A44E0E',
                    lineHeight: '1.1',
                    whiteSpace: 'nowrap'
                  }}
                >
                  substack
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
                alt="substack"
                className="w-100 object-fit-cover d-block"
                style={{ height: '140px' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET RESPONSIVE LAYOUT (< 992px)                               */}
      {/* ========================================================================= */}
      <div className="container-fluid px-3 px-md-4 position-relative z-1 py-4 d-block d-lg-none w-100">
        <div className="max-w-800 mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-5">
            <span
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '32px',
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
                fontSize: '34px',
                color: '#422207',
                fontWeight: 400,
                lineHeight: '1.1'
              }}
            >
              Pirate ipsum me
            </h2>
          </div>

          {/* Cards Mobile Grid */}
          <div className="row g-5 justify-content-center">
            
            {/* Workshops */}
            <div className="col-12 col-md-6">
              <div className="w-100 mb-2">
                <div className="text-end mb-1">
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '26px', color: '#A44E0E' }}>
                    workshops &amp; events
                  </span>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
              </div>
              <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                <img src="/images/section_13_workshops.svg" alt="workshops & events" className="w-100 object-fit-cover" style={{ height: '220px' }} />
              </div>
            </div>

            {/* Podcasts */}
            <div className="col-12 col-md-6">
              <div className="w-100 mb-2">
                <div className="text-end mb-1">
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '26px', color: '#A44E0E' }}>
                    podcasts
                  </span>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
              </div>
              <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                <img src="/images/section_13_podcasts.svg" alt="podcasts" className="w-100 object-fit-cover" style={{ height: '280px' }} />
              </div>
            </div>

            {/* Webinars */}
            <div className="col-12 col-md-6">
              <div className="w-100 mb-2">
                <div className="text-end mb-1">
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '26px', color: '#A44E0E' }}>
                    webinars
                  </span>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
              </div>
              <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                <img src="/images/section_13_webinars.svg" alt="webinars" className="w-100 object-fit-cover" style={{ height: '200px' }} />
              </div>
            </div>

            {/* Shop */}
            <div className="col-12 col-md-6">
              <div className="w-100 mb-2">
                <div className="text-end mb-1">
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '26px', color: '#A44E0E' }}>
                    shop
                  </span>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
              </div>
              <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                <img src="/images/section_13_shop.svg" alt="shop" className="w-100 object-fit-cover" style={{ height: '200px' }} />
              </div>
            </div>

            {/* Youtube */}
            <div className="col-12">
              <div className="w-100 mb-2">
                <div className="text-end mb-1">
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '26px', color: '#A44E0E' }}>
                    youtube
                  </span>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
              </div>
              <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                <img src="/images/section_13_youtube.svg" alt="youtube" className="w-100 object-fit-cover" style={{ height: '220px' }} />
              </div>
            </div>

            {/* Founder */}
            <div className="col-12 col-md-6">
              <div className="w-100 mb-2">
                <div className="text-end mb-1">
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '26px', color: '#A44E0E' }}>
                    founder
                  </span>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
              </div>
              <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                <img src="/images/section_13_shop.svg" alt="founder" className="w-100 object-fit-cover" style={{ height: '180px' }} />
              </div>
            </div>

            {/* Substack */}
            <div className="col-12 col-md-6">
              <div className="w-100 mb-2">
                <div className="text-end mb-1">
                  <span style={{ fontFamily: "'Italianno', cursive", fontSize: '26px', color: '#A44E0E' }}>
                    substack
                  </span>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#C5A070', opacity: 0.6 }} />
              </div>
              <div className="overflow-hidden shadow-sm rounded-1 border border-cream">
                <img src="/images/section_13_shop.svg" alt="substack" className="w-100 object-fit-cover" style={{ height: '180px' }} />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
