'use client';

export default function TenthSection() {
  const cards = [
    // Row 1
    {
      id: 1,
      type: 'image',
      src: '/images/home section 10 row1 img1.png',
      alt: 'Hang out with yourself tote bag'
    },
    {
      id: 2,
      type: 'quote',
      bg: '#FBF3EA',
      title: 'Our Designs',
      text: 'Explore our collection of exclusive designs, thoughtfully crafted with attention to detail and intention. Each piece tells a story, bringing together imagination and artistry to create something distinctive, meaningful, and made to inspire.'
    },
    {
      id: 3,
      type: 'image',
      src: '/images/home section 10 row1 img2.png',
      alt: 'Person carrying tote bag'
    },

    // Row 2
    {
      id: 4,
      type: 'image',
      src: '/images/home section 10 row2 img1.png',
      alt: 'Lotus Whispers framed art'
    },
    {
      id: 5,
      type: 'image',
      src: '/images/home section 10 row2 img2.png',
      alt: 'Tote bag on chair'
    },
    {
      id: 6,
      type: 'image',
      src: '/images/home section 10 row2 img3.png',
      alt: 'Chaos to Calm framed artwork'
    },

    // Row 3
    {
      id: 7,
      type: 'quote',
      bg: '#FBE5A3',
      title: 'Art Meets Words',
      text: 'Each piece is a dialogue between visual beauty and meaningful words. By blending art with wisdom, our creations encourage self-expression and offer gentle reminders of strength, hope, and possibility transforming everyday spaces and objects into something more personal.'
    },
    {
      id: 8,
      type: 'image',
      src: '/images/home section 10 row3 img1.png',
      alt: 'Imperfectly perfect ceramic mug'
    },
    {
      id: 9,
      type: 'quote',
      bg: '#FBE2CF',
      title: 'Our Philosophy',
      text: 'We embrace imperfection and individuality, believing they give life its character and beauty. Inspired by the natural rhythms of life, our work celebrates growth, authenticity, and the beauty of being human.\n\nOur promise is simple: to create art and words that speak to the soul and help shape spaces that feel uniquely yours.'
    }
  ];

  return (
    <section id="canvas-quotations" className="py-5 overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        
        {/* Section Header + Shop Now Button */}
        <div className="position-relative mb-4 mb-md-5 max-w-1400 mx-auto px-2">
          {/* Centered Title & Description */}
          <div className="text-center mx-auto" style={{ maxWidth: '760px' }}>
            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '36px',
                color: '#A44E0E',
                fontWeight: 400,
                lineHeight: '1.2'
              }}
            >
              canvas &amp; quotations
            </span>

            <p 
              className="mx-auto mb-0"
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '15px',
                color: '#4A423B',
                lineHeight: '1.65',
                maxWidth: '680px',
                fontWeight: 400
              }}
            >
              At Canvas &amp; Quotations, we believe in the power of art and words to transform the everyday. Our creations bring together thoughtful quotes, uplifting affirmations, and expressive design crafted to inspire reflection, spark joy, and add meaning to the spaces and moments around us.
            </p>
          </div>

          {/* Shop Now CTA - Absolute positioned on desktop for perfect center alignment */}
          <div className="text-center text-md-end mt-3 mt-md-0 position-md-absolute end-0 top-50 translate-middle-y-md">
            <a 
              href="https://www.etsy.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none px-4 py-2 d-inline-flex align-items-center justify-content-center transition-all"
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
              Shop Now
            </a>
          </div>
        </div>

        {/* 9-Tile Canvas & Quotations Grid (3 Rows x 3 Columns) */}
        <div className="max-w-1400 mx-auto">
          <div className="row g-0">
            {cards.map((card) => (
              <div key={card.id} className="col-12 col-md-4">
                {card.type === 'image' ? (
                  <div 
                    className="w-100 overflow-hidden" 
                    style={{ aspectRatio: '1 / 1', minHeight: '340px' }}
                  >
                    <img 
                      src={card.src} 
                      alt={card.alt} 
                      className="w-100 h-100 object-fit-cover transition-transform duration-500 hover:scale-105"
                      style={{ transition: 'transform 0.5s ease' }}
                    />
                  </div>
                ) : (
                  <div 
                    className="w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 p-xl-5 text-center"
                    style={{ 
                      backgroundColor: card.bg,
                      aspectRatio: '1 / 1',
                      minHeight: '340px'
                    }}
                  >
                    {/* Quotation Mark Icon */}
                    <div className="mb-2">
                      <span 
                        style={{
                          fontFamily: "'Georgia', serif",
                          fontSize: '44px',
                          color: '#62350A',
                          lineHeight: '0.8',
                          display: 'block'
                        }}
                      >
                        “
                      </span>
                    </div>

                    {/* Card Title */}
                    {card.title && (
                      <h3
                        className="mb-3"
                        style={{
                          fontFamily: "'Larken', 'Lora', serif",
                          fontSize: '20px',
                          fontWeight: 600,
                          color: '#422207',
                          letterSpacing: '0.01em'
                        }}
                      >
                        {card.title}
                      </h3>
                    )}

                    {/* Card Description */}
                    <div 
                      className="mb-0"
                      style={{
                        fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                        fontSize: '13.5px',
                        color: '#4A3B2C',
                        lineHeight: '1.65',
                        fontWeight: 400,
                        maxWidth: '350px',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {card.text}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

