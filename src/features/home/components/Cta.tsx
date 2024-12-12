import { Button } from "../../../components/ui/button";

const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Title and Description */}
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Ideas & Concepts{" "}
            </span>
            In One Interface
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Seamlessly integrate all your ideas into one platform. Experience
            efficiency and clarity like never before, all with a user-friendly
            interface.
          </p>
        </div>

        {/* Right Section: Call to Action Buttons */}
        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
          <Button variant="outline" className="w-full md:w-auto">
            View all features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;