import { Outlet } from 'react-router';

import { PageBreadCrumb } from '@/components/PageBreadcrumb';

const BlogLayout = () => (
  <div className="max-container max-w-6xl pb-20 pt-28 sm:pb-28">
    <PageBreadCrumb />

    <Outlet />
  </div>
);

export default BlogLayout;
