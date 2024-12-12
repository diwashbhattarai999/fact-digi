import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "@/components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "GenAI Consulting Services",
    description:
      "Streamline operations and reduce manual effort with cutting-edge Generative AI solutions tailored for process automation.",
  },
  {
    icon: <MapIcon />,
    title: "Data Solutions Provider",
    description:
      "Transform raw data into actionable insights with advanced data processing, integration, and analytics services.",
  },
  {
    icon: <PlaneIcon />,
    title: "AI/BI Solutions",
    description:
      "Empower your business decisions with Artificial Intelligence and Business Intelligence tools designed for real-time analytics and forecasting.",
  },
  {
    icon: <GiftIcon />,
    title: "Web/Mobile Apps",
    description:
      "Create seamless digital experiences with responsive, feature-rich web and mobile applications tailored to your needs.",
  },
];

const featureList: string[] = [
  "Automation",
  "Data Solutions",
  "AI/BI",
  "Web/Mobile Apps",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Unlock{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Incredible Features
        </span>
      </h2>

      <p className="text-center text-xl text-muted-foreground md:w-3/4 mx-auto">
        Fact-Digi combines innovation with user-centric solutions to empower
        businesses with modern tools and technologies.
      </p>

      {/* Feature Badges */}
      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <Badge key={feature} variant="secondary" className="text-sm">
            {feature}
          </Badge>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
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
    </section>
  );
};
