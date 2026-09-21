'use client';

export default function MyStoryHero() {
  return (
    <section className="py-4 py-md-5 bg-cream" id="story-hero">
      <div className="container-fluid px-3 px-md-4 px-xl-5" style={{ maxWidth: '1380px' }}>
        <div className="position-relative rounded-4 overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
          <img
            src="/images/mystory/my_story_hero_bg_image.png"
            alt="Hi! I am Monika Chugh - Author and Poet"
            className="w-100 h-auto d-block rounded-3"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
          <img
            src="/images/mystory/my_story_child_hero_bg_image.png"
            alt="My story note"
            className="position-absolute"
            style={{
              top: '50%',
              right: '5%',
              transform: 'translateY(-50%)',
              width: '40%',
              height: 'auto',
              maxWidth: '500px'
            }}
          />
        </div>
      </div>
    </section>
  );
}

