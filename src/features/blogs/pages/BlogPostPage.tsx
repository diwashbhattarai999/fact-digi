import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';

import { blogPosts, TBlogPostSlug } from '@/data/blog-posts';

import BlogNotFound from '../components/BlogNotFound';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: TBlogPostSlug }>();

  if (!slug || !blogPosts[slug]) return <BlogNotFound />;

  const blogPost = blogPosts[slug];

  return (
    <div className="mt-10">
      {/* Title and Meta Information */}
      <h1 className="mb-4 text-2xl font-bold leading-tight md:text-4xl">{blogPost.title}</h1>
      <p className="mb-4 text-sm text-muted-foreground">
        By <span className="font-semibold">{blogPost.author}</span> • {blogPost.date}
      </p>

      {/* Cover Image */}
      <div className="mb-8 size-full rounded-lg bg-foreground/10 p-2">
        <img
          alt="Blog Cover"
          className="w-full rounded-lg object-contain md:h-[36rem] md:object-cover"
          src={blogPost.image}
        />
      </div>

      {/* Blog Content */}
      <article className="prose prose-gray max-w-none text-justify md:prose-lg">
        <ReactMarkdown>{blogPost.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPostPage;
