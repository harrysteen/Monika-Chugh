'use client';

import BookDetailLayout from '../../../components/BookDetailLayout';
import BookWithinQuietZone from '../../../components/BookWithinQuietZone';
import BookQuoteCallout from '../../../components/BookQuoteCallout';
import BookWhatInspiredMe from '../../../components/BookWhatInspiredMe';
import BookPraiseTestimonials from '../../../components/BookPraiseTestimonials';
import { getBook } from '../../../data/books';

export default function QuietZoneDetailPage() {
  return (
    <BookDetailLayout
      book={getBook('quiet-zone')}
      renderSections={(openBuy) => (
        <>
          <BookWithinQuietZone />
          <BookQuoteCallout onGetCopy={openBuy} />
          <BookWhatInspiredMe
            title="Why A Quiet Zone With Affirmations ?"
            bg="/images/books/why_quiet_zone_bg.webp"
            paper="/images/books/why_quiet_zone_paper.webp"
            design={{ src: '/images/books/why_quiet_zone_full.webp', ratio: '5128 / 1980', paper: [7.96, 15.15, 8.05, 15.2] }}
            center
          >
            <p className="mb-0">
              Because sometimes we need a corner to hear ourselves again. A Quiet Zone With Affirmations is that space away from the noise of everyday life. Each affirmation encourages self-awareness and a shift in perspective. A simple affirmation can change the way we think, feel, and move through our day. Sometimes, the words we need most are the ones we learn to say to ourselves.
            </p>
          </BookWhatInspiredMe>
          <BookPraiseTestimonials
            title="Praise for A Quiet Zone With Affirmations"
            small={{
              src: '/images/books/praise_geetika.webp',
              alt: 'Words from Geetika: “Very easy to read. Almost therapeutic and a good reminder to take care of oneself. Feels like a meditation session where one is learning to take care and focus on oneself.” 02.22.2024'
            }}
            large={{
              src: '/images/books/praise_gurpreet.webp',
              alt: 'Words from Gurpreet: “Absolutely relatable. It delves into self-discovery, acceptance, empowerment, resilience, healing, gratitude, and numerous positive affirmations. To lead a happy and fulfilling life, one should embrace all these aspects.” 02.12.2024'
            }}
          />
        </>
      )}
    />
  );
}
