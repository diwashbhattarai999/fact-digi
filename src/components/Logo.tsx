import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to="/"
      className="-ml-2 font-bold text-2xl flex items-center justify-center"
    >
      <img src="/logo.png" alt="Shadcn Logo" className="size-20" />
      <p className="-ml-1">Fact Digi</p>
    </Link>
  );
};

export default Logo;
