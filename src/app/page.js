import Header from '../components/Header';
import Hero from '../components/Hero';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import FifthSection from '../components/FifthSection';
import SixthSection from '../components/SixthSection';
import SeventhSection from '../components/SeventhSection';
import EighthSection from '../components/EighthSection';
import NinthSection from '../components/NinthSection';
import TenthSection from '../components/TenthSection';
import EleventhSection from '../components/EleventhSection';
import TwelfthSection from '../components/TwelfthSection';
import ThirteenthSection from '../components/ThirteenthSection';
import FourteenthSection from '../components/FourteenthSection';
import Footer from '../components/Footer';
import { getQuoteOfTheMonth } from '../sanity/lib/quoteOfTheMonth';

// Re-check Sanity for a new quote of the month at most once a minute
export const revalidate = 60;

export default async function Home() {
  const quote = await getQuoteOfTheMonth();
  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden">
      <Header />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection quote={quote} />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection />
      <TenthSection />
      <EleventhSection />
      <TwelfthSection />
      <ThirteenthSection />
      <FourteenthSection />
      <Footer />
    </main>
  );
}
