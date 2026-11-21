import { useEffect, useState } from "react";

// Returns the id of the section currently in the middle of the viewport.
// `enabled` lets callers switch it off on pages without those sections.
export function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState(null);
  const key = ids.join(",");

  useEffect(() => {
    setActive(null);
    if (!enabled || !("IntersectionObserver" in window)) return;

    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key, enabled]);

  return active;
}
