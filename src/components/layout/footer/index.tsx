import Logo from "@/components/Logo";
import FooterSection from "./FooterSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { href: "#", label: "Github" },
  { href: "#", label: "Twitter" },
  { href: "#", label: "LinkedIn" },
];

const serviceLinks = [
  { href: "#", label: "Business Intelligence" },
  { href: "#", label: "AI Solutions" },
  { href: "#", label: "Web & Mobile Apps" },
];

const companyLinks = [
  { href: "#", label: "About Us" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Contact Us" },
];

const resourceLinks = [
  { href: "#", label: "Blog" },
  { href: "#", label: "Documentation" },
  { href: "#", label: "Case Studies" },
];

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 flex items-start justify-between gap-x-20 gap-y-10 flex-col xl:flex-row">
        <Logo className="shrink-0 -mt-3 -ml-5" />

        <div className="w-full flex items-start justify-between gap-10 flex-col md:flex-row">
          <div className="grid grid-cols-2 gap-10 w-full">
            <FooterSection title="Follow Us" links={socialLinks} />
            <FooterSection title="Our Services" links={serviceLinks} />
            <FooterSection title="Company" links={companyLinks} />
            <FooterSection title="Resources" links={resourceLinks} />
          </div>

          <div className="w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Ready to Automate?</h2>
            <form className="flex flex-col gap-4">
              <div className="grid md:grid-cols-2 gap-5 w-full">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-muted/50 dark:bg-muted/80"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-muted/50 dark:bg-muted/80"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5 w-full">
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="bg-muted/50 dark:bg-muted/80"
                  required
                />
                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="bg-muted/50 dark:bg-muted/80"
                  required
                />
              </div>

              <div className="grid w-full">
                <Textarea
                  name="message"
                  placeholder="Message"
                  className="bg-muted/50 dark:bg-muted/80 col-span-full"
                  required
                />
              </div>

              <Button type="submit" className="w-48">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="container py-3 text-center flex flex-col gap-2 border-t border-border">
        <h3>
          &copy; 2024 Fact-Digi, a leader in business intelligence, AI, data
          solutions, and application development.
        </h3>
      </section>
    </footer>
  );
};
