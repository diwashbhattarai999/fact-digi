import { Outlet } from 'react-router';

import { PageBreadCrumb } from '@/components/PageBreadcrumb';

const BlogLayout = () => (
  <div className="container max-w-6xl py-28">
    <PageBreadCrumb />

    <Outlet />
  </div>
);

export default BlogLayout;
