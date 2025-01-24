import { Link } from 'react-router';

import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

import DataDrivenImg from '@/assets/hero/data-processing.svg';
import GenAiImg from '@/assets/hero/firmware.svg';
import ProcessAutomationImg from '@/assets/hero/process-automation.svg';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPagination,
} from '@/components/ui/carousel';

import { BackgroundBeamsWithCollision } from './BackgroundBeams';
import { HoverBorderGradient } from './HoverBorderGradient';

const carouselData = [
  {
    id: 1,
    headline: 'Revolutionize Your Business with Generative AI',
    description:
      'Unlock efficiency with AI Agents—automating workflows, optimizing decisions, and enhancing customer experiences through intelligent automation and real-time insights.',
    img: GenAiImg,
    buttonLink: '/blog/gen-ai',
    buttonText: 'Learn How GenAI Can Transform Your Business',
  },
  {
    id: 2,
    headline: 'Empowering Your Business with Data-Driven Intelligence Solutions',
    description:
      'We leverage the power of advanced BI solutions to unlock actionable insights and drive strategic growth. Streamline decision-making with tailored data analytics designed for your unique business needs.',
    img: DataDrivenImg,
    buttonLink: '/blog/data-driven',
    buttonText: 'How Intelligent Data Solutions Can Transform Your Business',
  },
  {
    id: 3,
    headline: 'Optimize your business through Process Automation.',
    description:
      'Transform your workflows with cutting-edge automation solutions designed for growth. We help you achieve efficiency, precision, and success.',
    img: ProcessAutomationImg,
    buttonLink: '/blog/process-automation',
    buttonText: 'Learn How Process Automation Optimizes Your Business',
  },
];

interface IHeroHeadlineProps {
  headline: string;
}

const HeroHeadline = ({ headline }: IHeroHeadlineProps) => (
  <motion.div
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.8 }}
  >
    <div className="text-4xl font-bold sm:text-5xl lg:max-w-xl lg:text-5xl xl:max-w-3xl xl:text-6xl">
      <div className="flex w-full items-center justify-center lg:justify-start">
        <HoverBorderGradient
          className="w-fit cursor-auto rounded-full px-3 py-0.5 text-xs text-brand-50/90 dark:text-primary"
          containerClassName="mb-2"
        >
          Empower your business ⚡
        </HoverBorderGradient>
      </div>

      <h1>
        {headline.split(' ').map((word, index, arr) => (
          <span
            key={index}
            className={`inline-block ${index >= arr.length - 2 ? 'text-brand' : ''}`}
          >
            {word}
            {index !== arr.length - 1 && <span className="ml-3" />}
          </span>
        ))}
      </h1>
    </div>
  </motion.div>
);

interface IHeroDescriptionProps {
  description: string;
}

const HeroDescription = ({ description }: IHeroDescriptionProps) => (
  <motion.p
    animate={{ opacity: 1, y: 0 }}
    className="mx-auto max-w-2xl text-muted-foreground sm:text-lg md:w-10/12 lg:mx-0"
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    {description}
  </motion.p>
);

const HeroActions = ({ buttonLink, buttonText }: { buttonLink: string; buttonText: string }) => (
  <motion.div
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-normal"
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    <a className="max-sm:w-full" href={'/#contact'}>
      <Button className="w-full">Get a Free Consultation</Button>
    </a>

    <Link className="max-sm:w-full" to={buttonLink}>
      <Button className="w-full text-wrap max-sm:h-14" size={'lg'} variant={'outline'}>
        {buttonText}
      </Button>
    </Link>
  </motion.div>
);

export const Hero = () => {
  return (
    <>
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselData.map((carousel, index) => (
            <CarouselItem key={index}>
              <BackgroundBeamsWithCollision>
                <section className="max-container relative z-10 flex flex-1 flex-col pt-0 md:justify-between md:gap-10 md:pt-10 lg:flex-row">
                  <div className="flex w-full flex-col gap-8 text-center lg:text-start">
                    <HeroHeadline headline={carousel.headline} />
                    <HeroDescription description={carousel.description} />
                    <HeroActions
                      buttonLink={carousel.buttonLink}
                      buttonText={carousel.buttonText}
                    />
                  </div>

                  {/* Image section */}
                  <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    className="relative flex w-full items-center justify-center lg:w-1/2"
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <img
                      alt="Hero Image"
                      className="hidden size-[28rem] object-contain lg:block"
                      src={carousel.img}
                    />
                  </motion.div>

                  {/* Mobile Image Background */}
                  <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-5 lg:hidden">
                    <img
                      alt="Hero Image"
                      className="h-full w-full object-contain"
                      src={carousel.img}
                    />
                  </div>
                </section>
              </BackgroundBeamsWithCollision>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPagination />
      </Carousel>
    </>
  );
};
