import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  MedalIcon,
  MapIcon,
  PlaneIcon,
  GiftIcon,
} from "../../../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Business Intelligence",
    description:
      "Leverage data-driven insights to make informed decisions and drive organizational success.",
  },
  {
    icon: <MapIcon />,
    title: "Artificial Intelligence",
    description:
      "Integrate cutting-edge AI solutions to enhance automation and improve efficiency.",
  },
  {
    icon: <PlaneIcon />,
    title: "Data Solutions",
    description:
      "Streamline data management and analytics for real-time insights and better outcomes.",
  },
  {
    icon: <GiftIcon />,
    title: "Mobile & Web Apps",
    description:
      "Create scalable, user-friendly mobile and web applications tailored to your needs.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Explore our structured approach to delivering innovative solutions for
        your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-primary">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
