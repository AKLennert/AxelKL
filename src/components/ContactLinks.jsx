import { links, site } from "../data/content";

export default function ContactLinks() {
  return (
    <div className="contact__links">
      <a href={`mailto:${site.email}`} className="contact__primary">
        {site.email}
      </a>
      {Object.values(links).map(({ href, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
