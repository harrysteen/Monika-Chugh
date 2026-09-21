'use client';

export default function MyStoryPurpose() {
  return (
    <section className="py-5 bg-cream position-relative" id="story-purpose">
      <div className="container-fluid px-0 px-md-3 px-lg-4 text-center" style={{ maxWidth: '1440px' }}>
        
        {/* Full-width parchment background container */}
        <div 
          className="position-relative overflow-hidden py-5 px-3 px-md-5 w-100"
          style={{
            backgroundImage: "url('/images/mystory/my_story_purpose_bg.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '520px'
          }}
        >
          
          <div className="mx-auto py-3 py-md-4" style={{ maxWidth: '960px' }}>
            
            {/* Header */}
            <div className="mb-4 pb-2">
              <span 
                className="d-block mb-1" 
                style={{ 
                  fontFamily: "'Italianno', cursive", 
                  fontSize: '32px', 
                  color: '#A44E0E',
                  lineHeight: 1.2
                }}
              >
                purpose behind my work
              </span>
              <h2 
                className="fw-normal" 
                style={{ 
                  fontFamily: "'Beautique Display', 'BeautiqueDisplay-Regular', 'Cormorant Garamond', 'Playfair Display', serif", 
                  fontSize: '38px',
                  color: '#422207',
                  letterSpacing: '0.01em',
                  lineHeight: 1.25
                }}
              >
                Why I do what I do.
              </h2>
            </div>

            {/* Paragraph 1 */}
            <p 
              className="mb-4" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                fontSize: '15px', 
                color: '#4A423B', 
                lineHeight: '1.85',
                fontWeight: 300
              }}
            >
              My work has always circled one question: how do we help people see clearly, not just with their eyes, but with their whole being? As a doctor, that means restoring sight to children who might otherwise never read a book or recognize their mother&apos;s face. As an Ayurvedic counselor, it means helping people notice what their bodies and minds have been telling them all along. As a writer, it means putting words to the parts of being human we feel but rarely say aloud. And through Ārogini, it means carrying all of this into communities where clear sight, in every sense, is still a privilege rather than a given.
            </p>

            {/* Paragraph 2 */}
            <p 
              className="mb-5" 
              style={{ 
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                fontSize: '15px', 
                color: '#4A423B', 
                lineHeight: '1.85',
                fontWeight: 300
              }}
            >
              Medicine taught me how the eye works. Ayurveda taught me how the whole person works. Writing taught me how to make sense of both. Together, they have given me a way of seeing that is uniquely my own, one that brings science, awareness, and the human experience into the same conversation. None of these are separate callings to me. They&apos;re different lenses on the same purpose: helping people see, feel, and live a little more clearly than before.
            </p>

            {/* Quote / Accent Block */}
            <div className="pt-2">
              <p 
                className="mb-3" 
                style={{ 
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                  fontSize: '15px', 
                  color: '#5C4F44',
                  fontWeight: 300
                }}
              >
                The words that mean the most to me are simpler than any of that:
              </p>

              <h4 
                className="my-3" 
                style={{ 
                  fontFamily: "'Courier Prime', 'Courier New', monospace", 
                  fontSize: '21px', 
                  fontWeight: 700, 
                  color: '#62350A',
                  letterSpacing: '0.02em'
                }}
              >
                &ldquo;Thank you, I needed this today&rdquo;
              </h4>

              <p 
                className="mt-3 mb-0" 
                style={{ 
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                  fontSize: '15px', 
                  color: '#4A423B',
                  fontWeight: 300
                }}
              >
                That&apos;s why I keep writing.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}




