import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import imageGrowth from "../assets/growth.png";
import imageInterface from "../assets/reflecting.png";
import imageInsights from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "Deliver seamless experiences across all devices with adaptive and visually appealing interfaces.",
    image: imageGrowth,
  },
  {
    title: "Intuitive User Interface",
    description:
      "Enhance usability and engagement with designs focused on simplicity and user satisfaction.",
    image: imageInterface,
  },
  {
    title: "AI-Powered Insights",
    description:
      "Leverage advanced analytics and AI to uncover actionable data-driven strategies.",
    image: imageInsights,
  },
];

const featureList: string[] = [
  "Dark/Light Theme",
  "Customer Reviews",
  "Advanced Features",
  "Flexible Pricing",
  "Contact Form",
  "Our Team",
  "Responsive Design",
  "Newsletter Integration",
  "Minimalist Aesthetics",
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="bg-muted/50 border text-center">
            <CardHeader>
              <CardTitle className="text-primary text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground">{description}</p>
            </CardContent>

            <CardFooter>
              <img
                src={image}
                alt={`${title} illustration`}
                className="w-[200px] lg:w-[300px] mx-auto rounded-lg shadow-md"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
