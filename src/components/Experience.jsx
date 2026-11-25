import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="eyebrow">Experience</h2>
      <ol className="timeline">
        {experience.map(({ role, org, client, dates, points }) => (
          <li key={`${role}-${dates}`} className="timeline__item">
            <p className="timeline__dates">{dates}</p>
            <div>
              <h3 className="timeline__role">
                {role} <span className="timeline__org">· {org}</span>
              </h3>
              {client && <p className="timeline__client">{client}</p>}
              <ul className="timeline__points">
                {points.map((point) => (
                  <li key={point.slice(0, 24)}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
