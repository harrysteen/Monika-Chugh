'use client';

import { useEffect, useRef, useState } from 'react';

// Three featured poems shown one at a time; the small thumbnails on the right switch between them.
// Poem lines: blank strings are stanza breaks.
const FEATURED = [
  {
    id: 'balance',
    heading: 'Pushcart 2024 Nominated Poem',
    title: 'Balance',
    image: '/images/poems/featured_balance.webp',
    thumb: { src: '/images/poems/thumb_balance.webp', label: 'Balance' },
    poem: [
      'an amalgamation', 'of tears and joy', 'sometimes on the edge', 'sometimes in the middle', 'sometimes on the top',
      'a polished tiptoeing ballerina', 'an ornate gem', 'flowery and jeweled', 'on each streak', 'on each stria',
      'the mysterious sun eclipsed', 'in the candied clouds', 'gusty winds hushing through', 'whispering the innermost secrets',
      'nimble with dainty steps', 'puddles pebbles boulders', 'all dashed up and about', 'swirls me around', 'i am stuck',
      'i look up', 'i feel light', 'featherweight and ethereal', 'imbibing the hues', 'soaking in the chroma',
      'i float around drift in my zen', 'reposed and rested', 'glistening all over', 'enveloped within', 'my pearled dewdrop'
    ],
    story: [
      'I wrote Balance at a time when I felt anything but balanced. Life felt scattered; some days I was on the edge, some days somewhere in the middle, simply trying to find my footing. There were mornings I woke up all smiles, only to feel it slip away by noon. Nights were trying to make sense of how one day could hold multiple versions of me. I wasn’t looking for perfect equilibrium. I was trying to find a way to stand without feeling like I might fall.',
      'The poem came from that search. The puddles, pebbles, boulders, winds, clouds, and even the tiptoeing ballerina became different faces of my life as I was experiencing it. Balance isn’t about having everything perfectly in place. It could be learning to move through all of it. Somewhere between tears and joy, chaos and stillness, I found hope and the grace to hold it all.',
      'Some days I was the unsettled puddle, rippling at the slightest touch. Other days, a pebble, small and steady, content just to be still. And on harder days, I learned that strength is not feeling nothing, but staying rooted beneath the weight. The winds reminded me that change is not a disruption, but often the teacher. Like a ballerina on her toes, I learned that balance is not stillness, but trusting the wobble.'
    ],
    closing: 'It’s a practice, moment by moment, breath by breath.'
  },
  {
    id: 'unchained',
    heading: 'Where my words have found a home',
    title: 'Unchained',
    image: '/images/poems/featured_unchained.webp',
    thumb: { src: '/images/poems/thumb_figments.webp', label: 'Figments of tomorrow' },
    poem: [
      'i had built walls around my heart', 'soldered and cemented with stony eyes', 'plastered to a tough gateway',
      'drugged with dusky emotions', 'denied me to the nectarous petals', 'until I knocked down my old shaggy self',
      'drowned in the divine me', 'hugged the angelic fabric in my bones', 'wiped the fog and mist', 'trimmed the weeds',
      'chucked the rummage and shavings', 'the denial was over at last', 'carried me in my open arms',
      'sniffed the fragrant lavender', 'sipped the holy ambrosia', 'i unchained', 'i delivered to myself', 'my silent soul',
      'a sense of calm finally'
    ],
    story: [
      'Unchained came from the unseen walls I had built around myself. I thought they protected me. But no, they began to confine me. I realized I could not wait for someone else to bring them down. It was all on me. Through Agni, I now see the courage it takes to transform.',
      'To burn away and purge the unwanted.',
      'I unchained. I delivered myself. Perhaps letting go is freedom, even without the safety those walls once gave.'
    ],
    storyTight: true
  },
  {
    id: 'total-me',
    heading: 'Poet of the Year 2025 by Rotary International',
    title: 'Total Me',
    image: '/images/poems/featured_total_me.webp',
    thumb: { src: '/images/poems/thumb_rotary.webp', label: 'Total Me' },
    poem: [
      'i had built walls around my heart',
      'soldered and cemented with stony eyes',
      'plastered to a tough gateway',
      'drugged with dusky emotions',
      'denied me to the nectarous petals',
      '',
      'the mysterious sun eclipsed',
      'candied clouds',
      'and',
      'gusty winds',
      'whispering the innermost secrets',
      'puddles pebbles boulders',
      'all dashed up and about',
      'swirled me around',
      'i was stuck',
      '',
      'until I knocked down my old shaggy self',
      'drowned in the divine me',
      'hugged the angelic fabric in my bones',
      'wiped the fog and mist',
      'trimmed the weeds',
      '',
      'i let the glorious sunlight filter through my shadow',
      'i let the silver moonlight purify my veneer',
      'i let the sparkling dewdrops drizzle on my soul',
      'pouring all the grace, all the tenderness',
      'all the goodness to a bountiful heart',
      'i look up',
      'i feel light',
      '',
      'i let the glorious sunlight filter through my shadow',
      'i let the silver moonlight purify my veneer',
      'i let the sparkling dewdrops drizzle on my soul',
      'pouring all the grace, all the tenderness',
      'all the goodness to a bountiful heart',
      'i look up',
      'i feel light',
      '',
      'a mosaic of paradoxes',
      'a montage of colors',
      'a potpourri of medleys',
      'imbibing the hues',
      'soaking in the chroma',
      '',
      'a polished tiptoeing ballerina',
      'an ornate gem, flowery and jeweled',
      'nimble with dainty steps',
      'featherweight and ethereal',
      '',
      'i wonder if i am an unsolved mystery',
      'bewitching and illusory, a conundrum for many',
      'find me if you can; unearth me slowly',
      'restoring and reclaiming, piece by piece',
      'in the mammoth of this puzzle, i built a sanctuary',
      'of the finesse in me, surrendered my spirit in divinity',
      '',
      'the denial was over at last',
      'carried me in my open arms',
      'sniffed the fragrant lavender',
      'sipped the holy ambrosia',
      'i unchained',
      'i delivered to myself',
      'my silent soul',
      'a sense of calm finally',
      '',
      'united with calm in the chaos, never to leave me alone',
      'having a gentle affair with my baroque life',
      'born to be in full swing on the cusp of epochal change',
      'ushering in a flowering crop for the world to revere',
      'the feeling of being me in acceptance of the total me'
    ],
    story: [
      'The Total Me came from accepting all the broken pieces of myself: the light and the shadow, the calm and the chaos, the softness and the strength.',
      'For years, I tried to understand the contradictions within me. Eventually, I realized they did not need to be resolved. They needed to belong. They needed to be accepted.',
      'There was transformation in those words: burning through the old, letting the light in, and reclaiming myself piece by piece.',
      'I did not have to become someone else.',
      'I had to accept the total me.'
    ],
    storyTight: true
  }
];

