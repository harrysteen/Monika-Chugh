'use client';

import BookDetailLayout from '../../../components/BookDetailLayout';
import BookWithinRebirth from '../../../components/BookWithinRebirth';
import BookQuoteCallout from '../../../components/BookQuoteCallout';
import BookWhatInspiredMe from '../../../components/BookWhatInspiredMe';
import BookPraiseTestimonials from '../../../components/BookPraiseTestimonials';
import { getBook } from '../../../data/books';

export default function RebirthDetailPage() {
  return (
    <BookDetailLayout
      book={getBook('rebirth')}
      renderSections={(openBuy) => (
        <>
          <BookWithinRebirth />
          <BookQuoteCallout onGetCopy={openBuy} />
          <BookWhatInspiredMe
            title="Why Rebirth - The Phoenix Rising ?"
            bg="/images/books/why_rebirth_bg.webp"
            paper="/images/books/why_rebirth_paper.webp"
            design={{ src: '/images/books/why_rebirth_full.webp', ratio: '5128 / 1980', paper: [8.03, 15.15, 7.98, 15.2] }}
          >
            <p className="mb-3">
              The phoenix has long symbolized renewal and rebirth, rising from the ashes of what once was. Rebirth brings together stories by different authors, each sharing her own journey through a fragmented chapter of life.
            </p>
            <p className="mb-0">
              These are stories of moving through darkness, confronting once-suppressed emotions, letting go of fear, anger, shame, guilt, and grief, and slowly finding a way back to oneself. Rebirth is rarely easy. It asks us to grieve who we once were, reclaim our self-worth, speak our truth, and allow old illusions to fall away.
            </p>
          </BookWhatInspiredMe>
          <BookPraiseTestimonials
            title="Praise for Rebirth - The Phoenix Rising"
            align="center"
            small={{
              src: '/images/books/praise_madhu_rebirth.webp',
              alt: 'Words from Madhu: “A must-read, motivational collection of powerful stories by diverse women who faced adversity, fell, rose again, and found their own rebirth—truly like a phoenix rising. When life makes us ask, “Why me?”, these stories remind us that we are not alone. The journeys of inspiring women like Dr. Monika Chugh, Dale Darley, Wendy Kier, and other remarkable authors show that it is possible to rise, begin again, and discover strength within ourselves. Dr. Monika Chugh’s Silent Soul beautifully explores life experiences, acceptance, self-love, and true happiness. A heartfelt and inspiring read that reminds us: you can rise too.” 02.11.2025'
            }}
            large={{
              src: '/images/books/praise_ritu.webp',
              alt: 'Words from Ritu: “From the book, “No judgement. No fixing, only endless love, and respect amidst my emotional mayhem.” These words hold deep meaning for me, we all are the hardest judge of ourselves and also our biggest supporters, Dr Monika’s narration of her perspective gives us a lot to think about. No matter how terrible or hurtful an experience is, we always have a choice; to choose strength and resilience and not be judged or defined by anyone. I believe reading and sharing such insights gives all of us strength and stability. Beautifully written book with lots of depth and heartfelt meaning.” 06.13.2024'
            }}
          />
        </>
      )}
    />
  );
}
