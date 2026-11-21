import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Thanks() {
  useDocumentTitle("Message sent");
  return (
    <section className="page page--center">
      <p className="hero__status eyebrow">
        <span className="hero__status-dot" aria-hidden="true" />
        Message sent
      </p>
      <h1 className="page__title">Thanks, I&apos;ll be in touch.</h1>
      <p className="page__lede">
        Your message is on its way. I usually reply within a couple of days.
      </p>
      <div className="hero__actions">
        <Link to="/" className="btn btn--solid">
          Back to home
        </Link>
        <Link to="/#work" className="btn btn--ghost">
          View selected work
        </Link>
      </div>
    </section>
  );
}
