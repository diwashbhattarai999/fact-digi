import { Facebook, Linkedin, Twitter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { BlogPost } from '@/lib/blog-posts';

export default function SocialShare({ post }: { post: BlogPost }) {
  const shareUrl = `https://yourblog.com/blog/${post.slug}`;

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Share this post</CardTitle>
      </CardHeader>
      <CardContent className="flex space-x-2">
        <Button
          variant="outline"
          onClick={() =>
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')
          }
        >
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`,
              '_blank'
            )
          }
        >
          <Twitter className="mr-2 h-4 w-4" />
          Twitter
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            window.open(
              `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${post.title}`,
              '_blank'
            )
          }
        >
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </Button>
      </CardContent>
    </Card>
  );
}
