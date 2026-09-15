'use client';

// Helper component for black camera film frames matching screenshot
function CameraFrame({ 
  src, 
  frameNum = '22', 
  tag = 'BOOKLAUNCH', 
  timestamp = '03.23.2025 11:04:20', 
  height = '210px', 
  className = '' 
}) {
  return (
    <div 
      className={`bg-black text-white p-2 rounded-1 position-relative ${className}`}
      style={{ 
        boxShadow: '0 10px 25px rgba(0,0,0,0.35)',
        border: '1px solid #1a1a1a'
      }}
    >
      {/* Top Header */}
      <div className="d-flex justify-content-between align-items-center mb-1 px-1" style={{ fontFamily: "'Courier New', monospace", fontSize: '9px', color: '#E0E0E0', letterSpacing: '0.5px' }}>
        <span>MONIKACHUGH</span>
        <span style={{ color: '#F4D068' }}>► {frameNum} {tag}</span>
      </div>

      {/* Photo */}
      <div className="position-relative overflow-hidden" style={{ borderRadius: '2px', backgroundColor: '#181818' }}>
        <img 
          src={src} 
          alt="Event photo frame" 
          style={{ width: '100%', height: height, objectFit: 'cover', display: 'block', objectPosition: 'center top' }}
        />
      </div>

      {/* Bottom Footer */}
      <div className="d-flex justify-content-between align-items-center mt-1 px-1" style={{ fontFamily: "'Courier New', monospace", fontSize: '9px', color: '#CCCCCC', letterSpacing: '0.5px' }}>
        <span style={{ color: '#F4D068' }}>► {frameNum}</span>
        <span style={{ color: '#E0E0E0' }}>{timestamp}</span>
      </div>
    </div>
  );
}

