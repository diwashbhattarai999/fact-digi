import FooterLink from './FooterLink';

interface IFooterSectionProps {
  title: string;
  links: Array<{ href: string; label: string }>;
}

const FooterSection = ({ title, links }: IFooterSectionProps) => (
  <div className="flex flex-col gap-2">
    <h3 className="font-bold sm:text-lg">{title}</h3>
    {links.map(({ href, label }) => (
      <FooterLink key={label} href={href}>
        {label}
      </FooterLink>
    ))}
  </div>
);

export default FooterSection;
