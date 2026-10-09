'use client';

export default function BookDetailHero({ book, onBuyNow }) {
  return (
    <section className="pt-4 pb-5 bg-cream position-relative" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        <div className="row align-items-center g-4 g-lg-5">
          
          {/* Left Column: book image */}
          <div className="col-12 col-lg-6 text-center">
            <div 
              className="mx-auto"
              style={{
                maxWidth: book.heroMaxWidth
              }}
            >
              <img 
                src={book.heroImage}
                alt={`${book.title} by Monika Chugh`}
                className="img-fluid w-100 h-auto d-block mx-auto"
                style={{
                  maxHeight: '520px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 14px 18px rgba(0,0,0,0.12))'
                }}
              />
            </div>
          </div>

          {/* Right Column: Title, Description, Buy Now */}
          <div className="col-12 col-lg-6 text-center text-lg-start ps-lg-4">
            <h1 
              className="mb-3"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: 'clamp(26px, 2.5vw, 38px)',
                color: '#62350A',
                fontWeight: 400,
                lineHeight: '1.15',
                letterSpacing: '0.02em',
                WebkitTextStroke: '0.8px currentColor'
              }}
            >
              {book.title}
            </h1>

            <p 
              className="mb-5"
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '15.5px',
                color: '#4A423B',
                lineHeight: '1.75',
                maxWidth: '560px',
                fontWeight: 300,
                textAlign: 'justify'
              }}
            >
              {book.description}
            </p>

            <div>
              <button
                type="button"
                onClick={onBuyNow}
                className="btn-figma-outline px-5 py-2 text-decoration-none"
                style={{
                  minWidth: '250px',
                  fontFamily: "'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#422207',
                  border: '1px solid #A44E0E',
                  borderRadius: '2px',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                Buy Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
