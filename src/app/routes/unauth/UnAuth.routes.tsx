import { Route } from 'react-router';

import UnAuthLayout from '@/components/layout/UnAuthLayout';
import Home from '@/features/home';

/**
 * UnAuth routes are used to define the unauth routes.
 */
const UnAuthRoutes = () => (
  <Route element={<UnAuthLayout />} path="">
    <Route element={<Home />} path="" />
  </Route>
);

export default UnAuthRoutes;
