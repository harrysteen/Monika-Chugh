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
              fontSize: '24px',
              color: '#422207',
              letterSpacing: '0.01em',
              lineHeight: 1.25
            }}
          >
            Monika here.
          </h2>
        </div>

        {/* 2-Column Content with Botanical Illustration in Center */}
        <div className="row align-items-center justify-content-between g-4 text-start">
          
          {/* Column 1 */}
          <div className="col-lg-5">
            <p 
              className="mb-3" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif", 
                fontSize: '16px', 
                color: '#4A423B', 
                lineHeight: '1.85',
                fontWeight: 300
              }}
            >
              A medical professional. A writer at heart. Endlessly curious about life.
            </p>
            <p 
              className="mb-0" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif", 
                fontSize: '16px', 
                color: '#4A423B', 
                lineHeight: '1.85',
                fontWeight: 300
              }}
            >
              Some know me as a doctor who writes, others as a writer who happens to be a doctor.
            </p>
          </div>

          {/* Center Line Illustration (Botanical Flower SVG) */}
          <div className="col-lg-2 text-center py-3 py-lg-0 d-flex justify-content-center align-items-center">
            <img 
              src="/images/mystory/my_story_second_section_icon.svg" 
              alt="Botanical ornament"
              style={{ 
                width: '45px', 
                height: '89px',
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
                fontWeight: 300
              }}
            >
              And somewhere between the two, I&apos;m simply living, learning, and creating.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

