import { Link } from 'react-router';

import Autoplay from 'embla-carousel-autoplay';

import HeroImg2 from '@/assets/hero/Robot1.png';
import HeroImg1 from '@/assets/hero/Robot2.png';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
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
    headline: 'Generative AI Solutions',
    description:
      'Empower your business with Generative AI that drives innovation, automates repetitive tasks, and unlocks new levels of efficiency and creativity.',
    image1: HeroImg1,
    image2: HeroImg2,
  },
  {
    id: 2,
    headline: 'Advanced Data Analytics',
    description:
      'Transform your data into actionable insights with state-of-the-art analytics that help you stay ahead in today’s competitive landscape.',
    image1: HeroImg2,
    image2: HeroImg1,
  },
  {
    id: 3,
    headline: 'AI & BI Integration',
    description:
      'Leverage AI-driven intelligence to streamline processes, predict outcomes, and gain a competitive edge with robust business intelligence solutions.',
    image1: HeroImg1,
    image2: HeroImg2,
  },
  {
    id: 4,
    headline: 'Custom Web & Mobile Solutions',
    description:
      'Reimagine user experiences with cutting-edge web and mobile app development tailored to your unique business needs and goals.',
    image1: HeroImg2,
    image2: HeroImg1,
  },
];

interface IHeroHeadlineProps {
  headline: string;
}

const HeroHeadline = ({ headline }: IHeroHeadlineProps) => (
  <div className="text-3xl font-bold sm:text-4xl md:text-5xl lg:max-w-xl lg:text-6xl xl:max-w-3xl">
    <div className="flex w-full items-center justify-center lg:justify-start">
      <HoverBorderGradient
        className="w-fit cursor-auto rounded-full px-3 py-0.5 text-xs text-brand-50/90 dark:text-primary"
        containerClassName="mb-2"
      >
        Empower your business ⚡
      </HoverBorderGradient>
    </div>
    <h1>
      <span className="inline bg-gradient-brand bg-clip-text text-transparent">Revolutionize</span>{' '}
      Your Business with
    </h1>
    <h2>
      <span className="inline bg-gradient-primary bg-clip-text text-transparent">{headline}</span>
    </h2>
  </div>
);

interface IHeroDescriptionProps {
  description: string;
}

const HeroDescription = ({ description }: IHeroDescriptionProps) => (
  <p className="mx-auto max-w-lg text-muted-foreground sm:text-lg md:w-10/12 lg:mx-0">
    {description}
  </p>
);

const HeroActions = () => (
  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-normal">
    <a className="max-sm:w-full" href={'/#contact'}>
      <Button className="w-full">Get a Free Consultation</Button>
    </a>

    <Link className="max-sm:w-full" to={'#'}>
      <Button className="w-full text-wrap max-sm:h-14" size={'lg'} variant={'outline'}>
        Learn How GenAI Can Transform Your Business
      </Button>
    </Link>
  </div>
);

interface IHeroImagesProps {
  image1: string;
  image2: string;
}

const HeroImages = ({ image1, image2 }: IHeroImagesProps) => (
  <div className="relative flex h-full items-center justify-center max-lg:hidden">
    <div className="shadow"></div>
    <Avatar className="absolute right-0 top-0 -z-10 size-[30rem] -translate-x-40 -translate-y-10 scale-x-[-1] max-xl:opacity-20">
      <AvatarImage alt="Hero Image 1" src={image1} />
    </Avatar>
    <Avatar className="absolute right-0 top-0 -z-10 size-[32rem] -translate-y-10 translate-x-20 scale-x-[-1] max-xl:opacity-20">
      <AvatarImage alt="Hero Image 2" src={image2} />
    </Avatar>
  </div>
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
                <section className="container z-10 flex flex-col justify-center pt-20 md:gap-10 md:pt-10 lg:flex-row">
                  <div className="flex w-full flex-col gap-8 text-center lg:text-start">
                    <HeroHeadline headline={carousel.headline} />
                    <HeroDescription description={carousel.description} />
                    <HeroActions />
                  </div>
                  <HeroImages image1={carousel.image1} image2={carousel.image2} />
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
