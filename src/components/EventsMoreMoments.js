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
      <div className="container-fluid px-3 px-xl-5">
        
        {/* Section Header */}
        <div className="text-center mb-5 max-w-2xl mx-auto">
          <span className="font-handwriting d-block mb-1">
            more to come
          </span>
          <h2 className="font-beautique display-5 text-dark fw-normal mb-3" style={{ color: '#422207' }}>
            More moments are waiting to unfold.
          </h2>
          <p className="font-larken text-muted fs-5" style={{ color: '#62350A' }}>
            Be the first to hear about upcoming book launches, poetry readings, art exhibitions, and intimate gatherings.
          </p>
        </div>

        {/* Postage Stamp Card Newsletter Container */}
        <div className="max-w-4xl mx-auto">
          <div className="stamp-postcard-card text-center position-relative">
            
            {/* Top Vintage Lotus Emblem Badge */}
            <div className="d-flex justify-content-center mb-4">
              <div className="stamp-emblem">
                <img 
                  src="/images/lotus_emblem.svg" 
                  alt="Lotus Emblem" 
                  style={{ width: '38px', height: 'auto' }}
                />
              </div>
            </div>

            {/* Subtitle */}
            <h3 className="font-beautique fs-2 text-dark mb-2" style={{ color: '#422207' }}>
              Join Monika's Private Circle
            </h3>
            <p className="font-larken text-muted mb-4 max-w-xl mx-auto" style={{ color: '#62350A' }}>
              Receive exclusive invitations, handwritten notes, early access to new releases, and reflection prompts delivered directly to your inbox.
            </p>

            {/* Email Form */}
            {submitted ? (
              <div className="alert alert-success d-inline-block px-4 py-3 rounded-pill font-larken text-dark" style={{ backgroundColor: '#F4EEE5', borderColor: '#A44E0E', color: '#422207' }}>
                <i className="bi bi-heart-fill text-danger me-2"></i> Thank you for subscribing! We'll keep you posted on upcoming events.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 max-w-xl mx-auto mb-4">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="press-input flex-grow-1 w-100"
                  style={{ height: '52px' }}
                />
                <button
                  type="submit"
                  className="btn px-4 text-white font-larken fw-medium w-100 w-sm-auto flex-shrink-0"
                  style={{ 
                    backgroundColor: '#62350A', 
                    height: '52px', 
                    borderRadius: '8px',
                    letterSpacing: '0.5px'
                  }}
                >
                  Subscribe <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </form>
            )}

            {/* Handwritten Sign-off */}
            <div className="pt-3">
              <span className="font-handwriting" style={{ fontSize: '36px', color: '#A44E0E' }}>
                Let's Stay Connected ! ♡
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
