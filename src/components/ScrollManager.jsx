import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Client-side routing doesn't scroll on its own: jump to the #hash target if
// there is one, otherwise to the top.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target page has rendered.
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
}
