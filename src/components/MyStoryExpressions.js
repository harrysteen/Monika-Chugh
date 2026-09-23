'use client';

export default function MyStoryExpressions() {
  const roles = [
    {
      title: 'Founder',
      image: '/images/mystory/about_section4_founder.png',
      buttonText: 'Read My Books',
      link: '/#founder'
    },
    {
      title: 'Author',
      image: '/images/mystory/about_section4_author.png',
      buttonText: 'Read My Books',
      link: '/books'
    },
    {
      title: 'Artist',
      image: '/images/mystory/about_section4_artist.png',
      buttonText: 'View My Canvas',
      link: '/#artist'
    },
    {
      title: 'Poet',
      image: '/images/mystory/about_section4_poet.png',
      imagePosition: '82% center',
      buttonText: 'Read My Poems',
      link: '/poems-articles'
    }
  ];

  return (
    <section className="py-5 bg-cream position-relative" id="story-expressions">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1380px' }}>
        
        {/* Section Header */}
        <div className="mb-5 pb-2">
          <span 
            className="d-block mb-1" 
            style={{ 
              fontFamily: "'Italianno', cursive", 
              fontSize: '28px', 
              color: '#A44E0E',
              lineHeight: 1.2
            }}
          >
            many expressions, one purpose
          </span>
          <h2 
            className="fw-normal" 
            style={{ 
              fontFamily: "'Beautique Display', 'BeautiqueDisplay-Regular', 'Cormorant Garamond', 'Playfair Display', serif", 
              fontSize: '36px',
              color: '#422207',
              letterSpacing: '0.01em',
              lineHeight: 1.25
            }}
          >
            Pirate ipsum me main blimey fluke
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 g-xl-4 justify-content-center">
          {roles.map((role, idx) => (
            <div key={idx} className="col">
              <div 
                className="h-100 d-flex flex-column text-center"
                style={{
                  backgroundColor: '#FFFAF2',
                  border: '1px solid #EADBCC',
                  padding: '24px 18px 20px',
                  borderRadius: '2px',
                  boxShadow: '0 2px 10px rgba(66,34,7,0.02)'
                }}
              >
                {/* Title in Larken-Light */}
                <h3 
                  className="mb-3 d-flex align-items-center justify-content-center text-center" 
                  style={{ 
                    fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                    fontSize: '18px', 
                    fontWeight: 400,
                    fontStyle: 'normal',
                    color: '#422407',
                    lineHeight: '100%',
                    letterSpacing: '0.01em',
                    minHeight: '28px'
                  }}
                >
                  {role.title}
                </h3>

                {/* Role Portrait Image */}
                <div 
                  className="position-relative overflow-hidden mb-4" 
                  style={{ 
                    height: '350px',
                    width: '100%'
                  }}
                >
                  <img 
                    src={role.image} 
                    alt={role.title} 
                    className="w-100 h-100"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: role.imagePosition || 'center center',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Outline CTA Button */}
                <div className="mt-auto pt-1 px-2 px-xl-3">
                  <a 
                    href={role.link} 
                    className="btn w-100"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                      fontSize: '15px',
                      fontWeight: 400,
                      color: '#62350A',
                      border: '1px solid #C4A57B',
                      backgroundColor: 'transparent',
                      borderRadius: '0px',
                      padding: '8px 12px',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#A44E0E';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#A44E0E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#62350A';
                      e.currentTarget.style.borderColor = '#C4A57B';
                    }}
                  >
                    {role.buttonText}
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

