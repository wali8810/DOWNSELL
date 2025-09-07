import { Hero } from '@/components/landing/Hero';
import { ForWhom } from '@/components/landing/ForWhom';
import { Bonuses } from '@/components/landing/Bonuses';
import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { Faq } from '@/components/landing/Faq';
import { Footer } from '@/components/landing/Footer';
import { SalesNotification } from '@/components/landing/SalesNotification';
import { Guarantee } from '@/components/landing/Guarantee';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <Hero />
        <ForWhom />
        <Bonuses />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <SalesNotification />
    </div>
  );
}
