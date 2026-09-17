'use client';

export default function NinthSection() {
  return (
    <section id="events" className="py-4 py-md-5 overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-2 px-md-4 px-lg-5">
        
        {/* Section Header: Cursive Tag + 2-Line Header Matching Design Exactly */}
        <div className="text-center max-w-900 mx-auto mb-3 mb-md-4 d-flex flex-column align-items-center">
          <span 
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: 'clamp(28px, 3.8vw, 34px)',
              color: '#A44E0E',
              fontWeight: 400,
              lineHeight: '1.1'
            }}
          >
            events
          </span>

          <h2 
            className="mb-0 text-center"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: 'clamp(22px, 3.1vw, 34px)',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.25',
              letterSpacing: '0.02em',
              maxWidth: '820px'
            }}
          >
            Gatherings, conversations, and experiences<br className="d-none d-md-inline" /> created to connect, reflect, and inspire.
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP COLLAGE CANVAS (>= 768px) - Pixel-perfect match with reference      */}
        {/* ========================================================================= */}
        <div 
          className="events-desktop-canvas mx-auto position-relative"
          style={{
            width: '100%',
            maxWidth: '1160px',
            aspectRatio: '871 / 406'
          }}
        >
          {/* Left Column Top: home_events_1 (Monika holding books) */}
          <div 
            className="position-absolute events-img-box"
            style={{
              left: '5.86%',
              top: '8.13%',
              width: '25.03%',
              height: '60.34%'
            }}
          >
            <img 
              src="/images/home_events_1.png" 
              alt="Monika Chugh holding books" 
              className="w-100 h-100 object-fit-cover d-block" 
            />
          </div>

          {/* Left Column Bottom Left: home_events_2 (Rotary meeting group) */}
          <div 
            className="position-absolute events-img-box"
            style={{
              left: '0%',
              top: '72.66%',
              width: '17.34%',
              height: '27.34%'
            }}
          >
            <img 
              src="/images/home_events_2.png" 
              alt="Community group smiling" 
              className="w-100 h-100 object-fit-cover d-block" 
            />
          </div>

          {/* Left Column Bottom Right: home_events_3 (Monika with attendee in cap) */}
          <div 
            className="position-absolute events-img-box"
            style={{
              left: '19.06%',
              top: '72.66%',
              width: '14.70%',
              height: '27.34%'
            }}
          >
            <img 
              src="/images/home_events_3.png" 
              alt="Monika with event attendee" 
              className="w-100 h-100 object-fit-cover d-block" 
            />
          </div>

          {/* Center Column Focal Photo: home_events_4 (5 women in living room) */}
          <div 
            className="position-absolute events-img-box"
            style={{
              left: '33.30%',
              top: '0%',
              width: '33.41%',
              height: '69.21%'
            }}
          >
            <img 
              src="/images/home_events_4.png" 
              alt="Gathering of 5 women with books" 
              className="w-100 h-100 object-fit-cover d-block" 
            />
          </div>

          {/* Center Column CTA Button: Learn More */}
          <div 
            className="position-absolute d-flex align-items-center justify-content-center"
            style={{
              left: '33.30%',
              top: '74.5%',
              width: '33.41%',
              height: '11%'
            }}
          >
            <a 
              href="#learn-more" 
              className="text-decoration-none px-4 py-2 d-inline-flex align-items-center justify-content-center transition-all events-learn-more-btn"
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: 'clamp(12px, 1.2vw, 14.5px)',
                fontWeight: 400,
                color: '#A44E0E',
                border: '1px solid #A44E0E',
                borderRadius: '2px',
                backgroundColor: 'transparent',
                minWidth: '136px',
                height: '38px',
                transition: 'all 0.3s ease'
              }}
            >
              Learn More
            </a>
          </div>

          {/* Right Column Top Left: home_events_5 (2 women holding Rebirth book) */}
          <div 
            className="position-absolute events-img-box"
            style={{
              left: '68.54%',
              top: '8.13%',
              width: '17.80%',
              height: '42.12%'
            }}
          >
            <img 
              src="/images/home_events_5.png" 
              alt="Rebirth book celebration" 
              className="w-100 h-100 object-fit-cover d-block" 
            />
          </div>

          {/* Right Column Top Right Upper: home_events_6 (Monika with table platters) */}
          <div 
            className="position-absolute events-img-box"
            style={{
              left: '88.06%',
              top: '0.25%',
              width: '11.94%',
              height: '28.33%'
            }}
          >
            <img 
              src="/images/home_events_6.png" 
              alt="Event sanctuary and brass platters" 
              className="w-100 h-100 object-fit-cover d-block" 
            />
          </div>

          {/* Right Column Top Right Lower: home_events_7 (Group of women in living room) */}
          <div 
            className="position-absolute events-img-box"
            style={{
              left: '88.06%',
              top: '32.51%',
              width: '11.94%',
              height: '17.73%'
            }}
          >
            <img 
              src="/images/home_events_7.png" 
              alt="Group of women standing in living room" 
              className="w-100 h-100 object-fit-cover d-block" 
            />
          </div>

          {/* Right Column Bottom Banner: home_events_8 (Presentation workshop group) */}
          <div 
            className="position-absolute events-img-box"
            style={{
              left: '68.54%',
              top: '53.94%',
              width: '31.46%',
              height: '46.06%'
            }}
          >
            <img 
              src="/images/home_events_8.png" 
              alt="Presentation and workshop group" 
              className="w-100 h-100 object-fit-cover d-block" 
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE RESPONSIVE LAYOUT (< 768px)                                        */}
        {/* ========================================================================= */}
        <div className="events-mobile-layout d-md-none flex-column gap-3 mx-auto" style={{ maxWidth: '460px' }}>
          {/* Main Group Photo */}
          <div className="events-img-box w-100" style={{ aspectRatio: '1480 / 1424' }}>
            <img src="/images/home_events_4.png" alt="Gathering of women" className="w-100 h-100 object-fit-cover" />
          </div>

          {/* Monika with books */}
          <div className="events-img-box w-100" style={{ aspectRatio: '1106 / 1248' }}>
            <img src="/images/home_events_1.png" alt="Monika with books" className="w-100 h-100 object-fit-cover" />
          </div>

          {/* 2 Side by Side */}
          <div className="d-flex gap-2">
            <div className="events-img-box flex-grow-1" style={{ width: '50%', aspectRatio: '512 / 376' }}>
              <img src="/images/home_events_2.png" alt="Community group" className="w-100 h-100 object-fit-cover" />
            </div>
            <div className="events-img-box flex-grow-1" style={{ width: '50%', aspectRatio: '648 / 560' }}>
              <img src="/images/home_events_3.png" alt="Monika with attendee" className="w-100 h-100 object-fit-cover" />
            </div>
          </div>

          {/* Rebirth Book & Event Table */}
          <div className="d-flex gap-2">
            <div className="events-img-box flex-grow-1" style={{ width: '50%', aspectRatio: '784 / 864' }}>
              <img src="/images/home_events_5.png" alt="Rebirth celebration" className="w-100 h-100 object-fit-cover" />
            </div>
            <div className="events-img-box flex-grow-1" style={{ width: '50%', aspectRatio: '524 / 580' }}>
              <img src="/images/home_events_6.png" alt="Event setup" className="w-100 h-100 object-fit-cover" />
            </div>
          </div>

          {/* Presentation Group */}
          <div className="events-img-box w-100" style={{ aspectRatio: '1396 / 944' }}>
            <img src="/images/home_events_8.png" alt="Presentation workshop" className="w-100 h-100 object-fit-cover" />
          </div>

          {/* Learn More Button */}
          <div className="text-center pt-2">
            <a 
              href="#learn-more" 
              className="text-decoration-none px-4 py-2 d-inline-flex align-items-center justify-content-center transition-all events-learn-more-btn"
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '14.5px',
                fontWeight: 400,
                color: '#A44E0E',
                border: '1px solid #A44E0E',
                borderRadius: '2px',
                backgroundColor: 'transparent',
                minWidth: '140px',
                transition: 'all 0.3s ease'
              }}
            >
              Learn More
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .events-desktop-canvas {
            display: none !important;
          }
          .events-mobile-layout {
            display: flex !important;
          }
        }

        @media (min-width: 768px) {
          .events-desktop-canvas {
            display: block !important;
          }
          .events-mobile-layout {
            display: none !important;
          }
        }

        .events-img-box {
          overflow: hidden;
          border-radius: 2px;
          background-color: #F8F3EC;
        }

        .events-img-box img {
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .events-img-box:hover img {
          transform: scale(1.02);
        }

        .events-learn-more-btn:hover {
          background-color: #A44E0E !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(164, 78, 14, 0.2);
        }
      `}</style>
    </section>
  );
}
