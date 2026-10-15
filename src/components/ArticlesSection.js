'use client';

const articles = [
  {
    id: 'love-myself',
    date: 'April.2021',
    readTime: '4 Min Read',
    href: 'https://community.thriveglobal.com/finally-i-am-learning-to-love-myself/',
    title: 'Finally, I am learning to love myself!',
    image: '/images/poems/article_love_myself.webp',
    excerpt: 'i wanted validation. I wanted acceptance. I wanted a stamp of approval. Ironically, I needed to understand that SELF is a peaceful revolution within me to uplift myself.'
  },
  {
    id: 'off-she-goes',
    date: 'Sep.2021',
    readTime: '4 Min Read',
    href: 'https://community.thriveglobal.com/and-off-she-goes-2/',
    title: '...and off she goes',
    image: '/images/poems/article_off_she_goes.webp',
    excerpt: '...now you sail away from the safe harbor to find your own corner. ...now you have to carve your own path. ...now you are off to great places...'
  },
  {
    id: 'forgive',
    date: 'Feb.2021',
    readTime: '3 Min Read',
    href: 'https://community.thriveglobal.com/forgive-let-it-go-period/',
    title: 'Forgive, Let It Go- Period!',
    image: '/images/poems/article_forgive.webp',
    excerpt: 'We all talk about forgiveness. We all preach about forgiveness. We all share our experiences about forgiveness. Breathe- Let it go- Let it go!'
  },
  {
    id: 'storm',
    date: 'Jan.2021',
    readTime: '4 Min Read',
    href: 'https://community.thriveglobal.com/the-storm-in-her/',
    title: 'The Storm in Her!',
    image: '/images/poems/article_storm.webp',
    excerpt: 'she needed help- I knew I was that one person who was given the chance to revive her back. I sincerely hope she is smiling wherever she is right now. Keep the good karma flowing!'
  },
  {
    id: 'kensho',
    date: 'Dec.2020',
    readTime: '4 Min Read',
    href: 'https://community.thriveglobal.com/the-kensho-moment-a-glimpse-of-the-mystic-you/',
    title: 'The Kenshō Moment',
    image: '/images/poems/article_kensho.webp',
    excerpt: 'Kenshō and Satori what do these experiences really mean? Have you had your moments so far?'
  },
  {
    id: 'pendulum',
    date: 'Dec.2020',
    readTime: '7 Min Read',
    href: 'https://community.thriveglobal.com/balance-escaping-the-pendulum/',
    title: 'escaping the pendulum..',
    image: '/images/poems/article_pendulum.webp',
    excerpt: 'my friend once asked me, “ why are you always dangling like a pendulum”? That got me thinking real hard!'
  }
];

// The heading font has no "ō", so the browser would draw it in a different, smaller font.
// Draw a normal "o" from the heading font with a small line above it instead.
const withMacrons = (text) =>
  text.split('ō').flatMap((part, i) =>
    i === 0 ? [part] : [<span key={i} className="macron-o">o</span>, part]
  );

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
            href="https://community.thriveglobal.com/author/monika-chugh/"
            target="_blank"
            rel="noopener noreferrer"
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
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card d-flex flex-column text-decoration-none"
              style={{ backgroundColor: i % 2 ? '#FBF5EA' : '#F8EFE2' }}
            >
              <div style={{ aspectRatio: '226 / 202' }} className="overflow-hidden">
                <img src={item.image} alt={item.title} className="w-100 h-100 d-block" style={{ objectFit: 'cover' }} />
              </div>

              <div className="d-flex flex-column flex-grow-1 px-3 pt-3 pb-2">
                <h3
                  className="mb-2"
                  style={{ fontFamily: "'Beautique Display', 'Cormorant Garamond', serif", fontSize: 'clamp(14px, 1.2vw, 16px)', color: '#422207', fontWeight: 400 }}
                >
                  {withMacrons(item.title)}
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
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </a>
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
        :global(.macron-o) {
          position: relative;
          display: inline-block;
        }
        :global(.macron-o)::after {
          content: '';
          position: absolute;
          left: 12%;
          right: 12%;
          top: 0.12em;
          height: 0.06em;
          min-height: 1px;
          background: currentColor;
        }
        .article-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .article-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(66, 34, 7, 0.12);
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
