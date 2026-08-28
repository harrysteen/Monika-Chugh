'use client';

export default function BookPraiseTestimonials() {
  return (
    <section className="py-5 bg-cream position-relative overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-5 pb-2">
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
            client love
          </span>
          <h2 
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '38px',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.2'
            }}
          >
            Praise for Quote Cafe - Thoughts In a Cup
          </h2>
        </div>

        {/* Vintage Postcards Layout matching Figma */}
        <div className="row justify-content-center align-items-center g-4 g-lg-5 position-relative pt-2 pb-4">
          
          {/* Card 1: Words from Madhu */}
          <div className="col-12 col-md-5 col-lg-4">
            <div 
              className="p-4 p-lg-5 rounded-1 shadow-sm position-relative"
              style={{
                backgroundColor: '#F7E7CD',
                backgroundImage: 'radial-gradient(#E8D5B5 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                border: '1px solid #DFCAA5',
                transform: 'rotate(-2.5deg)',
                minHeight: '380px',
                boxShadow: '-6px 10px 20px rgba(66, 34, 7, 0.08)'
              }}
            >
              <div className="text-center mb-4">
                <span 
                  className="d-block text-lowercase"
                  style={{
                    fontFamily: "'Beautique Display', 'Cormorant Garamond', serif",
                    fontSize: '22px',
                    color: '#422207'
                  }}
                >
                  words from
                </span>
                <span 
                  className="d-block"
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '26px',
                    color: '#A44E0E'
                  }}
                >
                  ~madhu
                </span>
              </div>

              <p 
                className="mb-4 text-center"
                style={{
                  fontFamily: "'Italianno', cursive",
                  fontSize: '24px',
                  color: '#422207',
                  lineHeight: '1.45',
                  borderTop: '1px solid #D8C39E',
                  borderBottom: '1px solid #D8C39E',
                  padding: '16px 0'
                }}
              >
                I love the way the cover feels and the beautiful art on it. Grab a warm cup of coffee or tea and a blanket and enjoy a fun and inspiring read
              </p>

              <div className="text-end pt-3">
                <span className="small text-muted" style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                  09.18.2025
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Words from Hannah */}
          <div className="col-12 col-md-7 col-lg-6">
            <div 
              className="p-4 p-lg-5 rounded-1 shadow-sm position-relative"
              style={{
                backgroundColor: '#F5E4C6',
                backgroundImage: 'radial-gradient(#E5CFAB 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                border: '1px solid #DCBE96',
                transform: 'rotate(2.5deg)',
                minHeight: '440px',
                boxShadow: '8px 12px 24px rgba(66, 34, 7, 0.1)'
              }}
            >
              <div className="text-center mb-3">
                <span 
                  className="d-block text-lowercase"
                  style={{
                    fontFamily: "'Beautique Display', 'Cormorant Garamond', serif",
                    fontSize: '24px',
                    color: '#422207'
                  }}
                >
                  words from
                </span>
                <span 
                  className="d-block"
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
                    color: '#A44E0E'
                  }}
                >
                  ~hannah
                </span>
              </div>

              <div 
                className="py-2"
                style={{
                  fontFamily: "'Italianno', cursive",
                  fontSize: '23px',
                  color: '#422207',
                  lineHeight: '1.4',
                  borderTop: '1px solid #D8C39E',
                  borderBottom: '1px solid #D8C39E'
                }}
              >
                <p className="mb-2">
                  I loved how the author shared her thoughts so openly and fearlessly to create a powerful connection with the readers. The book serves as a gentle reminder that pain, though inevitable, need not define us. Instead, it can become the catalyst for growth &amp; transformation.
                </p>
                <p className="mb-2">
                  In &ldquo;Quote Cafe - The Silent Soul&rdquo;, the author delicately explores the profound human experiences of loneliness, pain, and betrayal, and how these experiences can serve as stepping stones toward personal growth and self-discovery.
                </p>
                <p className="mb-0">
                  It challenges readers to embrace their vulnerabilities, confront their pain, and embark on the transformative journey toward self-acceptance and inner peace.
                </p>
              </div>

              <div className="text-end pt-3">
                <span className="small text-muted" style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                  08.23.2024
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
