import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>FD</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Sophia James</CardTitle>
            <CardDescription>CEO, TechCorp</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          "Fact-Digi's expertise in AI and Data Solutions helped us optimize
          workflows and achieve better insights."
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Alex Turner</CardTitle>
          <CardDescription className="font-normal text-primary">
            AI Specialist
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Passionate about developing intelligent systems to solve complex
            business challenges.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://linkedin.com"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[190px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Starter
            <Badge variant="secondary" className="text-sm text-primary">
              Best value
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$99</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
            Perfect for startups looking to implement AI and BI solutions.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Subscribe Now</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Comprehensive BI Tools",
              "AI Integration Support",
              "Priority Support",
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Innovation at Its Best</CardTitle>
            <CardDescription className="text-md mt-2">
              Leverage the power of AI and data to unlock new opportunities for
              your business.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
