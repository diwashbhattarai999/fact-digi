import { Link } from 'react-router';

import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

const BlogNotFound = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center md:mt-40">
      <h1 className="text-gradient mb-4 text-8xl font-extrabold tracking-tight">404</h1>
      <p className="mb-2 text-xl font-semibold md:text-2xl">
        Oops! We couldn’t find the blog post you’re looking for.
      </p>
      <p className="mb-8 text-muted-foreground">
        Don’t worry, you can explore our blog or contact us if something seems amiss.
      </p>

      <Link to={ROUTES.BLOG}>
        <Button className="group h-12 rounded-lg px-8 shadow-lg transition-all duration-300">
          <ArrowLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </Button>
      </Link>
    </div>
  );
};

export default BlogNotFound;
