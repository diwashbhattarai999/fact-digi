import { Link, useRouteError } from 'react-router';

import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

import { Navbar } from '../layout';

/**
 * NotFound page component is rendered when the route is not found.
 */
const NotFound = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {/* <div
        className="flex min-h-screen flex-col items-center justify-center gap-6 text-center"
        id="error-page"
      >
        <h1 className=" md:leading-14 pb-8  pt-6 text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-6 md:text-8xl">
          404
        </h1>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mb-8">
            Please head back to the homepage or contact us if you think this is
            an error.
          </p>

          <Link to={ROUTES.HOME}>
            <Button
              className="group min-w-48 gap-3 border py-6"
              variant="ghost"
            >
              <ArrowLeft className="transition-all duration-300 group-hover:-translate-x-1" />{" "}
              Back to Home
            </Button>
          </Link>
        </div>
      </div> */}
      <Navbar />
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
      <section className="container flex flex-col gap-2 border-t border-border py-3 text-center text-sm">
        <h3>
          &copy; 2024 Fact-Digi, a leader in Genarative AI, BI, data solutions, and application
          development.
        </h3>
      </section>{' '}
    </div>
  );
};

export default NotFound;
