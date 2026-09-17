'use client';

export default function SeventhSection() {
  // 3 scrolling logos from home page assets
  const logoItems = [
    {
      id: 'thrive',
      src: '/images/thrive_logo_section7.svg',
      alt: 'Thrive Global',
      height: '38px'
    },
    {
      id: 'wordpress',
      src: '/images/home_section7_logo2_cropped.png',
      alt: 'WordPress',
      height: '28px'
    },
    {
      id: 'ws',
      src: '/images/home_section7_logo3_cropped.png',
      alt: 'WS',
      height: '42px'
    }
  ];

  // Repeat sequence 4 times for a rich 12-item track in each marquee loop
  const logos = [
    ...logoItems,
    ...logoItems,
    ...logoItems,
    ...logoItems
  ];

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
          {logos.map((item, index) => (
            <div 
              key={`logo-1-${index}`} 
              className="d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ padding: '0 45px' }}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                style={{ 
                  height: item.height, 
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }} 
              />
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless infinite scrolling) */}
        <div className="marquee-track d-flex align-items-center" aria-hidden="true">
          {logos.map((item, index) => (
            <div 
              key={`logo-2-${index}`} 
              className="d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ padding: '0 45px' }}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                style={{ 
                  height: item.height, 
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
