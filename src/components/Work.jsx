import { links, projects } from "../data/content";

function Thumb({ thumb, thumbLabel, title }) {
  if (thumb) {
    return <img className="card__thumb card__thumb--img" src={thumb} alt={`${title} screenshot`} loading="lazy" />;
  }
  return <div className="card__thumb">{thumbLabel}</div>;
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="work__head">
        <h2 className="eyebrow">Selected work</h2>
        <a href={links.github.href} target="_blank" rel="noopener noreferrer">
          See all on GitHub →
        </a>
      </div>

      <div className="work__grid">
        {projects.map((project) => (
          <article key={project.title}>
            <Thumb {...project} />
            <h3 className="card__title">
              {project.href ? (
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="card__desc">{project.desc}</p>
            <p className="card__stack">{project.stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
