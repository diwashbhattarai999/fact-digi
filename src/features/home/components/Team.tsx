import { Facebook, Instagram, Linkedin } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: Array<SocialNetworksProps>;
}

interface SocialNetworksProps {
  name: string;
  url: string;
}

const teamList: Array<TeamProps> = [
  {
    imageUrl: 'https://i.pravatar.cc/150?img=35',
    name: 'Sajal Joshi',
    position: 'Product Manager',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/emma-smith/',
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/emma.smith',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/emma.smith/',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=60',
    name: 'Ayush Pandey',
    position: 'Tech Lead',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/john-doe/',
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/john.doe',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/john.doe/',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=18',
    name: 'Ayush Neupane Khatri',
    position: 'Backend Developer',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/ashley-ross/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/ashley.ross/',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=17',
    name: 'Diwash Bhattarai',
    position: 'Frontend Developer',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/bruce-rogers/',
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/bruce.rogers',
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
        {teamList.map(({ imageUrl, name, position, socialNetworks }: TeamProps) => (
          <Card
            key={name}
            className="relative mt-8 flex flex-col items-center justify-center bg-muted/50"
          >
            <CardHeader className="mt-8 flex items-center justify-center pb-2">
              <img
                alt={`${name} ${position}`}
                className="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover"
                src={imageUrl}
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-base text-brand dark:text-brand-100">
                {position}
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-2 text-center text-sm">
              <p>
                {name} is a dedicated and skilled {position} with a passion for delivering
                innovative solutions. Connect with {name} on social media!
              </p>
            </CardContent>

            <CardFooter className="flex justify-center space-x-4">
              {socialNetworks.map(({ name, url }: SocialNetworksProps) => (
                <div key={name}>
                  <a
                    href={url}
                    rel="noreferrer noopener"
                    target="_blank"
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
