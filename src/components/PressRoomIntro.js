'use client';

import React from 'react';

export default function PressRoomIntro() {
  return (
    <section className="press-intro-section py-4 py-md-5 text-center">
      <div className="container px-3 px-md-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            
            {/* Elegant Sub-heading */}
            <h2 className="press-intro-heading mb-4">
              Where my words have been noticed, remembered, and celebrated.
            </h2>
            
            {/* Divider Dot */}
            <div className="d-flex align-items-center justify-content-center mb-4">
              <span className="press-intro-line me-3"></span>
              <i className="bi bi-flower1 press-flower-icon"></i>
              <span className="press-intro-line ms-3"></span>
            </div>

            {/* Sub-text quote paragraph */}
            <p className="press-intro-text lead fs-5 text-body-secondary mx-auto">
              Explore the recognitions, nominations, features, and literary moments that have been part of my journey. 
              A quiet archive of the places my writing has reached.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
