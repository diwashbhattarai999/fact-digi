import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, Cpu, DollarSign, BarChart } from "lucide-react";

interface BenifitsProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const BENIFITS: BenifitsProps[] = [
  {
    icon: <TrendingUp className="text-primary size-6" />,
    title: "Boost Efficiency and Productivity",
    description:
      "Leverage AI to automate tasks and optimize workflows, increasing overall efficiency and output.",
  },
  {
    icon: <Cpu className="text-primary size-6" />,
    title: "Reduce Costs and Manual Effort",
    description:
      "AI minimizes manual work, cuts operational costs, and reduces human errors, giving your team more time for strategic tasks.",
  },
  {
    icon: <DollarSign className="text-primary size-6" />,
    title: "Gain Competitive Insights",
    description:
      "AI-driven analysis provides insights that help you stay ahead of market trends and make informed decisions.",
  },
  {
    icon: <BarChart className="text-primary size-6" />,
    title: "Data-Driven Decision Making",
    description:
      "Harness AI to turn data into actionable insights, enabling smarter business decisions with quantifiable outcomes.",
  },
];

const BENIFITS_BADGES: string[] = [
  "AI Expertise",
  "Process Automation",
  "Custom Solutions",
  "Optimization",
];

export const Benefits = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 space-y-8">
      {/* Main Title */}
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">
        Why Choose{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Fact Digi
        </span>{" "}
        ?
      </h2>

      {/* Subtitle */}
      <p className="text-center md:text-lg text-muted-foreground md:w-3/4 mx-auto">
        Generative AI is transforming businesses by enhancing efficiency,
        reducing costs, and providing data-driven insights.
      </p>

      {/* Benifits Badges */}
      <div className="flex flex-wrap justify-center gap-4">
        {BENIFITS_BADGES.map((benifit: string) => (
          <Badge key={benifit} variant="secondary" className="text-sm">
            {benifit}
          </Badge>
        ))}
      </div>

      {/* Benifits Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {BENIFITS.map(({ icon, title, description }: BenifitsProps) => (
          <Card
            key={title}
            className="bg-muted/50 border text-center flex flex-col justify-between"
          >
            <CardHeader>
              <CardTitle className="text-primary text-xl grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground line-clamp-4">
                {description}
              </p>
            </CardContent>

            <CardFooter className="hidden" />
          </Card>
        ))}
      </div>

      {/* Add Industry Quote */}
      <div className="mt-10 text-center">
        <blockquote className="italic text-lg text-muted-foreground">
          "Fact Digi's AI solutions have revolutionized our business operations
          and transformed the way we approach data analytics."
          <footer className="block text-primary font-semibold mt-2">
            - John Doe, CEO at Acme Inc.
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