export default function PoemsPushcartSection() {
  const [activeId, setActiveId] = useState(FEATURED[0].id);
  const active = FEATURED.find((p) => p.id === activeId);
  const others = FEATURED.filter((p) => p.id !== activeId);

  // Custom scrollbar for long poems (thin light track with a brown thumb, as in the design)
  const linesRef = useRef(null);
  const [thumb, setThumb] = useState({ show: false, size: 0, top: 0 });
  const thumbDrag = useRef(null);

  useEffect(() => {
    const el = linesRef.current;
    if (!el) return;
    const update = () => {
      const show = el.scrollHeight > el.clientHeight + 1;
      const size = show ? Math.max(0.12, el.clientHeight / el.scrollHeight) : 0;
      const max = el.scrollHeight - el.clientHeight;
      setThumb({ show, size, top: max > 0 ? (el.scrollTop / max) * (1 - size) : 0 });
    };
    el.scrollTop = 0;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [activeId]);

  const onThumbDown = (e) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    thumbDrag.current = { y: e.clientY, top: linesRef.current.scrollTop };
  };
  const onThumbMove = (e) => {
    if (!thumbDrag.current) return;
    const el = linesRef.current;
    const trackH = el.clientHeight;
    const ratio = (el.scrollHeight - el.clientHeight) / (trackH * (1 - thumb.size));
    el.scrollTop = thumbDrag.current.top + (e.clientY - thumbDrag.current.y) * ratio;
  };
  const onThumbUp = () => { thumbDrag.current = null; };

  return (
    <section className="featured-poems py-5">
      <div className="container-fluid px-3 px-md-4 px-lg-5 mx-auto" style={{ maxWidth: '1240px' }}>

        <span
          className="d-block text-center mb-4"
          style={{ fontFamily: "'Italianno', cursive", fontSize: '34px', color: '#A44E0E', lineHeight: 1 }}
        >
          featured poems
        </span>

        <h2
          className="mb-4"
          style={{
            fontFamily: "'Beautique Display', 'Cormorant Garamond', serif",
            fontSize: 'clamp(21px, 2.2vw, 26px)',
            color: '#422207',
            fontWeight: 400
          }}
        >
          {active.heading}
        </h2>

        {/* key re-mounts the card on switch so it fades in */}
        <div key={active.id} className="featured-card">
          <div className="featured-grid">

            {/* Image */}
            <div className="featured-image">
              <img src={active.image} alt={active.title} className="w-100 h-100 d-block" style={{ objectFit: 'cover' }} />
            </div>

            {/* Poem (scrolls if it is taller than the image) */}
            <div className="featured-poem">
              <h3
                className="mb-2"
                style={{ fontFamily: "'Beautique Display', 'Cormorant Garamond', serif", fontSize: '28px', color: '#422207', fontWeight: 400 }}
              >
                {active.title}
              </h3>
              <div ref={linesRef} className="featured-poem-lines">
                {active.poem.map((line, i) =>
                  line ? <span key={i} className="d-block">{line}</span> : <span key={i} className="d-block" style={{ height: '1em' }} />
                )}
              </div>
              {thumb.show && (
                <div className="poem-scrollbar" aria-hidden="true">
                  <div
                    className="poem-scrollbar-thumb"
                    style={{ height: `${thumb.size * 100}%`, top: `${thumb.top * 100}%` }}
                    onPointerDown={onThumbDown}
                    onPointerMove={onThumbMove}
                    onPointerUp={onThumbUp}
                  />
                </div>
              )}
            </div>

            {/* Small covers - click to show that poem here */}
            <div className="featured-thumbs">
              {others.map((p) => (
                <button key={p.id} type="button" className="featured-thumb" onClick={() => setActiveId(p.id)} aria-label={`Show ${p.title}`}>
                  <span className="d-block mb-1">{p.thumb.label}</span>
                  <img src={p.thumb.src} alt="" className="d-block mx-auto" />
                </button>
              ))}
            </div>
          </div>

          {/* Story behind the poem */}
          <div className={`featured-story ${active.id === 'total-me' ? 'mt-5' : 'mt-4'}`}>
            {active.story.map((para, i) => (
              <p key={i} className={active.storyTight ? 'mb-0' : 'mb-3'}>{para}</p>
            ))}
            {active.closing && (
              <p className="mt-4 mb-0" style={{ fontFamily: "'Larken-Medium', 'Larken', serif", color: '#62350A', fontSize: '16px' }}>
                {active.closing}
              </p>
            )}
          </div>
        </div>

      </div>

      <style jsx>{`
        .featured-poems {
          background: #F8F0DD url('/images/books/why_quote_cafe_paper.webp') center / cover;
        }
        .featured-card {
          animation: featured-fade 0.4s ease;
        }
        @keyframes featured-fade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: none; }
        }
        .featured-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .featured-image {
          aspect-ratio: 368 / 554;
          max-width: 420px;
          width: 100%;
          margin: 0 auto;
        }
        .featured-poem-lines {
          font-family: 'Dancing Script', cursive;
          font-size: 16px;
          line-height: 112%;
          letter-spacing: 0.01em;
          color: #62350A;
        }
        .featured-thumbs {
          display: flex;
          justify-content: center;
          gap: 24px;
        }
        .featured-thumb {
          background: none;
          border: 0;
          padding: 0;
          cursor: pointer;
          font-family: 'Larken', serif;
          font-size: 11px;
          color: #422207;
          width: 72px;
          text-align: center;
          line-height: 1.2;
          transition: transform 0.25s ease;
        }
        .featured-thumb img {
          width: 64px;
          height: auto;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
        }
        .featured-thumb:hover {
          transform: translateY(-3px);
        }
        .featured-story p {
          font-family: 'Larken-Light', serif;
          font-size: 14px;
          line-height: 145%;
          color: #4A423B;
        }
        @media (min-width: 992px) {
          .featured-grid {
            grid-template-columns: 37% 1fr 90px;
            gap: 26px;
            align-items: start;
          }
          .featured-image {
            max-width: none;
          }
          .featured-poem {
            align-self: stretch;
            position: relative;
            max-width: 440px;
          }
          /* The poem never makes the card taller than the image: long poems scroll */
          .featured-poem-lines {
            position: absolute;
            top: 44px;
            left: 0;
            right: 0;
            bottom: 0;
            overflow-y: auto;
            padding-right: 28px;
            scrollbar-width: none;
          }
          .featured-poem-lines::-webkit-scrollbar {
            display: none;
          }
          .poem-scrollbar {
            position: absolute;
            top: 44px;
            bottom: 0;
            right: 4px;
            width: 4px;
            background: #EADBC6;
            border-radius: 2px;
          }
          .poem-scrollbar-thumb {
            position: absolute;
            left: -0.5px;
            width: 5px;
            background: #8B4715;
            border-radius: 2px;
            cursor: grab;
            touch-action: none;
          }
          .featured-thumbs {
            flex-direction: column;
            align-items: center;
            gap: 22px;
            padding-top: 6px;
          }
        }
      `}</style>
    </section>
  );
}
