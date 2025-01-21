import { Link } from 'react-router';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type BlogPost, blogPosts } from '@/lib/blog-posts';

export default function RelatedPosts({ currentPost }: { currentPost: BlogPost }) {
  const relatedPosts = Object.values(blogPosts)
    .filter((post) => post.slug !== currentPost.slug)
    .filter((post) => post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, 3);

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Related Posts</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link key={post.slug} className="block" to={`/blog/${post.slug}`}>
            <Card>
              <img
                alt={post.title}
                className="rounded-t-lg"
                height={200}
                src={post.image || '/placeholder.svg'}
                width={300}
              />
              <CardContent>
                <h3 className="font-bold">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.excerpt.slice(0, 100)}...</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