export default function EventsFeaturedQuoteCafe({ activeTab = 'quote-cafe' }) {
  // 4 user-provided SVG assets
  const img1 = '/images/events/events page image fremeimg1.svg';
  const img2 = '/images/events/events page image fremeimg2.svg';
  const img3 = '/images/events/event page image fremeingimg3.svg';
  const img4 = '/images/events/event page image fremeingimg4.svg';

  return (
    <section className="py-4 py-lg-5 bg-cream position-relative overflow-hidden">
      <div className="container-fluid px-3 px-xl-5" style={{ maxWidth: '1320px' }}>
        
        {/* Main Event Header */}
        <div className="text-center max-w-4xl mx-auto mb-5">
          <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap mb-2">
            <h2 
              className="font-beautique fw-bold text-dark mb-0" 
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#422207', letterSpacing: '0.04em' }}
            >
              QUOTE CAFÉ
            </h2>
            <span 
              className="font-larken fw-normal" 
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', color: '#62350A', letterSpacing: '0.05em' }}
            >
              THOUGHTS IN A CUP
            </span>
          </div>

          <h4 
            className="font-larken mb-3" 
            style={{ fontSize: '1.05rem', color: '#62350A', fontWeight: 500 }}
          >
            Book Launch · Hyderabad · 2025
          </h4>

          <p 
            className="font-larken mx-auto mb-0" 
            style={{ color: '#4A423B', fontSize: '0.98rem', lineHeight: '1.7', maxWidth: '780px' }}
          >
            A warm gathering created around books, conversations and the simple joy of sharing thoughts. Quote Café brings readers and curious minds together in an intimate space where every thought has a place. The gathering offered an opportunity to meet, converse and experience the world of the book beyond its pages.
          </p>
        </div>

        {/* Photo Grid Collage Matching Screenshot */}
        <div className="row g-4 justify-content-center align-items-start mb-5 pt-3">
          
          {/* COLUMN 1 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex flex-column gap-4 position-relative">
              
              {/* Handwritten Annotation 1: a moment of gratitude */}
              <div 
                className="position-absolute d-none d-lg-flex align-items-center gap-1"
                style={{ top: '-42px', left: '-60px', zIndex: 10 }}
              >
                <span style={{ fontFamily: "'Italianno', 'Caveat', cursive", fontSize: '28px', color: '#62350A', whiteSpace: 'nowrap' }}>
                  a moment of gratitude
                </span>
                <svg width="45" height="30" viewBox="0 0 50 30" fill="none">
                  <path d="M 5 20 Q 25 5 45 22" stroke="#62350A" strokeWidth="1.5" fill="none" />
                  <path d="M 38 16 L 45 22 L 40 28" stroke="#62350A" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              {/* Top Frame 1 */}
              <CameraFrame 
                src={img1} 
                frameNum="22" 
                tag="BOOKLAUNCH" 
                height="210px" 
              />

              {/* Bottom Frame 1 */}
              <div className="position-relative mt-2">
                <CameraFrame 
                  src={img3} 
                  frameNum="22" 
                  tag="BOOKLAUNCH" 
                  height="170px" 
                />

                {/* Handwritten Annotation 2: a memory to keep */}
                <div 
                  className="position-absolute d-none d-lg-flex align-items-center gap-1"
                  style={{ bottom: '-38px', left: '-50px', zIndex: 10 }}
                >
                  <span style={{ fontFamily: "'Italianno', 'Caveat', cursive", fontSize: '28px', color: '#62350A', whiteSpace: 'nowrap' }}>
                    a memory to keep
                  </span>
                  <svg width="45" height="30" viewBox="0 0 50 30" fill="none">
                    <path d="M 5 8 Q 25 28 45 15" stroke="#62350A" strokeWidth="1.5" fill="none" />
                    <path d="M 38 12 L 45 15 L 42 22" stroke="#62350A" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex flex-column gap-4">
              {/* Tall Vertical Frame */}
              <CameraFrame 
                src={img2} 
                frameNum="35" 
                tag="BOOKLAUNCH" 
                height="270px" 
              />

              {/* Bottom Frame 2 */}
              <CameraFrame 
                src={img4} 
                frameNum="22" 
                tag="BOOKLAUNCH" 
                height="150px" 
              />
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex flex-column gap-3">
              {/* Top Text Quote */}
              <p className="font-larken mb-1" style={{ fontSize: '0.88rem', color: '#62350A', lineHeight: '1.5' }}>
                A warm evening, shared stories, familiar faces, and the joy of finally seeing my words find their way into the .
              </p>

              {/* Middle Wide Frame */}
              <CameraFrame 
                src={img4} 
                frameNum="22" 
                tag="BOOKLAUNCH" 
                height="160px" 
              />

              {/* Bottom 2 Side-by-Side Small Frames */}
              <div className="row g-2 pt-1">
                <div className="col-6">
                  <CameraFrame 
                    src={img3} 
                    frameNum="22" 
                    tag="BOOKLAUNCH" 
                    height="120px" 
                  />
                  <p className="font-larken text-muted mt-1 mb-0" style={{ fontSize: '0.82rem', color: '#62350A' }}>
                    A warm evening,
                  </p>
                </div>
                <div className="col-6">
                  <CameraFrame 
                    src={img3} 
                    frameNum="53" 
                    tag="BOOKLAUNCH" 
                    height="120px" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 4 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex flex-column gap-4 position-relative">
              
              {/* Handwritten Annotation 3: One to remember ♡ */}
              <div 
                className="position-absolute d-none d-lg-flex align-items-center gap-1"
                style={{ top: '-10px', right: '-80px', zIndex: 10 }}
              >
                <svg width="45" height="30" viewBox="0 0 50 30" fill="none">
                  <path d="M 5 22 Q 25 5 45 18" stroke="#62350A" strokeWidth="1.5" fill="none" />
                  <path d="M 12 16 L 5 22 L 10 28" stroke="#62350A" strokeWidth="1.5" fill="none" />
                </svg>
                <span style={{ fontFamily: "'Italianno', 'Caveat', cursive", fontSize: '28px', color: '#62350A', whiteSpace: 'nowrap' }}>
                  One to remember ♡
                </span>
              </div>

              {/* Top Frame 4 */}
              <CameraFrame 
                src={img1} 
                frameNum="22" 
                tag="BOOKLAUNCH" 
                height="210px" 
              />

              {/* Bottom Section 4 */}
              <div>
                <p className="font-larken mb-2" style={{ fontSize: '0.88rem', color: '#62350A' }}>
                  A gathering filled with stories
                </p>
                <CameraFrame 
                  src={img4} 
                  frameNum="22" 
                  tag="BOOKLAUNCH" 
                  height="150px" 
                />
              </div>

            </div>
          </div>

        </div>

        {/* Footer Paragraph */}
        <div className="text-center w-100 d-flex justify-content-center pt-2">
          <p 
            className="font-larken text-center mx-auto mb-0" 
            style={{ 
              color: '#4A423B', 
              fontSize: '0.96rem', 
              lineHeight: '1.75', 
              maxWidth: '840px',
              textAlign: 'center' 
            }}
          >
            A warm gathering created around books, conversations and the simple joy of sharing thoughts. Quote Café brings readers and curious minds together in an intimate space where every thought has a place. The gathering offered an opportunity to meet, converse and experience the world of the book beyond its pages. A warm gathering created around books, conversations and the simple joy of sharing thoughts.
          </p>
        </div>


      </div>
    </section>
  );
}

