'use client';

import { useState } from 'react';

export default function EleventhSection() {
  const [activeTab, setActiveTab] = useState('Bachpan Drishti');

  const tabContents = {
    'Bachpan Drishti': {
      text: "Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner. Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner."
    },
    'Manah': {
      text: "Manah focuses on holistic mental wellness and emotional harmony. Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner."
    },
    'Jeevan': {
      text: "Jeevan empowers life journeys with purpose and vitality. Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner."
    }
  };

  return (
    <section id="section-11" className="py-5 overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">

        {/* Section Header */}
        <div className="text-center max-w-800 mx-auto mb-4 mb-md-5">
          <span
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '32px',
              color: '#A44E0E',
              fontWeight: 400
            }}
          >
            arogini
          </span>

          <h2
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '38px',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.1',
              letterSpacing: '0.03em'
            }}
          >
            Shining Paths, One Life at a Time
          </h2>
        </div>

        {/* Split Content: Left Video Banner + Right Interactive Tab Card */}
        <div className="max-w-1400 mx-auto">
          <div className="row g-0 align-items-stretch">

            {/* Left Column: Children Running Sunset Photo Banner */}
            <div className="col-12 col-lg-6">
              <div className="w-100 h-100 min-vh-40 overflow-hidden position-relative">
                <img 
                  src="/images/section_11_banner.png" 
                  alt="Shining Paths - Children running in golden sunset" 
                  className="w-100 h-100 object-fit-cover d-block"
                  style={{ minHeight: '480px' }}
                />
              </div>
            </div>

            {/* Right Column: Tabbed Card Box */}
            <div className="col-12 col-lg-6">
              <div
                className="w-100 h-100 d-flex flex-column justify-content-between p-4 p-md-5 position-relative"
                style={{ backgroundColor: '#F5EFE6', minHeight: '480px' }}
              >
                {/* Background Leaf Watermark */}
                <div
                  className="position-absolute top-50 start-50 translate-middle pointer-events-none opacity-25"
                  style={{ width: '80%', height: '80%' }}
                >
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-100 h-100">
                    <path d="M100 20C120 60 180 80 180 100C180 140 140 180 100 180C60 180 20 140 20 100C20 80 80 60 100 20Z" fill="#A44E0E" fillOpacity="0.3" />
                  </svg>
                </div>

                {/* Tab Navigation Headers */}
                <div className="d-flex align-items-center justify-content-around mb-4 position-relative z-1">
                  {['Bachpan Drishti', 'Manah', 'Jeevan'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="btn border-0 p-0 text-decoration-none"
                      style={{
                        fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                        fontSize: 'clamp(18px, 2vw, 24px)',
                        color: '#422207',
                        fontWeight: activeTab === tab ? 600 : 400,
                        opacity: activeTab === tab ? 1 : 0.6,
                        borderBottom: activeTab === tab ? '2px solid #A44E0E' : '2px solid transparent',
                        paddingBottom: '4px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content Paragraph */}
                <div className="text-center my-auto px-2 px-md-4 position-relative z-1">
                  <p
                    className="mb-0 mx-auto"
                    style={{
                      fontFamily: "'Larken', 'Lora', serif",
                      fontSize: '15px',
                      color: '#4A423B',
                      lineHeight: '1.7',
                      maxWidth: '460px',
                      fontWeight: 400
                    }}
                  >
                    {tabContents[activeTab].text}
                  </p>
                </div>

                {/* Bottom Learn More Button */}
                <div className="text-center mt-4 position-relative z-1">
                  <a
                    href="#learn-more"
                    className="btn-figma-outline text-decoration-none px-4 py-2 d-inline-block"
                    style={{
                      fontFamily: "'Larken', 'Lora', serif",
                      fontSize: '15px',
                      color: '#422207',
                      border: '1px solid #A44E0E',
                      borderRadius: '2px',
                      backgroundColor: 'transparent',
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
    </section>
  );
}
