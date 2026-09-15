'use client';

export default function EventsFeaturedQuoteCafe({ activeTab = 'quote-cafe' }) {
  // Data for different category views
  const categoryData = {
    'quote-cafe': {
      title: 'QUOTE CAFÉ',
      subtitle: 'THOUGHTS IN A CUP',
      meta: 'Book Launch · Hyderabad · 2025',
      description: `A soulful gathering of literary enthusiasts, artists, and readers coming together to celebrate the launch of Monika Chugh's latest book. Held in Hyderabad, Quote Café transformed into an intimate sanctuary of words, shared tea, heartfelt discussions, and artistic reflections.`,
      photos: [
        { src: '/images/home section 10 row2 img1.png', time: '03.23.2025 11:04:20', frame: '01 BOOKLAUNCH', annotation: 'a moment of gratitude ♡' },
        { src: '/images/home section 10 row2 img2.png', time: '03.23.2025 11:42:15', frame: '02 READINGS', annotation: 'words in harmony' },
        { src: '/images/home section 10 row2 img3.png', time: '03.23.2025 12:15:08', frame: '03 DISCUSSIONS', annotation: 'a memory to keep' },
        { src: '/images/home section 10 row3 img1.png', time: '03.23.2025 13:02:44', frame: '04 MEMORIES', annotation: 'One to remember ♡' },
      ],
      quote: "Words are cups that carry the spirit of our shared experiences, inviting every heart to take a sip.",
    },
    'arogini': {
      title: 'AROGINI',
      subtitle: 'WELLNESS & ART INITIATIVE',
      meta: 'Social Impact · Community Outreach · 2025',
      description: `Arogini is a heartfelt movement bringing art therapy, mindfulness, and literary healing to women and children in underserved communities. Discover the moments where creative expression nurtures hope and resilience.`,
      photos: [
        { src: '/images/section_9_img1.svg', time: '02.14.2025 10:15:00', frame: '01 AROGINI', annotation: 'healing through art ♡' },
        { src: '/images/section_9_img2.svg', time: '02.14.2025 11:30:10', frame: '02 WORKSHOP', annotation: 'smiles & stories' },
        { src: '/images/section_9_img3.svg', time: '02.14.2025 13:10:05', frame: '03 COMMUNITY', annotation: 'together we bloom' },
      ],
      quote: "True wellness begins when we give voice to the quiet places within our souls.",
    },
    'travel': {
      title: 'LITERARY JOURNEYS',
      subtitle: 'TRAVEL & RETREATS',
      meta: 'Cultural Exploration · Global Dialogues',
      description: `Wandering across continents, capturing stories of landscapes, heritage, and human connection. Each journey inspires poetry, artistic creations, and cross-cultural exchanges.`,
      photos: [
        { src: '/images/home section 11 img.png', time: '01.10.2025 09:20:11', frame: '01 JOURNEY', annotation: 'chasing horizons' },
        { src: '/images/home_second_section_bg.svg', time: '01.12.2025 16:45:00', frame: '02 RETREAT', annotation: 'inspiration everywhere ♡' },
      ],
      quote: "Every destination is a poem waiting to be read through new eyes.",
    },
    'reflections': {
      title: 'REFLECTIONS',
      subtitle: 'POETRY & DIALOGUES',
      meta: 'Panel Discussion · Literary Meetup',
      description: `An evening of profound reflections where readers and fellow authors discussed the intersections of love, loss, art, and healing over poetry recitations.`,
      photos: [
        { src: '/images/home section 10 row1 img1.png', time: '04.05.2025 18:30:00', frame: '01 POETRY', annotation: 'verses in evening light' },
        { src: '/images/home section 10 row1 img2.png', time: '04.05.2025 20:00:15', frame: '02 REFLECTION', annotation: 'heartfelt connections ♡' },
      ],
      quote: "In the quiet spaces between lines, we find the reflection of our own truth.",
    },
    'wellness': {
      title: 'SOULFUL WELLNESS',
      subtitle: 'ART & MINDFULNESS',
      meta: 'Mindfulness Workshop · Hyderabad',
      description: `Interactive sessions blending mindful journaling, artistic meditation, and expressive poetry to encourage inner clarity and peace.`,
      photos: [
        { src: '/images/home section 10 row2 img3.png', time: '05.18.2025 10:00:00', frame: '01 MINDFULNESS', annotation: 'breathe & create' },
        { src: '/images/home section 10 row3 img1.png', time: '05.18.2025 11:45:22', frame: '02 HARMONY', annotation: 'inner peace ♡' },
      ],
      quote: "Art is the breath of the soul, restoring balance in a busy world.",
    },
  };

  const current = categoryData[activeTab] || categoryData['quote-cafe'];

  return (
    <section className="py-5 bg-cream position-relative">
      <div className="container-fluid px-3 px-xl-5">
        
        {/* Main Event Header Card */}
        <div className="bg-white rounded-4 p-4 p-md-5 border border-cream shadow-sm mb-5 position-relative overflow-hidden">
          
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-8">
              <span className="badge bg-cream-accent text-brand font-larken px-3 py-2 rounded-pill mb-3" style={{ color: '#A44E0E', backgroundColor: '#F4EEE5' }}>
                {current.meta}
              </span>
              <h2 className="font-beautique display-4 text-dark mb-2" style={{ color: '#422207' }}>
                {current.title}
              </h2>
              <h3 className="font-handwriting text-brand mb-3" style={{ fontSize: '38px', color: '#A44E0E' }}>
                {current.subtitle}
              </h3>
              <p className="font-larken text-muted fs-5 mb-0" style={{ color: '#62350A', lineHeight: '1.8' }}>
                {current.description}
              </p>
            </div>

            <div className="col-12 col-lg-4 text-lg-end">
              <div className="p-4 rounded-3 text-center" style={{ backgroundColor: '#FFFDF9', border: '1px dashed #E2D5C3' }}>
                <i className="bi bi-quote fs-1 text-brand d-block mb-2" style={{ color: '#A44E0E' }}></i>
                <p className="font-larken fst-italic mb-2 fs-6 text-dark" style={{ color: '#422207' }}>
                  "{current.quote}"
                </p>
                <span className="font-handwriting fs-4 text-brand">— Monika Chugh</span>
              </div>
            </div>
          </div>

        </div>

        {/* Filmstrip Camera Collage Grid */}
        <div className="row g-4 justify-content-center">
          {current.photos.map((item, idx) => (
            <div key={`event-photo-${idx}`} className="col-12 col-md-6 col-lg-3">
              <div className="filmstrip-reel h-100 d-flex flex-column justify-content-between">
                
                {/* Top Sprocket Holes */}
                <div className="sprocket-hole-row mb-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={`top-${idx}-${i}`} className="sprocket-hole"></div>
                  ))}
                </div>

                {/* Photo Frame with Timestamps */}
                <div className="filmstrip-photo position-relative my-auto">
                  <div className="camera-meta-header">
                    <span>MONIKACHUGH</span>
                    <span>► {item.frame}</span>
                  </div>
                  <img 
                    src={item.src} 
                    alt={item.frame} 
                    style={{ height: '280px', width: '100%', objectFit: 'cover' }}
                  />
                  <div className="camera-timestamp-badge">
                    {item.time}
                  </div>
                </div>

                {/* Handwritten Annotation Below */}
                <div className="text-center pt-2 pb-1">
                  <span className="font-handwriting" style={{ fontSize: '28px', color: '#F4D068' }}>
                    {item.annotation}
                  </span>
                </div>

                {/* Bottom Sprocket Holes */}
                <div className="sprocket-hole-row mt-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={`bot-${idx}-${i}`} className="sprocket-hole"></div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
