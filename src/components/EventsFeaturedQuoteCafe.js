'use client';

// Black camera film frame around a photo. With `fill`, the frame fills its (positioned) box
// and the photo takes whatever height is left; otherwise the photo uses `height`.
function CameraFrame({
  src,
  alt = 'Quote Café & Affirmations book launch',
  frameNum = '22',
  tag = 'BOOKLAUNCH',
  timestamp = '23.03.2025 11:04:20',
  height = '210px',
  fill = false,
  tight = false, // smaller header text for narrow frames with long labels
  position = 'center',
  className = '',
  style = {}
}) {
  return (
    <div
      className={`bg-black text-white p-2 rounded-1 d-flex flex-column ${className}`}
      style={{
        boxShadow: '0 10px 25px rgba(0,0,0,0.35)',
        border: '1px solid #1a1a1a',
        ...(fill ? { height: '100%' } : {}),
        ...style
      }}
    >
      {/* Top Header */}
      <div className="d-flex justify-content-between align-items-center mb-1 px-1 flex-shrink-0" style={{ fontFamily: "'Larken', serif", fontSize: tight ? '5.5px' : '7px', color: '#E0E0E0', letterSpacing: tight ? '0' : '0.3px', gap: tight ? '3px' : '6px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        <span>MONIKACHUGH</span>
        <span>► {frameNum}</span>
        <span>{tag}</span>
      </div>

      {/* Photo */}
      <div className="position-relative overflow-hidden" style={{ borderRadius: '2px', backgroundColor: '#181818', ...(fill ? { flex: '1 1 0', minHeight: 0 } : {}) }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: fill ? '100%' : height, objectFit: 'cover', display: 'block', objectPosition: position }}
        />
      </div>

      {/* Bottom Footer */}
      <div className="d-flex justify-content-between align-items-center mt-1 px-1 flex-shrink-0" style={{ fontFamily: "'Larken', serif", fontSize: '7px', color: '#CCCCCC', letterSpacing: '0.3px', gap: '6px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        <span>► {frameNum}</span>
        <span style={{ color: '#E0E0E0' }}>{timestamp}</span>
      </div>
    </div>
  );
}

// Arrow shapes used next to the handwritten notes (viewBox 0 0 40 30)
const ARROWS = {
  downRight: ['M 3 6 Q 22 4 36 22', 'M 29 19 L 36 22 L 35 14'],
  curveDownRight: ['M 3 4 Q 26 6 34 24', 'M 28 19 L 34 24 L 37 16'],
  downLeft: ['M 34 3 Q 30 22 6 24', 'M 12 19 L 6 24 L 13 28'],
  overRight: ['M 4 4 Q 26 2 32 22', 'M 26 17 L 32 22 L 36 14'],
  left: ['M 37 18 Q 22 6 5 12', 'M 11 6 L 5 12 L 12 16'],
  downThenRight: ['M 6 3 Q 2 22 34 22', 'M 28 17 L 34 22 L 28 27']
};

// Each event: header text plus a collage laid out as in its design.
// Box = left, top, width, height measured on the design (size w x h), turned into
// percentages so the collage scales with the screen.
const EVENTS = {
  'quote-cafe': {
    title: 'QUOTE CAFÉ & AFFIRMATIONS',
    meta: 'Fremont California · JAN 2025',
    text: 'A day very close to my heart: seeing my words, thoughts, and years of writing come together as books, and sharing that moment with people I love. What began with just me, a pen, and a thought became something I could finally hold in my hands. A beautiful reminder of how far one small beginning can take you.',
    alt: 'Quote Café & Affirmations book launch',
    timestamp: '23.03.2025 11:04:20',
    size: [827, 338],
    caption: { text: 'A gathering filled with stories', at: [333, 42] },
    frames: [
      { src: '/images/events/quote_cafe_1.webp', box: [0, 4, 155, 158], num: '22', tag: 'BOOKLAUNCH', mobileHeight: '200px' },
      { src: '/images/events/quote_cafe_2.webp', box: [15, 175, 113, 117], num: '22', tag: 'BOOKLAUNCH', mobileHeight: '200px' },
      { src: '/images/events/quote_cafe_3.webp', box: [165, 33, 128, 216], num: '31', tag: 'BOOKLAUNCH', mobileHeight: '300px', position: 'center top' },
      { src: '/images/events/quote_cafe_4.webp', box: [330, 47, 263, 138], num: '22', tag: 'BOOKLAUNCH', mobileHeight: '200px', position: 'center top' },
      { src: '/images/events/quote_cafe_5.webp', box: [397, 199, 263, 139], num: '31', tag: 'BOOKLAUNCH', mobileHeight: '200px' },
      { src: '/images/events/quote_cafe_6.webp', box: [605, 0, 153, 185], num: '22', tag: 'BOOKLAUNCH', mobileHeight: '300px', position: 'center top' },
      { src: '/images/events/quote_cafe_7.webp', box: [673, 200, 154, 116], num: '22', tag: 'BOOKLAUNCH', mobileHeight: '200px' }
    ],
    notes: [
      { text: 'a moment of gratitude', at: [-120, -25], rotate: -32 },
      { text: 'Realization ♡', at: [140, 292], rotate: -28 },
      { text: 'Courage', at: [320, 222], rotate: -8 },
      { text: 'Dream', at: [778, 32], rotate: 12 }
    ],
    arrows: [
      { shape: 'downRight', at: [-34, 2], width: 32 },
      { shape: 'curveDownRight', at: [136, 258], width: 28 },
      { shape: 'downLeft', at: [342, 190], width: 28 },
      { shape: 'overRight', at: [766, 5], width: 28 }
    ]
  },

  'canvas-quotations': {
    title: 'Canvas & quotations launch',
    meta: 'Fremont California · JAN 2025',
    text: 'A creative collaboration born from a shared love of art and words. Created with Alka Chopra, Canvas & Quotations brings together her paintings and my words, turning two individual forms of expression into something we can bring to life. Two sisters, two creative paths, woven into one shared vision.',
    alt: 'Canvas & Quotations launch',
    timestamp: '23.03.2025 11:04:20',
    size: [821, 338],
    frames: [
      { src: '/images/events/canvas_1.webp', box: [0, 4, 167, 171], num: '22', tag: 'CANVAS & QUOTATIONS', mobileHeight: '240px' },
      { src: '/images/events/canvas_2.webp', box: [45, 186, 123, 127], num: '12', tag: 'CANVAS & QUOTATIONS', mobileHeight: '220px', tight: true },
      { src: '/images/events/canvas_3.webp', box: [181, 4, 167, 234], num: '35', tag: 'CANVAS & QUOTATIONS', mobileHeight: '300px' },
      { src: '/images/events/canvas_4.webp', box: [359, 4, 286, 150], num: '22', tag: 'CANVAS & QUOTATIONS', mobileHeight: '200px' },
      { src: '/images/events/canvas_5.webp', box: [375, 166, 245, 127], num: '22', tag: 'CANVAS & QUOTATIONS', mobileHeight: '200px' },
      { src: '/images/events/canvas_6.webp', box: [654, 0, 167, 201], num: '22', tag: 'CANVAS & QUOTATIONS', mobileHeight: '280px' },
      { src: '/images/events/canvas_7.webp', box: [634, 212, 167, 126], num: '22', tag: 'CANVAS & QUOTATIONS', mobileHeight: '220px' }
    ],
    notes: [
      { text: 'Connection', at: [-96, 42], rotate: -55 },
      { text: 'Sisterhood', at: [286, 280], rotate: 4 },
      { text: 'Creativity', at: [842, 42], rotate: -40 },
      { text: 'Joy', at: [826, 242], rotate: -60 }
    ],
    arrows: [
      { shape: 'left', at: [-38, 18], width: 32 },
      { shape: 'downLeft', at: [334, 245], width: 28 },
      { shape: 'overRight', at: [830, 8], width: 30 },
      { shape: 'overRight', at: [806, 230], width: 20 }
    ]
  },

  wellness: {
    title: 'Wellness',
    meta: 'Flourish Night · Canada · May 2026',
    text: 'A meaningful gathering where I shared a personal reflection on one of the hardest chapters of my life and the role mindfulness played in my journey. I then guided a group of women through a mindfulness experience, a moment to reflect, and reconnect within. The experience was complemented by an art session led by Alka Chopra from Canvas & Quotations, beautifully bringing together mindfulness, creativity, and connection.',
    alt: 'Flourish Night wellness session',
    timestamp: '23.03.2025 11:04:20',
    size: [697, 202],
    caption: { text: 'A warm evening,', at: [623, 192] },
    frames: [
      { src: '/images/events/wellness_1.webp', box: [0, 3, 142, 146], num: '22', tag: 'WELLNESS', mobileHeight: '260px' },
      { src: '/images/events/wellness_2.webp', box: [153, 3, 143, 199], num: '35', tag: 'WELLNESS', mobileHeight: '320px' },
      { src: '/images/events/wellness_3.webp', box: [305, 2, 242, 127], num: '22', tag: 'WELLNESS', mobileHeight: '200px', position: 'center top' },
      { src: '/images/events/wellness_4.webp', box: [555, 0, 142, 171], num: '22', tag: 'WELLNESS', mobileHeight: '300px' }
    ],
    notes: [
      { text: 'Connection', at: [-70, 22], rotate: -40 },
      { text: 'Presence', at: [92, 184], rotate: 8 },
      { text: 'Vulnerability', at: [380, 140], rotate: -4 },
      { text: 'Mindfulness', at: [712, 34], rotate: -25 }
    ],
    arrows: [
      { shape: 'left', at: [-30, 20], width: 26 },
      { shape: 'downLeft', at: [124, 158], width: 24 },
      { shape: 'downThenRight', at: [352, 134], width: 24 },
      { shape: 'overRight', at: [704, 6], width: 24 }
    ]
  },

  arogini: {
    title: 'Ārogini',
    meta: 'Hyderabad · SEP 2025 & MAR 2026',
    text: 'Ārogini’s journey in India began with visits to Swami Dayananda Saraswati Vidyalaya in Roorkee and Sai Dham in Faridabad in September 2025, followed by Mano Vikas and NAB Delhi in March 2026. Stepping into these spaces, meeting the children, educators, and teams, and understanding their needs firsthand gave deeper meaning to our vision. Each visit continues to shape Ārogini’s journey building meaningful connections and finding ways to bring vision care, wellness, and support to children in underserved communities.',
    alt: 'Ārogini school visit',
    timestamp: '09.2025 AND 03.2026',
    size: [749, 338],
    caption: { text: 'Shining Paths, One Life at a Time.', at: [323, 40], size: 'clamp(13px, 1.25vw, 16px)' },
    frames: [
      { src: '/images/events/arogini_1.webp', box: [0, 4, 151, 154], num: '22', tag: 'ĀROGINI', mobileHeight: '240px' },
      { src: '/images/events/arogini_2.webp', box: [41, 168, 110, 113], num: '12', tag: 'ĀROGINI', mobileHeight: '220px' },
      { src: '/images/events/arogini_3.webp', box: [162, 4, 150, 210], num: '35', tag: 'ĀROGINI', mobileHeight: '300px' },
      { src: '/images/events/arogini_4.webp', box: [162, 224, 150, 114], num: '22', tag: 'ĀROGINI', mobileHeight: '220px' },
      { src: '/images/events/arogini_5.webp', box: [322, 46, 256, 135], num: '22', tag: 'ĀROGINI', mobileHeight: '200px' },
      { src: '/images/events/arogini_6.webp', box: [322, 194, 111, 113], num: '22', tag: 'ĀROGINI', mobileHeight: '220px' },
      { src: '/images/events/arogini_7.webp', box: [440, 194, 150, 129], num: '53', tag: 'ĀROGINI', mobileHeight: '220px' },
      { src: '/images/events/arogini_8.webp', box: [587, 0, 150, 181], num: '22', tag: 'ĀROGINI', mobileHeight: '300px', position: 'center top' },
      { src: '/images/events/arogini_9.webp', box: [599, 194, 150, 113], num: '22', tag: 'ĀROGINI', mobileHeight: '220px' }
    ],
    notes: [
      { text: 'Hope', at: [-70, 38], rotate: -25 },
      { text: 'Purpose', at: [104, 316], rotate: -6 },
      { text: 'Compassion', at: [356, 316], rotate: -6 },
      { text: 'Service', at: [757, 24], rotate: -15 }
    ],
    arrows: [
      { shape: 'left', at: [-44, 45], width: 34 },
      { shape: 'downLeft', at: [128, 288], width: 26 },
      { shape: 'downThenRight', at: [326, 309], width: 26 },
      { shape: 'overRight', at: [745, 7], width: 28 }
    ]
  }
};

const noteStyle = {
  position: 'absolute',
  fontFamily: "'Caveat', 'Italianno', cursive",
  fontSize: 'clamp(16px, 1.6vw, 22px)',
  color: '#62350A',
  whiteSpace: 'nowrap',
  zIndex: 3
};

export default function EventsFeaturedQuoteCafe({ activeTab = 'quote-cafe' }) {
  const event = EVENTS[activeTab];

  // Tabs without photos yet
  if (!event) {
    return (
      <section className="py-5 bg-cream">
        <p className="text-center mb-0 py-5" style={{ fontFamily: "'Larken-Light', serif", fontSize: '16px', color: '#010101A3' }}>
          Moments from this event are coming soon.
        </p>
      </section>
    );
  }

  const [W, H] = event.size;
  const pctX = (v) => `${(v / W) * 100}%`;
  const pctY = (v) => `${(v / H) * 100}%`;

  return (
    <section className="py-4 py-lg-5 bg-cream position-relative overflow-hidden">
      <div className="container-fluid px-3 px-xl-5" style={{ maxWidth: '1320px' }}>

        {/* Main Event Header */}
        <div className="text-center max-w-4xl mx-auto mb-5">
          <h2
            className="mb-2"
            style={{ fontFamily: "'Larken-Medium', serif", fontWeight: 400, fontStyle: 'normal', fontSize: '35px', lineHeight: '140%', letterSpacing: '0', color: '#502C0A' }}
          >
            {event.title}
          </h2>

          <h4
            className="mb-3"
            style={{ fontFamily: "'Larken-Medium', serif", fontWeight: 400, fontStyle: 'normal', fontSize: '17px', lineHeight: '145%', letterSpacing: '0', color: '#010101B2' }}
          >
            {event.meta}
          </h4>

          <p
            className="mx-auto mb-0"
            style={{ fontFamily: "'Larken-Light', serif", fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '145%', letterSpacing: '0', textAlign: 'center', color: '#010101A3', maxWidth: '860px' }}
          >
            {event.text}
          </p>
        </div>

        {/* Photo collage - desktop: placed as in the design */}
        <div className="d-none d-lg-block mx-auto mb-5 pt-4" style={{ maxWidth: '1120px', paddingLeft: '5%', paddingRight: '3%' }}>
          <div className="position-relative w-100" style={{ aspectRatio: `${W} / ${H}` }}>
            {event.frames.map((f) => (
              <div
                key={f.src}
                className="position-absolute"
                style={{ left: pctX(f.box[0]), top: pctY(f.box[1]), width: pctX(f.box[2]), height: pctY(f.box[3]), zIndex: 1 }}
              >
                <CameraFrame src={f.src} alt={event.alt} frameNum={f.num} tag={f.tag} timestamp={event.timestamp} position={f.position} tight={f.tight} fill />
              </div>
            ))}

            {/* Caption above the wide middle photo (not every design has one) */}
            {event.caption && (
              <p
                className="position-absolute mb-0"
                style={{ left: pctX(event.caption.at[0]), top: pctY(event.caption.at[1]), transform: 'translateY(-100%)', fontFamily: "'Larken', serif", fontSize: event.caption.size || 'clamp(12px, 1.1vw, 14px)', color: '#8B4715', whiteSpace: 'nowrap' }}
              >
                {event.caption.text}
              </p>
            )}

            {/* Handwritten notes with arrows */}
            {event.notes.map((n) => (
              <div
                key={n.text}
                style={{
                  ...noteStyle,
                  left: pctX(n.at[0]),
                  top: pctY(n.at[1]),
                  transform: `rotate(${n.rotate}deg)`,
                  ...(n.serif ? { fontFamily: "'Larken', serif", fontSize: 'clamp(12px, 1.1vw, 14px)', color: '#8B4715' } : {})
                }}
              >
                {n.text}
              </div>
            ))}
            {event.arrows.map((a, i) => (
              <svg
                key={i}
                className="position-absolute"
                style={{ left: pctX(a.at[0]), top: pctY(a.at[1]), width: pctX(a.width), zIndex: 3 }}
                viewBox="0 0 40 30"
                fill="none"
                aria-hidden="true"
              >
                {ARROWS[a.shape].map((d) => (
                  <path key={d} d={d} stroke="#62350A" strokeWidth="1.3" />
                ))}
              </svg>
            ))}
          </div>
        </div>

        {/* Photo collage - phones and tablets: a simple two-column grid */}
        <div className="d-lg-none mb-5 pt-2">
          {event.caption && (
            <p className="mb-2" style={{ fontFamily: "'Larken', serif", fontSize: '14px', color: '#8B4715' }}>
              {event.caption.text}
            </p>
          )}
          <div className="row g-3">
            {event.frames.map((f) => (
              <div key={f.src} className="col-12 col-sm-6">
                <CameraFrame src={f.src} alt={event.alt} frameNum={f.num} tag={f.tag} timestamp={event.timestamp} position={f.position} height={f.mobileHeight} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
