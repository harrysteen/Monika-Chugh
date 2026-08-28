'use client';

export default function BookQuoteCallout({ onGetCopy }) {
  return (
    <section className="py-5 text-center bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container px-3 px-md-4 max-w-1000 mx-auto">
        
        {/* Quote Block */}
        <div className="mb-4">
          <p 
            className="mb-0 mx-auto position-relative"
            style={{
              fontFamily: "'Larken', 'Lora', serif",
              fontSize: '24px',
              fontStyle: 'italic',
              color: '#62350A',
              lineHeight: '1.6',
              maxWidth: '820px'
            }}
          >
            <span 
              className="d-inline-block me-2 opacity-50"
              style={{
                fontFamily: "'Beautique Display', serif",
                fontSize: '38px',
                color: '#A44E0E',
                lineHeight: 0
              }}
            >
              &ldquo;
            </span>
            Have these words stirred something within you? There&apos;s more to discover, more to feel, and perhaps a little of your own story waiting inside.
            <span 
              className="d-inline-block ms-2 opacity-50"
              style={{
                fontFamily: "'Beautique Display', serif",
                fontSize: '38px',
                color: '#A44E0E',
                lineHeight: 0
              }}
            >
              &rdquo;
            </span>
          </p>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            onClick={onGetCopy}
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
            Get Your Copy Now
          </button>
        </div>

      </div>
    </section>
  );
}
