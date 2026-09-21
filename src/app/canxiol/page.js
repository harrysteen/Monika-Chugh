import CanxiolNavbar from '../../components/CanxiolNavbar';
import CanxiolHero from '../../components/CanxiolHero';

export const metadata = {
  title: 'Canxiol — Heal The Way You Feel | Leiutis',
  description: 'Canxiol is a prescription cannabidiol oral solution for management of mild to moderate anxiety disorders, prescribed by Psychiatrists only.',
};

export default function CanxiolPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f5eef8' }}>
      <CanxiolNavbar />
      <CanxiolHero />
    </main>
  );
}
