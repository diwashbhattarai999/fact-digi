import { Cpu, Monitor, MoveDown, Rocket, Target } from 'lucide-react';

import {
  GradientText,
  SectionDescription,
  SectionSubtitle,
  SectionTitle,
  SectionWrapper,
} from '@/components/PageItems';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <SectionWrapper id="how-it-works">
      <div className="space-y-4">
        <SectionSubtitle>How It Works</SectionSubtitle>
        <SectionTitle>
          Our <GradientText>4-Step Process </GradientText>
          to AI Success
        </SectionTitle>

        <SectionDescription>
          We follow a proven approach to AI success, guiding you through every step to ensure
          seamless implementation and continuous improvement.
        </SectionDescription>
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
    </SectionWrapper>
  );
};
