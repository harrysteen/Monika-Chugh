'use client';

export default function BookWhatYoullDiscover() {
  return (
    <section className="py-5 bg-cream position-relative" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-5">
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
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '38px',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.2'
            }}
          >
            What You&apos;ll Discover
          </h2>
        </div>

        {/* 2-Column: Story on Left + Open Book Page on Right */}
        <div className="row g-4 g-lg-5 align-items-center">
          
          {/* Left Column: Story & Journey */}
          <div className="col-12 col-lg-7 pe-lg-4">
            <div 
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '15.5px',
                color: '#4A423B',
                lineHeight: '1.75',
                fontWeight: 300
              }}
            >
              <p className="mb-4">
                What is Quote Cafè– Thoughts in a Cup? Life throws us surprise curve balls. We all go through the stings and spasms to escape the nerve-wracking circle.
              </p>

              <p className="mb-4">
                <strong className="fw-semibold text-dark">No exception:</strong> my life took a 360-degree turn with two major life-changing incidents. I was an emotionally shaken wreck with physical wounds. It made me question many things about my identity. I was miserable, merged into self-pity and victim moods, and blamed the world for the misgivings.
              </p>

              <p className="mb-4">
                Many things were beyond my comprehension as I could not understand the reason and logic behind them. It made no sense to me; I thought they were baseless; however, they taught me one fundamental thing, never to ignore one&apos;s gut and thoughts. I soon realized that I needed to change the course of my wavering thoughts.
              </p>

              <p className="mb-4">
                I had to find the felix culpa in all the mistakes, even if they were learning points.
              </p>

              <p className="mb-4">
                <strong className="fw-semibold text-dark">01/18/2018, 11:16 pm,</strong> I was mentally disturbed with churning thoughts. The moonlight peeping through the window gently caressed my solemn face. I was enveloped with unstoppable tears and a lump in my throat. I picked up my pen and paper; thoughts became words, words became sentences, and sentences became paragraphs. I poured my heart out on the blank canvas flowing with the moment.
              </p>

              <p className="mb-4">
                That was when <strong className="fw-semibold" style={{ color: '#62350A' }}>Quote Café was born.</strong> I decided to be bold and share my story with the world, weaved with a blend of affirmations and short poems. Quote café is my sanctuary to express, emote, and write. Writing has taught me the power of silence, self-love, forgiveness, and letting go to heal at a deeper level. Every human has a story to share from their galaxy of vast experiences. Will you be brave enough to share it with the world?
              </p>

              <p 
                className="mt-4 pt-2 fst-italic"
                style={{
                  color: '#A44E0E',
                  fontSize: '17px',
                  lineHeight: '1.6'
                }}
              >
                Quote Café ~ my sanctuary to express, emote, and write a story weaved with affirmations and poems.
              </p>

            </div>
          </div>

          {/* Right Column: Open Book Page Styling */}
          <div className="col-12 col-lg-5">
            <div 
              className="p-4 p-md-5 rounded-2 shadow-sm position-relative mx-auto"
              style={{
                backgroundColor: '#FAF5ED',
                border: '1px solid #E2D5C3',
                maxWidth: '460px',
                minHeight: '520px',
                boxShadow: '-8px 12px 24px rgba(66, 34, 7, 0.08)'
              }}
            >
              {/* Spine shadow line */}
              <div 
                className="position-absolute top-0 start-0 h-100"
                style={{
                  width: '18px',
                  background: 'linear-gradient(to right, rgba(0,0,0,0.08), transparent)'
                }}
              ></div>

              <div className="text-center pt-3 mb-4">
                <h3 
                  className="mb-1"
                  style={{
                    fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                    fontSize: '20px',
                    color: '#422207'
                  }}
                >
                  Quote Cafe - Thoughts In a Cup
                </h3>
                <div className="d-flex align-items-center justify-content-center gap-2 text-muted small my-2">
                  <span style={{ width: '24px', height: '1px', backgroundColor: '#A44E0E' }}></span>
                  <span style={{ color: '#A44E0E' }}>☕</span>
                  <span style={{ width: '24px', height: '1px', backgroundColor: '#A44E0E' }}></span>
                </div>
              </div>

              <div 
                className="text-center px-2"
                style={{
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                  fontSize: '13px',
                  color: '#4A423B',
                  lineHeight: '1.7',
                  fontWeight: 300
                }}
              >
                <p className="mb-3">
                  I was mentally disturbed with churning thoughts. The moonlight peeping through the window gently caressed my solemn face. I was enveloped with unstoppable tears and a lump in my throat. I picked up my pen and paper; thoughts became words, words became sentences, and sentences became paragraphs. I poured my heart out on the blank canvas flowing with the moment.
                </p>

                <p className="mb-3">
                  That was when Quote Café was born. I decided to be bold and share my story with the world, weaved with a blend of affirmations and short poems. Quote café is my sanctuary to express, emote, and write. Writing has taught me the power of silence, self-love, forgiveness, and letting go to heal at a deeper level. Every human has a story to share from their galaxy of vast experiences. Will you be brave enough to share it with the world?
                </p>

                <p className="fst-italic mt-3" style={{ color: '#62350A' }}>
                  Quote Café~my sanctuary to express, emote, and write a story weaved with affirmations and poems.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
