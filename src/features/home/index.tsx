import { ScrollToTop } from '@/components/ScrollToTop';
import {
  Contact,
  FAQ,
  Hero,
  HowItWorks,
  Services,
  Team,
  TrustedBy,
  WhyChooseUs,
} from '@/features/home/components';

export default function HomePage() {
  return (
    <>
      <div className="bg-gradient-to-b from-brand/10 to-background">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />
      </div>

      {/* WhyChooseUs Section */}
      <WhyChooseUs />

      {/* Sponsors Section */}
      <TrustedBy />

      {/* How It Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      {/* <Cta /> */}

      {/* Team Section */}
      <Team />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Scroll to Top */}
      <ScrollToTop />
    </>
  );
}
