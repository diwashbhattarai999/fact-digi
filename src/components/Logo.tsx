import { cn } from '@/lib/utils';

interface ILogoProps {
  className?: string;
}

const Logo = ({ className }: ILogoProps) => {
  return (
    <a
      className={cn('-ml-2 flex items-center justify-center text-2xl font-bold', className)}
      href="/#home"
    >
      <img alt="Fact Digi Logo" className="size-20" src="/logo.png" />
      <p className="-ml-1">Fact Digi</p>
    </a>
  );
};

export default Logo;
