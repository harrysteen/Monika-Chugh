'use client';

export default function MyStorySection7() {
  return (
    <section className="py-5 bg-cream position-relative" id="story-section-7">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1380px' }}>
        <div className="mx-auto d-flex justify-content-center align-items-center">
          <img 
            src="/images/mystory/my_story_section7_image.svg" 
            alt="My Story Honors and Works"
            className="w-100 h-auto d-block"
            style={{ 
              maxWidth: '1124px',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </section>
  );
}
