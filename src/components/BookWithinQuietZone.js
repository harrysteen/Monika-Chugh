'use client';

// "Within A Quiet Zone With Affirmations" - same layout as the Quote Café "Within" section
export default function BookWithinQuietZone() {
  return (
    <section className="pt-5 pb-0 bg-cream position-relative" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">

        {/* Header */}
        <div className="text-center mb-3">
          <span
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '34px',
              color: '#A44E0E',
              fontWeight: 400,
              lineHeight: '100%'
            }}
          >
            inside these pages
          </span>
          <h2
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: 'clamp(21px, 2.2vw, 26px)',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.2'
            }}
          >
            Within A Quiet Zone With Affirmations
          </h2>
        </div>

        <div className="row g-4 g-lg-5 align-items-start">

          {/* Left Column: text */}
          <div className="col-12 col-lg-7 pe-lg-4 within-text">
            <div
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '15.5px',
                color: '#4A423B',
                lineHeight: '1.65',
                fontWeight: 300
              }}
            >
              <p className="mb-0">
                A Quiet Zone With Affirmations is my collection of affirmations that helped shape me where I am today. I found my voice in my new space—my journals where I started creating my positive affirmations, and my words echoed back just as I advised my patients, &ldquo;take care of yourself; the world can wait.&rdquo;
              </p>
              <p className="mb-0">Our words to &lsquo;us&rsquo; matter.</p>
              <p className="mb-0">Keep the internal dialog positive, always.</p>
              <p className="mb-0">
                Journaling became second nature to me. It helped me process my thoughts. I had no one judging me whatsoever. I was in my best company. It&apos;s my daily practice. It&apos;s my sacred ritual. Make it yours now.
              </p>
              <p className="mb-0">You will not go wrong, only right.</p>
              <p
                className="mb-0 fst-italic"
                style={{ fontFamily: "'Larken-Medium', 'Larken', serif", color: '#8B4715' }}
              >
                I promise you will be a changed &lsquo;you&rsquo; in some time.
              </p>
            </div>
          </div>

          {/* Right Column: open book photo, running off the right edge on desktop */}
          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <img
              src="/images/books/within_quiet_zone.webp"
              alt="Open copy of A Quiet Zone With Affirmations"
              className="within-book-img d-block h-auto"
            />
          </div>

        </div>
      </div>

      <style jsx>{`
        .within-book-img {
          width: 100%;
          max-width: 420px;
        }
        @media (min-width: 992px) {
          /* As in the design: the book starts just below the heading, the text starts
             about a quarter of the way down the book */
          .within-book-img {
            max-width: 460px;
            margin-right: -3rem;
            margin-top: -1.5rem;
          }
          .within-text {
            padding-top: clamp(70px, 8vw, 120px);
          }
        }
      `}</style>
    </section>
  );
}
