'use client';

export default function Footer() {
  return (
    <footer 
      className="position-relative py-4 py-md-5 overflow-hidden w-100" 
      style={{ backgroundColor: '#F9E7BE', color: '#62350A' }}
    >
      {/* Background Watermark Leaf Pattern */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
        style={{
          backgroundImage: "url('/images/section_13_bg.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          zIndex: 0
        }}
      />

      <div className="container-fluid px-3 px-md-4 px-lg-5 position-relative z-1 py-2">
        <div className="max-w-1400 mx-auto">
          
          {/* 3-Column Harmonious Layout (Eliminating Middle Gap) */}
          <div className="row g-4 align-items-start">
            
            {/* Left Column: Newsletter Subscribe + Small Card Below */}
            <div className="col-12 col-lg-3 col-xl-3">
              <span
                className="d-block mb-2"
                style={{
                  fontFamily: "'Larken', 'Lora', serif",
                  fontSize: '17px',
                  color: '#62350A',
                  fontWeight: 400
                }}
              >
                for new releases
              </span>

              {/* Inline Email Submit Box */}
              <form onSubmit={(e) => e.preventDefault()} className="w-100 mb-3" style={{ maxWidth: '280px' }}>
                <div 
                  className="d-flex align-items-center justify-content-between px-3 py-2"
                  style={{
                    border: '1px solid #B88B58',
                    backgroundColor: 'rgba(255, 253, 249, 0.4)',
                    borderRadius: '2px'
                  }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-transparent border-0 flex-grow-1 pe-2 shadow-none"
                    style={{
                      fontFamily: "'Larken', 'Lora', serif",
                      fontSize: '13.5px',
                      color: '#422207',
                      outline: 'none'
                    }}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-transparent border-0 p-0"
                    style={{
                      fontFamily: "'Larken', 'Lora', serif",
                      fontSize: '13.5px',
                      color: '#62350A',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* Small Card below Email Form - High Resolution 4x Crisp rendering */}
              <div style={{ maxWidth: '210px' }}>
                <img 
                  src="/images/footer card.png" 
                  alt="Free 5-Day Mindfulness Challenge" 
                  className="w-100 rounded-1 shadow-sm d-block"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
              </div>
            </div>

            {/* Center Column: Emblem + Nav Menu + Paragraph Text */}
            <div className="col-12 col-lg-6 col-xl-6 text-center px-lg-2">
              
              {/* Central Lotus Emblem Logo Icon */}
              <div className="d-flex justify-content-center mb-3 mb-md-4 pt-1">
                <img 
                  src="/images/lotus_emblem.svg" 
                  alt="Monika Chugh Lotus Emblem" 
                  style={{ width: '56px', height: '52px' }} 
                />
              </div>

              {/* Navigation Links Grid (Row 1 & Row 2) */}
              <div className="d-flex flex-column gap-2 align-items-center mb-2">
                {/* Row 1 Links */}
                <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4">
                  <a href="#home" className="footer-nav-link">Home</a>
                  <a href="#story" className="footer-nav-link">My Story</a>
                  <a href="#books" className="footer-nav-link">Books</a>
                  <a href="#blogs" className="footer-nav-link">Blogs</a>
                  <a href="#canvas" className="footer-nav-link">Canvas &amp; Quotations</a>
                </div>

                {/* Row 2 Links */}
                <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4">
                  <a href="/poems-articles" className="footer-nav-link">Poems &amp; Articles</a>
                  <a href="/press-room" className="footer-nav-link">Press Room</a>
                  <a href="/events" className="footer-nav-link">Events</a>
                  <a href="/#arogini" className="footer-nav-link">Arogini</a>
                  <a href="/contact" className="footer-nav-link">Contact</a>
                </div>
              </div>

              {/* 2-Liner Description Text - Moved down with spacing */}
              <p
                className="mt-4 pt-2 mb-0 mx-auto"
                style={{
                  fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                  fontSize: '13.5px',
                  color: '#5C3818',
                  lineHeight: '1.65',
                  maxWidth: '560px',
                  fontWeight: 300,
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain.
              </p>
            </div>

            {/* Right Column: Social Media Icons (Substack, Instagram, LinkedIn) + Underline */}
            <div className="col-12 col-lg-3 col-xl-3 text-start text-lg-end pt-1">
              <div className="d-inline-block text-start text-lg-end">
                
                {/* Icons (Standardized 32x32px containers and 20x20px SVGs) */}
                <div className="d-flex align-items-center justify-content-start justify-content-lg-end gap-2 mb-2">
                  
                  {/* Substack Icon */}
                  <a 
                    href="#substack" 
                    aria-label="Substack" 
                    className="text-decoration-none footer-icon d-inline-flex align-items-center justify-content-center" 
                    style={{ width: '32px', height: '32px', color: '#62350A' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                    </svg>
                  </a>

                  {/* Instagram Icon */}
                  <a 
                    href="#instagram" 
                    aria-label="Instagram" 
                    className="text-decoration-none footer-icon d-inline-flex align-items-center justify-content-center" 
                    style={{ width: '32px', height: '32px', color: '#62350A' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>

                  {/* LinkedIn Icon */}
                  <a 
                    href="#linkedin" 
                    aria-label="LinkedIn" 
                    className="text-decoration-none footer-icon d-inline-flex align-items-center justify-content-center" 
                    style={{ width: '32px', height: '32px', color: '#62350A' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63z"/>
                    </svg>
                  </a>

                </div>

                {/* Horizontal Line under Social Icons */}
                <div 
                  className="mt-1"
                  style={{
                    width: '130px',
                    height: '1px',
                    backgroundColor: '#B88B58',
                    opacity: 0.6,
                    marginLeft: 'auto'
                  }}
                />
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Made by Studio Dezu */}
          <div 
            className="mt-4 pt-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
            style={{
              borderTop: '1px solid rgba(184, 139, 88, 0.3)'
            }}
          >
            <div 
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '13px',
                color: '#62350A',
                opacity: 0.85
              }}
            >
              © {new Date().getFullYear()} Monika Chugh. All rights reserved.
            </div>

            <a
              href="https://studiodezu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dezu-credit-link d-inline-flex align-items-center gap-2 text-decoration-none"
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '13px',
                color: '#62350A',
                transition: 'opacity 0.25s ease, transform 0.25s ease'
              }}
            >
              <span style={{ opacity: 0.85 }}>Made by</span>
              <span 
                className="d-inline-flex align-items-center px-2 py-1 rounded"
                style={{
                  backgroundColor: 'rgba(98, 53, 10, 0.06)',
                  border: '1px solid rgba(184, 139, 88, 0.35)',
                  color: '#422207',
                  fontWeight: 500,
                  letterSpacing: '0.02em'
                }}
              >
                <span>Studio Dezu</span>
              </span>
            </a>
          </div>
        </div>

      </div>

      {/* Embedded Styles for Footer Links */}
      <style jsx>{`
        .footer-nav-link {
          font-family: 'Larken', 'Lora', serif;
          font-size: 14px;
          color: #62350A;
          text-decoration: none;
          transition: opacity 0.25s ease;
        }

        .footer-nav-link:hover {
          opacity: 0.7;
          color: #422207;
        }

        .footer-icon {
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .footer-icon:hover {
          transform: translateY(-2px);
          opacity: 0.8;
        }

        .dezu-credit-link:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }
      `}</style>
    </footer>
  );
}

