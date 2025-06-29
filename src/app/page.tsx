import { Hero } from '@/components/landing/Hero';
import { Audience } from '@/components/landing/Audience';
import { Features } from '@/components/landing/Features';
import { SecondaryMockup } from '@/components/landing/SecondaryMockup';
import { Bonuses } from '@/components/landing/Bonuses';
import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { Guarantee } from '@/components/landing/Guarantee';
import { Faq } from '@/components/landing/Faq';
import { Footer } from '@/components/landing/Footer';
import { SalesNotification } from '@/components/landing/SalesNotification';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <Hero />
        <Audience />
        <Features />
        <SecondaryMockup />
        <Bonuses />
        <Pricing />
        <Testimonials />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
      <SalesNotification />
    </div>
  );
}
