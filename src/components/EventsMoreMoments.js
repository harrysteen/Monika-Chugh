'use client';

import { useState } from 'react';

export default function EventsMoreMoments() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Confirms on screen (not yet sent anywhere), same as the other site forms
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
            style={{ color: '#422207', fontSize: 'clamp(21px, 2.2vw, 26px)', letterSpacing: '0.01em' }}
          >
            More moments are waiting to unfold.
          </h2>
        </div>

        {/* Stamp card design (text, photos and "Let's Stay Connected" are part of the image);
            the email form sits on top of it */}
        <div className="events-form position-relative w-100">
          <img
            src="/images/events/events_form_bg.webp"
            alt="New gatherings, conversations and creative experiences are coming soon. Be the first to know about them. Let's stay connected!"
            className="w-100 h-auto d-block"
          />

          <div className="events-form-overlay">
            {submitted ? (
              <p className="events-form-thanks mb-0">Thank you! We&apos;ll keep you updated. ♡</p>
            ) : (
              <form onSubmit={handleSubmit} className="events-form-box">
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  aria-label="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        </div>

      </div>

      <style jsx>{`
        /* Phones: the form sits below the image */
        .events-form-overlay {
          padding: 16px 8px 0;
          display: flex;
          justify-content: center;
        }
        .events-form-box {
          display: flex;
          align-items: stretch;
          width: 100%;
          max-width: 380px;
          height: 44px;
          border: 1px solid #62350A;
        }
        .events-form-box input {
          flex: 1 1 auto;
          min-width: 0;
          border: 0;
          background: transparent;
          padding: 0 14px;
          font-family: 'Larken', serif;
          font-size: 14px;
          color: #422207;
          outline: none;
        }
        .events-form-box input::placeholder {
          color: #62350A;
        }
        .events-form-box button {
          flex-shrink: 0;
          border: 0;
          background: transparent;
          padding: 0 16px;
          font-family: 'Larken', serif;
          font-size: 14px;
          color: #422207;
          transition: all 0.3s ease;
        }
        .events-form-box button:hover {
          background-color: #804112;
          color: #FFFDF9;
        }
        .events-form-thanks {
          font-family: 'Larken', serif;
          font-size: 15px;
          color: #422207;
          text-align: center;
        }

        /* Tablet and up: the form is laid over the stamp, where the design has it
           (percentages of the image, so it scales with the screen) */
        @media (min-width: 768px) {
          .events-form-overlay {
            position: absolute;
            left: 23.3%;
            width: 31.6%;
            top: 63.4%;
            height: 8.6%;
            padding: 0;
            display: block;
          }
          .events-form-box {
            max-width: none;
            height: 100%;
            min-height: 32px;
          }
          .events-form-box input,
          .events-form-box button {
            font-size: clamp(11px, 1.1vw, 14px);
          }
          .events-form-thanks {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
