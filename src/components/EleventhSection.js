'use client';

export default function EleventhSection() {
  return (
    <section id="arogini" className="py-3 py-md-4 overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">

        {/* Section Header */}
        <div className="text-center max-w-800 mx-auto mb-3 mb-md-4">
          <span
            className="d-block mb-0"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '34px',
              color: '#A44E0E',
              fontWeight: 400,
              lineHeight: '1.1'
            }}
          >
            arogini
          </span>

          <h2
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '34px',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.15',
              letterSpacing: '0.02em'
            }}
          >
            Shining Paths, One Life at a Time
          </h2>
        </div>

        {/* Split Content: Left Banner Image + Right Card */}
        <div className="max-w-1400 mx-auto">
          <div className="row g-0 align-items-stretch section-11-row">

            {/* Left Column: Children Running Sunset Photo Banner */}
            <div className="col-12 col-lg-6">
              <div className="w-100 h-100 overflow-hidden position-relative section-11-box">
                <img 
                  src="/images/home section 11 img.png" 
                  alt="Shining Paths - Children running in golden meadow sunset" 
                  className="w-100 h-100 object-fit-cover d-block"
                />
              </div>
            </div>

            {/* Right Column: Content Card Box */}
            <div className="col-12 col-lg-6">
              <div
                className="w-100 h-100 d-flex flex-column justify-content-between p-4 px-md-4 py-md-4 px-xl-5 position-relative section-11-box"
                style={{ backgroundColor: '#F3EDE4' }}
              >
                {/* Background Leaf Watermark with Veins */}
                <div
                  className="position-absolute top-50 start-50 translate-middle pointer-events-none"
                  style={{ width: '80%', height: '80%', zIndex: 0, opacity: 0.35 }}
                >
                  <svg 
                    viewBox="0 0 320 400" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-100 h-100" 
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Leaf silhouette */}
                    <path 
                      d="M160 30 C245 105 285 220 160 370 C35 220 75 105 160 30 Z" 
                      fill="#D8C7B0" 
                      fillOpacity="0.5" 
                    />
                    {/* Central stem */}
                    <path 
                      d="M160 45 Q160 200 160 355" 
                      stroke="#BEAC95" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />
                    {/* Lateral veins */}
                    <path d="M160 100 Q195 85 225 95" stroke="#BEAC95" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M160 100 Q125 85 95 95" stroke="#BEAC95" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M160 160 Q205 140 245 155" stroke="#BEAC95" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M160 160 Q115 140 75 155" stroke="#BEAC95" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M160 220 Q205 200 240 220" stroke="#BEAC95" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M160 220 Q115 200 80 220" stroke="#BEAC95" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M160 280 Q195 265 220 285" stroke="#BEAC95" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M160 280 Q125 265 100 285" stroke="#BEAC95" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>

                {/* 3 Headers - Same font weight and color */}
                <div className="d-flex align-items-center justify-content-between px-2 px-md-3 mb-2 mb-md-3 position-relative z-1">
                  {['Bachpan Drishti', 'Manah', 'Jeevan'].map((title) => (
                    <span
                      key={title}
                      style={{
                        fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                        fontSize: 'clamp(18px, 1.9vw, 23px)',
                        color: '#422207',
                        fontWeight: 400,
                        opacity: 1
                      }}
                    >
                      {title}
                    </span>
                  ))}
                </div>

                {/* Unified Content Paragraphs with Reduced Font Weight (300) */}
                <div className="text-center my-auto px-1 px-md-2 position-relative z-1">
                  <p
                    className="mb-2 mx-auto"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                      fontSize: '14px',
                      color: '#4A423B',
                      lineHeight: '1.65',
                      maxWidth: '520px',
                      fontWeight: 300
                    }}
                  >
                    Ārogini, rooted in Sanskrit and symbolizing wellness and vitality, stands for nurturing life, inspiring growth, and enriching every journey. In its essence, it means &quot;the one who is healthy&quot; or &quot;she who embodies health and vitality.&quot; &quot;Ārogini&quot; is committed to nurturing the growth, resilience, and well being of children and women in India&apos;s rural communities. Through mindfulness, holistic practices, and creative self-expression, we offer inclusive programs and safe spaces that awaken inner strength, cultivate awareness, and inspire joyful living.
                  </p>

                  <p
                    className="mb-0 mx-auto"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                      fontSize: '14px',
                      color: '#A44E0E',
                      lineHeight: '1.6',
                      maxWidth: '520px',
                      fontWeight: 400
                    }}
                  >
                    Our mission is to cultivate balance, clarity, and harmony of body, mind, and spirit, while fostering compassionate and thriving communities.
                  </p>
                </div>

                {/* Bottom Learn More Button */}
                <div className="text-center mt-2 mt-md-3 position-relative z-1">
                  <a
                    href="#learn-more"
                    className="btn-figma-outline text-decoration-none px-4 py-2 d-inline-block"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#A44E0E',
                      border: '1px solid #A44E0E',
                      borderRadius: '2px',
                      backgroundColor: 'transparent',
                      minWidth: '130px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Learn More
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        .section-11-row {
          min-height: 500px;
        }
        @media (min-width: 992px) {
          .section-11-row {
            height: 580px;
            max-height: 580px;
          }
          .section-11-box {
            height: 480px;
            max-height: 480px;
          }
        }
      `}</style>
    </section>
  );
}

