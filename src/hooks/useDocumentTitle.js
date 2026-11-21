import { useEffect } from "react";

const BASE = "Axel Lennert";

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — Full-Stack Web Developer`;
  }, [title]);
}
