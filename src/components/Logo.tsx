import { cn } from "@/lib/utils";

interface ILogoProps {
  className?: string;
}

const Logo = ({ className }: ILogoProps) => {
  return (
    <a
      href="/#home"
      className={cn(
        "-ml-2 font-bold text-2xl flex items-center justify-center",
        className,
      )}
    >
      <img src="/logo.png" alt="Shadcn Logo" className="size-20" />
      <p className="-ml-1">Fact Digi</p>
    </a>
  );
};

export default Logo;
