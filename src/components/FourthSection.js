'use client';

export default function FourthSection() {
  const books = [
    {
      id: 1,
      title: "quote cafe",
      cover: "/images/home_section4_book1.svg",
      description: "Some stories wait until we find the courage to share them. Quote Café began when I found mine. A sanctuary of reflections, affirmations, and short poems on self-love, forgiveness, and letting go. This is my story. Perhaps you’ll find a little of yours here."
    },
    {
      id: 2,
      title: "a quote zone with affirmations",
      cover: "/images/home_section4_book2.svg",
      description: "“Take care of yourself; the world can wait.” A reminder I often gave my patients, and slowly learned to offer myself. A Quiet Zone With Affirmations began in my journals, with words I needed to hear. In my own company, writing became a daily ritual. Make a little room for yourself here."
    },
    {
      id: 3,
      title: "Rebirth - The Phoenix Rising",
      cover: "/images/home_section4_book3.svg",
      description: "The phoenix is the symbol of renewal and rebirth. As one life ends, a nest is built, the old phoenix sets fire to itself, and a new one emerges from the ashes. Rebirth and renewal are never easy, as the stories of these brave women will testify. Each shares a story of a fragmented and fractured life. To feel safe and secure often means stepping through layers of darkness and fragments of yourself to find the light and a way back to who you truly are."
    }
  ];

  return (
    <section id="my-books" className="py-5 bg-cream overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span 
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: 'clamp(24px, 3vw, 28px)',
              color: '#A44E0E',
              fontWeight: 400,
              lineHeight: '100%'
            }}
          >
            my books
          </span>
          <h2 
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: 'clamp(24px, 2.8vw, 32px)',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.15',
              letterSpacing: '0.02em'
            }}
          >
            Sip slowly. Read deeper.
          </h2>
        </div>

        {/* 3-Column Grid for Books with equal height stretch and aligned CTAs */}
        <div className="row g-4 g-xl-5 justify-content-center align-items-stretch max-w-1400 mx-auto">
          {books.map((book) => (
            <div key={book.id} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="w-100 d-flex flex-column flex-sm-row align-items-start gap-3 gap-xl-4 p-2">
                
                {/* Book Cover + Title below (left-aligned with the book image, reduced size, rustic color) */}
                <div className="text-start flex-shrink-0" style={{ width: '145px', maxWidth: '100%' }}>
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="img-fluid rounded shadow-sm mb-3 d-block"
                    style={{ maxHeight: '215px', width: 'auto', objectFit: 'contain' }}
                  />
                  <h3 
                    className="text-start mb-0"
                    style={{
                      fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                      fontSize: '18px',
                      color: '#A44E0E',
                      fontWeight: 400,
                      lineHeight: '1.25',
                      letterSpacing: '0.01em'
                    }}
                  >
                    {book.title}
                  </h3>
                </div>

                {/* Description + Divider + Shop Now Button (mt-auto ensures all buttons align horizontally) */}
                <div className="d-flex flex-column justify-content-between flex-grow-1 h-100 text-start pt-1">
                  <p 
                    className="mb-3"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                      fontSize: '13.5px',
                      color: '#4A423B',
                      lineHeight: '1.65',
                      fontWeight: 400,
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale'
                    }}
                  >
                    {book.description}
                  </p>

                  <div className="mt-auto pt-2 w-100">
                    {/* Horizontal Divider Line */}
                    <div className="mb-3" style={{ height: '1px', backgroundColor: '#E2D5C3', width: '100%' }}></div>
                    
                    {/* Shop Now CTA */}
                    <a 
                      href="#shop" 
                      className="text-decoration-none d-inline-flex align-items-center justify-content-center px-4 py-2 transition-all section4-shop-btn"
                      style={{
                        fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#A44E0E',
                        border: '1px solid #A44E0E',
                        borderRadius: '2px',
                        backgroundColor: '#FFFDF9',
                        minWidth: '120px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Shop Now
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .section4-shop-btn:hover {
          background-color: #A44E0E !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(164, 78, 14, 0.2);
        }
      `}</style>
    </section>
  );
}
