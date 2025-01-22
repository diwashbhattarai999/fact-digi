import { ArrowRight, BarChart, Database, Workflow } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    icon: <Workflow className="size-6 text-brand dark:text-brand-100" />,
  },
  {
    title: 'Data Solutions Provider',
    description:
      'Harness the power of data with our tailored data solutions, enabling better decision-making and business insights.',
    icon: <Database className="size-6 text-brand dark:text-brand-100" />,
  },
  {
    title: 'AI/BI Solutions',
    description:
      'Leverage AI and BI technologies to enhance your business intelligence, improve analytics, and drive smarter decisions.',
    icon: <BarChart className="size-6 text-brand dark:text-brand-100" />,
  },
  // {
  //   title: 'Web/Mobile Apps',
  //   description:
  //     'Get custom-built web and mobile applications designed to provide seamless user experiences and drive business success.',
  //   icon: <Smartphone className="size-6 text-brand dark:text-brand-100" />,
  // },
];

export const Services = () => {
  return (
    <section className="container py-16" id="services">
      <div className="flex w-full flex-col items-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Your <span className="text-gradient">AI Journey Starts Here</span>
        </h2>

        <p className="mb-8 mt-2 max-w-4xl text-center text-lg text-muted-foreground">
          Empower your business with tailored AI solutions that drive efficiency, innovation, and
          continuous growth.
        </p>

        {/* Service List */}
        <div className="grid w-full gap-8 md:grid-cols-3">
          {serviceList.map(({ icon, title, description }: ServiceProps) => (
            <Card key={title} className="border bg-muted/50 shadow-sm">
              <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
                <div className="mt-1 rounded-full bg-brand/20 p-2">{icon}</div>
                <div>
                  <CardTitle className="text-brand dark:text-brand-100">{title}</CardTitle>
                  <CardDescription className="text-md mt-2 text-muted-foreground">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button className="w-64 rounded-full">
            <a className="flex items-center justify-center gap-2" href={'#how-it-works'}>
              Discover How We Work
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
