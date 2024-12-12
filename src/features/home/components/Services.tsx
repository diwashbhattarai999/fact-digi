import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "@/components/Icons";
import cubeLeg from "@/assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Streamline your team's development process with seamless collaboration tools designed to enhance productivity.",
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description:
      "Plan, execute, and track projects effectively with tools tailored to optimize team performance.",
    icon: <WalletIcon />,
  },
  {
    title: "Task Automation",
    description:
      "Automate repetitive tasks and focus on innovation with solutions powered by cutting-edge technology.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 place-items-center">
        {/* Textual Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Empowering businesses with innovative solutions that prioritize
            efficiency, collaboration, and automation.
          </p>

          {/* Service List */}
          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="bg-muted/50 border shadow-sm">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-full">
                    {icon}
                  </div>
                  <div>
                    <CardTitle className="text-primary">{title}</CardTitle>
                    <CardDescription className="text-md mt-2 text-muted-foreground">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
