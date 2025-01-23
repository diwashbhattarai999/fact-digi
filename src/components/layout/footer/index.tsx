import Logo from '@/components/Logo';

import FooterSection from './FooterSection';

const socialLinks = [{ href: '#', label: 'LinkedIn' }];

const companyLinks = [
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Contact Us' },
];

const resourceLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '#', label: 'Case Studies' },
];

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-full" />

      <section className="max-container flex flex-col items-start justify-between gap-x-20 gap-y-10 py-20 xl:flex-row">
        <div className="flex items-center justify-start md:basis-1/2">
          <Logo className="-ml-5 -mt-3 shrink-0" />
        </div>

        <div className="grid w-full grid-cols-2 gap-10 md:basis-1/2 lg:grid-cols-3">
          <FooterSection links={socialLinks} title="Follow Us" />
          <FooterSection links={companyLinks} title="Company" />
          <FooterSection links={resourceLinks} title="Resources" />
        </div>
      </section>

      <section className="border-t border-border py-3">
        <h3 className="max-container text-center text-xs sm:text-sm">
          &copy; 2024 Fact-Digi, a leader in Generative AI, BI, data solutions, and application
          development.
        </h3>
      </section>
    </footer>
  );
};
