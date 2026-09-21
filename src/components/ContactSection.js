'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-5 py-md-6 bg-cream position-relative overflow-hidden">
      <div className="container py-3 py-md-4 max-w-1100 mx-auto">
        <div className="row align-items-center g-4 g-lg-5">

          {/* Left Column: Portrait Image with Social Media Badges Overlay */}
          <div className="col-12 col-md-5 col-lg-5">
            <div 
              className="position-relative overflow-hidden mx-auto shadow-sm" 
              style={{ 
                maxWidth: '400px', 
                borderRadius: '4px',
                border: '1px solid #EBE1D5'
              }}
            >
              {/* Monika Chugh Portrait Image */}
              <img 
                src="/images/contact/contact img 1.svg" 
                alt="Monika Chugh" 
                className="w-100 d-block object-fit-cover"
                style={{ 
                  aspectRatio: '371 / 510',
                  maxHeight: '520px'
                }} 
              />

              {/* Social Media Badges Overlay (Bottom Right) */}
              <div 
                className="position-absolute d-flex align-items-center gap-2"
                style={{ 
                  bottom: '16px', 
                  right: '16px',
                  zIndex: 10
                }}
              >
                {/* Instagram Link */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-overlay-btn"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram fs-6"></i>
                </a>

                {/* Pinterest Link */}
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-overlay-btn"
                  aria-label="Pinterest"
                >
                  <i className="bi bi-pinterest fs-6"></i>
                </a>

                {/* Facebook Link */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-overlay-btn"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook fs-6"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: "Let's Connect!" & Contact Form */}
          <div className="col-12 col-md-7 col-lg-7 ps-md-4 ps-lg-5">
            <div className="pe-lg-3">

              {/* Heading: Let's Connect! */}
              <h2 
                className="mb-4 mb-md-5"
                style={{ 
                  fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                  fontSize: 'clamp(36px, 5.5vw, 52px)',
                  fontWeight: 400,
                  color: '#422207',
                  lineHeight: '1.15',
                  letterSpacing: '0.02em'
                }}
              >
                Let’s <span style={{ color: '#A44E0E' }}>Connect!</span>
              </h2>

              {/* Success Notification Alert */}
              {submitted ? (
                <div 
                  className="alert p-4 rounded-3 text-center my-4"
                  style={{
                    backgroundColor: '#F7F1EA',
                    border: '1px solid #C5A070',
                    color: '#422207',
                    fontFamily: "'Larken-Light', 'Larken', 'Lora', serif"
                  }}
                >
                  <i className="bi bi-check-circle-fill me-2 fs-5" style={{ color: '#A44E0E' }}></i>
                  Thank you for reaching out! Monika’s team will get back to you shortly.
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">

                  {/* Name Input */}
                  <div className="form-group-minimal">
                    <label 
                      htmlFor="contact-name" 
                      className="d-block mb-1"
                      style={{ 
                        fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                        fontSize: '15px',
                        color: '#7C6E63',
                        fontWeight: 300
                      }}
                    >
                      Name
                    </label>
                    <input 
                      id="contact-name"
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="minimal-line-input"
                      placeholder=""
                    />
                  </div>

                  {/* Email Input */}
                  <div className="form-group-minimal">
                    <label 
                      htmlFor="contact-email" 
                      className="d-block mb-1"
                      style={{ 
                        fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                        fontSize: '15px',
                        color: '#7C6E63',
                        fontWeight: 300
                      }}
                    >
                      Email
                    </label>
                    <input 
                      id="contact-email"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="minimal-line-input"
                      placeholder=""
                    />
                  </div>

                  {/* Subject of Inquiry Input */}
                  <div className="form-group-minimal">
                    <label 
                      htmlFor="contact-subject" 
                      className="d-block mb-1"
                      style={{ 
                        fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                        fontSize: '15px',
                        color: '#7C6E63',
                        fontWeight: 300
                      }}
                    >
                      Subject of inquiry
                    </label>
                    <input 
                      id="contact-subject"
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                      className="minimal-line-input"
                      placeholder=""
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="d-flex justify-content-center justify-content-md-end mt-4 pt-2">
                    <button 
                      type="submit" 
                      className="btn-minimal-submit"
                    >
                      Submit
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* "Be the first to Know!" Newsletter Banner Card */}

        <div className="position-relative w-100 my-5 pt-2">
          <div 
            className="position-relative mx-auto text-start"
            style={{
              maxWidth: '1080px',
              backgroundImage: "url('/images/contact/be_the_first_to_know_bg.png')",
              backgroundColor: '#FFF8EC',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid #EEDBCC',
              borderRadius: '2px',
              padding: '48px 40px 54px',
              boxShadow: '0 4px 20px rgba(66,34,7,0.03)'
            }}
          >
            <div className="row align-items-center justify-content-between g-4">
              
              {/* Left Column: Heading and Subtext */}
              <div className="col-12 col-lg-7">
                <h3 
                  className="mb-3"
                  style={{ 
                    fontFamily: "'Beautique Display', 'BeautiqueDisplay-Bold', 'Cormorant Garamond', 'Playfair Display', serif",
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#422207',
                    lineHeight: '140%',
                    letterSpacing: '0.04em'
                  }}
                >
                  Be the <span style={{ fontStyle: 'italic', color: '#A44E0E', fontWeight: 700 }}>first</span> to Know!
                </h3>
                <p 
                  className="mb-0"
                  style={{ 
                    fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                    fontSize: '15px',
                    color: '#5C4F44',
                    lineHeight: '1.75',
                    fontWeight: 300,
                    maxWidth: '520px'
                  }}
                >
                  Stay updated with Monika&apos;s latest books, poems, articles, and new releases. Subscribe for occasional news and updates, delivered straight to your inbox.
                </p>
              </div>

              {/* Right Column: Email Subscription Input */}
              <div className="col-12 col-lg-5 text-lg-end">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you for subscribing!');
                  }}
                  className="d-flex align-items-center ms-lg-auto"
                  style={{
                    backgroundColor: '#F8E7C5',
                    border: '1px solid #DEC9A8',
                    borderRadius: '1px',
                    maxWidth: '400px',
                    width: '100%',
                    padding: '8px 16px',
                    height: '52px'
                  }}
                >
                  <input 
                    type="email" 
                    required
                    placeholder="Type Your Email"
                    className="flex-grow-1 border-0 bg-transparent"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                      fontSize: '14px',
                      color: '#422207',
                      outline: 'none',
                      boxShadow: 'none'
                    }}
                  />
                  <button 
                    type="submit"
                    className="border-0 bg-transparent ps-3"
                    style={{
                      fontFamily: "'Larken', 'Lora', serif",
                      fontSize: '14px',
                      color: '#62350A',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#A44E0E'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#62350A'}
                  >
                    Subscribe
                  </button>
                </form>
              </div>

            </div>

            {/* Bottom Centered Golden Wax Seal Stamp */}
            <div 
              className="position-absolute"
              style={{
                bottom: '-28px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10
              }}
            >
              <img 
                src="/images/contact/contact_wax_seal.png" 
                alt="Embossed Wax Seal" 
                style={{
                  width: '56px',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))'
                }}
              />
            </div>

          </div>
        </div>



      </div>

      {/* Component Specific CSS Styles */}
      <style jsx>{`
        .social-overlay-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          color: #422207;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          transition: all 0.25s ease;
        }

        .social-overlay-btn:hover {
          background-color: #A44E0E;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(164, 78, 14, 0.25);
        }

        .minimal-line-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #D5C4B5;
          padding: 6px 0;
          font-family: 'Larken-Light', 'Larken', 'Lora', serif;
          font-size: 16px;
          color: #422207;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .minimal-line-input:focus {
          border-bottom-color: #A44E0E;
        }

        .btn-minimal-submit {
          background-color: transparent;
          border: 1px solid #B8864E;
          color: #62350A;
          font-family: 'Larken', 'Lora', serif;
          font-size: 15px;
          letter-spacing: 0.04em;
          padding: 10px 54px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-minimal-submit:hover {
          background-color: #A44E0E;
          color: #FFFFFF;
          border-color: #A44E0E;
          box-shadow: 0 4px 14px rgba(164, 78, 14, 0.2);
        }
      `}</style>
    </section>
  );
}

