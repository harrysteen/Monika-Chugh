'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-5 bg-cream">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="figma-card p-4 p-md-5 text-center">
              
              <div className="lotus-divider mb-3">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4C14 8 10 12 6 14C10 16 14 20 16 28C18 20 22 16 26 14C22 12 18 8 16 4Z" stroke="#BA8E55" strokeWidth="1.5"/>
                </svg>
              </div>

              <span className="font-small-header fs-2 text-bronze">Get in Touch</span>
              <h2 className="font-big-header display-4 text-dark mt-1 mb-3">Connect with Monika Chugh</h2>
              <p className="font-paragraph text-muted mx-auto mb-4" style={{ maxWidth: '540px' }}>
                For speaking engagements, literary inquiries, press requests, or book signing events, please send a message below.
              </p>

              {submitted ? (
                <div className="alert alert-success bg-white border border-success text-dark p-4 rounded-3 my-4 font-paragraph">
                  <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                  Thank you! Your message has been received by Monika Chugh’s office.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="text-start">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label font-paragraph text-dark small">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        className="form-control bg-white border-cream text-dark p-3 font-paragraph" 
                        placeholder="e.g. Eleanor Vance"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label font-paragraph text-dark small">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="form-control bg-white border-cream text-dark p-3 font-paragraph" 
                        placeholder="eleanor@example.com"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label font-paragraph text-dark small">Message</label>
                      <textarea 
                        rows="4" 
                        required 
                        className="form-control bg-white border-cream text-dark p-3 font-paragraph" 
                        placeholder="Write your note or inquiry..."
                      ></textarea>
                    </div>
                    <div className="col-12 text-center mt-4">
                      <button type="submit" className="btn btn-figma-bronze px-5 py-3 fs-6">
                        Send Message <i className="bi bi-send ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
