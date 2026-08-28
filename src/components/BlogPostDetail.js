'use client';

export default function BlogPostDetail() {
  const latestBlogs = [
    {
      id: 1,
      image: '/images/blogs/featured_guru.jpg',
      tag: 'RECENTLY UPLOADED',
      title: 'Pirate ipsum me main blimey fluke',
      href: '/blogs/write-write-write'
    },
    {
      id: 2,
      image: '/images/blogs/writing.jpg',
      tag: 'RECENTLY UPLOADED',
      title: 'Pirate ipsum me main blimey fluke',
      href: '/blogs/write-write-write'
    }
  ];

  const relatedBlogs = [
    {
      id: 1,
      title: 'The Silent Ache of a Guru',
      image: '/images/blogs/featured_guru.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl Lubber ava.....',
      href: '/blogs/write-write-write'
    },
    {
      id: 2,
      title: 'Write...Write...Write...',
      image: '/images/blogs/writing.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl Lubber ava.....',
      href: '/blogs/write-write-write'
    },
    {
      id: 3,
      title: 'What is love after all?',
      image: '/images/blogs/love.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl Lubber ava.....',
      href: '/blogs/write-write-write'
    }
  ];

  return (
    <article className="py-4 py-md-5 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Post Title & Signature */}
        <div className="text-center mb-4 pb-2">
          <h1 
            className="mb-1"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '44px',
              color: '#422207',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: 1.15
            }}
          >
            Write...Write...Write...
          </h1>
          <span 
            className="d-block"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '28px',
              color: '#A44E0E',
              fontWeight: 400
            }}
          >
            ~monikachugh
          </span>
        </div>

        {/* Framed Hero Image */}
        <div 
          className="mx-auto mb-5 p-2"
          style={{
            border: '1px solid #C4A57B',
            maxWidth: '1200px'
          }}
        >
          <div className="overflow-hidden" style={{ maxHeight: '640px' }}>
            <img 
              src="/images/blogs/sunlight_window.jpg" 
              alt="Write...Write...Write..." 
              className="w-100 h-auto d-block"
              style={{
                objectFit: 'cover',
                maxHeight: '620px'
              }}
            />
          </div>
        </div>

        {/* Article Body: 2 Columns (Sidebar on Left + Content on Right) */}
        <div className="row g-4 g-lg-5 mx-auto mb-5 pb-4" style={{ maxWidth: '1200px' }}>
          
          {/* Left Sidebar: Latest Blogs */}
          <div className="col-12 col-lg-4 col-xl-3">
            <div className="blog-sidebar-box">
              <h3 
                className="mb-4 text-center text-lg-start"
                style={{
                  fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                  fontSize: '20px',
                  color: '#422207',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}
              >
                Latest Blogs
              </h3>

              <div className="d-flex flex-column gap-4">
                {latestBlogs.map((item, idx) => (
                  <a 
                    key={item.id} 
                    href={item.href}
                    className="d-flex align-items-center gap-3 text-decoration-none text-dark group"
                    style={{
                      paddingBottom: idx !== latestBlogs.length - 1 ? '16px' : '0',
                      borderBottom: idx !== latestBlogs.length - 1 ? '1px solid #E2D5C3' : 'none'
                    }}
                  >
                    <div 
                      className="flex-shrink-0 overflow-hidden rounded-1"
                      style={{ width: '68px', height: '68px' }}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-100 h-100 object-cover d-block"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <span 
                        className="d-block text-uppercase mb-1"
                        style={{
                          fontFamily: "'Larken', 'Lora', serif",
                          fontSize: '10.5px',
                          letterSpacing: '0.08em',
                          color: '#8C827A'
                        }}
                      >
                        {item.tag}
                      </span>
                      <p 
                        className="mb-0 leading-tight"
                        style={{
                          fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                          fontSize: '13.5px',
                          color: '#422207',
                          lineHeight: '1.3'
                        }}
                      >
                        {item.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Article Text with Drop Cap */}
          <div className="col-12 col-lg-8 col-xl-9 ps-lg-4">
            <div 
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '16px',
                color: '#4A423B',
                lineHeight: '1.8',
                fontWeight: 300
              }}
            >
              
              {/* First Paragraph with Drop Cap T */}
              <p className="mb-4">
                <span className="blog-dropcap">T</span>
                he hardest lesson for me has been learning to let go, and truly, it wasn&apos;t easy. There was so much I was carrying, old weight, baggage without any meaning.
              </p>

              <p className="mb-4">
                It was ingrained into my cells, my bones, plastered all over. So much self-pity, which was dooming me. Every few months, I would tell myself, &ldquo;This is it, I&apos;ve let go,&rdquo; and then, somehow, it would return. Boomerang effect. And I would find myself holding on all over again. Total mess, a cycle I didn&apos;t fully understand.
              </p>

              <p className="mb-4">
                But then, something came subtly, through &ldquo;my own words.&rdquo; The ones I wrote to myself. On tissue papers, notepads, journals, sticky notes, restaurant napkins, you name it. Coffee and words became my saviors, holding me when nothing else could.
              </p>

              <p className="mb-4">
                2019 felt heavy, 2020–2021 even more so, but somewhere in those pages, I dissolved, and something started to move.
              </p>

              <p className="mb-4">
                My words and I created a motherly connection. They questioned me, held me, hugged me, and sometimes even felt stern, but they lingered. My confidantes, my best friends. And slowly, very slowly, they showed me that life was not as complicated as we made it out to be. That somewhere, in the middle of everything, there was still beauty. We just had to allow ourselves to see it.
              </p>

              <p className="mb-4">
                I began turning inward; my inner nucleus, that core, was what needed attention. It was asking for help.
              </p>

              <p className="mb-4">
                Turning point; Not overnight, not perfect, but something allowed me to breathe.
              </p>

              <p className="mb-4">
                I tried many things, listening, learning, seeking, but what stayed with me was this: how I spoke to myself.
              </p>

              <p className="mb-4 fw-medium text-dark">
                MY WORDS.
              </p>

              {/* Callout Section Header */}
              <h2 
                className="my-4 pt-2"
                style={{
                  fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                  fontSize: '28px',
                  color: '#422207',
                  fontWeight: 400,
                  lineHeight: '1.3'
                }}
              >
                But if there is one thing I would say, it&apos;s this: JUST WRITE.
              </h2>

              <p className="mb-4">
                Your WORDS will surprise you in ways nothing else can.<br />
                They will hold you, challenge you, and walk you back to yourself.
              </p>

              <p className="mb-4">
                Sometimes, all you need to do is empty your vessel and keep refilling it, again and again.<br />
                Give yourself the permission to be incomplete.
              </p>

              <p className="mb-4">
                You will not go wrong, only right.
              </p>

              <p className="mb-4 fw-medium text-dark">
                TRUST ME!
              </p>

              <div className="pt-2">
                <span 
                  className="d-block"
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '24px',
                    color: '#A44E0E'
                  }}
                >
                  ~with heart,
                </span>
                <span 
                  className="d-block"
                  style={{
                    fontFamily: "'Italianno', cursive",
                    fontSize: '28px',
                    color: '#62350A'
                  }}
                >
                  monika
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Related Blogs Section matching Figma */}
        <div className="pt-5 mt-4 text-center mx-auto" style={{ maxWidth: '1200px' }}>
          
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
            growth
          </span>

          <h2 
            className="mb-5"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '36px',
              color: '#422207',
              fontWeight: 400
            }}
          >
            Related Blogs
          </h2>

          <div className="row g-4 justify-content-center mb-5">
            {relatedBlogs.map((item) => (
              <div key={item.id} className="col-12 col-md-4">
                <div className="blog-card-figma">
                  <div className="blog-card-image-wrap">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h3 
                    className="mb-2"
                    style={{
                      fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                      fontSize: '19px',
                      color: '#422207',
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                      fontSize: '13.5px',
                      color: '#5C5248',
                      lineHeight: '1.6',
                      fontWeight: 300
                    }}
                  >
                    {item.excerpt}
                  </p>
                  <a 
                    href={item.href} 
                    className="blog-read-btn"
                    style={{
                      fontFamily: "'Larken-Thin', 'Larken-Light', 'Lora', serif",
                      fontWeight: 300,
                      letterSpacing: '0.03em'
                    }}
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Blogs Button matching Figma */}
          <div className="pt-2 pb-4">
            <a 
              href="/blogs"
              className="btn-figma-outline d-inline-block text-decoration-none px-5 py-2"
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
              Back to Blogs
            </a>
          </div>

        </div>

      </div>
    </article>
  );
}
