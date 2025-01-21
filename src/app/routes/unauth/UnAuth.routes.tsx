import { Route } from 'react-router';

import UnAuthLayout from '@/components/layout/UnAuthLayout';
import BlogList from '@/features/blogs';
import BlogLayout from '@/features/blogs/layout/BlogLayout';
import BlogPostPage from '@/features/blogs/pages/BlogPostPage';
import Home from '@/features/home';

/**
 * UnAuth routes are used to define the unauth routes.
 */
const UnAuthRoutes = () => (
  <Route element={<UnAuthLayout />} path="">
    <Route element={<Home />} path="" />

    <Route element={<BlogLayout />} path="blog">
      <Route element={<BlogList />} path="" />
      <Route element={<BlogPostPage />} path=":slug" />
    </Route>
  </Route>
);

export default UnAuthRoutes;
