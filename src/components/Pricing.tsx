import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: PopularPlanType.NO,
    price: 0,
    description: "Perfect for individuals starting out, with limited features.",
    buttonText: "Get Started",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Up to 4 pages",
      "Community support",
      "Email support",
    ],
  },
  {
    title: "Premium",
    popular: PopularPlanType.YES,
    price: 5,
    description:
      "Ideal for small teams needing more resources and priority support.",
    buttonText: "Start Free Trial",
    benefitList: [
      "4 Team members",
      "4 GB Storage",
      "Up to 6 pages",
      "Priority support",
      "Advanced analytics",
    ],
  },
  {
    title: "Enterprise",
    popular: PopularPlanType.NO,
    price: 40,
    description:
      "Best suited for larger teams requiring dedicated support and increased resources.",
    buttonText: "Contact Us",
    benefitList: [
      "10 Team members",
      "8 GB Storage",
      "Up to 10 pages",
      "Dedicated support",
      "Custom integrations",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choose the plan that fits your needs and grow with us.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={`${
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES && (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                )}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex items-center">
                    <Check className="text-green-500" />
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
