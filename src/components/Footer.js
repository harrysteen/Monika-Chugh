'use client';

// Social icon paths share a 16x16 viewBox so every icon renders at the same size.
// `circled` icons draw their glyph in cream on a filled brown circle.
// Etsy has no Bootstrap Icon, so its "E" mark is drawn on the same grid.
const socialLinks = [
  {
    label: 'Substack',
    href: '#substack',
    path: 'M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z'
  },
  {
    label: 'Etsy',
    href: 'https://www.etsy.com/in-en/shop/CanvasandQuotations?etsrc=sdt',
    circled: true,
    path: 'M5.5 1.1c0-.3.1-.4.5-.4h4.6c.9 0 1.3.7 1.7 2.1l.3 1.1h.8c.1-2.2.3-3.9.3-3.9s-2.1.2-3.4.2H4.2L.9 0v.9l1.1.2c.8.2 1 .3 1 1.1 0 0 .1 2.2.1 5.8s-.1 5.7-.1 5.7c0 .7-.3.9-1 1.1L.9 15v1l3.4-.1h5.6c1.3 0 4.2.1 4.2.1.1-.8.5-4.3.6-4.7h-.8l-.8 1.9c-.7 1.5-1.6 1.6-2.7 1.6H7.1c-1.1 0-1.6-.4-1.6-1.4V8.5s2.4 0 3.2.1c.6 0 1 .2 1.2 1.1l.3 1.1h.9l-.1-2.8.1-2.9h-.9l-.3 1.3c-.2.8-.3 1-1.2 1.1-1.1.1-3.2.1-3.2.1V1.1z'
  },
  {
    label: 'LinkedIn',
    href: '#linkedin',
    circled: true,
    // just the "in" letters from Bootstrap's linkedin icon
    path: 'M4.943 13.394V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z'
  },
  {
    label: 'Instagram',
    circled: true,
    href: '#instagram',
    path: 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334'
  },
  {
    label: 'YouTube',
    circled: true,
    href: '#youtube',
    path: 'M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z'
  },
  {
    label: 'Facebook',
    href: '#facebook',
    path: 'M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951'
  }
];

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
          
          {/* 3-Column Layout: Subscribe + Card | Emblem + Nav + Tagline | Social Icons */}
          <div className="row g-4 align-items-start">

            {/* Left Column: Newsletter Subscribe + Small Card Below */}
            <div className="col-12 col-lg-3">
              <span
                className="d-block mb-2"
                style={{
                  fontFamily: "'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#62350A',
                  fontWeight: 400
                }}
              >
                for new releases, subscribe now.
              </span>

              {/* Inline Email Subscribe Box */}
              <form onSubmit={(e) => e.preventDefault()} className="w-100" style={{ maxWidth: '284px' }}>
                <div
                  className="d-flex align-items-center justify-content-between px-3"
                  style={{
                    height: '38px',
                    border: '1px solid #D9BE8E',
                    backgroundColor: 'rgba(255, 253, 249, 0.25)'
                  }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="footer-email-input bg-transparent border-0 flex-grow-1 pe-2 shadow-none"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                      fontSize: '13px',
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
                      fontSize: '13px',
                      color: '#62350A',
                      fontWeight: 400,
                      cursor: 'pointer'
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              {/* Mindfulness Challenge Card */}
              <div className="footer-card" style={{ maxWidth: '168px' }}>
                <img
                  src="/images/footer card.png"
                  alt="Free 5-Day Mindfulness Challenge"
                  className="w-100 d-block"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
              </div>
            </div>

            {/* Center Column: Emblem + Nav Menu + Tagline */}
            <div className="col-12 col-lg-6 text-center px-lg-2 footer-center">

              {/* Central Lotus Emblem Logo Icon */}
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="/images/lotus_emblem.svg"
                  alt="Monika Chugh Lotus Emblem"
                  style={{ width: '34px', height: '32px' }}
                />
              </div>

              {/* Navigation Links (Row 1 & Row 2) */}
              <div className="d-flex flex-column align-items-center footer-nav-rows">
                <div className="d-flex flex-wrap justify-content-center footer-nav-row">
                  <a href="/" className="footer-nav-link">Home</a>
                  <a href="/my-story" className="footer-nav-link">My Story</a>
                  <a href="/books" className="footer-nav-link">Books</a>
                  <a href="/blogs" className="footer-nav-link">Blogs</a>
                  <a href="/#canvas-quotations" className="footer-nav-link">Canvas &amp; Quotations</a>
                </div>
                <div className="d-flex flex-wrap justify-content-center footer-nav-row">
                  <a href="/poems-articles" className="footer-nav-link">Poems &amp; Articles</a>
                  <a href="/press-room" className="footer-nav-link">Press Room</a>
                  <a href="/events" className="footer-nav-link">Events</a>
                  <a href="/#arogini" className="footer-nav-link">Ārogini</a>
                  <a href="/contact" className="footer-nav-link">Contact</a>
                </div>
              </div>

              {/* Tagline */}
              <p
                className="footer-tagline mb-0 mx-auto"
                style={{
                  fontFamily: "'Larken', 'Lora', serif",
                  fontSize: '14px',
                  color: '#62350A',
                  lineHeight: '1.4',
                  fontWeight: 400
                }}
              >
                Living . Learning . Creating<br />
                Finding meaning along the way.<br />
                The journey continues. Stay with us for what&apos;s yet to unfold.
              </p>
            </div>

            {/* Right Column: Social Media Icons + Underline */}
            <div className="col-12 col-lg-3 d-flex justify-content-start justify-content-lg-end">
              <div style={{ width: '196px' }}>
                <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-decoration-none footer-icon d-inline-flex align-items-center justify-content-center"
                      style={{ width: '22px', height: '22px', color: '#62350A' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        {social.circled ? (
                          <>
                            <circle cx="8" cy="8" r="8" />
                            <path d={social.path} fill="#F9E7BE" transform="translate(3.75 3.75) scale(0.53125)" />
                          </>
                        ) : (
                          <path d={social.path} />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>

                {/* Horizontal Line under Social Icons */}
                <div style={{ width: '100%', height: '1px', backgroundColor: '#D9BE8E' }} />
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
        .footer-card {
          margin-top: 33px;
        }
        .footer-nav-rows {
          row-gap: 14px;
        }
        .footer-nav-row {
          column-gap: 30px;
          row-gap: 8px;
        }
        .footer-tagline {
          margin-top: 48px;
        }
        .footer-email-input::placeholder {
          color: #B99466;
        }
        @media (min-width: 992px) {
          /* Emblem sits just below the subscribe box, as in the design */
          .footer-center {
            padding-top: 64px;
          }
          .footer-tagline {
            margin-top: 70px;
          }
        }

        .footer-nav-link {
          font-family: 'Larken-Light', 'Larken', 'Lora', serif;
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

