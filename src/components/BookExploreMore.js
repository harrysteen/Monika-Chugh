'use client';

export default function BookExploreMore() {
  const books = [
    {
      id: 1,
      title: 'Quote Café - Thoughts in a Cup',
      image: '/images/books/book2.png',
      href: '/books/quote-cafe'
    },
    {
      id: 2,
      title: 'A Quiet Zone with Affirmations',
      image: '/images/books/book1.png',
      href: '/books/affirmations'
    },
    {
      id: 3,
      title: 'The Invention of Exile / Figments',
      image: '/images/book_cover.png',
      href: '/books'
    }
  ];

  return (
    <section className="py-5 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Framed Container Box matching Figma */}
        <div 
          className="p-4 p-md-5 rounded-1"
          style={{
            border: '1px solid #C4A57B',
            backgroundColor: '#FCF8F2'
          }}
        >
          <div className="row g-4 g-xl-5 align-items-center">
            
            {/* Left Column: Heading & Description & Button */}
            <div className="col-12 col-lg-5 text-center text-lg-start pe-lg-4">
              <span 
                className="d-block mb-1"
                style={{
                  fontFamily: "'Italianno', cursive",
                  fontSize: '34px',
                  color: '#A44E0E',
                  fontWeight: 400,
                  lineHeight: '100%'
                }}
              >
                my books
              </span>
              <h2 
                className="mb-3"
                style={{
                  fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                  fontSize: '38px',
                  color: '#422207',
                  fontWeight: 400,
                  lineHeight: '1.2'
                }}
              >
                Explore more
              </h2>

              <p 
                className="mb-4"
                style={{
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#4A423B',
                  lineHeight: '1.7',
                  fontWeight: 300
                }}
              >
                The 40 Rules of Love brings together two stories across different times, exploring love, spirituality, and the transformative power of connection. A thought-provoking journey that invites us to look within and see love from a different The 40 Rules of Love brings together two stories across different times, exploring love, spirituality,
              </p>

              <div>
                <a 
                  href="/books" 
                  className="btn-figma-outline d-inline-block text-decoration-none px-5 py-2"
                  style={{
                    fontFamily: "'Larken', 'Lora', serif",
                    fontSize: '15px',
                    color: '#422207',
                    border: '1px solid #A44E0E',
                    borderRadius: '2px',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  More Books
                </a>
              </div>
            </div>

            {/* Right Column: 3 Book Covers */}
            <div className="col-12 col-lg-7">
              <div className="row g-3 g-md-4 justify-content-center">
                {books.map((book) => (
                  <div key={book.id} className="col-4 col-sm-4 text-center">
                    <a href={book.href} className="d-block text-decoration-none group">
                      <div 
                        className="mx-auto rounded-1 overflow-hidden shadow-sm"
                        style={{
                          maxWidth: '190px',
                          aspectRatio: '1 / 1.5',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        <img 
                          src={book.image} 
                          alt={book.title} 
                          className="w-100 h-100 object-cover d-block"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
