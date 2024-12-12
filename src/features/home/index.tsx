import { Footer, Navbar } from "@/components/layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import {
  About,
  Cta,
  FAQ,
  Features,
  Hero,
  HowItWorks,
  Newsletter,
  Services,
  Sponsors,
  Team,
} from "@/features/home/components";

const Home = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Team />
      <Newsletter />
      <FAQ />
      <ScrollToTop />
    </>
  );
};

export default Home;
