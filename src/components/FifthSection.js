'use client';

export default function FifthSection() {
  return (
    <section id="quote-of-the-month" className="py-5 bg-cream overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container px-3 px-md-4 px-lg-5">
        
        {/* Quote Card with Background Image home_section5_bg.svg and Live HTML Overlay Text */}
        <div 
          className="mx-auto position-relative d-flex align-items-center justify-content-center p-3 p-md-4 my-2"
          style={{
            backgroundImage: "url('/images/home_section5_bg.svg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maxWidth: '1050px',
            minHeight: '430px',
            borderRadius: '4px'
          }}
        >
          {/* Centered Overlay Content Block with constrained width to prevent overlapping photos */}
          <div className="text-center py-3 px-2" style={{ maxWidth: '400px', width: '100%', zIndex: 2, transform: 'translateY(-10px)' }}>
            
            {/* Header: quote of the month */}
            <span 
              className="d-block mb-3"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '32px',
                color: '#A44E0E',
                fontWeight: 400,
                lineHeight: '100%'
              }}
            >
              quote of the month
            </span>

            {/* Quote Icon */}
            <div className="mb-3 d-flex justify-content-center align-items-center">
              <span 
                style={{ 
                  fontSize: '36px', 
                  fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif", 
                  color: '#62350A', 
                  lineHeight: '0.8',
                  fontWeight: 700,
                  display: 'inline-block'
                }}
              >
                “
              </span>
            </div>

            {/* Quotation Poem Body Text (Center aligned poem) */}
            <div 
              className="mb-3 mx-auto text-center"
              style={{
                fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                fontSize: '15px',
                color: '#422207',
                lineHeight: '1.65',
                fontWeight: 300
              }}
            >
              <p className="mb-0">
                the universe has accepted me<br />
                i am a whole being<br />
                my heart is open<br />
                i am ready<br />
                this is just the beginning<br />
                a peaceful revolution within me
              </p>
            </div>

            {/* Author Signature aligned to the right of poem */}
            <div className="text-end pe-2">
              <span 
                style={{
                  fontFamily: "'Italianno', cursive",
                  fontSize: '28px',
                  color: '#422207',
                  fontWeight: 400,
                  lineHeight: '100%'
                }}
              >
                ~ monikachugh
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
