import React from 'react';
import { Navigate, Route } from 'react-router';

import UnAuthLayout from '@/components/layout/UnAuthLayout';

// Lazy load
const HomePage = React.lazy(() => import('@/features/home'));
const AboutPage = React.lazy(() => import('@/features/about'));
const BlogsPage = React.lazy(() => import('@/features/blogs'));
const BlogLayout = React.lazy(() => import('@/features/blogs/layout/BlogLayout'));
const BlogPostPage = React.lazy(() => import('@/features/blogs/pages/BlogPostPage'));

/**
 * UnAuth routes are used to define the unauth routes.
 */
const UnAuthRoutes = () => (
  <Route element={<UnAuthLayout />} path="">
    <Route element={<HomePage />} path="" />
    <Route element={<Navigate to="/" />} path="/home" />
    <Route element={<AboutPage />} path="/about-us" />

    <Route element={<BlogLayout />} path="blog">
      <Route element={<BlogsPage />} path="" />
      <Route element={<BlogPostPage />} path=":slug" />
    </Route>
  </Route>
);

export default UnAuthRoutes;
