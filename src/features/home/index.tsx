// import { ScrollToTop } from "@/components/ScrollToTop";
// import {
//   About,
//   Cta,
//   FAQ,
//   Features,
//   Hero,
//   Newsletter,
//   Services,
//   Sponsors,
//   Team,
// } from "@/features/home/components";

// const Home = () => {
//   return (
//     <>
// <Hero />
// <Sponsors />
// <Features />
// <About />
// <Services />
// <Cta />
// <Team />
// <Newsletter />
// <FAQ />
// <ScrollToTop />
//     </>
//   );
// };

// export default Home;

import { ScrollToTop } from '@/components/ScrollToTop';
import {
  Benefits,
  Contact,
  Cta,
  FAQ,
  Hero,
  HowItWorks,
  Services,
  Sponsors,
  Team,
} from '@/features/home/components';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Benefits Section */}
      <Benefits />

      {/* Sponsors Section */}
      <Sponsors />

      {/* How It Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <Cta />

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
};

export default Home;
