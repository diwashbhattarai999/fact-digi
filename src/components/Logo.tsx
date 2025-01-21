import { cn } from '@/lib/utils';

interface ILogoProps {
  className?: string;
  imgClassName?: string;
  textClassName?: string;
}

const Logo = ({ className, imgClassName, textClassName }: ILogoProps) => {
  return (
    <a
      className={cn('-ml-2 flex items-center justify-center text-2xl font-bold', className)}
      href="/#home"
    >
      <img
        alt="Fact Digi Logo"
        className={cn('size-16 sm:size-20', imgClassName)}
        src="/logo.png"
      />
      <p className={cn('-ml-1', textClassName)}>Fact Digi</p>
    </a>
  );
};

export default Logo;
