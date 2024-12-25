import { ArrowRight, Cpu, Monitor, Rocket, Target } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    title: 'Initial Consultation & Diagnosis',
    description:
      'We start by understanding your business needs and diagnose existing workflows to identify areas for automation and improvement.',
    icon: <Cpu className="size-6" />,
  },
  {
    title: 'Opportunity Mapping & Recommendation',
    description:
      'We map out automation opportunities and recommend AI-driven solutions tailored to optimize your business processes.',
    icon: <Target className="size-6" />,
  },
  {
    title: 'AI Model Design & Deployment',
    description:
      'Our team designs and deploys custom AI models to automate processes, ensuring seamless integration with your systems.',
    icon: <Rocket className="size-6" />,
  },
  {
    title: 'Monitoring & Optimization',
    description:
      'We continuously monitor the performance of deployed models and optimize them to ensure ongoing efficiency and sustained growth.',
    icon: <Monitor className="size-6" />,
  },
];

export const HowItWorks = () => {
  return (
    <section className="container py-24 sm:py-32" id="how-it-works">
      <div className="space-y-8 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-gradient">Our 4-Step Process </span>
          to AI Success
        </h2>

        <p className="mx-auto text-xl text-muted-foreground md:w-3/4">
          We follow a proven approach to AI success, guiding you through every step to ensure
          seamless implementation and continuous improvement.
        </p>
      </div>

      {/* Stepwise Process */}
      <div className="mt-16 grid gap-12 md:grid-cols-2 xl:grid-cols-4">
        {steps.map(({ title, description, icon }) => (
          <Card key={title} className="flex flex-col border bg-muted/50 p-6 text-center shadow-sm">
            <CardHeader className="flex flex-col items-center justify-center gap-2">
              <div className="rounded-full bg-gradient-brand p-4 text-white dark:bg-gradient-primary">
                {icon}
              </div>
              <CardTitle className="text-xl text-foreground/90">{title}</CardTitle>
            </CardHeader>

            <div className="text-muted-foreground">{description}</div>
          </Card>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <a href="/#contact">
          <Button className="w-72 rounded-full">
            Schedule Your Free Process Audit
            <ArrowRight className="mt-0.5 size-4" />
          </Button>
        </a>
      </div>
    </section>
  );
};
