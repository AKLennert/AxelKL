import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="eyebrow">Capabilities</h2>
      <div className="skills">
        {skills.map(({ title, items }) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
