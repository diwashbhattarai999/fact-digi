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
    <section className={cn('max-container relative pb-16', className)} id={id}>
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
    <h2 className={cn('text-gradient text-center text-3xl font-bold', className)}>{children}</h2>
  );
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
