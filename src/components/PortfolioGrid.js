'use client';

export default function PortfolioGrid() {
  const publications = [
    {
      id: 1,
      category: 'Featured Book',
      title: 'Echoes of Eternity',
      subtitle: 'A Collection of Poetic Meditations',
      description: 'An evocative exploration of love, loss, and spiritual awakening captured through timeless verse.',
      image: '/images/book_cover.png',
      tag: 'Hardcover & E-Book',
    },
    {
      id: 2,
      category: 'Journal Series',
      title: 'Canvas of the Soul',
      subtitle: 'Guided Reflections & Creative Writing',
      description: 'A beautifully bound journal designed to foster daily introspection, gratitude, and creative clarity.',
      image: '/images/portrait.png',
      tag: 'Special Edition',
    },
    {
      id: 3,
      category: 'Essay Anthology',
      title: 'Whispers in the Wind',
      subtitle: 'Philosophical Essays on Life',
      description: 'Thought-provoking essays examining contemporary life through the lens of ancient wisdom.',
      image: '/images/book_cover.png',
      tag: 'Anthology',
    },
  ];

  return (
    <section id="books" className="py-5 bg-cream">
      <div className="container py-4">

        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="font-small-header fs-2 text-bronze">Literary Creations</span>
          <h2 className="font-big-header display-4 text-dark mt-1 mb-2">Books & Publications</h2>
          <p className="font-paragraph text-muted mx-auto" style={{ maxWidth: '580px' }}>
            Discover published works by Monika Chugh, available in hardcover, paperbacks, and digital editions.
          </p>
        </div>

        {/* Responsive Bootstrap Grid Row */}
        <div className="row g-4">
          {publications.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="figma-card h-100 p-4 d-flex flex-column justify-content-between">
                
                <div>
                  {/* Book Image */}
                  <div className="position-relative mb-4 overflow-hidden rounded-3 bg-white p-2 border border-cream text-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="img-fluid rounded-2 object-cover" 
                      style={{ maxHeight: '280px', width: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-light text-dark border border-cream font-paragraph px-3 py-1">
                      {item.category}
                    </span>
                    <small className="text-muted font-paragraph">{item.tag}</small>
                  </div>

                  {/* Title in Beautique Display */}
                  <h3 className="font-big-header fs-3 text-dark mb-1">{item.title}</h3>
                  
                  {/* Subtitle in Italianno */}
                  <span className="font-small-header fs-4 text-bronze d-block mb-3">
                    {item.subtitle}
                  </span>

                  {/* Paragraph in Larken */}
                  <p className="font-paragraph text-body small mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-top border-cream d-flex align-items-center justify-content-between">
                  <a href="#contact" className="btn btn-figma-bronze btn-sm px-3">
                    Order Copy <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                  <span className="font-paragraph text-muted small">Learn More</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
