import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import HeroImg1 from "@/assets/hero/Robot2.png";
import HeroImg2 from "@/assets/hero/Robot1.png";
import { BackgroundBeamsWithCollision } from "./BackgroundBeams";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { Link } from "react-router";

export const Hero = () => {
  return (
    <BackgroundBeamsWithCollision className="">
      <section className="z-10 container flex flex-col lg:flex-row justify-center pt-20 md:pt-10 md:gap-10">
        <div className="text-center lg:text-start flex flex-col gap-8">
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
              <span className="inline bg-gradient-to-r from-brand to-brand-100 text-transparent bg-clip-text">
                Revolutionize
              </span>{" "}
              Your Business with
            </h1>
            <h2>
              <span className="inline bg-gradient-to-r from-primary to-brand text-transparent bg-clip-text">
                Generative AI
              </span>
            </h2>
          </div>

          <p className="sm:text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            We diagnose your processes, uncover automation opportunities, and
            drive efficiency with the power of AI. Empower your business with
            cutting-edge solutions in AI, Business Intelligence, Data Solutions,
            and Web & Mobile Application Development.
          </p>

          <div className="flex items-center gap-4 flex-col md:flex-row">
            <Button className="max-md:w-full">Get a Free Consultation</Button>

            <Link to={"#"}>
              <Button
                variant={"outline"}
                size={"lg"}
                className="max-md:w-full text-wrap"
              >
                Learn How GenAI Can Transform Your Business
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero cards section */}
        <div className="z-10 relative size-full max-lg:hidden">
          <Avatar className="absolute -top-24 -left-10 size-[28rem] scale-x-[-1]">
            <AvatarImage src={HeroImg1} alt="Hero" />
          </Avatar>

          <Avatar className="absolute -top-20 right-0 size-[32rem] scale-x-[-1]">
            <AvatarImage src={HeroImg2} alt="Hero" />
          </Avatar>
        </div>

        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};
