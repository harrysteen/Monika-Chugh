'use client';

export default function BookMarqueeBanner({ text = 'quote cafe . thoughts in a cup . ' }) {
  // One set is wider than the screen; two identical sets side by side scroll by exactly one set,
  // so the text loops forever with no jump or gap
  const marqueeText = text.repeat(Math.max(6, Math.ceil(220 / text.length)));

  return (
    <div
      className="w-100 overflow-hidden py-2"
      style={{
        backgroundColor: '#EEDAA2',
        borderTop: '1px solid #E2CA8C',
        borderBottom: '1px solid #E2CA8C'
      }}
    >
      <div
        className="book-marquee-track"
        style={{
          fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
          fontSize: '18px',
          color: '#422207',
          letterSpacing: '0.04em',
          fontWeight: 400
        }}
      >
        <span>{marqueeText}</span>
        <span aria-hidden="true">{marqueeText}</span>
      </div>

      <style jsx>{`
        .book-marquee-track {
          display: flex;
          width: max-content;
          white-space: pre;
          animation: book-marquee 45s linear infinite;
        }
        @keyframes book-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .book-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
