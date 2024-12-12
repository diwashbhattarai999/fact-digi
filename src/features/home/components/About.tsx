import { Statistics } from "@/components/Statistics";
import aboutImage from "@/assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={aboutImage}
            alt="About Fact-Digi"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between gap-4">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Fact-Digi
              </h2>
              <p className="text-lg text-muted-foreground mt-8">
                Fact-Digi is a leading provider of Business Intelligence,
                Artificial Intelligence, Data Solutions, and Mobile & Web
                Application Development. Our mission is to empower businesses
                with cutting-edge technology, enabling them to unlock their full
                potential.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                By combining innovative tools and deep industry expertise, we
                help our clients make data-driven decisions, automate workflows,
                and stay ahead in a competitive digital landscape.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
