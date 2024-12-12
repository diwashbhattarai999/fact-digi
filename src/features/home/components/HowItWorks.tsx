import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Target, Rocket, Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    title: "Initial Consultation & Diagnosis",
    description:
      "We start by understanding your business needs and diagnose existing workflows to identify areas for automation and improvement.",
    icon: <Cpu className="text-primary size-6" />,
  },
  {
    title: "Opportunity Mapping & Recommendation",
    description:
      "We map out automation opportunities and recommend AI-driven solutions tailored to optimize your business processes.",
    icon: <Target className="text-primary size-6" />,
  },
  {
    title: "AI Model Design & Deployment",
    description:
      "Our team designs and deploys custom AI models to automate processes, ensuring seamless integration with your systems.",
    icon: <Rocket className="text-primary size-6" />,
  },
  {
    title: "Monitoring & Optimization",
    description:
      "We continuously monitor the performance of deployed models and optimize them to ensure ongoing efficiency and sustained growth.",
    icon: <Monitor className="text-primary size-6" />,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container py-24 sm:py-32">
      <div className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Our 4-Step Process{" "}
          </span>
          to AI Success
        </h2>

        <p className="text-muted-foreground text-xl md:w-3/4 mx-auto">
          We follow a proven approach to AI success, guiding you through every
          step to ensure seamless implementation and continuous improvement.
        </p>
      </div>

      {/* Stepwise Process */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
        {steps.map(({ title, description, icon }) => (
          <Card
            key={title}
            className="bg-muted/50 border shadow-sm text-center flex flex-col justify-between p-6"
          >
            <CardHeader className="flex flex-col justify-center items-center space-y-4">
              <div className="p-4 bg-primary/20 rounded-full">{icon}</div>
              <CardTitle className="text-primary text-xl">{title}</CardTitle>
            </CardHeader>

            <div className="text-muted-foreground mt-4">{description}</div>
          </Card>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Button className="rounded-full w-72">
          <Link
            to="#contact"
            className="flex items-center justify-center gap-2"
          >
            Schedule Your Free Process Audit
            <ArrowRight className="size-4 mt-0.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
