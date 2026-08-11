import './globals.css';

export const metadata = {
  title: 'Monika Chugh — Official Website',
  description: 'Official website of author and poet Monika Chugh featuring literary works, books, canvas quotations, and articles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
