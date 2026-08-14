'use client';

export default function MyStoryNote() {
  return (
    <section className="py-5 bg-cream position-relative" id="story-note">
      <div className="container px-3 px-md-4 px-lg-5">
        
        {/* Arched Framed Outer Container */}
        <div className="arched-framed-container p-4 p-md-5">
          
          {/* Top Subtitle */}
          <div className="text-center mb-5">
            <span className="font-handwriting fs-2 text-bronze d-block" style={{ color: '#A44E0E' }}>
              a note from monika chugh
            </span>
          </div>

          <div className="row g-4 g-lg-5 align-items-center justify-content-center">
            
            {/* Left Column: Portrait */}
            <div className="col-lg-5 col-xl-5">
              <div className="rounded-4 overflow-hidden shadow-sm">
                <img 
                  src="/images/mystory/note_portrait.png" 
                  alt="Monika Chugh sitting peacefully" 
                  className="w-100 h-100 object-fit-cover"
                  style={{ maxHeight: '560px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: Handwritten Yellow Note Card */}
            <div className="col-lg-7 col-xl-7">
              <div className="torn-paper-card p-4 p-md-5 position-relative">
                
                <h3 className="font-handwriting display-4 text-dark mb-4" style={{ color: '#422207' }}>
                  I am Monika Chugh
                </h3>

                <div className="font-handwriting fs-4 leading-relaxed text-dark" style={{ color: '#422207', lineHeight: 1.6 }}>
                  <p className="mb-4">
                    Dear reader, thank you for taking a moment to step into my world. Life is a collection of quiet moments, courageous choices, and continuous inner growth.
                  </p>

                  <p className="mb-4">
                    Whether you are seeking inspiration in words, peace in art, or connection through shared stories, my wish for you is to listen closely to your own heart and honor the unique light you carry.
                  </p>

                  <p className="mb-4">
                    May your path be filled with warmth, bold creativity, and profound self-love.
                  </p>

                  <div className="pt-3 text-end">
                    <span className="d-block fs-3 font-handwriting" style={{ color: '#A44E0E' }}>
                      With warmth & gratitude,
                    </span>
                    <span className="d-block fs-2 font-handwriting fw-bold" style={{ color: '#62350A' }}>
                      Monika Chugh
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
