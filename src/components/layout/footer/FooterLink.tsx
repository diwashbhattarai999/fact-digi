import { Link } from "react-router";

interface IFooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: IFooterLinkProps) => (
  <div>
    <Link to={href} className="opacity-60 hover:opacity-100">
      {children}
    </Link>
  </div>
);

export default FooterLink;
