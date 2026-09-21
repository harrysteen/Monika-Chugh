'use client';

export default function MyStoryNote() {
  return (
    <section className="py-5 bg-cream position-relative overflow-hidden w-100" id="story-note">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1280px' }}>
        
        {/* High-Resolution "A Note From Me" Banner */}
        <div className="w-100 mx-auto d-flex justify-content-center align-items-center py-2 mb-4">
          <img 
            src="/images/mystory/a_note_from_me.png" 
            alt="A note from me - I am Monika." 
            className="w-100 h-auto d-block"
            style={{ 
              maxWidth: '1180px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Closing Blessing Quote Callout */}
        <div className="pt-3 pb-2 text-center mx-auto" style={{ maxWidth: '780px' }}>
          
          {/* Line 1: If I can heal Someone Somewhere on this planet */}
          <div className="d-flex align-items-baseline justify-content-center flex-wrap gap-2 mb-2">
            <span 
              style={{ 
                fontFamily: "'Courier Prime', 'Courier New', 'Special Elite', monospace", 
                fontSize: '17px', 
                color: '#422207', 
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}
            >
              If I can heal
            </span>
            <span 
              style={{ 
                fontFamily: "'Italianno', cursive", 
                fontSize: '34px', 
                color: '#A44E0E', 
                lineHeight: 1,
                padding: '0 2px'
              }}
            >
              Someone Somewhere
            </span>
            <span 
              style={{ 
                fontFamily: "'Courier Prime', 'Courier New', 'Special Elite', monospace", 
                fontSize: '17px', 
                color: '#422207', 
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}
            >
              on this planet
            </span>
          </div>

          {/* Line 2: with the magic of my pen. (with horizontal lines) */}
          <div className="d-flex align-items-center justify-content-center my-2">
            <div 
              style={{ 
                flex: 1, 
                maxWidth: '160px', 
                height: '1px', 
                backgroundColor: '#D4C0A8' 
              }} 
            />
            <span 
              className="px-3" 
              style={{ 
                fontFamily: "'Courier Prime', 'Courier New', 'Special Elite', monospace", 
                fontSize: '16px', 
                color: '#422207', 
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}
            >
              with the magic of my pen.
            </span>
            <div 
              style={{ 
                flex: 1, 
                maxWidth: '160px', 
                height: '1px', 
                backgroundColor: '#D4C0A8' 
              }} 
            />
          </div>

          {/* Line 3: I will consider myself One blessed Soul. */}
          <div className="d-flex align-items-baseline justify-content-center flex-wrap gap-2 mt-2">
            <span 
              style={{ 
                fontFamily: "'Courier Prime', 'Courier New', 'Special Elite', monospace", 
                fontSize: '17px', 
                color: '#422207', 
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}
            >
              I will consider myself
            </span>
            <span 
              style={{ 
                fontFamily: "'Italianno', cursive", 
                fontSize: '34px', 
                color: '#A44E0E', 
                lineHeight: 1,
                padding: '0 2px'
              }}
            >
              One blessed Soul.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
