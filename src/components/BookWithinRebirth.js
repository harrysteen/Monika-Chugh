'use client';

// "Rebirth – The Phoenix Rising" inside-the-book section - same layout as the other book pages
export default function BookWithinRebirth() {
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
            Rebirth – The Phoenix Rising
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
              <p className="mb-3">
                The phoenix is the symbol of renewal and rebirth. As one life ends, a nest is built, the old phoenix sets fire to itself, and a new one emerges from the ashes.
              </p>
              <p className="mb-3">
                <strong style={{ fontWeight: 400, fontFamily: "'Larken-Medium', 'Larken', serif", color: '#8B4715' }}>Rebirth and renewal</strong> are never easy, as the stories of these brave women will testify. Each shares a story of a fragmented and fractured life. To feel safe and secure often means stepping through layers of darkness and fragments of yourself to find the light and a way back to who you truly are.
              </p>
              <p className="mb-3">
                Letting go of fear, shame, guilt, and anger asks that you allow yourself to connect with the emotions you have suppressed and acknowledge them. It also asks that you grieve the old you, learn to love yourself, reclaim your self-worth, speak your truth, and allow the old illusions to dissolve.
              </p>
              <p className="mb-2">
                Taking charge of your inner healing as our writers have done is life-changing. We hope that these stories inspire you to know what is possible with your heal
              </p>
              <ul className="mb-4 ps-4">
                <li>How trauma, old wounds, and deep emotional scars do not define you</li>
                <li>How to find purpose, meaning and hope in your story</li>
                <li>How to rebirth, reclaim and step into the authenticity of who you truly are</li>
                <li>How to step into a new stronger, resilient wiser you igniting and rising from the ashes and into your power</li>
                <li>Eight proven, time tested personal development exercises that you can do straight away to change your life</li>
              </ul>
              <p className="mb-0 fst-italic" style={{ fontFamily: "'Larken-Medium', 'Larken', serif", color: '#8B4715' }}>
                If we want to heal, our words matter – Dale Darley
              </p>
            </div>
          </div>

          {/* Right Column: open book photo, running off the right edge on desktop */}
          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <img
              src="/images/books/within_rebirth.webp"
              alt="Open copy of Rebirth – The Phoenix Rising"
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
            padding-top: clamp(16px, 2vw, 32px);
          }
        }
      `}</style>
    </section>
  );
}
