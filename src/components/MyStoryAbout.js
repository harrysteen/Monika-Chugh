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
              fontSize: '36px',
              color: '#422207',
              letterSpacing: '0.01em',
              lineHeight: 1.25
            }}
          >
            Life behind the words
          </h2>
        </div>

        {/* 2-Column Content with Botanical Illustration in Center */}
        <div className="row align-items-center justify-content-between g-4 text-start">
          
          {/* Column 1 */}
          <div className="col-lg-5">
            <p 
              className="mb-0" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif", 
                fontSize: '16px', 
                color: '#4A423B', 
                lineHeight: '1.85',
                fontWeight: 300,
                textAlign: 'justify'
              }}
            >
              Hello there, if we were sitting together over coffee, we'd probably be talking about how beautifully messy life can be. Born in New Delhi, raised across the Middle East, I now call California home. Living across cultures taught me that every story deserves kindness. For years, I've helped people see more clearly as an ophthalmic doctor but the deepest kind of seeing was never about eyesight. It's about perspective and awareness. Today, I still see patients, but I also write, create, speak, and share what life has taught me.
            </p>
          </div>

          {/* Center Line Illustration (Botanical Flower Icon) */}
          <div className="col-lg-2 text-center py-3 py-lg-0 d-flex justify-content-center align-items-center">
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
          <div className="col-lg-5">
            <p 
              className="mb-0" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif", 
                fontSize: '16px', 
                color: '#4A423B', 
                lineHeight: '1.85',
                fontWeight: 300,
                textAlign: 'justify'
              }}
            >
              My work has grown into books and journals, Ārogini, Canvas & Quotations, and my YouTube channel, work that's brought a Pushcart Prize nomination, Rotary International's 2025 Poet of the Year recognition, and a seat as Commissioner on Fremont's Art Review Board. Away from the clinic, you'll find me on a nature trail, doing yoga, reading, or sitting with a notebook and coffee, learning to slow down and live with intention. I don't have all the answers, but I believe in a thoughtful word, an honest chat, and a little more awareness.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

