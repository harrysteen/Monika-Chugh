'use client';

import { useState } from 'react';

export default function EventsMoreMoments() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-5 bg-cream position-relative overflow-hidden">
      <div className="container-fluid px-3 px-xl-5" style={{ maxWidth: '1280px' }}>
        
        {/* Section Header */}
        <div className="text-center mb-4 mb-lg-5">
          <span 
            className="d-block mb-1" 
            style={{ fontFamily: "'Italianno', cursive", fontSize: '38px', color: '#A44E0E', lineHeight: '1.2' }}
          >
            more to come
          </span>
          <h2 
            className="font-beautique fw-normal mb-0" 
            style={{ color: '#422207', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '0.01em' }}
          >
            More moments are waiting to unfold.
          </h2>
        </div>

        {/* Outer Warm Backdrop Wrapper */}
        <div className="p-3 p-md-4 rounded-3 max-w-5xl mx-auto" style={{ backgroundColor: '#F8F1E4' }}>
          
          {/* Scalloped Postage Stamp Card */}
          <div className="stamp-postcard-card position-relative overflow-hidden p-4 p-md-5">
            
            <div className="row align-items-center g-4">
              
              {/* Left Column: Lotus + Main Text + Email Input Box */}
              <div className="col-12 col-lg-7 text-center text-lg-start ps-lg-4">
                
                {/* Top Lotus Emblem */}
                <div className="d-flex justify-content-center justify-content-lg-start mb-3">
                  <img 
                    src="/images/lotus_emblem.svg" 
                    alt="Lotus Emblem" 
                    style={{ width: '40px', height: '40px' }}
                  />
                </div>

                {/* Main Copy */}
                <div className="mb-4">
                  <h3 
                    className="font-beautique mb-2" 
                    style={{ color: '#422207', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', fontWeight: 400, lineHeight: '1.4' }}
                  >
                    New gatherings, conversations and creative <br className="d-none d-sm-inline" />
                    experiences are coming soon.
                  </h3>
                  <p 
                    className="font-beautique mb-0" 
                    style={{ color: '#422207', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 400 }}
                  >
                    Be the first to know about them.
                  </p>
                </div>

                {/* Email Form (Single Joined Border Box) */}
                {submitted ? (
                  <div className="p-2 px-3 d-inline-block font-larken" style={{ border: '1px solid #62350A', color: '#422207', fontSize: '14px' }}>
                    Thank you! We'll keep you updated. ♡
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="d-flex align-items-center mx-auto mx-lg-0" 
                    style={{ border: '1px solid #62350A', width: '100%', maxWidth: '380px', backgroundColor: 'transparent' }}
                  >
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control border-0 bg-transparent font-larken px-3 py-2 text-dark shadow-none"
                      style={{ color: '#422207', fontSize: '14.5px' }}
                    />
                    <button
                      type="submit"
                      className="btn border-0 bg-transparent font-larken px-4 py-2 flex-shrink-0"
                      style={{ 
                        color: '#422207', 
                        fontSize: '14.5px', 
                        borderLeft: '1px solid #62350A', 
                        borderRadius: 0, 
                        fontWeight: 500 
                      }}
                    >
                      Submit
                    </button>
                  </form>
                )}

              </div>

              {/* Right Column: Layered Photo Cards + Handwritten "Let's Stay Connected !" */}
              <div className="col-12 col-lg-5 position-relative text-center text-lg-end pe-lg-4 pt-3 pt-lg-0">
                
                {/* Photo Stack Container */}
                <div className="position-relative d-inline-block me-lg-4" style={{ width: '220px', height: '270px' }}>
                  
                  {/* Paperclip */}
                  <svg 
                    width="30" 
                    height="50" 
                    viewBox="0 0 24 48" 
                    fill="none" 
                    className="position-absolute" 
                    style={{ top: '-18px', right: '35px', zIndex: 10, transform: 'rotate(20deg)' }}
                  >
                    <path d="M 8 42 L 8 14 C 8 7.37 13.37 2 20 2 C 26.63 2 32 7.37 32 14 L 32 38 C 32 41.31 29.31 44 26 44 C 22.69 44 20 41.31 20 38 L 20 18" stroke="#7A624A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </svg>

                  {/* Back Photo 1 */}
                  <div 
                    className="position-absolute bg-white p-2 shadow-sm"
                    style={{ 
                      top: '10px', 
                      left: '-15px', 
                      width: '180px', 
                      height: '230px', 
                      transform: 'rotate(-8deg)',
                      border: '1px solid #E2D5C3',
                      zIndex: 1
                    }}
                  >
                    <img src="/images/gallery_me.png" alt="Monika Chugh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  {/* Back Photo 2 */}
                  <div 
                    className="position-absolute bg-white p-2 shadow-sm"
                    style={{ 
                      top: '5px', 
                      left: '10px', 
                      width: '185px', 
                      height: '235px', 
                      transform: 'rotate(4deg)',
                      border: '1px solid #E2D5C3',
                      zIndex: 2
                    }}
                  >
                    <img src="/images/home section 10 row1 img2.png" alt="Monika Chugh Event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  {/* Front Photo 3 */}
                  <div 
                    className="position-absolute bg-white p-2 shadow"
                    style={{ 
                      top: '0px', 
                      left: '0px', 
                      width: '190px', 
                      height: '240px', 
                      transform: 'rotate(1deg)',
                      border: '1px solid #D4C3AF',
                      zIndex: 3
                    }}
                  >
                    <img src="/images/portrait.png" alt="Monika Chugh Reading" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                </div>

                {/* Handwritten "Let's Stay Connected !" */}
                <div className="mt-3 mt-lg-4 me-lg-3" style={{ transform: 'rotate(-3deg)' }}>
                  <span 
                    style={{ 
                      fontFamily: "'Italianno', 'Caveat', cursive", 
                      fontSize: '34px', 
                      color: '#62350A',
                      whiteSpace: 'nowrap' 
                    }}
                  >
                    Let's Stay Connected ! ♡
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

