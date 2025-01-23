import { Link } from 'react-router';

import { Facebook, Instagram, Linkedin } from 'lucide-react';

import AnishSthapitImg from '@/assets/team/anish-sthapit.jpg';
import AnujLohalaImg from '@/assets/team/anuj-lohala.jpg';
import AyushNeupaneImg from '@/assets/team/ayush-neupane.jpg';
import AyushPandeyImg from '@/assets/team/ayush-pandey.jpg';
import DiwashBhattaraiImg from '@/assets/team/diwash-bhattarai.jpg';
import LaxmiBhandariImg from '@/assets/team/laxmi-bhandari.jpg';
import SajalJoshiImg from '@/assets/team/sajal-joshi.jpg';
import {
  GradientText,
  SectionDescription,
  SectionSubtitle,
  SectionTitle,
  SectionWrapper,
} from '@/components/PageItems';
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
    position: 'CEO',
    description:
      'Sajal leads the team with expertise in AI-driven analytics and model development.',
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
    position: 'Tech Lead',
    description:
      'Ayush specializes in Generative AI, leading AI integration and automation projects.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/iusshpandeh/',
      },
    ],
  },
  {
    imageUrl: LaxmiBhandariImg,
    name: 'Laxmi Bhandari',
    position: 'Creative & Marketing Head',
    description: 'Laxmi brings 7+ years of experience in branding, marketing, and campaign design.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/laxmi-bhandari-8b1a462a4/',
      },
    ],
  },
  {
    imageUrl: AnishSthapitImg,
    name: 'Anish Sthapit',
    position: 'Analytics Head',
    description:
      'Anish is an expert in data visualization, optimizing workflows across industries.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/anishsthapit/',
      },
    ],
  },
  {
    imageUrl: AnujLohalaImg,
    name: 'Anuj Lohala',
    position: 'BI Lead',
    description:
      'Anuj specializes in Power BI, DAX, and dashboard creation for data-driven decision-making.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/anuj-lohala-1514311a0/',
      },
    ],
  },
  {
    imageUrl: AyushNeupaneImg,
    name: 'Ayush Neupane Khatri',
    position: 'Backend Developer',
    description: 'Ayush focuses on building scalable backend systems and APIs.',
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
    description: 'Diwash specializes in creating seamless and visually appealing user experiences.',
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
    <SectionWrapper className="space-y-16" id="team">
      <div>
        <SectionSubtitle>Meet the Team</SectionSubtitle>
        <SectionTitle>
          Our <GradientText>Dedicated Crew</GradientText>
        </SectionTitle>

        <SectionDescription>
          Meet the talented individuals who are passionate about driving our vision forward.
        </SectionDescription>
      </div>

      <div className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </SectionWrapper>
  );
};
