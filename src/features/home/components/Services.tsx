import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BarChart,
  Database,
  Smartphone,
  Workflow,
} from "lucide-react";
import { Link } from "react-router";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "GenAI Consulting for Process Automation",
    description:
      "Optimize your business processes with our expert GenAI consulting services, focused on identifying and automating workflows.",
    icon: <Workflow className="size-6 text-brand dark:text-brand-100" />,
  },
  {
    title: "Data Solutions Provider",
    description:
      "Harness the power of data with our tailored data solutions, enabling better decision-making and business insights.",
    icon: <Database className="size-6 text-brand dark:text-brand-100" />,
  },
  {
    title: "AI/BI Solutions",
    description:
      "Leverage AI and BI technologies to enhance your business intelligence, improve analytics, and drive smarter decisions.",
    icon: <BarChart className="size-6 text-brand dark:text-brand-100" />,
  },
  {
    title: "Web/Mobile Apps",
    description:
      "Get custom-built web and mobile applications designed to provide seamless user experiences and drive business success.",
    icon: <Smartphone className="size-6 text-brand dark:text-brand-100" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:pt-52 sm:pb-32">
      <div className="w-full flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold">
          Your <span className="text-gradient">AI Journey Starts Here</span>
        </h2>

        <p className="text-muted-foreground text-xl mt-4 mb-8">
          Empower your business with tailored AI solutions that drive
          efficiency, innovation, and continuous growth.
        </p>

        {/* Service List */}
        <div className="grid md:grid-cols-2 w-full gap-8">
          {serviceList.map(({ icon, title, description }: ServiceProps) => (
            <Card key={title} className="bg-muted/50 border shadow-sm">
              <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                <div className="mt-1 bg-brand/20 p-2 rounded-full">{icon}</div>
                <div>
                  <CardTitle className="text-brand dark:text-brand-100">
                    {title}
                  </CardTitle>
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
            <Link
              to={"#contact"}
              className="flex items-center gap-2 justify-center"
            >
              Discover How We Work
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
