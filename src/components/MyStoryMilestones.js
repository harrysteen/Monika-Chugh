'use client';

export default function MyStoryMilestones() {
  const milestoneColumns = [
    // Column 1
    {
      id: 'col-1',
      items: [
        {
          id: 'new-delhi',
          image: '/images/mystory/milestones/milestone_new_delhi.png',
          title: 'New Delhi — Where It Began',
          text: 'A young girl who felt everything, but said little.'
        }
      ],
      alignClass: 'justify-content-center' // Centered vertically in the middle
    },
    // Column 2
    {
      id: 'col-2',
      items: [
        {
          id: 'medicine',
          image: '/images/mystory/milestones/milestone_medicine.png',
          title: 'Medicine — Learning to Help Others See',
          text: 'My journey in ophthalmic sciences began at AIIMS, India, and continued in Boston.'
        },
        {
          id: 'california',
          image: '/images/mystory/milestones/milestone_california.png',
          title: 'California — Beginning Again',
          text: 'I crossed continents, built a new life, and learned to call another place home.'
        }
      ],
      alignClass: 'justify-content-between'
    },
    // Column 3
    {
      id: 'col-3',
      items: [
        {
          id: 'voice-2017',
          image: '/images/mystory/milestones/milestone_2017_voice.png',
          title: '2017 — Finding My Voice',
          text: 'A life-changing accident slowed me down and led me toward writing.'
        },
        {
          id: 'author-2023',
          image: '/images/mystory/milestones/milestone_2023_author.png',
          title: '2023 — Becoming an Author',
          text: 'One poem became a book, and writing became a way of making sense of life.'
        }
      ],
      alignClass: 'justify-content-between'
    },
    // Column 4
    {
      id: 'col-4',
      items: [
        {
          id: 'words-2025',
          image: '/images/mystory/milestones/milestone_2025_words.png',
          title: '2025 — Words Recognized',
          text: "Named Rotary International's Poet of the Year and nominated for a Pushcart Prize."
        }
      ],
      alignClass: 'justify-content-center' // Centered vertically as in mockup
    },
    // Column 5
    {
      id: 'col-5',
      items: [
        {
          id: 'ayurveda-2025',
          image: '/images/mystory/milestones/milestone_2025_ayurveda.png',
          title: '2025 — Ayurveda — Seeing the Whole Person',
          text: 'My curiosity about healing grew beyond medicine into mindfulness and Ayurveda.'
        },
        {
          id: 'arogini-2026',
          image: '/images/mystory/milestones/milestone_2026_arogini.png',
          title: '2026 — Ārogini — Purpose in Action',
          text: 'I founded Ārogini to bring vision care, holistic wellness, and empowerment to children and women in rural India.'
        }
      ],
      alignClass: 'justify-content-between'
    }
  ];

  return (
    <section className="py-5 bg-cream position-relative" id="story-milestones">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1440px' }}>
        
        {/* Section Header */}
        <div className="mb-5 pb-2">
          <span 
            className="d-block mb-1" 
            style={{ 
              fontFamily: "'Italianno', cursive", 
              fontSize: '32px', 
              color: '#A44E0E',
              lineHeight: 1.2
            }}
          >
            milestones along the way
          </span>
          <h2 
            className="fw-normal mx-auto" 
            style={{ 
              fontFamily: "'Beautique Display', 'BeautiqueDisplay-Regular', 'Cormorant Garamond', 'Playfair Display', serif", 
              fontSize: '36px',
              color: '#422207',
              letterSpacing: '0.01em',
              lineHeight: 1.3,
              maxWidth: '850px'
            }}
          >
            The moments, choices, and humble beginnings that shaped who I am today.
          </h2>
        </div>

        {/* 5-Column Staggered Timeline Grid (Desktop) / Scrollable Grid (Mobile) */}
        <div className="position-relative py-3">
          
          <div className="row g-4 g-xl-0 justify-content-center align-items-stretch text-start">
            {milestoneColumns.map((col, colIdx) => (
              <div 
                key={col.id} 
                className="col-12 col-md-6 col-lg"
                style={{
                  flex: '1 0 0%',
                  minWidth: '220px',
                  maxWidth: '260px'
                }}
              >
                <div 
                  className={`h-100 d-flex flex-column ${col.alignClass} px-2 px-xl-3 position-relative`}
                  style={{ minHeight: '520px' }}
                >
                  
                  {/* Vertical Divider Line to the right (except last column) */}
                  {colIdx < milestoneColumns.length - 1 && (
                    <div 
                      className="d-none d-lg-block position-absolute"
                      style={{
                        top: '4%',
                        bottom: '4%',
                        right: 0,
                        width: '1px',
                        backgroundColor: '#E2D1BE'
                      }}
                    />
                  )}

                  {/* Cards inside column */}
                  {col.items.map((item, itemIdx) => (
                    <div 
                      key={item.id} 
                      className={`milestone-card ${col.items.length > 1 && itemIdx === 0 ? 'mb-4 pb-2' : ''}`}
                    >
                      {/* Milestone Image */}
                      <div 
                        className="overflow-hidden mb-2 bg-white"
                        style={{
                          width: '100%',
                          height: '150px',
                          border: '1px solid #EADBCC',
                          borderRadius: '1px',
                          boxShadow: '0 2px 8px rgba(66, 34, 7, 0.05)'
                        }}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-100 h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      {/* Milestone Title */}
                      <h4 
                        className="mb-1 mt-2"
                        style={{
                          fontFamily: "'Larken', 'Lora', serif",
                          fontSize: '14.5px',
                          fontWeight: 600,
                          color: '#7B3F00',
                          lineHeight: '1.3'
                        }}
                      >
                        {item.title}
                      </h4>

                      {/* Milestone Description */}
                      <p 
                        className="mb-0"
                        style={{
                          fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                          fontSize: '13px',
                          color: '#4A423B',
                          lineHeight: '1.45',
                          fontWeight: 300
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
