'use client';

export default function SecondSection() {
  return (
    <section id="recent-favorite" className="py-5 bg-cream position-relative overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container px-3 px-md-4">

        {/* Paper Background Card with Torn/Deckled Edges (home_second_section_bg.svg) */}
        <div
          className="second-section-paper-card mx-auto position-relative d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: "url('/images/home_second_section_bg.svg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maxWidth: '1136px',
            minHeight: '430px',
            padding: '2.5rem 3.5rem 4.5rem 3.5rem',
            borderRadius: '4px'
          }}
        >
          <div className="row align-items-center justify-content-between g-4 g-lg-5 w-100 m-0" style={{ transform: 'translateY(-8px)' }}>

            {/* Left Side: Lotus Whispers Framed Artwork Image (Properly scaled with top/bottom margin) */}
            <div className="col-12 col-md-5 col-lg-5 d-flex justify-content-center align-items-center text-center">
              <div className="position-relative d-inline-block">
                <img
                  src="/images/home_page_second_section_img.svg"
                  alt="Lotus Whispers - Within & Between A Guided Mindfulness & Reflection Journal"
                  className="img-fluid d-block"
                  style={{ maxHeight: '275px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Right Side: Text & Details (Vertically Centered) */}
            <div className="col-12 col-md-7 col-lg-7 d-flex flex-column justify-content-center">
              <div className="pe-lg-2 position-relative w-100">

                {/* Centered Heading Block matching design */}
                <div className="text-center mb-3">
                  {/* Script Header: Our Etsy Collection */}
                  <span
                    className="d-block mb-1"
                    style={{
                      fontFamily: "'Italianno', cursive",
                      fontSize: '32px',
                      color: '#A44E0E',
                      fontWeight: 400,
                      lineHeight: '100%'
                    }}
                  >
                    Our Etsy Collection
                  </span>

                  {/* Title: Everyone's favorite journal */}
                  <h2
                    className="mb-0"
                    style={{
                      fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                      fontSize: '32px',
                      color: '#422207',
                      fontWeight: 400,
                      lineHeight: '1.2',
                      letterSpacing: '0.02em'
                    }}
                  >
                    Everyone&apos;s favorite journal
                  </h2>
                </div>

                {/* Subtitle Details - Left aligned */}
                <p
                  className="mb-2 text-start"
                  style={{
                    fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '138%',
                    letterSpacing: '0%',
                    color: '#5C5248',
                    maxWidth: '560px'
                  }}
                >
                  LOTUS WHISPERS — Within &amp; Between A Guided Mindfulness &amp; Reflection Journal Words by Monika Chugh · Art by Alka Chopra · Mindful Seeker Series.
                </p>

                {/* Paragraph & Arrow - Left aligned text with right arrow */}
                <div className="d-flex align-items-center justify-content-between gap-3 text-start" style={{ maxWidth: '560px' }}>
                  <p
                    className="mb-0 text-start"
                    style={{
                      fontFamily: "'Larken', 'Lora', serif",
                      fontSize: '14px',
                      color: '#4A423B',
                      lineHeight: '1.6',
                      fontWeight: 400
                    }}
                  >
                    Rooted in the symbolism of the lotus, a flower that rises through still water and unfolds in its own time, this is not a journal to perform or perfect. It&apos;s a sanctuary for the thoughts, emotions, and truths that have simply been waiting to be seen.
                  </p>

                  {/* Right Arrow Icon */}
                  <a
                    href="#books"
                    className="text-decoration-none px-2 flex-shrink-0 d-inline-flex align-items-center"
                    style={{ color: '#422207' }}
                    aria-label="Explore Lotus Whispers Journal"
                  >
                    <i className="bi bi-arrow-right" style={{ fontSize: '30px', color: '#422207' }}></i>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
