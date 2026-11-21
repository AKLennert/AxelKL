import { about, facts } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section about">
      <div>
        <h2 className="eyebrow">About</h2>
        {about.map((para) => (
          <p key={para.slice(0, 24)} className="about__body">
            {para}
          </p>
        ))}
      </div>

      <ul className="facts">
        {facts.map(({ key, val, sub }) => (
          <li key={key}>
            <span className="facts__key">{key}</span>
            <span className="facts__val">
              {val}
              {sub && <span className="facts__sub">{sub}</span>}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
