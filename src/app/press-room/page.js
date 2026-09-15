import Header from '../../components/Header';
import PressRoomHero from '../../components/PressRoomHero';
import PressRoomNewLaunches from '../../components/PressRoomNewLaunches';
import PressRoomAchievements from '../../components/PressRoomAchievements';
import PressRoomGallery from '../../components/PressRoomGallery';
import PressRoomQuoteBanner from '../../components/PressRoomQuoteBanner';
import PressRoomSpotlight from '../../components/PressRoomSpotlight';
import PressRoomContact from '../../components/PressRoomContact';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Press Room | Monika Chugh - Author, Artist & Speaker',
  description: 'Explore recognitions, nominations, media features, and literary moments of Monika Chugh. Award-winning author and Rotary Poet of the Year 2025.',
};

export default function PressRoomPage() {
  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden">
      <Header activePage="press-room" />
      <PressRoomHero />
      <PressRoomNewLaunches />
      <PressRoomAchievements />
      <PressRoomGallery />
      <PressRoomQuoteBanner />
      <PressRoomSpotlight />
      <PressRoomContact />
      <Footer />
    </main>
  );
}
