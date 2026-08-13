'use client';

export default function Footer() {
  return (
    <footer 
      className="position-relative py-5 overflow-hidden w-100" 
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

      <div className="container-fluid px-3 px-md-4 px-lg-5 position-relative z-1 py-3">
        
        {/* Top Header Row: Newsletter Form (Left) & Social Icons (Right) */}
        <div className="row align-items-start justify-content-between mb-4 mb-md-5 g-4">
          
          {/* Top Left: Newsletter Subscribe Box */}
          <div className="col-12 col-md-5 col-lg-4">
            <span
              className="d-block mb-2"
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '18px',
                color: '#62350A',
                fontWeight: 400
              }}
            >
              for new releases
            </span>

            {/* Inline Email Submit Box */}
            <form onSubmit={(e) => e.preventDefault()} className="w-100" style={{ maxWidth: '340px' }}>
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
                    fontSize: '14px',
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
                    fontSize: '14px',
                    color: '#62350A',
                    fontWeight: 500,
                    cursor: 'pointer'
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Top Right: Social Media Icons + Underline */}
          <div className="col-12 col-md-5 col-lg-4 text-start text-md-end">
            <div className="d-inline-block text-start text-md-end">
              
              {/* Icons */}
              <div className="d-flex align-items-center justify-content-start justify-content-md-end gap-3 mb-2">
                
                {/* Substack / Bookmark Icon */}
                <a href="#substack" aria-label="Substack" className="text-decoration-none" style={{ color: '#62350A' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                </a>

                {/* Instagram Icon 1 */}
                <a href="#instagram" aria-label="Instagram" className="text-decoration-none" style={{ color: '#62350A' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Instagram / Social Icon 2 */}
                <a href="#social" aria-label="Social Channel" className="text-decoration-none" style={{ color: '#62350A' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </a>

              </div>

              {/* Horizontal Line under Social Icons */}
              <div 
                className="mt-1"
                style={{
                  width: '140px',
                  height: '1px',
                  backgroundColor: '#B88B58',
                  opacity: 0.6,
                  marginLeft: 'auto'
                }}
              />
            </div>
          </div>

        </div>

        {/* Center Section: Lotus Logo + Nav Menu */}
        <div className="text-center my-4 my-md-5">
          
          {/* Central Lotus Logo Icon */}
          <div className="d-flex justify-content-center mb-4">
            <img 
              src="/images/Logo.svg" 
              alt="Monika Chugh Lotus Logo" 
              style={{ width: '48px', height: '48px', opacity: 0.9 }} 
            />
          </div>

          {/* Navigation Links Grid (Row 1 & Row 2) */}
          <div className="d-flex flex-column gap-2 gap-md-3 align-items-center max-w-900 mx-auto mb-4">
            
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
              <a href="#poems" className="footer-nav-link">Poems &amp; Articles</a>
              <a href="#press" className="footer-nav-link">Press Room</a>
              <a href="#events" className="footer-nav-link">Events</a>
              <a href="#arogini" className="footer-nav-link">Arogini</a>
              <a href="#contact" className="footer-nav-link">Contact</a>
            </div>

          </div>
        </div>

        {/* Bottom Section: Centered Paragraph Quote Text */}
        <div className="text-center max-w-800 mx-auto mt-4 pt-2">
          <p
            className="mb-0 mx-auto"
            style={{
              fontFamily: "'Larken', 'Lora', serif",
              fontSize: '14px',
              color: '#62350A',
              lineHeight: '1.7',
              maxWidth: '760px',
              fontWeight: 400
            }}
          >
            Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the.
          </p>
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
      `}</style>
    </footer>
  );
}
