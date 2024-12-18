import { Link } from 'react-router';

interface IFooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: IFooterLinkProps) => (
  <div>
    <Link className="opacity-60 hover:opacity-100" to={href}>
      {children}
    </Link>
  </div>
);

export default FooterLink;
