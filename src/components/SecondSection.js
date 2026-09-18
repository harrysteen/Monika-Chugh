'use client';

export default function SecondSection() {
  return (
    <section id="recent-favorite" className="py-4 py-md-5 bg-cream position-relative overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container px-3 px-sm-4">

        {/* Paper Background Card (Shown on Desktop, Hidden on Mobile) */}
        <div
          className="second-section-paper-card mx-auto position-relative d-flex align-items-center justify-content-center"
        >
          <div className="row align-items-center justify-content-center justify-content-lg-between g-4 g-lg-5 w-100 m-0 second-section-row">

            {/* Left Side: Lotus Whispers Framed Artwork Image */}
            <div className="col-12 col-md-5 col-lg-4 col-xl-5 d-flex justify-content-center align-items-center text-center">
              <div className="position-relative d-inline-block second-section-img-box">
                <img
                  src="/images/home_page_second_section_img.svg"
                  alt="Lotus Whispers - Within & Between A Guided Mindfulness & Reflection Journal"
                  className="img-fluid d-block mx-auto"
                  style={{
                    maxHeight: '260px',
                    maxWidth: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>

            {/* Right Side: Text & Details */}
            <div className="col-12 col-md-7 col-lg-8 col-xl-7 d-flex flex-column justify-content-center">
              <div className="second-section-text-box mx-auto mx-md-0 w-100" style={{ maxWidth: '640px' }}>

                {/* Centered Heading Block matching design with balanced spacing */}
                <div className="text-center mb-4 mb-md-5">
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
                  className="mb-4 text-start"
                  style={{
                    fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                    fontSize: 'clamp(13px, 1.05vw, 14px)',
                    fontWeight: 400,
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
                      fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                      fontSize: 'clamp(12.5px, 1.02vw, 13.8px)',
                      color: '#4A423B',
                      lineHeight: '1.55',
                      fontWeight: 400,
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

      </div>

      <style jsx>{`
        /* Mobile & Tablet Styles (Paper background hidden, clean & responsive) */
        .second-section-paper-card {
          background-image: none;
          max-width: 1136px;
          min-height: auto;
          padding: 1.25rem 0.5rem;
          width: 100%;
        }
        .second-section-row {
          transform: none;
        }

        /* Desktop Styles (Paper background displayed with proper padding & dimensions) */
        @media (min-width: 992px) {
          .second-section-paper-card {
            background-image: url('/images/home_second_section_bg.svg');
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 430px;
            padding: 1.75rem 2.25rem 2.25rem 2.25rem;
            border-radius: 4px;
          }
          .second-section-row {
            transform: translateY(-2px);
          }
        }

        @media (min-width: 1200px) {
          .second-section-paper-card {
            min-height: 450px;
            padding: 2rem 3rem 2.5rem 3rem;
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
