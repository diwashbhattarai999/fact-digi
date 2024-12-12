import { useEffect } from "react";
import { useLocation } from "react-router";

const AutoScrollToTop = () => {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default AutoScrollToTop;
