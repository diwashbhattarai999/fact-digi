import { Outlet } from "react-router";

import AutoScrollToTop from "@/components/AutoScrollToTop";

import MainProvider from "./main-provider";

/**
 * App component is the entry point for the application.
 */
const App = () => {
  return (
    <MainProvider>
      <Outlet />
      <AutoScrollToTop />
    </MainProvider>
  );
};

export default App;
