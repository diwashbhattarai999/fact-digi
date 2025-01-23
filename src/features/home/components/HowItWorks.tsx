import { Cpu, Monitor, MoveDown, Rocket, Target } from 'lucide-react';

import { SectionSubtitle } from '@/components/PageItems';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
    <section className="max-container py-24 sm:py-32" id="how-it-works">
      <div className="space-y-4">
        <SectionSubtitle>How It Works</SectionSubtitle>
        <h2 className="text-3xl font-bold md:text-4xl">
          Our <span className="text-gradient">4-Step Process </span>
          to AI Success
        </h2>

        <p className="text-muted-foreground md:w-3/4">
          We follow a proven approach to AI success, guiding you through every step to ensure
          seamless implementation and continuous improvement.
        </p>
      </div>

      {/* Stepwise Process */}
      <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map(({ title, description, icon }, index) => (
          <div key={title} className="relative flex flex-col items-center">
            <Card className="relative flex w-full flex-col border bg-muted/50 p-6 shadow-sm">
              <span className="absolute -top-5 left-1/2 z-10 flex size-12 items-center justify-center rounded-full bg-brand text-lg font-semibold text-white max-sm:-translate-x-1/2 sm:-left-3 sm:-top-3 sm:size-8">
                {index + 1}
              </span>
              <CardHeader className="mt-12 flex flex-col gap-2 p-0 sm:p-0">
                <div className="size-fit rounded-full bg-gradient-brand p-4 text-white dark:bg-gradient-primary">
                  {icon}
                </div>
                <CardTitle className="h-full min-h-[4.1rem] p-0 text-xl text-foreground/90">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="min-h-24 text-muted-foreground">
                {description}
              </CardDescription>
            </Card>

            {/* Responsive Custom Curved Arrow */}
            {index < steps.length - 1 && (
              <svg
                fill="none"
                height="30"
                viewBox="0 0 50 30"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  'absolute -right-12 top-1/2 hidden -translate-y-1/2 text-brand sm:block',
                  {
                    'sm:-bottom-14 sm:right-1/2 sm:top-auto sm:rotate-90 xl:-right-12 xl:bottom-auto xl:top-1/2 xl:block xl:rotate-0':
                      index === 1,
                    'sm:rotate-180 xl:rotate-0': index === 2,
                  }
                )}
              >
                <path
                  d="M5 25 C20 10, 30 10, 45 25"
                  fill="transparent"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <path
                  d="M40 25 L45 25 L42 20"
                  fill="transparent"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            )}

            {index < steps.length - 1 && (
              <MoveDown
                className="absolute -bottom-5 -left-1/2 hidden -translate-y-1/2 text-brand sm:hidden"
                size={16}
              />
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <a href="/#contact">
          <Button className="flex w-72 items-center justify-center gap-2 rounded-full">
            Schedule Your Free Process Audit
          </Button>
        </a>
      </div>
    </section>
  );
};
