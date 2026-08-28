import Header from '../../../components/Header';
import BlogPostDetail from '../../../components/BlogPostDetail';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Write...Write...Write... | Monika Chugh - Author & Artist',
  description: 'Read Write...Write...Write... by Monika Chugh. A reflective journey into personal healing, journaling, and the transformative power of words.',
};

export default function SingleBlogPage() {
  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <Header activePage="blogs" />
      <BlogPostDetail />
      <Footer />
    </main>
  );
}
