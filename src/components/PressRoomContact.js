'use client';

import React, { useState } from 'react';

export default function PressRoomContact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Same behaviour as the Contact page form: confirms on screen (not yet sent anywhere)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '' });
    }, 5000);
  };

  return (
    <section className="py-4 py-md-5 bg-cream">
      <div className="container px-3 px-md-4 px-xl-5" style={{ maxWidth: '1240px' }}>

        {/* Paper background (heading, wax seal and flower are part of the image); the form sits on top */}
        <div className="press-contact position-relative w-100">
          <img
            src="/images/press%20room/press_contact_bg.webp"
            alt="Press contact - For Features, Interviews & Collaborations"
            className="w-100 h-auto d-block"
          />

          <form onSubmit={handleSubmit} className="press-contact-form">
            {submitted ? (
              <p className="press-contact-thanks mb-0">
                Thank you, {formData.name || 'friend'}. Your message has been received, and Monika&apos;s team will be in touch soon.
              </p>
            ) : (
              <>
                <div className="press-contact-fields">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Email"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject of inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-label="Subject of inquiry"
                  />
                </div>
                <button type="submit" className="press-contact-submit">
                  Submit
                </button>
              </>
            )}
          </form>
        </div>

      </div>

      <style jsx>{`
        /* Phones: the form sits below the image */
        .press-contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 20px 8px 0;
        }
        .press-contact-fields {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .press-contact-fields input {
          background: transparent;
          border: 0;
          border-bottom: 1px solid #C9B79F;
          border-radius: 0;
          padding: 8px 0;
          font-family: 'Larken-Light', 'Larken', 'Lora', serif;
          font-size: 13px;
          color: #422207;
          outline: none;
        }
        .press-contact-fields input::placeholder {
          color: #5C4A3A;
        }
        .press-contact-fields input:focus {
          border-bottom-color: #A44E0E;
        }
        .press-contact-submit {
          align-self: stretch;
          background: transparent;
          border: 1px solid #A44E0E;
          color: #62350A;
          font-family: 'Larken', 'Lora', serif;
          font-size: 14px;
          padding: 8px 16px;
          transition: all 0.3s ease;
        }
        .press-contact-submit:hover {
          background-color: #804112;
          border-color: #804112;
          color: #FFFDF9;
          box-shadow: 0 4px 12px rgba(128, 65, 18, 0.25);
        }
        .press-contact-thanks {
          font-family: 'Larken', 'Lora', serif;
          font-size: 15px;
          color: #62350A;
          text-align: center;
        }

        /* Tablet and up: the form is laid over the paper, positioned as in the design
           (all values are percentages of the image, so it scales with the screen) */
        @media (min-width: 768px) {
          .press-contact-form {
            position: absolute;
            left: 22.3%;
            right: 8%;
            top: 47.8%;
            bottom: 26.8%;
            padding: 0;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            gap: 0;
          }
          .press-contact-fields {
            width: 61%;
            gap: 0;
            justify-content: space-between;
            height: 100%;
          }
          .press-contact-fields input {
            padding: 0 0 4px;
            font-size: clamp(11px, 1.1vw, 13px);
          }
          .press-contact-submit {
            align-self: auto;
            width: 26.5%;
            height: 33%;
            min-height: 30px;
            padding: 0;
            font-size: clamp(12px, 1.15vw, 14px);
          }
          .press-contact-thanks {
            align-self: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
