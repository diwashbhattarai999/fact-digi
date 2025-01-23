import { ArrowRight, BarChart, Database, Workflow } from 'lucide-react';

import {
  GradientText,
  SectionDescription,
  SectionSubtitle,
  SectionTitle,
  SectionWrapper,
} from '@/components/PageItems';
import { Button } from '@/components/ui/button';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: Array<ServiceProps> = [
  {
    title: 'GenAI Consulting for Process Automation',
    description:
      'Optimize your business processes with our expert GenAI consulting services, focused on identifying and automating workflows.',
    icon: <Workflow className="size-6 text-brand" />,
  },
  {
    title: 'Data Solutions Provider',
    description:
      'Harness the power of data with our tailored data solutions, enabling better decision-making and business insights.',
    icon: <Database className="size-6 text-brand" />,
  },
  {
    title: 'AI/BI Solutions',
    description:
      'Leverage AI and BI technologies to enhance your business intelligence, improve analytics, and drive smarter decisions.',
    icon: <BarChart className="size-6 text-brand" />,
  },
];

export const Services = () => {
  return (
    <SectionWrapper id="services">
      <div className="relative flex w-full flex-col space-y-10 overflow-hidden rounded-2xl border bg-background p-8 shadow-xl md:p-12">
        <div>
          <div className="pattern-dots absolute left-0 top-0 size-full pattern-blue-500 pattern-bg-background pattern-opacity-5 pattern-size-6" />
          <SectionSubtitle>AI Solutions</SectionSubtitle>

          <SectionTitle>
            Your <GradientText>AI Journey Starts Here</GradientText>
          </SectionTitle>

          <SectionDescription>
            Empower your business with tailored AI solutions that drive efficiency, innovation, and
            continuous growth.
          </SectionDescription>
        </div>

        {/* Service List */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map(({ icon, title, description }: ServiceProps) => (
            <div key={title}>
              <div className="flex flex-col items-start justify-start gap-4 space-y-1">
                <div className="mt-1 rounded-full bg-brand/20 p-2">{icon}</div>
                <div>
                  <h3 className="text-brand dark:text-brand-100">{title}</h3>
                  <p className="text-md mt-2 text-muted-foreground">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="z-0 w-64 rounded-full">
          <a className="flex items-center justify-center gap-2" href={'#how-it-works'}>
            Discover How We Work
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
};
