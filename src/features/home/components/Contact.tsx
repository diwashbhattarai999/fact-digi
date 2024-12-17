import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="container py-20 xl:py-32 mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Ready to Automate?
      </h2>
      <p className="text-lg mb-8 text-center text-gray-600 dark:text-gray-400">
        Fill out the form below and we’ll get back to you as soon as possible.
      </p>
      <form className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            className="bg-muted/50 dark:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            className="bg-muted/50 dark:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="bg-muted/50 dark:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
            required
          />
          <Input
            type="text"
            name="company"
            placeholder="Company Name"
            className="bg-muted/50 dark:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
            required
          />
        </div>

        <div className="grid w-full">
          <Textarea
            name="message"
            placeholder="Your Message"
            className="bg-muted/50 dark:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 col-span-full"
            required
          />
        </div>

        <Button type="submit" size={"lg"}>
          Send Message
        </Button>
      </form>
    </section>
  );
};
