'use client';

export default function BookDetailHero({ onBuyNow }) {
  return (
    <section className="pt-4 pb-5 bg-cream position-relative" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        <div className="row align-items-center g-4 g-lg-5">
          
          {/* Left Column: 3D Book Stack Mockup */}
          <div className="col-12 col-lg-6 text-center">
            <div 
              className="mx-auto overflow-hidden rounded-1"
              style={{
                maxWidth: '520px'
              }}
            >
              <img 
                src="/images/books/quote_cafe_3d_stack.jpg" 
                alt="Quote Cafe – Thoughts in a Cup by Monika Chugh" 
                className="img-fluid w-100 h-auto d-block mx-auto rounded-1"
                style={{
                  maxHeight: '520px',
                  objectFit: 'contain'
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
                fontSize: '46px',
                color: '#62350A',
                fontWeight: 400,
                lineHeight: '1.15',
                letterSpacing: '0.02em'
              }}
            >
              Quote Cafe – Thoughts In a Cup
            </h1>

            <p 
              className="mb-4"
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '15.5px',
                color: '#4A423B',
                lineHeight: '1.75',
                maxWidth: '560px',
                fontWeight: 300
              }}
            >
              The 40 Rules of Love brings together two stories across different times, exploring love, spirituality, and the transformative power of connection. A thought-provoking journey that invites us to look within and see love from a different The 40 Rules of Love brings together two stories across different times, exploring love, spirituality,
            </p>

            <div>
              <button
                type="button"
                onClick={onBuyNow}
                className="btn-figma-outline px-5 py-2 text-decoration-none"
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
                Buy Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
