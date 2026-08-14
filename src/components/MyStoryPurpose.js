'use client';

export default function MyStoryPurpose() {
  return (
    <section className="py-5 bg-cream position-relative" id="story-purpose">
      <div className="container px-3 px-md-4 px-lg-5">
        <div className="purpose-pattern-bg p-4 p-md-5 rounded-4 shadow-sm text-center border border-cream position-relative overflow-hidden">
          
          {/* Subtle Background Watermark Leaf Pattern */}
          <div 
            className="position-absolute top-0 start-0 w-100 h-100 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url('/images/section_5_bg.svg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          <div className="position-relative z-2 max-w-75 mx-auto" style={{ maxWidth: '820px' }}>
            
            <span className="font-handwriting fs-2 text-bronze d-block mb-1" style={{ color: '#A44E0E' }}>
              purpose behind my work
            </span>
            <h2 className="font-big-header display-5 fw-normal text-dark mb-4">
              Inspiring Authentic Living & Soulful Well-being
            </h2>

            <p className="font-paragraph text-body fs-6 leading-relaxed mb-4" style={{ color: '#4A423B' }}>
              At the heart of every project I undertake is a passion for helping individuals reconnect with their innate wisdom and live authentically. I believe that creativity is not merely a tool for artistic output—it is a sacred bridge to self-awareness, emotional liberation, and personal harmony.
            </p>

            <p className="font-paragraph text-body fs-6 leading-relaxed mb-0" style={{ color: '#4A423B' }}>
              Through initiatives like <strong className="fw-bold text-dark" style={{ color: '#422207' }}>AROGINI</strong>, I integrate holistic mindfulness, creative reflection, and empowering dialogues to encourage balance in mind, body, and spirit. My hope is to leave every reader and listener with a renewed sense of purpose and peace.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
