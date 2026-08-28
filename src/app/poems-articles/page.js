import Header from '../../components/Header';
import PoemsHero from '../../components/PoemsHero';
import PoemsVerseCarousel from '../../components/PoemsVerseCarousel';
import PoemsPushcartSection from '../../components/PoemsPushcartSection';
import ArticlesSection from '../../components/ArticlesSection';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Poems & Articles | Monika Chugh - Author & Artist',
  description: 'Explore the poetry collections, Pushcart nominated poems, and reflective articles by Monika Chugh.',
};

export default function PoemsArticlesPage() {
  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <Header activePage="poems-articles" />
      <PoemsHero />
      <PoemsVerseCarousel />
      <PoemsPushcartSection />
      <ArticlesSection />
      <Footer />
    </main>
  );
}
