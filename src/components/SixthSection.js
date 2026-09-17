'use client';

export default function SixthSection() {
  const blogs = [
    {
      id: 1,
      title: "The Silent Ache for a Guru.",
      image: "/images/home_section6_img1.png",
      excerpt: "For years, I searched for a guru. What I didn't know was that the search itself was the biggest teacher. My story of what happened when I finally stopped looking. A rain-soaked trip to Dharamshala, a call that shouldn't have worked, and an ashram I didn't know existed. Sometimes the guru finds you only after you've stopped chasing.",
      link: "/blogs/1"
    },
    {
      id: 2,
      title: "Toffee In Kashi: And Tiny Sparks.",
      image: "/images/home_section6_img2.png",
      excerpt: "Shiva doesn't only live in temples. Sometimes he walks the narrow galis of Kashi, hiding in the eyes of four mischievous little girls. They only asked me for toffee, but what they gave me was a reminder of why Ārogini exists. This is the story of finding the sacred in small, unexpected places.",
      link: "/blogs/2"
    },
    {
      id: 3,
      title: "Forgive. Forget. Move On.",
      image: "/images/home_section6_img3.jpg",
      excerpt: "\"Forgive and forget\" gets dismissed as naïve, but I don't think it is when the heart is in the right place. This is a reflection on why letting go isn't a weakness, and how forgiveness can finally bring you some peace.",
      link: "https://monikachugh.com/forgive-forget-move-on/"
    }
  ];

  return (
    <section id="blogs" className="py-5 bg-cream overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        
        {/* Section Header: 100% Center-Aligned relative to the page with View All button on the right */}
        <div className="position-relative mb-5 max-w-1400 mx-auto text-center">
          <div className="mx-auto text-center px-4" style={{ maxWidth: '700px' }}>
            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: 'clamp(24px, 3vw, 28px)',
                color: '#A44E0E',
                fontWeight: 400,
                lineHeight: '100%'
              }}
            >
              blogs
            </span>
            <h2 
              className="mb-0"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: 'clamp(24px, 2.8vw, 32px)',
                color: '#422207',
                fontWeight: 400,
                lineHeight: '1.15',
                letterSpacing: '0.02em'
              }}
            >
              Stories &amp; Reflections
            </h2>
          </div>

          <a 
            href="/blogs" 
            className="text-decoration-none px-4 py-2 mt-3 mt-md-0 d-inline-flex align-items-center justify-content-center transition-all section6-header-btn"
            style={{
              fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
              fontSize: '14.5px',
              fontWeight: 400,
              color: '#A44E0E',
              border: '1px solid #A44E0E',
              borderRadius: '2px',
              backgroundColor: 'transparent',
              minWidth: '130px',
              transition: 'all 0.3s ease'
            }}
          >
            View All
          </a>
        </div>

        {/* 3-Column Frame Container */}
        <div className="max-w-1400 mx-auto border border-cream rounded-1 overflow-hidden" style={{ backgroundColor: '#FAF6F0' }}>
          <div className="row g-0 align-items-stretch">
            {blogs.map((blog, idx) => (
              <div 
                key={blog.id} 
                className="col-12 col-md-4 p-4 p-lg-5 text-center d-flex flex-column align-items-center justify-content-between h-100"
                style={{
                  borderRight: idx < blogs.length - 1 ? '1px solid #E2D5C3' : 'none'
                }}
              >
                <div className="w-100 d-flex flex-column align-items-center">
                  {/* Blog Title */}
                  <h3 
                    className="mb-4 d-flex align-items-center justify-content-center text-center"
                    style={{
                      fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                      fontSize: 'clamp(18px, 2vw, 20px)',
                      color: '#422207',
                      fontWeight: 400,
                      lineHeight: '1.3',
                      minHeight: '52px'
                    }}
                  >
                    {blog.id === 3 ? (
                      <a 
                        href={blog.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-decoration-none"
                        style={{ color: '#422207', transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#A44E0E'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#422207'}
                      >
                        {blog.title}
                      </a>
                    ) : (
                      blog.title
                    )}
                  </h3>

                  {/* Blog Image */}
                  <div className="mb-4 overflow-hidden rounded-1 mx-auto" style={{ width: '100%', maxWidth: '280px', aspectRatio: '1/1' }}>
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-100 h-100 object-cover d-block"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Excerpt Paragraph */}
                  <p 
                    className="mb-4 mx-auto text-center"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                      fontSize: '14px',
                      color: '#4A423B',
                      lineHeight: '1.65',
                      fontWeight: 400,
                      maxWidth: '320px',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale'
                    }}
                  >
                    {blog.excerpt}
                  </p>
                </div>

                {/* Read Me Button with alignment at bottom */}
                <div className="mt-auto pt-2 w-100 text-center">
                  <a 
                    href={blog.link} 
                    target={blog.id === 3 ? "_blank" : "_self"}
                    rel={blog.id === 3 ? "noopener noreferrer" : undefined}
                    className="text-decoration-none px-4 py-2 mt-2 d-inline-flex align-items-center justify-content-center transition-all section6-read-btn"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#A44E0E',
                      border: '1px solid #A44E0E',
                      borderRadius: '2px',
                      backgroundColor: 'transparent',
                      minWidth: '120px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Read Me
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .section6-header-btn {
            position: absolute !important;
            right: 0 !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            margin-top: 0 !important;
          }
        }
        .section6-read-btn:hover {
          background-color: #A44E0E !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(164, 78, 14, 0.2);
        }
        .section6-header-btn:hover {
          background-color: #A44E0E !important;
          color: #FFFFFF !important;
          transform: translateY(-50%) scale(1.03);
          box-shadow: 0 4px 10px rgba(164, 78, 14, 0.2);
        }
      `}</style>
    </section>
  );
}
