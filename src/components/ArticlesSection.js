'use client';

const articles = [
  {
    id: 'love-myself',
    title: 'Finally, I am learning to love myself!',
    image: '/images/poems/article_love_myself.webp',
    excerpt: 'i wanted validation. I wanted acceptance. I wanted a stamp of approval. Ironically, I needed to understand that SELF is a peaceful revolution within me to uplift myself.'
  },
  {
    id: 'off-she-goes',
    title: '...and off she goes',
    image: '/images/poems/article_off_she_goes.webp',
    excerpt: '...now you sail away from the safe harbor to find your own corner. ...now you have to carve your own path. ...now you are off to great places...'
  },
  {
    id: 'forgive',
    title: 'Forgive, Let It Go- Period!',
    image: '/images/poems/article_forgive.webp',
    excerpt: 'We all talk about forgiveness. We all preach about forgiveness. We all share our experiences about forgiveness. Breathe- Let it go- Let it go!'
  },
  {
    id: 'storm',
    title: 'The Storm in Her!',
    image: '/images/poems/article_storm.webp',
    excerpt: 'she needed help- I knew I was that one person who was given the chance to revive her back. I sincerely hope she is smiling wherever she is right now. Keep the good karma flowing!'
  },
  {
    id: 'kensho',
    title: 'The Kenshō Moment',
    image: '/images/poems/article_kensho.webp',
    excerpt: 'Kenshō and Satori what do these experiences really mean? Have you had your moments so far?'
  },
  {
    id: 'pendulum',
    title: 'escaping the pendulum..',
    image: '/images/poems/article_pendulum.webp',
    excerpt: 'my friend once asked me, “ why are you always dangling like a pendulum”? That got me thinking real hard!'
  }
];

export default function ArticlesSection() {
  return (
    <section className="py-5 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 mx-auto" style={{ maxWidth: '1100px' }}>

        {/* Header with View All on the right */}
        <div className="articles-header mb-4 mb-md-5">
          <div className="text-center">
            <span
              className="d-block mb-1"
              style={{ fontFamily: "'Italianno', cursive", fontSize: '34px', color: '#A44E0E', fontWeight: 400, lineHeight: '100%' }}
            >
              articles
            </span>
            <h2
              className="mb-0"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: 'clamp(21px, 2.2vw, 26px)',
                color: '#422207',
                fontWeight: 400,
                lineHeight: '1.2'
              }}
            >
              Reflections on the moments that shape us.
            </h2>
          </div>

          <a
            href="/blogs"
            className="articles-view-all btn-figma-outline d-inline-flex align-items-center justify-content-center text-decoration-none"
            style={{
              fontFamily: "'Larken', 'Lora', serif",
              fontSize: '15px',
              color: '#62350A',
              border: '0.75px solid #A44E0E',
              borderRadius: 0,
              backgroundColor: 'transparent',
              width: '165px',
              height: '41px',
              transition: 'all 0.3s ease'
            }}
          >
            View All
          </a>
        </div>

        {/* 6 article cards, 3 per row */}
        <div className="articles-grid">
          {articles.map((item, i) => (
            <article key={item.id} className="article-card d-flex flex-column" style={{ backgroundColor: i % 2 ? '#FBF5EA' : '#F8EFE2' }}>
              <div style={{ aspectRatio: '226 / 202' }} className="overflow-hidden">
                <img src={item.image} alt={item.title} className="w-100 h-100 d-block" style={{ objectFit: 'cover' }} />
              </div>

              <div className="d-flex flex-column flex-grow-1 px-3 pt-3 pb-2">
                <h3
                  className="mb-2"
                  style={{ fontFamily: "'Beautique Display', 'Cormorant Garamond', serif", fontSize: 'clamp(14px, 1.2vw, 16px)', color: '#422207', fontWeight: 400 }}
                >
                  {item.title}
                </h3>
                <p
                  className="mb-3"
                  style={{ fontFamily: "'Larken-Light', 'Larken', serif", fontSize: '13px', color: '#5C5248', lineHeight: '1.45' }}
                >
                  {item.excerpt}
                </p>

                <div
                  className="mt-auto pt-2 d-flex justify-content-between"
                  style={{ borderTop: '1px solid #A44E0E', fontFamily: "'Larken-Light', 'Larken', serif", fontSize: '11px', color: '#5C5248' }}
                >
                  <span>June.2024</span>
                  <span>4 Min Read</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      <style jsx>{`
        .articles-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .articles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 768px) {
          .articles-header {
            position: relative;
          }
          .articles-view-all {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          .articles-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px 28px;
          }
        }
      `}</style>
    </section>
  );
}
