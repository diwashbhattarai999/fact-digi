import Logo from '@/components/Logo';

import FooterSection from './FooterSection';

const socialLinks = [
  { href: '#', label: 'Github' },
  { href: '#', label: 'Twitter' },
  { href: '#', label: 'LinkedIn' },
];

const serviceLinks = [
  { href: '#', label: 'Business Intelligence' },
  { href: '#', label: 'AI Solutions' },
  { href: '#', label: 'Web & Mobile Apps' },
];

const companyLinks = [
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Contact Us' },
];

const resourceLinks = [
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Documentation' },
  { href: '#', label: 'Case Studies' },
];

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-full" />

      <section className="container flex flex-col items-start justify-between gap-x-20 gap-y-10 py-20 xl:flex-row">
        <Logo className="-ml-5 -mt-3 shrink-0" />

        <div className="grid w-full grid-cols-2 gap-10 lg:grid-cols-4">
          <FooterSection links={socialLinks} title="Follow Us" />
          <FooterSection links={serviceLinks} title="Our Services" />
          <FooterSection links={companyLinks} title="Company" />
          <FooterSection links={resourceLinks} title="Resources" />
        </div>
      </section>

      <section className="border-t border-border py-3">
        <h3 className="container text-center text-xs sm:text-sm">
          &copy; 2024 Fact-Digi, a leader in Genarative AI, BI, data solutions, and application
          development.
        </h3>
      </section>
    </footer>
  );
};
