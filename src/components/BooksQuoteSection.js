'use client';

export default function BooksQuoteSection() {
  return (
    <section className="py-5 bg-cream position-relative" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Arched or Framed Testimonial / Reader Note Banner */}
        <div 
          className="p-4 p-md-5 mx-auto text-center rounded-2 position-relative"
          style={{
            backgroundColor: '#F8EEDF',
            backgroundImage: 'radial-gradient(#E2CFB4 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            border: '1px solid #E2D5C3',
            maxWidth: '1240px'
          }}
        >
          <span 
            className="d-block mb-2 font-handwriting"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '38px',
              color: '#A44E0E',
              fontWeight: 400,
              lineHeight: '100%'
            }}
          >
            a note from Monika
          </span>

          <blockquote 
            className="mx-auto my-3"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '24px',
              color: '#422207',
              maxWidth: '820px',
              lineHeight: '1.4',
              fontWeight: 400
            }}
          >
            “Every page I write is an outstretched hand in the dark—a gentle reminder that our wounds, our quiet wonders, and our healing are all deeply interconnected.”
          </blockquote>

          <div className="d-flex align-items-center justify-content-center gap-2 mt-4">
            <div style={{ height: '1px', width: '40px', backgroundColor: '#A44E0E' }}></div>
            <span 
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '14px',
                color: '#62350A',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Monika Chugh
            </span>
            <div style={{ height: '1px', width: '40px', backgroundColor: '#A44E0E' }}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
