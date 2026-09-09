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
              fontSize: '32px',
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
              fontSize: '38px',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.1',
              letterSpacing: '0.03em'
            }}
          >
            Pirate ipsum ipsumme
          </h2>
        </div>

        {/* 2-Column Grid for Books */}
        <div className="row g-4 g-lg-5 justify-content-center max-w-1400 mx-auto">
          {books.map((book) => (
            <div key={book.id} className="col-12 col-xl-6">
              <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4 p-3">
                
                {/* Book Cover + Title below */}
                <div className="text-center flex-shrink-0" style={{ maxWidth: '240px' }}>
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="img-fluid rounded shadow-sm mb-3 d-block mx-auto"
                    style={{ maxHeight: '310px', width: 'auto', objectFit: 'contain' }}
                  />
                  <h3 
                    style={{
                      fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                      fontSize: '22px',
                      color: '#422207',
                      fontWeight: 400,
                      lineHeight: '1.2'
                    }}
                  >
                    {book.title}
                  </h3>
                </div>

                {/* Description + Divider + Shop Now Button */}
                <div className="d-flex flex-column justify-content-between flex-grow-1 h-100 pt-2 text-center text-md-start">
                  <p 
                    className="mb-4 pb-2"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                      fontSize: '15px',
                      color: '#4A423B',
                      lineHeight: '1.75',
                      fontWeight: 300,
                      maxWidth: '480px'
                    }}
                  >
                    {book.description}
                  </p>

                  <div className="pt-2">
                    {/* Horizontal Divider Line */}
                    <div className="mb-4 mx-auto mx-md-0" style={{ height: '1px', backgroundColor: '#E2D5C3', width: '85%' }}></div>
                    
                    {/* Shop Now CTA */}
                    <a 
                      href="#shop" 
                      className="text-decoration-none d-inline-flex align-items-center justify-content-center px-4 py-2 transition-all"
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

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
