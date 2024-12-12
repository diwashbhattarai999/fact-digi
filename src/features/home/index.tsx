import { ScrollToTop } from "@/components/ScrollToTop";
import {
  About,
  Cta,
  FAQ,
  Features,
  Hero,
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
      <Features />
      <About />
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
