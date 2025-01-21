import { Link, useRouteError } from 'react-router';

import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

/**
 * NotFound page component is rendered when the route is not found.
 */
const NotFound = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div
        className="flex w-full flex-1 flex-col items-center justify-center text-center"
        id="error-page"
      >
        <h1 className="text-gradient mb-4 text-8xl font-extrabold tracking-tight">404</h1>
        <p className="mb-2 text-xl font-semibold md:text-2xl">
          Oops! We couldn’t find the page you’re looking for.
        </p>
        <p className="mb-8 text-muted-foreground">
          Don’t worry, you can explore our homepage or contact us if something seems amiss.
        </p>

        <Link to={ROUTES.HOME}>
          <Button className="group h-12 rounded-lg px-8 shadow-lg transition-all duration-300">
            <ArrowLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
