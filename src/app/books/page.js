import Header from '../../components/Header';
import BooksCatalog from '../../components/BooksCatalog';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Books | Monika Chugh - Author & Artist',
  description: 'Explore the published works, quote anthologies, affirmation journals, and upcoming literary releases by Monika Chugh.',
};

export default function BooksPage() {
  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <Header activePage="books" />
      <BooksCatalog />
      <Footer />
    </main>
  );
}
