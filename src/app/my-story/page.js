import Header from '../../components/Header';
import MyStoryHero from '../../components/MyStoryHero';
import MyStoryAbout from '../../components/MyStoryAbout';
import MyStoryTimeline from '../../components/MyStoryTimeline';
import MyStoryExpressions from '../../components/MyStoryExpressions';
import MyStoryPurpose from '../../components/MyStoryPurpose';
import MyStoryMilestones from '../../components/MyStoryMilestones';
import MyStorySection7 from '../../components/MyStorySection7';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'My Story | Monika Chugh - Author, Artist & Speaker',
  description: 'Discover the personal story, creative journey, timeline, and philosophy of Monika Chugh.',
};

export default function MyStoryPage() {
  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden">
      <Header activePage="my-story" />
      <MyStoryHero />
      <MyStoryAbout />
      <MyStoryTimeline />
      <MyStoryExpressions />
      <MyStoryPurpose />
      <MyStoryMilestones />
      <MyStorySection7 />
      <Footer />
    </main>
  );
}

