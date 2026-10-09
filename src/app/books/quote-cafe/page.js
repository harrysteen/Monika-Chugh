'use client';

import BookDetailLayout from '../../../components/BookDetailLayout';
import BookWhatYoullDiscover from '../../../components/BookWhatYoullDiscover';
import BookQuoteCallout from '../../../components/BookQuoteCallout';
import BookWhatInspiredMe from '../../../components/BookWhatInspiredMe';
import BookPraiseTestimonials from '../../../components/BookPraiseTestimonials';
import { getBook } from '../../../data/books';

export default function QuoteCafeDetailPage() {
  return (
    <BookDetailLayout
      book={getBook('quote-cafe')}
      renderSections={(openBuy) => (
        <>
          <BookWhatYoullDiscover />
          <BookQuoteCallout onGetCopy={openBuy} />
          <BookWhatInspiredMe />
          <BookPraiseTestimonials />
        </>
      )}
    />
  );
}
