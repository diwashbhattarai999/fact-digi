import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';

import { blogPosts, TBlogPostSlug } from '@/lib/blog-posts';

import BlogNotFound from '../components/BlogNotFound';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: TBlogPostSlug }>();

  if (!slug || !blogPosts[slug]) return <BlogNotFound />;

  const blogPost = blogPosts[slug];

  return (
    <div className="mt-10">
      {/* Title and Meta Information */}
      <h1 className="mb-4 text-4xl font-bold leading-tight">{blogPost.title}</h1>
      <p className="mb-4 text-sm text-muted-foreground">
        By <span className="font-semibold">{blogPost.author}</span> • {blogPost.date}
      </p>

      {/* Cover Image */}
      <div className="mb-8 size-full rounded-lg bg-foreground/10 p-2">
        <img
          alt="Blog Cover"
          className="h-[36rem] w-full rounded-lg object-cover"
          src={blogPost.image}
        />
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg prose-gray max-w-none">
        <ReactMarkdown>{blogPost.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPostPage;
