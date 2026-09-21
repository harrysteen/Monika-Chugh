'use client';

export default function MyStoryMantras() {
  return (
    <section 
      className="py-4 py-md-5 position-relative overflow-hidden w-100" 
      id="story-mantras"
      style={{
        backgroundColor: '#FFFAF2'
      }}
    >
      <div className="w-100 px-2 px-md-4 px-xl-5 text-center">
        
        {/* 100% Width High-Resolution Section 7 Hanging Scrolls Graphic */}
        <div className="w-100 mx-auto d-flex justify-content-center align-items-center">
          <img 
            src="/images/mystory/my_story_section7_mantras.png" 
            alt="My mantra: Be affectionately detached to all. My tagline: Life is simple; why complicate? My happy pill: Coffee. And: I believe in miracles..!"
            className="w-100 h-auto d-block"
            style={{ 
              maxWidth: '1380px',
              objectFit: 'contain'
            }}
          />
        </div>

      </div>
    </section>
  );
}
