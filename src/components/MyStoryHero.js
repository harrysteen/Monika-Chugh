'use client';

export default function MyStoryHero() {
  return (
    <section className="py-3 py-md-4" id="story-hero" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-xl-5" style={{ maxWidth: '1380px' }}>
        <div className="position-relative overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
          
          {/* Main Hero Background Portrait Photo */}
          <img
            src="/images/mystory/my_story_hero_bg_image.png"
            alt="Monika Chugh - My Story"
            className="w-100 h-auto d-block"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />

          {/* Torn Paper Note Overlay - Positioned on the LEFT */}
          <div
            className="position-absolute"
            style={{
              top: '48%',
              left: '4.5%',
              transform: 'translateY(-50%)',
              width: '36%',
              maxWidth: '490px',
              zIndex: 2
            }}
          >
            <img
              src="/images/mystory/my_story_child_hero_bg_image.png"
              alt="Monika here note"
              className="w-100 h-auto d-block"
              style={{
                filter: 'drop-shadow(0 4px 16px rgba(66, 34, 7, 0.08))'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

