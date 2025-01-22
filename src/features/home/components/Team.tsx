import { Link } from 'react-router';

import { Facebook, Instagram, Linkedin } from 'lucide-react';

import AyushNeupaneImg from '@/assets/team/ayush-neupane.jpg';
import AyushPandeyImg from '@/assets/team/ayush-pandey.jpg';
import DiwashBhattaraiImg from '@/assets/team/diwash-bhattarai.jpg';
import SajalJoshiImg from '@/assets/team/sajal-joshi.jpg';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: Array<SocialNetworksProps>;
}

interface SocialNetworksProps {
  name: string;
  url: string;
}

const teamList: Array<TeamProps> = [
  {
    imageUrl: SajalJoshiImg,
    name: 'Sajal Joshi',
    position: 'Data Scientist',
    description:
      'Sajal is a highly skilled Data Scientist with expertise in AI-driven analytics and model development.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/sajal-raj-joshi/',
      },
    ],
  },
  {
    imageUrl: AyushPandeyImg,
    name: 'Ayush Pandey',
    position: 'Lead GenAI Data Scientist',
    description:
      'Ayush specializes in Generative AI, leading projects that integrate AI into real-world applications.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/iusshpandeh/',
      },
    ],
  },
  {
    imageUrl: AyushNeupaneImg,
    name: 'Ayush Neupane Khatri',
    position: 'Backend Developer',
    description:
      'Ayush is a talented backend developer with expertise in scalable system architecture and APIs.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/ayush-neupane/',
      },
    ],
  },
  {
    imageUrl: DiwashBhattaraiImg,
    name: 'Diwash Bhattarai',
    position: 'Frontend Developer',
    description:
      'Diwash is a frontend developer passionate about building seamless and visually appealing web applications.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/diwashb999/',
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size="20" />;
      case 'Facebook':
        return <Facebook size="20" />;
      case 'Instagram':
        return <Instagram size="20" />;
      default:
        return null;
    }
  };

  return (
    <section className="container py-24 sm:py-32" id="team">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        <span className="text-gradient">Our Dedicated </span>
        Crew
      </h2>

      <p className="mb-10 mt-4 text-center text-xl text-muted-foreground">
        Meet the talented individuals who are passionate about driving our vision forward.
      </p>

      <div className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {teamList.map(({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
          <Card
            key={name}
            className="relative mt-8 flex flex-col items-center justify-center bg-muted/50"
          >
            <CardHeader className="mt-8 flex items-center justify-center pb-2">
              <img
                alt={`${name} ${position}`}
                className="absolute -top-12 aspect-square h-24 w-24 rounded-full border object-cover"
                src={imageUrl}
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-base text-brand dark:text-brand-100">
                {position}
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-2 text-center text-sm">
              <p>{description}</p>
            </CardContent>

            <CardFooter className="flex justify-center space-x-4">
              {socialNetworks.map(({ name, url }: SocialNetworksProps) => (
                <div key={name}>
                  <Link
                    rel="noreferrer noopener"
                    target="_blank"
                    to={url}
                    className={cn(
                      'rounded-full hover:bg-brand',
                      buttonVariants({
                        variant: 'ghost',
                      })
                    )}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </Link>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
