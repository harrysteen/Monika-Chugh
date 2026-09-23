'use client';

export default function SecondSection() {
  return (
    <section id="recent-favorite" className="py-4 py-md-5 bg-cream position-relative overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container px-3 px-sm-4">

        {/* Paper Background Card (Shown on Desktop, Hidden on Mobile) */}
        <div
          className="second-section-paper-card mx-auto position-relative d-flex align-items-center justify-content-center"
        >
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 gap-xl-5 w-100 second-section-inner">

            {/* Left Side: Lotus Whispers Framed Artwork Image */}
            <div className="second-section-img-box d-flex justify-content-center align-items-center flex-shrink-0">
              <img
                src="/images/home_page_second_section_img.svg"
                alt="Lotus Whispers - Within & Between A Guided Mindfulness & Reflection Journal"
                className="img-fluid d-block"
                style={{
                  maxHeight: '260px',
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Right Side: Text & Details */}
            <div className="second-section-text-box d-flex flex-column justify-content-center">

              {/* Centered Heading Block matching design with balanced spacing */}
              <div className="text-center mb-3">
                {/* Script Header: Our Etsy Collection */}
                <span
                  className="d-block mb-1"
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: 'clamp(24px, 2.5vw, 28px)',
                    color: '#A44E0E',
                    fontWeight: 400,
                    lineHeight: '1.1'
                  }}
                >
                  Our Etsy Collection
                </span>

                {/* Title: Everyone's favorite journal */}
                <h2
                  className="mb-0"
                  style={{
                    fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                    fontSize: 'clamp(21px, 2.2vw, 26px)',
                    color: '#422207',
                    fontWeight: 400,
                    lineHeight: '1.2',
                    letterSpacing: '0.02em'
                  }}
                >
                  Everyone&apos;s favorite journal
                </h2>
              </div>

              {/* Subtitle Details */}
              <p
                className="mb-3 text-start"
                style={{
                  fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                  fontSize: 'clamp(13px, 1.05vw, 14px)',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  lineHeight: '1.5',
                  letterSpacing: '0%',
                  color: '#4A423B',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                LOTUS WHISPERS — Within &amp; Between A Guided Mindfulness &amp; Reflection Journal Words by Monika Chugh · Art by Alka Chopra · Mindful Seeker Series.
              </p>

              {/* Paragraph & Arrow */}
              <div className="d-flex flex-column flex-md-row align-items-end align-items-md-center justify-content-between gap-3 text-start">
                <p
                  className="mb-0 flex-grow-1 text-start"
                  style={{
                    fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                    fontSize: 'clamp(12.5px, 1.02vw, 13.8px)',
                    color: '#4A423B',
                    lineHeight: '1.55',
                    fontWeight: 300,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                >
                  Rooted in the symbolism of the lotus, a flower that rises through still water and unfolds in its own time, this is not a journal to perform or perfect. It&apos;s a sanctuary for the thoughts, emotions, and truths that have simply been waiting to be seen.
                </p>

                {/* Elegant Editorial Arrow Link - brown color, moved towards the right */}
                <a
                  href="#books"
                  className="second-section-arrow-btn text-decoration-none flex-shrink-0 d-inline-flex align-items-center justify-content-center mt-2 mt-md-0 ms-auto ms-md-3"
                  style={{
                    color: '#A44E0E',
                    minWidth: '40px',
                    minHeight: '32px',
                    padding: '3px 5px',
                    transition: 'transform 0.25s ease, color 0.25s ease'
                  }}
                  aria-label="Explore Lotus Whispers Journal"
                >
                  <svg
                    width="32"
                    height="13"
                    viewBox="0 0 34 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block' }}
                  >
                    <path
                      d="M0 7H32M32 7L25 1M32 7L25 13"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        /* Mobile & Tablet Styles (Clean & responsive) */
        .second-section-paper-card {
          background-image: none;
          max-width: 1100px;
          min-height: auto;
          padding: 1.25rem 0.5rem;
          width: 100%;
        }
        .second-section-text-box {
          max-width: 100%;
        }

        /* Desktop Styles (Paper background displayed with symmetrical centering & padding) */
        @media (min-width: 992px) {
          .second-section-paper-card {
            background-image: url('/images/home_second_section_bg.svg');
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 380px;
            padding: 1.75rem 3rem;
            box-sizing: border-box;
          }
          .second-section-img-box {
            transform: translateX(-14px);
          }
          .second-section-text-box {
            max-width: 580px;
          }
          .second-section-inner {
            transform: translateY(-2px);
          }
        }

        @media (min-width: 1200px) {
          .second-section-paper-card {
            min-height: 380px;
            max-width: 1136px;
            padding: 1.75rem 3.75rem;
          }
          .second-section-img-box {
            transform: translateX(-18px);
          }
          .second-section-text-box {
            max-width: 610px;
          }
        }

        /* Micro-interactions */
        .second-section-arrow-btn:hover {
          transform: translateX(5px);
          color: #A44E0E !important;
        }

        @media (max-width: 576px) {
          .second-section-img-box img {
            max-height: 220px !important;
          }
          .second-section-paper-card {
            padding: 0.75rem 0;
          }
        }
      `}</style>
    </section>
  );
}
