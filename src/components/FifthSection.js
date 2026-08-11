'use client';

export default function FifthSection() {
  return (
    <section id="quote-of-the-month" className="py-5 bg-cream overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container px-3 px-md-4 px-lg-5">
        
        {/* Quote Card with Background Image home_section5_bg.svg and Live HTML Overlay Text */}
        <div 
          className="mx-auto position-relative d-flex align-items-center justify-content-center p-4 p-md-5 my-2"
          style={{
            backgroundImage: "url('/images/home_section5_bg.svg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maxWidth: '1136px',
            minHeight: '440px',
            borderRadius: '4px'
          }}
        >
          {/* Centered Overlay Content Block */}
          <div className="text-center py-4 px-3" style={{ maxWidth: '580px', zIndex: 2 }}>
            
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
            <div className="mb-3">
              <span 
                style={{ 
                  fontSize: '38px', 
                  fontFamily: "'Larken', serif", 
                  color: '#62350A', 
                  lineHeight: '1',
                  display: 'inline-block'
                }}
              >
                “
              </span>
            </div>

            {/* Quotation Body Text */}
            <p 
              className="mb-4 mx-auto"
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '16px',
                color: '#4A423B',
                lineHeight: '1.7',
                fontWeight: 400,
                maxWidth: '520px'
              }}
            >
              Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the.
            </p>

            {/* Author Signature */}
            <span 
              className="d-block"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '30px',
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
    </section>
  );
}
