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
    headline: 'Revolutionize Your Business with Generative AI',
    description:
      'We diagnose your processes, uncover automation opportunities, and drive efficiency with the power of AI. Empower your business with cutting-edge AI, Business Intelligence, Data Solutions, and Web & Mobile Application Development solutions.',
    image1: HeroImg1,
    image2: HeroImg2,
  },
  {
    id: 2,
    headline: 'Empowering Your Business with Data-Driven Intelligence Solutions',
    description:
      'We leverage the power of advanced BI solutions to unlock actionable insights and drive strategic growth. Streamline decision-making with tailored data analytics designed for your unique business needs.',
    image1: HeroImg2,
    image2: HeroImg1,
  },
  {
    id: 3,
    headline: 'Optimize your business through process automation.',
    description:
      'Transform your workflows with cutting-edge automation solutions designed for growth. We help you achieve efficiency, precision, and success.',
    image1: HeroImg1,
    image2: HeroImg2,
  },
  // {
  //   id: 4,
  //   headline: 'Custom Web & Mobile Solutions',
  //   description:
  //     'Reimagine user experiences with cutting-edge web and mobile app development tailored to your unique business needs and goals.',
  //   image1: HeroImg2,
  //   image2: HeroImg1,
  // },
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
    {/* <h1>
      <span className="inline bg-gradient-brand bg-clip-text text-transparent">Revolutionize</span>{' '}
      Your Business with
    </h1>
    <h2>
      <span className="inline bg-gradient-primary bg-clip-text text-transparent">{headline}</span>
    </h2> */}

    <h1>
      {headline.split(' ').map((word, index, arr) => (
        <span key={index} className={`inline-block ${index >= arr.length - 2 ? 'text-brand' : ''}`}>
          {word}
          {index !== arr.length - 1 && <span className="ml-3" />}
        </span>
      ))}
    </h1>
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
