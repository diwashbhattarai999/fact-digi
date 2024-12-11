import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    userName: "@john_doe",
    comment:
      "This landing page is fantastic! The user experience is seamless, and I found all the features I needed quickly. Highly recommend!",
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    userName: "@jane_smith",
    comment:
      "The design of this page is clean and intuitive. It was easy to navigate, and the information was clear. A great experience overall.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Michael Johnson",
    userName: "@michael_johnson",
    comment:
      "I love how this page is designed. It feels modern, and the interface is very responsive. I’m impressed with the overall functionality.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emily Davis",
    userName: "@emily_davis",
    comment:
      "Such an amazing landing page! It’s easy to use, and I found the information I needed right away. The color scheme is also visually appealing.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Chris Brown",
    userName: "@chris_brown",
    comment:
      "The layout is simple yet effective. The page loaded quickly, and the calls to action were clear. A fantastic user experience overall.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Sara Lee",
    userName: "@sara_lee",
    comment:
      "I was able to find everything I needed in just a few clicks. The design is elegant, and the page works great on mobile too. Very happy with it!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32 space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground text-center pt-4 pb-8">
        Hear from our users about how this page transformed their experience.
      </p>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md break-inside-avoid overflow-hidden shadow-lg rounded-lg"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="User Image" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg font-semibold">
                    {name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {userName}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="text-md text-muted-foreground">
                {comment}
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
