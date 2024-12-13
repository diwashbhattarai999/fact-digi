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

import { ScrollToTop } from "@/components/ScrollToTop";
import {
  Hero,
  Benefits,
  HowItWorks,
  Services,
  FAQ,
  Sponsors,
  Cta,
  Team,
} from "@/features/home/components";

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

      {/* Scroll to Top */}
      <ScrollToTop />
    </>
  );
};

export default Home;
