'use client';

export default function MyStoryAbout() {
  return (
    <section className="py-5 bg-cream position-relative" id="story-about">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1380px' }}>
        
        {/* Section Header */}
        <div className="mb-5 pb-2">
          <span 
            className="d-block mb-1" 
            style={{ 
              fontFamily: "'Italianno', cursive", 
              fontSize: '24px', 
              color: '#A44E0E',
              lineHeight: 1.2
            }}
          >
            a little about me
          </span>
          <h2 
            className="fw-normal" 
            style={{ 
              fontFamily: "'Beautique Display', 'BeautiqueDisplay-Regular', 'Cormorant Garamond', 'Playfair Display', serif", 
              fontSize: 'clamp(21px, 2.2vw, 26px)',
              color: '#422207',
              letterSpacing: '0.01em',
              lineHeight: 1.25
            }}
          >
            Life behind the words
          </h2>
        </div>

        {/* 2-Column Content with Botanical Illustration in Center */}
        <div className="row g-4 text-start story-about-grid">
          
          {/* Column 1 */}
          <div className="col-12">
            <p 
              className="mb-0" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif", 
                fontSize: '16px', 
                color: '#4A423B', 
                lineHeight: '1.6',
                fontWeight: 300,
                textAlign: 'justify'
              }}
            >
              Hello there, if we were sitting together over coffee, we'd probably be talking about how beautifully messy life can be. Born in New Delhi, raised across the Middle East, I now call California home. Living across cultures taught me that every story deserves kindness. For years, I've helped people see more clearly as an ophthalmic doctor but the deepest kind of seeing was never about eyesight. It's about perspective and awareness. Today, I still care for patients, but I also write, create, speak, and share what life has taught me and what I'm still figuring out.
            </p>
          </div>

          {/* Center Line Illustration (Botanical Flower Icon) */}
          <div className="col-12 text-center py-3 py-lg-0 d-flex justify-content-center align-items-center">
            <img 
              src="/images/mystory/my_story_section2_icon.png" 
              alt="Botanical ornament"
              style={{ 
                width: '75px', 
                height: 'auto',
                display: 'inline-block'
              }}
            />
          </div>

          {/* Column 2 */}
          <div className="col-12">
            <p 
              className="mb-0" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif", 
                fontSize: '16px', 
                color: '#4A423B', 
                lineHeight: '1.6',
                fontWeight: 300,
                textAlign: 'justify'
              }}
            >
              My work spans books and journals, Ārogini, Canvas &amp; Quotations, and YouTube - alongside recognition as a Pushcart Prize nominee, Rotary International's 2025 Poet of the Year, and service on Fremont's Art Review Board. Away from the clinic, you'll find me on a nature trail, doing yoga, reading, or sitting with a notebook and coffee, learning to slow down and live with intention.<br />
              I don't have all the answers, but I believe in a thoughtful word, an honest chat, and a little more awareness.
            </p>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          /* Two equal text columns with the flower between, tops aligned */
          .story-about-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 90px minmax(0, 1fr);
            align-items: start;
            column-gap: 2rem;
            width: 92%;
            margin: 0 auto;
          }
          .story-about-grid > :global(div) {
            width: auto;
            padding: 0;
            margin: 0;
          }
          .story-about-grid > :global(div:nth-child(2)) {
            align-self: center;
          }
        }
      `}</style>
    </section>
  );
}

