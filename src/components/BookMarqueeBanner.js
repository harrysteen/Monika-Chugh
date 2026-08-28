'use client';

export default function BookMarqueeBanner() {
  const marqueeText = "quote cafe . the silent soul . thought in a cup . quote cafe . the silent soul . thought in a cup . quote cafe . the silent soul . thought in a cup . quote cafe . the silent soul . thought in a cup . ";

  return (
    <div 
      className="w-100 overflow-hidden py-2"
      style={{
        backgroundColor: '#EEDAA2',
        borderTop: '1px solid #E2CA8C',
        borderBottom: '1px solid #E2CA8C'
      }}
    >
      <div className="d-flex whitespace-nowrap overflow-hidden" style={{ whiteSpace: 'nowrap' }}>
        <div 
          className="d-inline-flex animate-marquee"
          style={{
            fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
            fontSize: '18px',
            color: '#422207',
            letterSpacing: '0.04em',
            fontWeight: 400
          }}
        >
          <span className="mx-3">{marqueeText}</span>
          <span className="mx-3">{marqueeText}</span>
        </div>
      </div>
    </div>
  );
}
