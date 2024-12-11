import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "TechWave Ventures",
  },
  {
    icon: <Radar size={34} />,
    name: "AI Innovators Hub",
  },
  {
    icon: <Radar size={34} />,
    name: "DataNext Fund",
  },
  {
    icon: <Radar size={34} />,
    name: "BrightMind Solutions",
  },
  {
    icon: <Radar size={34} />,
    name: "NextGen Founders",
  },
  {
    icon: <Radar size={34} />,
    name: "Visionary Partners",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-lg lg:text-2xl font-bold mb-8 text-primary">
        Trusted by Innovators and Visionaries
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        At Fact-Digi, we collaborate with leading investors and founders to
        drive innovation in Business Intelligence, Artificial Intelligence, and
        cutting-edge Data Solutions.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-2 text-muted-foreground/80"
          >
            <span>{icon}</span>
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
