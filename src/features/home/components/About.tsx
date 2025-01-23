import aboutImage from '@/assets/pilot.png';
import { Statistics } from '@/components/Statistics';

export const About = () => {
  return (
    <section className="max-container py-24 sm:py-32" id="about">
      <div className="rounded-lg border bg-muted/50 py-12">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <img
            alt="About Fact-Digi"
            className="w-[300px] rounded-lg object-contain"
            src={aboutImage}
          />
          <div className="flex flex-col justify-between gap-4">
            <div className="pb-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
                  About{' '}
                </span>
                Fact-Digi
              </h2>
              <p className="mt-8 text-muted-foreground md:text-lg">
                Fact-Digi is a leading provider of Business Intelligence, Artificial Intelligence,
                Data Solutions, and Mobile & Web Application Development. Our mission is to empower
                businesses with cutting-edge technology, enabling them to unlock their full
                potential.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                By combining innovative tools and deep industry expertise, we help our clients make
                data-driven decisions, automate workflows, and stay ahead in a competitive digital
                landscape.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
