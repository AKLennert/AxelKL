import { Link } from "react-router-dom";
import { hero, site } from "../data/content";

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__status eyebrow">
        <span className="hero__status-dot" aria-hidden="true" />
        {site.status}
      </p>
      <h1 className="hero__title">{hero.title}</h1>
      <p className="hero__lede">{hero.lede}</p>
      <div className="hero__actions">
        <Link to="/#work" className="btn btn--solid">
          View selected work
        </Link>
        <a href={site.cv} download className="btn btn--ghost">
          Download CV
        </a>
      </div>
    </section>
  );
}
