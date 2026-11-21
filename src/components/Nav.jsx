import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sections } from "../data/content";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = sections.map((s) => s.id);

export default function Nav() {
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds, pathname === "/");

  const dark = theme === "dark";
  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand" onClick={close}>
        Axel Lennert
      </Link>

      <div
        className={`nav__links${open ? " is-open" : ""}`}
        id="navLinks"
        onClick={(e) => e.target.closest("a") && close()}
      >
        {sections.map(({ id, label }) => (
          <Link
            key={id}
            to={`/#${id}`}
            className={`nav__link${active === id ? " is-active" : ""}`}
          >
            {label}
          </Link>
        ))}
        <Link
          to="/contact"
          className={`nav__link nav__link--contact${
            pathname === "/contact" ? " is-active" : ""
          }`}
        >
          Get in touch
        </Link>
      </div>

      <div className="nav__actions">
        {/* The button is labelled with the theme it switches *to*. */}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggle}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
        >
          <span className="theme-toggle__dot" aria-hidden="true" />
          <span>{dark ? "Light" : "Dark"}</span>
        </button>
        <Link to="/contact" className="nav__cta">
          Get in touch
        </Link>
        <button
          type="button"
          className="nav__burger"
          aria-label="Toggle navigation"
          aria-controls="navLinks"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
