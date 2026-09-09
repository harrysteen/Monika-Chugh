'use client';

export default function EighthSection() {
  return (
    <section id="section-8" className="py-5 overflow-hidden" style={{ backgroundColor: '#FAF5E8', marginTop: '32px' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        
        {/* Section Header + View All Button (Strictly centered title with right-aligned CTA on desktop, stacked on mobile) */}
        <div className="position-relative mb-4 mb-md-5 max-w-1400 mx-auto d-flex flex-column flex-md-row align-items-center justify-content-center">
          <h2 
            className="mb-0 text-center"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: 'clamp(26px, 6vw, 38px)',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.15',
              letterSpacing: '0.03em'
            }}
          >
            Pirate ipsum ipsumme
          </h2>

          <a 
            href="/books" 
            className="text-decoration-none px-4 py-2 mt-3 mt-md-0 position-md-absolute end-0 d-inline-flex align-items-center justify-content-center transition-all"
            style={{
              fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
              fontSize: '14.5px',
              fontWeight: 400,
              color: '#A44E0E',
              border: '1px solid #A44E0E',
              borderRadius: '2px',
              backgroundColor: 'transparent',
              minWidth: '130px',
              transition: 'all 0.3s ease'
            }}
          >
            View All
          </a>
        </div>

        {/* Main Section Content: Left Paragraph + Center Open Book + Right Paragraph */}
        <div className="row align-items-center justify-content-between max-w-1400 mx-auto g-3 g-lg-4">
          
          {/* Left Flanking Paragraph (Middle-aligned vertically with book) */}
          <div className="col-12 col-lg-3 text-start d-flex flex-column justify-content-center align-self-center py-3 order-2 order-lg-1">
            <p 
              className="mb-3 mx-auto mx-lg-0"
              style={{
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                fontSize: '14px',
                color: '#4A423B',
                lineHeight: '1.65',
                fontWeight: 300,
                maxWidth: '280px'
              }}
            >
              I wrote Balance at a time when I felt anything but balanced. Life felt scattered; some days I was on the edge, some days somewhere in the middle, simply trying to find my footing.
            </p>
            <p 
              className="mb-0 mx-auto mx-lg-0"
              style={{
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                fontSize: '14px',
                color: '#4A423B',
                lineHeight: '1.65',
                fontWeight: 300,
                maxWidth: '280px'
              }}
            >
              The poem came from that search. The puddles, pebbles, boulders, winds, clouds, and even the tiptoeing ballerina became different faces of life as I was experiencing it.
            </p>
          </div>

          {/* Center Open Book Display */}
          <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
            <div 
              className="mx-auto" 
              style={{ 
                width: '100%', 
                maxWidth: '682px', 
                aspectRatio: '682 / 611' 
              }}
            >
              <img 
                src="/images/section_8_book_bg.svg" 
                alt="Balance Poem Book" 
                className="w-100 h-100 object-fit-contain d-block" 
              />
            </div>
          </div>

          {/* Right Flanking Paragraph (Bottom-aligned vertically with book) */}
          <div className="col-12 col-lg-3 text-start d-flex flex-column justify-content-end align-self-end pb-lg-5 mb-lg-3 order-3">
            <p 
              className="mb-3 text-start mx-auto mx-lg-0"
              style={{
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                fontSize: '14px',
                color: '#4A423B',
                lineHeight: '1.65',
                fontWeight: 300,
                maxWidth: '280px'
              }}
            >
              Perhaps balance isn&apos;t about having everything perfectly in place. Maybe it&apos;s learning to move through all of it.
            </p>
            <p 
              className="mb-0 text-start mx-auto mx-lg-0"
              style={{
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                fontSize: '14px',
                color: '#4A423B',
                lineHeight: '1.65',
                fontWeight: 300,
                maxWidth: '280px'
              }}
            >
              Somewhere between the tears and the joy, the chaos and the stillness, I knew there was hope that I could hold each piece with a little more grace.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
