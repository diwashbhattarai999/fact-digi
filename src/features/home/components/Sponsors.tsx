import { Radar, Globe, Briefcase, BarChart2, Award } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
  description?: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar className="size-7" />,
    name: "TechWave Ventures",
    description: "Driving innovation in AI and BI investments.",
  },
  {
    icon: <Globe className="size-7" />,
    name: "AI Innovators Hub",
    description: "Pioneering transformative AI solutions.",
  },
  {
    icon: <Briefcase className="size-7" />,
    name: "DataNext Fund",
    description: "Empowering next-gen data solutions.",
  },
  {
    icon: <BarChart2 className="size-7" />,
    name: "BrightMind Solutions",
    description: "Delivering tailored business intelligence.",
  },
  {
    icon: <Award className="size-7" />,
    name: "FutureTech Labs",
    description: "Recognizing excellence in technology innovation.",
  },
  {
    icon: <Radar className="size-7" />,
    name: "NextGen Founders",
    description: "Partnering for scalable AI ventures.",
  },
  {
    icon: <Radar className="size-7" />,
    name: "Visionary Partners",
    description: "Enabling futuristic tech ecosystems.",
  },
  {
    icon: <Globe className="size-7" />,
    name: "DataWorks",
    description: "Transforming data into actionable insights.",
  },
];

const SponsorCard = ({ icon, name, description }: SponsorProps) => (
  <div className="flex flex-col items-center text-center gap-2">
    <span className="text-primary">{icon}</span>
    <h3 className="text-lg font-semibold">{name}</h3>
    {description && (
      <p className="text-sm text-muted-foreground">{description}</p>
    )}
  </div>
);

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container py-24 sm:py-32">
      <h2 className="text-center text-2xl lg:text-3xl font-bold mb-8 text-primary">
        Trusted by Industry Leaders
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Fact-Digi collaborates with top innovators and investors to deliver
        cutting-edge solutions in Business Intelligence, Artificial
        Intelligence, and Data Analytics. Together, we’re shaping the future of
        digital transformation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </div>
    </section>
  );
};
