'use client';

export default function MyStoryHero() {
  return (
    <section className="py-5 bg-cream position-relative overflow-hidden" id="story-hero">
      <div className="container px-3 px-md-4 px-lg-5">
        <div className="position-relative rounded-4 overflow-hidden shadow-sm" style={{ minHeight: '540px' }}>
          
          {/* Main Background Image (Warm Archway Room) */}
          <div 
            className="position-absolute top-0 start-0 w-100 h-100" 
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(255,253,249,0.3) 0%, rgba(255,253,249,0) 100%), url('/images/home_second_section_bg.svg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          />

          <div className="row g-0 align-items-center position-relative p-4 p-md-5" style={{ zIndex: 2 }}>
            
            {/* Left Column: Torn Paper Card */}
            <div className="col-lg-6 col-xl-5 mb-4 mb-lg-0">
              <div className="torn-paper-card p-4 p-md-5 position-relative">
                
                {/* Circular Badge: # THE BOLD WITHIN ME */}
                <div 
                  className="position-absolute d-none d-sm-block" 
                  style={{ top: '-35px', right: '-25px', zIndex: 3, width: '130px', height: '130px' }}
                >
                  <svg viewBox="0 0 160 160" width="100%" height="100%">
                    <path
                      id="circlePath"
                      d="M 80, 80 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                      fill="transparent"
                    />
                    <text fill="#62350A" fontSize="12" fontWeight="600" letterSpacing="3">
                      <textPath href="#circlePath" startOffset="0%">
                        # THE BOLD WITHIN ME •
                      </textPath>
                    </text>
                  </svg>
                </div>

                <span className="font-handwriting display-4 text-bronze d-block mb-1" style={{ color: '#A44E0E' }}>
                  Hi!
                </span>
                <h1 className="font-handwriting display-3 fw-normal mb-4" style={{ color: '#422207', lineHeight: 1.1 }}>
                  I am Monika Chugh
                </h1>

                <p className="font-paragraph text-body fs-6 leading-relaxed mb-0" style={{ color: '#4A423B', maxWidth: '420px' }}>
                  Welcome to my corner of reflection, creativity, and inner empowerment. Through words, canvas art, and soulful expressions, I invite you to discover the bold, authentic spirit within your own life.
                </p>
              </div>
            </div>

            {/* Right Column: Hero Image with Monika holding book */}
            <div className="col-lg-6 col-xl-7 d-flex justify-content-center justify-content-lg-end">
              <div className="position-relative" style={{ maxWidth: '480px', width: '100%' }}>
                <img 
                  src="/images/mystory/hero_monika.png" 
                  alt="Monika Chugh holding Quote Cafe book" 
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ 
                    maxHeight: '520px', 
                    objectFit: 'cover', 
                    width: '100%',
                    border: '4px solid #FFFDF9'
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
