import { links, projects } from "../data/content";

const external = { target: "_blank", rel: "noopener noreferrer" };

function Thumb({ thumb, thumbLabel, title, href }) {
  const inner = thumb ? (
    <img
      className="card__thumb card__thumb--img"
      src={thumb}
      alt={`Screenshot of ${title}`}
      width="960"
      height="600"
      loading="lazy"
    />
  ) : (
    <div className="card__thumb">{thumbLabel}</div>
  );

  // The screenshot links to the live site too, but the title link is the one
  // announced to screen readers, so hide this duplicate from them.
  return href ? (
    <a href={href} {...external} className="card__thumb-link" tabIndex={-1} aria-hidden="true">
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="work__head">
        <h2 className="eyebrow">Selected work</h2>
        <a href={links.github.href} {...external}>
          See all on GitHub →
        </a>
      </div>

      <div className="work__grid">
        {projects.map((project) => (
          <article key={project.title}>
            <Thumb {...project} />
            <h3 className="card__title">
              {project.href ? (
                <a href={project.href} {...external}>
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="card__desc">{project.desc}</p>
            <p className="card__stack">{project.stack}</p>
            {(project.href || project.repo) && (
              <p className="card__links">
                {project.href && (
                  <a href={project.href} {...external}>
                    Visit site ↗
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} {...external}>
                    Source code ↗
                  </a>
                )}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
