import { cn } from '@/lib/utils';

export const SectionWrapper = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) => {
  return (
    <section className={cn('max-container relative w-full py-16', className)} id={id}>
      {children}
    </section>
  );
};

export const SectionWrapperWithoutContainer = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) => {
  return (
    <section className={cn('relative pb-16', className)} id={id}>
      {children}
    </section>
  );
};

export const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn('mt-4 text-3xl font-bold tracking-tight sm:text-4xl', className)}>
      {children}
    </h2>
  );
};

export const GradientText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <span className={cn('text-gradient', className)}>{children}</span>;
};

export const SectionSubtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'text-sm font-medium uppercase tracking-wider text-brand dark:text-brand-100',
        className
      )}
    >
      {children}
    </span>
  );
};

export const SectionDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={cn('mt-4 max-w-2xl text-muted-foreground', className)}>{children}</p>;
};
