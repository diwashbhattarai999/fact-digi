import { Navigate, Route } from 'react-router';

import { ROUTES } from '@/constants/routes';

/**
 * Auth routes are used to define the auth routes.
 */
const AuthRoutes = () => <Route element={<Navigate replace to={ROUTES.HOME} />} path="auth" />;

export default AuthRoutes;
