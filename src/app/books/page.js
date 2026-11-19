import Header from '../../components/Header';
import BooksCatalog from '../../components/BooksCatalog';
import Footer from '../../components/Footer';
import { getCatalogBooks } from '../../sanity/lib/books';

// Re-check Sanity for new or edited books at most once a minute
export const revalidate = 60;

export const metadata = {
  title: 'Books | Monika Chugh - Author & Artist',
  description: 'Explore the published works, quote anthologies, affirmation journals, and upcoming literary releases by Monika Chugh.',
};

export default async function BooksPage() {
  const { published, upcoming } = await getCatalogBooks();
  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <Header activePage="books" />
      <BooksCatalog publishedBooks={published} upcomingBooks={upcoming} />
      <Footer />
    </main>
  );
}
