'use client';

import { useState } from 'react';

export default function PoemsVerseCarousel() {
  const [activeModalPoem, setActiveModalPoem] = useState(null);

  const poems = [
    {
      id: 1,
      title: 'The Silent Soul',
      image: '/images/poems/silent_soul.jpg',
      lines: [
        'Stripping my soul',
        'Shattering the illusions',
        'Grasping the rainbow hues',
        'Traveling to a utopian land',
        'Shimmering in golden light...'
      ],
      fullPoem: `Stripping my soul,
Shattering the illusions,
Grasping the rainbow hues,
Traveling to a utopian land,
Shimmering in golden light.

I walked where the shadows dare not follow,
Finding the sanctuary I always kept within,
Untethered from the world's noisy sorrow,
Where the journey of the spirit can begin.`
    },
    {
      id: 2,
      title: 'Am I Boring?',
      image: '/images/poems/water_ripples.jpg',
      lines: [
        'Stripping my soul',
        'Shattering the illusions',
        'Grasping the rainbow hues',
        'Traveling to a utopian land',
        'Shimmering in golden light...'
      ],
      fullPoem: `Am I boring for loving the silence?
For watching concentric circles bloom on water,
Choosing tea over deafening crowded violence,
Listening to what the quiet hours daughter?

In the stillness, worlds collide and heal,
Nothing wasted in a peaceful breath,
Every ripple teaching how to feel,
Life that blossoms deeper than life and death.`
    },
    {
      id: 3,
      title: 'Who Am I?',
      image: '/images/poems/floral_veil.jpg',
      lines: [
        'Stripping my soul',
        'Shattering the illusions',
        'Grasping the rainbow hues',
        'Traveling to a utopian land',
        'Shimmering in golden light...'
      ],
      fullPoem: `Who am I behind this veil of roles?
Behind the quiet jasmine and woven silk,
Beyond the expectations placed on wandering souls,
Drinking from rivers of honey and milk?

I am the observer, the singer of verses,
The heartbeat behind the morning light,
A traveler healing generational curses,
Awakening gracefully into the night.`
    }
  ];

  return (
    <section className="py-5 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Section Header */}
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
            poems
          </span>
          <h2 
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '38px',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.15',
              letterSpacing: '0.02em'
            }}
          >
            Echoes of My Heart Through Verse
          </h2>
        </div>

        {/* 2-Column Section Layout: Left Intro + Right 3-Cards */}
        <div className="row g-4 g-xl-5 align-items-center mb-4">
          
          {/* Left Intro Text + View All Button */}
          <div className="col-12 col-xl-3 text-center text-xl-start">
            <p 
              className="mb-4"
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '15px',
                color: '#4A423B',
                lineHeight: '1.7',
                fontWeight: 300
              }}
            >
              Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones&apos; fluke sails overhaul man jib schooner.
            </p>

            <a 
              href="#all-poems" 
              className="btn-figma-outline d-inline-block text-decoration-none px-4 py-2"
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
              View All
            </a>
          </div>

          {/* Right Cards Row (3 Cards) */}
          <div className="col-12 col-xl-9">
            <div className="row g-3 g-md-4 justify-content-center">
              {poems.map((poem) => (
                <div key={poem.id} className="col-12 col-md-4">
                  <div 
                    className="p-3 p-xl-4 h-100 rounded-1 d-flex flex-column justify-content-between cursor-pointer"
                    style={{
                      backgroundColor: '#FCF8F2',
                      border: '1px solid #E8DCCF',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setActiveModalPoem(poem)}
                  >
                    <div>
                      {/* Poem Title */}
                      <h3 
                        className="text-center mb-3"
                        style={{
                          fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                          fontSize: '22px',
                          color: '#422207',
                          fontWeight: 400
                        }}
                      >
                        {poem.title}
                      </h3>

                      {/* Poem Image */}
                      <div 
                        className="overflow-hidden rounded-1 mb-3"
                        style={{ aspectRatio: '16 / 11' }}
                      >
                        <img 
                          src={poem.image} 
                          alt={poem.title} 
                          className="w-100 h-100 object-cover d-block"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      {/* Stanza Lines in Italianno */}
                      <div className="ps-2">
                        {poem.lines.map((line, idx) => (
                          <p 
                            key={idx} 
                            className="mb-0"
                            style={{
                              fontFamily: "'Italianno', cursive",
                              fontSize: '22px',
                              color: '#62350A',
                              lineHeight: '1.25'
                            }}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Right Arrow Indicator */}
                    <div className="text-end pt-3 pe-2">
                      <span style={{ fontSize: '20px', color: '#422207' }}>→</span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Progress / Scroll Indicator Bar matching Figma */}
            <div className="mt-4 pt-2 mx-auto" style={{ maxWidth: '100%', height: '3px', backgroundColor: '#E2D5C3', position: 'relative' }}>
              <div style={{ width: '45%', height: '100%', backgroundColor: '#62350A' }}></div>
            </div>

          </div>

        </div>

      </div>

      {/* Full Poem Modal */}
      {activeModalPoem && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
          style={{
            backgroundColor: 'rgba(66, 34, 7, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000
          }}
          onClick={() => setActiveModalPoem(null)}
        >
          <div 
            className="bg-white rounded-2 p-4 p-md-5 position-relative shadow-lg text-center"
            style={{
              maxWidth: '620px',
              backgroundColor: '#FFFDF9',
              border: '1px solid #C4A57B'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="position-absolute top-0 end-0 mt-3 me-3 btn btn-sm border-0 text-dark fs-4"
              onClick={() => setActiveModalPoem(null)}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '32px',
                color: '#A44E0E'
              }}
            >
              poem
            </span>

            <h2 
              className="mb-3"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '30px',
                color: '#422207'
              }}
            >
              {activeModalPoem.title}
            </h2>

            <div className="my-4 p-4 rounded" style={{ backgroundColor: '#F8EEDF', border: '1px dashed #C4A57B' }}>
              <p 
                className="mb-0"
                style={{
                  fontFamily: "'Italianno', cursive",
                  fontSize: '26px',
                  color: '#422207',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-line'
                }}
              >
                {activeModalPoem.fullPoem}
              </p>
            </div>

            <p className="text-muted small mb-0">~ Monika Chugh</p>
          </div>
        </div>
      )}

    </section>
  );
}
