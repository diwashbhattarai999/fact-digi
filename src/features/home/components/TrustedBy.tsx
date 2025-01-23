import { Globe, Radar } from 'lucide-react';

import {
  SectionDescription,
  SectionSubtitle,
  SectionTitle,
  SectionWrapper,
} from '@/components/PageItems';

interface BrandProps {
  icon: JSX.Element;
  name: string;
  description?: string;
}

const brands: Array<BrandProps> = [
  {
    icon: <Radar className="size-6" />,
    name: 'TechWave Ventures',
  },
  {
    icon: <Globe className="size-6" />,
    name: 'AI Innovators Hub',
  },
];

const BrandCard = ({ icon, name }: BrandProps) => (
  <div className="flex cursor-default items-center justify-center gap-2 rounded-full bg-muted px-4 py-2 text-center transition-colors hover:bg-primary/10">
    <span className="rounded-full bg-brand/10 p-2 text-brand dark:text-brand-100">{icon}</span>
    <h3>{name}</h3>
  </div>
);

export const TrustedBy = () => {
  return (
    <SectionWrapper className="space-y-10" id="sponsors">
      <div>
        <SectionSubtitle>Brands that trust us</SectionSubtitle>
        <SectionTitle>
          Trusted by
          <span className="text-gradient"> Industry Leaders</span>
        </SectionTitle>
        <SectionDescription>
          At Fact Digi, we collaborate with some of the most forward-thinking companies in the
          industry to drive innovation and excellence.
        </SectionDescription>
      </div>

      <div className="flex flex-wrap items-center gap-8">
        {brands.map((sponsor) => (
          <BrandCard key={sponsor.name} {...sponsor} />
        ))}
      </div>
    </SectionWrapper>
  );
};
