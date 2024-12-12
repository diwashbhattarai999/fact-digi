import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

import App from "@/app";
import NotFound from "@/components/errors/NotFound";
import { ROUTES } from "@/constants/routes";

import AuthRoutes from "./auth/Auth.routes";
import UnAuthRoutes from "./unauth/UnAuth.routes";

/**
 * Router configuration for the application
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path={ROUTES.HOME}>
      {/* Auth */}
      {AuthRoutes()}

      {/* UnAuth */}
      {UnAuthRoutes()}

      {/* Catch-all for unmatched routes - NotFound */}
      <Route element={<NotFound />} path="*" />
    </Route>
  )
);

export { router };
