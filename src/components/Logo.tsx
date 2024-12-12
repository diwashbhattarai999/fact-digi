import { cn } from "@/lib/utils";
import { Link } from "react-router";

interface ILogoProps {
  className?: string;
}

const Logo = ({ className }: ILogoProps) => {
  return (
    <Link
      to="/"
      className={cn(
        "-ml-2 font-bold text-2xl flex items-center justify-center",
        className
      )}
    >
      <img src="/logo.png" alt="Shadcn Logo" className="size-20" />
      <p className="-ml-1">Fact Digi</p>
    </Link>
  );
};

export default Logo;
