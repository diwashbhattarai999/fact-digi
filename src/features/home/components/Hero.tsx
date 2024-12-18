import { Link } from 'react-router';

import Autoplay from 'embla-carousel-autoplay';

import HeroImg2 from '@/assets/hero/Robot1.png';
import HeroImg1 from '@/assets/hero/Robot2.png';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import { BackgroundBeamsWithCollision } from './BackgroundBeams';
import { HoverBorderGradient } from './HoverBorderGradient';

const carouselData = [
  {
    id: 1,
    headline: 'Generative AI',
    description:
      'Unlock the potential of Generative AI to streamline workflows, boost creativity, and deliver unparalleled insights tailored to your business needs.',
    image1: HeroImg1,
    image2: HeroImg2,
  },
  {
    id: 2,
    headline: 'Data Solutions',
    description:
      'Transform raw data into actionable insights with advanced analytics and robust data solutions designed to drive decision-making and growth.',
    image1: HeroImg2,
    image2: HeroImg1,
  },
  {
    id: 3,
    headline: 'AI/BI Solutions',
    description:
      'Harness the power of Artificial Intelligence and Business Intelligence to uncover trends, predict outcomes, and automate processes seamlessly.',
    image1: HeroImg1,
    image2: HeroImg2,
  },
  {
    id: 4,
    headline: 'Web & Mobile Development',
    description:
      'Create innovative web and mobile applications with cutting-edge technologies that enhance user experiences and empower digital transformation.',
    image1: HeroImg2,
    image2: HeroImg1,
  },
];

interface IHeroHeadlineProps {
  headline: string;
}

const HeroHeadline = ({ headline }: IHeroHeadlineProps) => (
  <div className="max-w-4xl text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
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
  <p className="mx-auto text-muted-foreground sm:text-lg md:w-10/12 lg:mx-0">{description}</p>
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
  <div className="relative z-10 flex h-full items-center justify-center max-lg:hidden">
    <div className="shadow"></div>
    <Avatar className="absolute -left-32 -top-24 size-[30rem] scale-x-[-1]">
      <AvatarImage alt="Hero Image 1" src={image1} />
    </Avatar>
    <Avatar className="absolute -top-20 right-0 size-[32rem] scale-x-[-1]">
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
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          {carouselData.map((carousel, index) => (
            <CarouselItem key={index} className="w-full pl-0">
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
      </Carousel>
    </>
  );
};
