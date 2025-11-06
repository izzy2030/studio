import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Promotion } from '@/components/landing/Promotion';
import { TireFinder } from '@/components/landing/TireFinder';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Footer } from '@/components/landing/Footer';
import { SmoothScroll } from '@/components/landing/SmoothScroll';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Promotion />
        <TireFinder />
        <HowItWorks />
      </main>
      <Footer />
      <SmoothScroll />
    </div>
  );
}
