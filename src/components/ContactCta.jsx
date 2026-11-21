import { Link } from "react-router-dom";
import ContactLinks from "./ContactLinks";

export default function ContactCta() {
  return (
    <section id="contact" className="contact">
      <h2>Let&apos;s build something worth shipping.</h2>
      <p>
        Open to internships, freelance projects, and collaborations.{" "}
        <Link to="/contact" className="contact__inline">
          Send a message →
        </Link>
      </p>
      <ContactLinks />
    </section>
  );
}
