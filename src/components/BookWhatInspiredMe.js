'use client';

const QUOTE_CAFE_TEXT = (
  <>
          <p className="mb-4">
            I was tired of playing a character that was not me in the pretend game. I did not want cardboard cutouts to lean on. I wanted to release myself from the embellished company of deceptive mates and colonized relationships, as one would call them. I felt stuck. It was time for me to come back to my archetype, pull me out of the rubble, and rise high and above. I decided to light my lantern, dive deep into my internal ocean of raw energy, and radiate it to the entire space around me.
          </p>
          <p className="mb-0">
            I recovered from physical bruises last time, and I knew I would from the inner disturbed bully this time also. My conscience rebelled. I grabbed the bull by the horn and said, &ldquo;Monika, enough is enough; you need to be free from the unwanted shackles and bonds.&rdquo; I needed to understand that &lsquo;self&rsquo; is a peaceful revolution within me to uplift me.
          </p>
  </>
);

// "Why …?" paper card over a soft background. Defaults are the Quote Café content;
// other books pass their own title, images and text (children).
export default function BookWhatInspiredMe({
  title = 'Why Quote Cafè ?',
  bg = '/images/books/why_quote_cafe_bg.webp',
  paper = '/images/books/why_quote_cafe_paper.webp',
  center = false,
  // Optional: the finished design image (background + paper). On desktop it is shown as-is
  // and the text sits on its paper (`paper` = left, top, right, bottom insets in %);
  // smaller screens use the separate background + paper so the card can grow with the text.
  design,
  children
}) {
  return (
    <section
      className={`why-quote-cafe position-relative ${design ? 'has-design' : ''}`}
      style={{
        '--why-bg': `url('${bg}')`,
        '--why-paper': `url('${paper}')`,
        ...(design
          ? {
              '--why-design': `url('${design.src}')`,
              '--why-ratio': design.ratio,
              '--why-l': `${design.paper[0]}%`,
              '--why-t': `${design.paper[1]}%`,
              '--why-r': `${design.paper[2]}%`,
              '--why-b': `${design.paper[3]}%`
            }
          : {})
      }}
    >
      {/* Paper card over the soft floral background; the card grows with its text */}
      <div className="why-card mx-auto">
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
            fontSize: 'clamp(21px, 2.2vw, 26px)',
            color: '#422207',
            fontWeight: 400,
            lineHeight: '1.2'
          }}
        >
          {title}
        </h2>

        <div
          style={{
            fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
            fontSize: '15px',
            color: '#4A423B',
            lineHeight: '1.65',
            fontWeight: 300,
            textAlign: center ? 'center' : 'left'
          }}
        >
          {children || QUOTE_CAFE_TEXT}
        </div>
      </div>

      <style jsx>{`
        .why-quote-cafe {
          background: #8a7a6a var(--why-bg) center / cover no-repeat;
          padding: clamp(40px, 6vw, 80px) 16px;
        }
        .why-card {
          max-width: 1200px;
          width: 100%;
          background: #F5EBC8 var(--why-paper) center / cover no-repeat;
          padding: clamp(28px, 4vw, 48px) clamp(20px, 4.5vw, 52px);
        }
        @media (min-width: 992px) {
          .why-card {
            width: 84%;
          }
          /* Design image shown exactly; text centred on its paper */
          .why-quote-cafe.has-design {
            background: var(--why-design) center / 100% 100% no-repeat;
            aspect-ratio: var(--why-ratio);
            padding: 0;
          }
          .has-design .why-card {
            position: absolute;
            left: var(--why-l);
            top: var(--why-t);
            right: var(--why-r);
            bottom: var(--why-b);
            width: auto;
            max-width: none;
            background: transparent;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 10%;
          }
        }
      `}</style>
    </section>
  );
}
