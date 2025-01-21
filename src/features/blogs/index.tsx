import { Link } from 'react-router';

import { MoveRight } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { blogPosts } from '@/data/blog-posts';

const BlogList = () => {
  return (
    <div className="mt-10">
      <h1 className="mb-6 text-3xl font-bold">Latest Blog Posts</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(blogPosts).map(([slug, blog]) => (
          <Link
            key={slug}
            className="block transform rounded-lg transition duration-300 hover:scale-[1.02] hover:shadow-lg"
            to={`/blog/${slug}`}
          >
            <Card>
              <CardHeader>
                <img
                  alt={blog.title}
                  className="h-48 w-full rounded-t-lg object-cover"
                  src={blog.image}
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="line-clamp-2 text-xl font-semibold">{blog.title}</CardTitle>
                <CardDescription className="mt-2 line-clamp-3 text-sm">
                  {blog.content}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="mt-4 flex items-center gap-2 font-semibold text-brand">
                  Read More <MoveRight size={16} />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
