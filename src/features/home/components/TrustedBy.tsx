import { motion } from 'framer-motion';
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
  <motion.div
    className="flex w-fit cursor-default items-center justify-center gap-2 rounded-full bg-muted px-4 py-2 text-center transition-colors hover:bg-primary/10"
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <span className="rounded-full bg-brand/10 p-2 text-brand dark:text-brand-100">{icon}</span>
    <h3>{name}</h3>
  </motion.div>
);

export const TrustedBy = () => {
  return (
    <SectionWrapper className="space-y-10" id="sponsors">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <SectionSubtitle>Brands that trust us</SectionSubtitle>
        <SectionTitle>
          Trusted by
          <span className="text-gradient"> Industry Leaders</span>
        </SectionTitle>
        <SectionDescription>
          At Fact Digi, we collaborate with some of the most forward-thinking companies in the
          industry to drive innovation and excellence.
        </SectionDescription>
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center gap-8"
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {brands.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <BrandCard {...sponsor} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
