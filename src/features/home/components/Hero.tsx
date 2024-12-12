import { Button } from "../../../components/ui/button";
import { buttonVariants } from "../../../components/ui/button";
import { HeroCards } from "../../../components/HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-8">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Revolutionize
            </span>{" "}
            Your Business
          </h1>{" "}
          with{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text">
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
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
