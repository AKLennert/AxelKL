import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");
  return (
    <section className="page page--center">
      <p className="eyebrow">404</p>
      <h1 className="page__title">This page doesn&apos;t exist.</h1>
      <p className="page__lede">
        The link may be old, or the address may have a typo.
      </p>
      <div className="hero__actions">
        <Link to="/" className="btn btn--solid">
          Back to home
        </Link>
        <Link to="/contact" className="btn btn--ghost">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
