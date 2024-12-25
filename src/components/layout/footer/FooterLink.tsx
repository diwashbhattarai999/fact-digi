import { Link } from 'react-router';

interface IFooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: IFooterLinkProps) => (
  <div>
    <Link className="text-sm opacity-60 hover:opacity-100 sm:text-base" to={href}>
      {children}
    </Link>
  </div>
);

export default FooterLink;
