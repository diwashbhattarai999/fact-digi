import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import HeroImg1 from "@/assets/hero/Robot2.png";
import HeroImg2 from "@/assets/hero/Robot1.png";
import { BackgroundBeamsWithCollision } from "./BackgroundBeams";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { Link } from "react-router";

const HeroHeadline = () => (
  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
    <div className="flex items-center justify-center w-full lg:justify-start">
      <HoverBorderGradient
        className="w-fit cursor-auto rounded-full px-3 py-0.5 text-xs text-brand-50/90 dark:text-primary"
        containerClassName="mb-2"
      >
        Empower your business ⚡
      </HoverBorderGradient>
    </div>
    <h1>
      <span className="inline bg-gradient-brand text-transparent bg-clip-text">
        Revolutionize
      </span>{" "}
      Your Business with
    </h1>
    <h2>
      <span className="inline bg-gradient-primary text-transparent bg-clip-text">
        Generative AI
      </span>
    </h2>
  </div>
);

const HeroDescription = () => (
  <p className="sm:text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
    We diagnose your processes, uncover automation opportunities, and drive
    efficiency with the power of AI. Empower your business with cutting-edge
    solutions in AI, Business Intelligence, Data Solutions, and Web & Mobile
    Application Development.
  </p>
);

const HeroActions = () => (
  <div className="flex items-center gap-4 flex-col sm:flex-row justify-center lg:justify-normal">
    <a href={"/#contact"}>
      <Button className="max-sm:w-full">Get a Free Consultation</Button>
    </a>

    <Link to={"#"} className="max-sm:w-full">
      <Button
        variant={"outline"}
        size={"lg"}
        className="w-full text-wrap max-sm:h-14"
      >
        Learn How GenAI Can Transform Your Business
      </Button>
    </Link>
  </div>
);

const HeroImages = () => (
  <div className="relative z-10 size-full max-lg:hidden flex justify-center items-center">
    <div className="shadow"></div>
    <Avatar className="absolute -top-24 -left-32 size-[30rem] scale-x-[-1]">
      <AvatarImage src={HeroImg1} alt="Hero Image 1" />
    </Avatar>
    <Avatar className="absolute -top-20 right-0 size-[32rem] scale-x-[-1]">
      <AvatarImage src={HeroImg2} alt="Hero Image 2" />
    </Avatar>
  </div>
);

export const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="z-10 container flex flex-col lg:flex-row justify-center pt-20 md:pt-10 md:gap-10">
        <div className="text-center lg:text-start flex flex-col gap-8">
          <HeroHeadline />
          <HeroDescription />
          <HeroActions />
        </div>
        <HeroImages />
      </section>
    </BackgroundBeamsWithCollision>
  );
};
