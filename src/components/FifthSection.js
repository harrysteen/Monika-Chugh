'use client';

export default function FifthSection() {
  return (
    <section id="quote-of-the-month" className="py-4 py-md-5 bg-cream overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container px-3 px-md-4 px-lg-5">
        
        {/* Quote Card with Responsive Background Image (home_section5_bg_mobile.svg on mobile, home_section5_bg.svg on desktop) */}
        <div className="quote-card mx-auto position-relative d-flex align-items-center justify-content-center my-2">
          
          {/* Centered Overlay Content Block with constrained width to prevent overlapping photos */}
          <div className="quote-content text-center">
            
            {/* Header: quote of the month */}
            <span className="d-block quote-header">
              quote of the month
            </span>

            {/* Quote Icon */}
            <div className="quote-symbol-container d-flex justify-content-center align-items-center">
              <span className="quote-symbol">
                “
              </span>
            </div>

            {/* Quotation Poem Body Text (Center aligned poem) */}
            <div className="quote-body mx-auto text-center">
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
            <div className="text-end quote-author-container">
              <span className="quote-author">
                ~ monikachugh
              </span>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        .quote-card {
          background-image: url('/images/home_section5_bg_mobile.svg');
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 400 / 485;
          border-radius: 4px;
          padding: 24px 20px 36px 20px;
        }

        .quote-content {
          max-width: 310px;
          width: 100%;
          z-index: 2;
          transform: translateY(-8px);
        }

        .quote-header {
          font-family: 'Italianno', cursive;
          font-size: clamp(24px, 5.5vw, 28px);
          color: #A44E0E;
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .quote-symbol {
          font-size: clamp(26px, 6vw, 32px);
          font-family: 'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif;
          color: #62350A;
          line-height: 0.8;
          font-weight: 700;
          display: inline-block;
        }

        .quote-symbol-container {
          margin-bottom: 8px;
        }

        .quote-body {
          font-family: 'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif;
          font-size: clamp(12.5px, 3.2vw, 14.5px);
          color: #422207;
          line-height: 1.55;
          font-weight: 300;
          margin-bottom: 8px;
        }

        .quote-author-container {
          padding-right: 6px;
        }

        .quote-author {
          font-family: 'Italianno', cursive;
          font-size: clamp(20px, 4.5vw, 25px);
          color: #422207;
          font-weight: 400;
          line-height: 1;
        }

        @media (min-width: 768px) {
          .quote-card {
            background-image: url('/images/home_section5_bg.svg');
            max-width: 1050px;
            aspect-ratio: 985 / 412;
            padding: 24px 32px;
          }

          .quote-content {
            max-width: 400px;
            transform: translateY(-10px);
          }

          .quote-header {
            font-size: 32px;
            margin-bottom: 12px;
          }

          .quote-symbol {
            font-size: 36px;
          }

          .quote-symbol-container {
            margin-bottom: 12px;
          }

          .quote-body {
            font-size: 15px;
            line-height: 1.65;
            margin-bottom: 12px;
          }

          .quote-author-container {
            padding-right: 8px;
          }

          .quote-author {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}
