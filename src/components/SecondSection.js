'use client';

export default function SecondSection() {
  return (
    <section id="recent-favorite" className="py-5 bg-cream position-relative overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container px-3 px-md-4">
        
        {/* Paper Background Card with Torn/Deckled Edges (home_second_section_bg.svg) */}
        <div 
          className="second-section-paper-card mx-auto position-relative p-4 p-md-5 d-flex align-items-center"
          style={{
            backgroundImage: "url('/images/home_second_section_bg.svg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maxWidth: '1136px',
            minHeight: '380px',
            borderRadius: '4px'
          }}
        >
          <div className="row align-items-center g-4 g-lg-5 w-100 m-0">
            
            {/* Left Side: Book / Journal Cover Image */}
            <div className="col-12 col-md-5 col-lg-4 text-center">
              <div className="position-relative d-inline-block">
                <img 
                  src="/images/book_cover.png" 
                  alt="Lotus Whispers Guided Mindfulness Journal" 
                  className="img-fluid rounded-4 shadow-sm"
                  style={{ maxHeight: '310px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Right Side: Text & Details */}
            <div className="col-12 col-md-7 col-lg-8">
              <div className="pe-lg-3 text-start position-relative">
                
                {/* Script Header: Everyone's Recent Favorite */}
                <span 
                  className="d-block mb-2 text-center text-md-start"
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
                    color: '#A44E0E',
                    fontWeight: 400,
                    lineHeight: '100%'
                  }}
                >
                  Everyone's Recent Favorite
                </span>

                {/* Title: Lotus Whispers Guided Mindfulness Journal */}
                <h2 
                  className="mb-3 text-center text-md-start"
                  style={{
                    fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                    fontSize: '32px',
                    color: '#422207',
                    fontWeight: 400,
                    lineHeight: '1.15',
                    letterSpacing: '0.02em'
                  }}
                >
                  Lotus Whispers Guided Mindfulness Journal
                </h2>

                {/* Subtitle Details */}
                <p 
                  className="mb-3 text-center text-md-start"
                  style={{
                    fontFamily: "'Larken', 'Lora', serif",
                    fontSize: '14px',
                    color: '#5C5248',
                    lineHeight: '1.5',
                    fontWeight: 400
                  }}
                >
                  LOTUS WHISPERS — Within &amp; Between A Guided Mindfulness &amp; Reflection Journal Words by Monika Chugh · Art by Alka Chopra · Mindful Seeker Series.
                </p>

                {/* Paragraph & Arrow */}
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <p 
                    className="mb-0"
                    style={{
                      fontFamily: "'Larken', 'Lora', serif",
                      fontSize: '15px',
                      color: '#4A423B',
                      lineHeight: '1.65',
                      fontWeight: 400,
                      maxWidth: '560px'
                    }}
                  >
                    Rooted in the symbolism of the lotus, a flower that rises through still water and unfolds in its own time, this is not a journal to perform or perfect. It's a sanctuary for the thoughts, emotions, and truths that have simply been waiting to be seen.
                  </p>

                  {/* Right Arrow Icon */}
                  <a href="#books" className="text-decoration-none fs-4 px-2 flex-shrink-0" style={{ color: '#422207' }}>
                    <i className="bi bi-arrow-right" style={{ fontSize: '28px', color: '#422207' }}></i>
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
