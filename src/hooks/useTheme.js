import { useCallback, useEffect, useState } from "react";

// The initial theme is set by the inline script in index.html so the page
// never paints in the wrong one. This hook only handles switching afterwards.

function readStored() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Follow the OS until an explicit choice has been stored.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (readStored() === null) setTheme(e.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* private mode — the choice just won't persist */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
