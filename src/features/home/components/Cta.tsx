import { Button } from '../../../components/ui/button';

const Cta = () => {
  return (
    <section className="my-24 bg-muted/50 py-16 sm:my-32" id="cta">
      <div className="container items-center gap-12 max-sm:text-center lg:grid lg:grid-cols-2">
        {/* Left Section: Title and Description */}
        <div className="lg:col-start-1">
          <h2 className="text-3xl font-bold md:text-4xl">
            All Your
            <span className="text-gradient"> Ideas & Concepts </span>
            In One Interface
          </h2>
          <p className="mb-8 mt-4 text-xl text-muted-foreground lg:mb-0">
            Seamlessly integrate all your ideas into one platform. Experience efficiency and clarity
            like never before, all with a user-friendly interface.
          </p>
        </div>

        {/* Right Section: Call to Action Buttons */}
        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
          <Button className="w-full md:w-auto" variant="outline">
            View all features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
