import { Link } from 'react-router';

import { cn } from '@/lib/utils';

interface ILogoProps {
  className?: string;
  imgClassName?: string;
  textClassName?: string;
}

const Logo = ({ className, imgClassName, textClassName }: ILogoProps) => {
  return (
    <Link
      className={cn('-ml-2 flex items-center justify-center text-2xl font-bold', className)}
      to="/#home"
    >
      <img
        alt="Fact Digi Logo"
        className={cn('size-16 sm:size-20', imgClassName)}
        src="/logo.png"
      />
      <p className={cn('-ml-1', textClassName)}>Fact Digi</p>
    </Link>
  );
};

export default Logo;
