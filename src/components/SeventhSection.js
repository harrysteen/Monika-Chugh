'use client';

export default function SeventhSection() {
  // Array of logos for seamless infinite loop ticker
  const logos = Array(12).fill('/images/thrive_logo_section7.svg');

  return (
    <section 
      id="section-7-marquee" 
      className="py-4 overflow-hidden position-relative w-100"
      style={{ 
        backgroundColor: '#F7E5B5',
        borderTop: '1px solid rgba(164, 78, 14, 0.08)',
        borderBottom: '1px solid rgba(164, 78, 14, 0.08)'
      }}
    >
      <div className="marquee-container d-flex align-items-center">
        {/* Track 1 */}
        <div className="marquee-track d-flex align-items-center">
          {logos.map((logo, index) => (
            <div 
              key={`logo-1-${index}`} 
              className="d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ padding: '0 45px' }}
            >
              <img 
                src={logo} 
                alt="Thrive Global" 
                style={{ 
                  height: '42px', 
                  width: 'auto',
                  display: 'block'
                }} 
              />
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless infinite scrolling) */}
        <div className="marquee-track d-flex align-items-center" aria-hidden="true">
          {logos.map((logo, index) => (
            <div 
              key={`logo-2-${index}`} 
              className="d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ padding: '0 45px' }}
            >
              <img 
                src={logo} 
                alt="Thrive Global" 
                style={{ 
                  height: '42px', 
                  width: 'auto',
                  display: 'block'
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
