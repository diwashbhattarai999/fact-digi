import { SectionWrapper } from '@/components/PageItems';

import { Button } from '../../../components/ui/button';

const Cta = () => {
  return (
    <SectionWrapper id="cta">
      <div className="w-full items-center gap-60 rounded-xl bg-muted/50 p-6 sm:p-16 lg:grid lg:grid-cols-3">
        {/* Left Section: Title and Description */}
        <div className="text-center lg:col-span-2 lg:text-left">
          <h2 className="text-3xl font-bold md:text-4xl">
            All Your
            <span className="text-gradient"> Ideas & Concepts </span>
            In One Interface
          </h2>
          <p className="mb-8 mt-4 text-muted-foreground lg:mb-0">
            Seamlessly integrate all your ideas into one platform. Experience efficiency and clarity
            like never before, all with a user-friendly interface.
          </p>
        </div>

        {/* Right Section: Call to Action Buttons */}
        <div className="flex items-center justify-center gap-4 lg:flex-col">
          <Button className="w-full">Request a Demo</Button>
          <Button className="w-full" variant="outline">
            View all features
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Cta;
