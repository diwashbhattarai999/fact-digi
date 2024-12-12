import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our Daily{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-lg text-muted-foreground text-center mt-4 mb-8">
          Stay updated with the latest news, tips, and exclusive offers.
          Subscribe to receive daily updates directly to your inbox.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="youremail@example.com"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>Subscribe</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};