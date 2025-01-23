import { Award, BarChart2, Briefcase, Globe, Radar } from 'lucide-react';

import { SectionWrapper } from '@/components/PageItems';

interface SponsorProps {
  icon: JSX.Element;
  name: string;
  description?: string;
}

const sponsors: Array<SponsorProps> = [
  {
    icon: <Radar className="size-7" />,
    name: 'TechWave Ventures',
    description: 'Driving innovation in AI and BI investments.',
  },
  {
    icon: <Globe className="size-7" />,
    name: 'AI Innovators Hub',
    description: 'Pioneering transformative AI solutions.',
  },
  {
    icon: <Briefcase className="size-7" />,
    name: 'DataNext Fund',
    description: 'Empowering next-gen data solutions.',
  },
  {
    icon: <BarChart2 className="size-7" />,
    name: 'BrightMind Solutions',
    description: 'Delivering tailored business intelligence.',
  },
  {
    icon: <Award className="size-7" />,
    name: 'FutureTech Labs',
    description: 'Recognizing excellence in technology innovation.',
  },
  {
    icon: <Radar className="size-7" />,
    name: 'NextGen Founders',
    description: 'Partnering for scalable AI ventures.',
  },
  {
    icon: <Radar className="size-7" />,
    name: 'Visionary Partners',
    description: 'Enabling futuristic tech ecosystems.',
  },
  {
    icon: <Globe className="size-7" />,
    name: 'DataWorks',
    description: 'Transforming data into actionable insights.',
  },
];

const SponsorCard = ({ icon, name }: SponsorProps) => (
  <div className="flex items-center justify-center gap-2 text-center">
    <span className="rounded-full bg-brand/10 p-2 text-brand dark:text-brand-100">{icon}</span>
    <h3 className="text-lg font-semibold">{name}</h3>
  </div>
);

export const Sponsors = () => {
  return (
    <SectionWrapper id="sponsors">
      <h2 className="mb-4 text-center text-2xl font-bold lg:text-3xl">
        Trusted by
        <span className="text-gradient"> Industry Leaders</span>
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
        At Fact Digi, we collaborate with some of the most forward-thinking companies in the
        industry to drive innovation and excellence.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </div>
    </SectionWrapper>
  );
};
