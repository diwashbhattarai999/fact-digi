import { BarChart, Cpu, DollarSign, TrendingUp } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface BenifitsProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const BENIFITS: Array<BenifitsProps> = [
  {
    icon: <TrendingUp className="size-6 text-brand dark:text-brand-100" />,
    title: 'Boost Efficiency and Productivity',
    description:
      'Leverage AI to automate tasks and optimize workflows, increasing overall efficiency and output.',
  },
  {
    icon: <Cpu className="size-6 text-brand dark:text-brand-100" />,
    title: 'Reduce Costs and Manual Effort',
    description:
      'AI minimizes manual work, cuts operational costs, and reduces human errors, giving your team more time for strategic tasks.',
  },
  {
    icon: <DollarSign className="size-6 text-brand dark:text-brand-100" />,
    title: 'Gain Competitive Insights',
    description:
      'AI-driven analysis provides insights that help you stay ahead of market trends and make informed decisions.',
  },
  {
    icon: <BarChart className="size-6 text-brand dark:text-brand-100" />,
    title: 'Data-Driven Decision Making',
    description:
      'Harness AI to turn data into actionable insights, enabling smarter business decisions with quantifiable outcomes.',
  },
];

const BENIFITS_BADGES: Array<string> = [
  'AI Expertise',
  'Process Automation',
  'Custom Solutions',
  'Optimization',
];

export const Benefits = () => {
  return (
    <section className="max-container space-y-8 py-24 sm:py-32" id="benefits">
      {/* Main Title */}
      <h2 className="text-center text-xl font-bold md:text-3xl lg:text-4xl">
        Why Choose <span className="text-gradient">Fact Digi</span> ?
      </h2>

      {/* Subtitle */}
      <p className="mx-auto text-center text-muted-foreground md:w-3/4 md:text-lg">
        Generative AI is transforming businesses by enhancing efficiency, reducing costs, and
        providing data-driven insights.
      </p>

      {/* Benifits Badges */}
      <div className="flex flex-wrap justify-center gap-4">
        {BENIFITS_BADGES.map((benifit: string) => (
          <Badge key={benifit} className="text-sm" variant="secondary">
            {benifit}
          </Badge>
        ))}
      </div>

      {/* Benifits Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {BENIFITS.map(({ icon, title, description }: BenifitsProps) => (
          <Card key={title} className="flex flex-col border bg-muted/50 text-center">
            <CardHeader>
              <CardTitle className="text-gradient flex h-24 flex-col items-center gap-4 text-xl">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="line-clamp-4 text-muted-foreground">{description}</p>
            </CardContent>

            <CardFooter className="hidden" />
          </Card>
        ))}
      </div>

      {/* Add Industry Quote */}
      <div className="mt-10 text-center">
        <blockquote className="text-lg italic text-muted-foreground">
          "Fact Digi's AI solutions have revolutionized our business operations and transformed the
          way we approach data analytics."
          <footer className="mt-2 block font-semibold text-brand dark:text-brand-100">
            - John Doe, CEO at Acme Inc.
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
