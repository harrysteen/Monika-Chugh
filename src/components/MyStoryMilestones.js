'use client';

export default function MyStoryMilestones() {
  const milestones = [
    {
      year: '2023',
      title: 'Published "Quote Café"',
      description: 'A celebrated collection of reflective thoughts, inspiring poetry, and soul-enriching quotes.',
      icon: 'bi-journal-richtext'
    },
    {
      year: '2024',
      title: 'Arogini Wellness Foundation',
      description: 'Launched holistic mindfulness & creative workshops empowering hundreds of individuals globally.',
      icon: 'bi-flower1'
    },
    {
      year: '2025',
      title: 'Exhibitions & Keynote Features',
      description: 'Featured in prominent literary festivals, art exhibitions, and inspirational podcast dialogues.',
      icon: 'bi-award'
    }
  ];

  return (
    <section className="py-5 bg-cream position-relative" id="story-milestones">
      <div className="container px-3 px-md-4 px-lg-5 text-center">
        
        {/* Section Header */}
        <div className="mb-5">
          <span className="font-handwriting fs-2 text-bronze d-block mb-1" style={{ color: '#A44E0E' }}>
            milestones along the way
          </span>
          <h2 className="font-big-header display-5 fw-normal text-dark mb-3">
            Honors, Recognition & Impact
          </h2>
          <p className="font-paragraph text-body fs-6 mx-auto mb-0" style={{ maxWidth: '680px', color: '#4A423B' }}>
            A glimpse into the key milestones, published works, and meaningful collaborations that have defined this journey.
          </p>
        </div>

        {/* 3 Milestone Cards */}
        <div className="row g-4 justify-content-center mb-5">
          {milestones.map((item, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="figma-card p-4 h-100 d-flex flex-column align-items-center text-center">
                
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: '64px', height: '64px', backgroundColor: '#F8EEDF', color: '#A44E0E' }}
                >
                  <i className={`bi ${item.icon} fs-3`}></i>
                </div>

                <span className="badge rounded-pill px-3 py-1 mb-2 fw-normal" style={{ backgroundColor: '#F8EBCC', color: '#62350A', fontSize: '0.85rem' }}>
                  {item.year}
                </span>

                <h3 className="font-big-header fs-4 text-dark mb-2">
                  {item.title}
                </h3>

                <p className="font-paragraph text-body fs-6 mb-0" style={{ color: '#4A423B' }}>
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <a href="/#press" className="btn btn-figma-outline px-5 py-3 fs-6">
            View My Honors
          </a>
        </div>

      </div>
    </section>
  );
}
