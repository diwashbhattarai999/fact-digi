import Logo from "@/components/Logo";
import FooterSection from "./FooterSection";

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
    <footer
      id="footer"
      className="bg-gradient-to-b from-background via-brand-100/10 to-background"
    >
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 flex items-start justify-between gap-x-20 gap-y-10 flex-col xl:flex-row">
        <Logo className="shrink-0 -mt-3 -ml-5" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          <FooterSection title="Follow Us" links={socialLinks} />
          <FooterSection title="Our Services" links={serviceLinks} />
          <FooterSection title="Company" links={companyLinks} />
          <FooterSection title="Resources" links={resourceLinks} />
        </div>
      </section>

      <section className="container py-3 text-center flex flex-col gap-2 border-t border-border">
        <h3>
          &copy; 2024 Fact-Digi, a leader in Genarative AI, BI, data solutions,
          and application development.
        </h3>
      </section>
    </footer>
  );
};
