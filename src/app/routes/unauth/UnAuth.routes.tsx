import React from 'react';
import { Navigate, Route } from 'react-router';

import UnAuthLayout from '@/components/layout/UnAuthLayout';
import { ROUTES } from '@/constants/routes';

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
    <Route element={<Navigate to={ROUTES.HOME} />} path={`${ROUTES.HOME}home`} />
    <Route element={<AboutPage />} path={ROUTES.ABOUT} />

    <Route element={<BlogLayout />} path={ROUTES.BLOG}>
      <Route element={<BlogsPage />} path="" />
      <Route element={<BlogPostPage />} path=":slug" />
    </Route>
  </Route>
);

export default UnAuthRoutes;
