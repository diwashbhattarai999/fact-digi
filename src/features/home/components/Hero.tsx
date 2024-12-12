import { Button, buttonVariants } from "@/components/ui/button";
// import { HeroCards } from "@/components/HeroCards";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import HeroImg1 from "@/assets/hero/Robot2.png";
import HeroImg2 from "@/assets/hero/Robot1.png";
import { BackgroundBeamsWithCollision } from "./BackgroundBeams";
import { HoverBorderGradient } from "./HoverBorderGradient";

export const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="z-10 container grid lg:grid-cols-2 place-items-center">
        <div className="text-center lg:text-start space-y-8">
          <main className="text-5xl md:text-6xl font-bold">
            <HoverBorderGradient
              className="w-fit cursor-auto rounded-full px-3 py-0.5 text-xs text-brand-50/90"
              containerClassName="mb-2"
            >
              Empower your business ⚡
            </HoverBorderGradient>
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-brand to-brand-100 text-transparent bg-clip-text">
                Revolutionize
              </span>{" "}
              Your Business
            </h1>{" "}
            with{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-primary to-brand text-transparent bg-clip-text">
                Generative AI
              </span>
            </h2>
          </main>

          <p className="text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            We diagnose your processes, uncover automation opportunities, and
            drive efficiency with the power of AI. Empower your business with
            cutting-edge solutions in AI, Business Intelligence, Data Solutions,
            and Web & Mobile Application Development.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button>Get a Free Consultation</Button>

            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={` ${buttonVariants({
                variant: "outline",
              })}`}
            >
              Learn How GenAI Can Transform Your Business
            </a>
          </div>
        </div>

        {/* Hero cards section */}
        <div className="z-10 relative size-full">
          {/* <HeroCards /> */}
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
