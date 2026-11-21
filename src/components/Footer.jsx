import { site } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <span>{site.location}</span>
    </footer>
  );
}
