'use client';

const POEM = [
  'doused in vacuum',
  'innocent and bare',
  'frantic with flustered lyrics',
  'i gazed around',
  'the lens of my eye all fogged up',
  'slow down will you',
  'encounter your archetype',
  'my inner sanctum',
  'my holy shrine',
  'yes',
  'the tired',
  'and',
  'the thirsty mind',
  'was mine'
];

export default function PoemsHero() {
  return (
    <section className="poems-hero position-relative overflow-hidden">
      <div className="poems-hero-inner container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">

        {/* Left: the poem */}
        <div className="poems-hero-poem">
          {POEM.map((line, i) => (
            <span key={i} className="d-block">{line}</span>
          ))}
        </div>

        {/* Right: what inspired it */}
        <div className="poems-hero-note">
          <p className="mb-0">
            This poem came from my mind that wouldn&apos;t stop, restless, thirsty, reaching for something I couldn&apos;t name.
            <br />
            Amid the frantic noise, something whispered: slow down, Monika.
            <br />
            That&apos;s when I found my inner sanctum.
            <br />
            I wrote this to remind myself that even a tired, thirsty mind can find its way out.
          </p>
        </div>

      </div>

      <style jsx>{`
        /* Soft golden blur background (the small torn-paper frame is part of the image) */
        .poems-hero {
          min-height: 100vh;
          min-height: 100svh;
          background: #F4EEDF url('/images/poems/poems_hero_bg.webp') center / cover no-repeat;
          display: flex;
        }
        .poems-hero-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 40px;
          padding-top: 48px;
          padding-bottom: 48px;
        }
        .poems-hero-poem {
          font-family: 'Dancing Script', cursive;
          font-weight: 400;
          font-size: 22px;
          line-height: 124%;
          letter-spacing: 0.01em;
          text-align: center;
          color: #804112;
        }
        .poems-hero-note p {
          font-family: 'Larken-Light', serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 145%;
          letter-spacing: 0;
          color: #4A2806;
          max-width: 480px;
          margin: 0 auto;
        }
        /* Desktop: poem on the left, note low on the right, as in the design */
        @media (min-width: 992px) {
          .poems-hero-inner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 0;
          }
          .poems-hero-poem {
            width: 34%;
            padding-left: 2%;
          }
          .poems-hero-note {
            width: 40%;
            align-self: flex-end;
            margin-bottom: 9vh;
            margin-right: 2%;
          }
          .poems-hero-note p {
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
}
