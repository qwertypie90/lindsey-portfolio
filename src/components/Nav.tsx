import { Link, NavLink } from "react-router-dom";
import { site } from "../content";
import { CurtainIcon } from "./Doodles";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M12 21.5c-5 0-8-3.2-8-9.5S7 2.5 12 2.5c4.3 0 7.1 2.3 7.8 6" />
      <path d="M9.5 13.8c0-1.8 1.5-3 3.5-3 2.6 0 4.5 1.3 4.5 3.8s-2 4-4.4 4c-1.9 0-3.3-1-3.3-2.5s1.4-2.4 3.2-2.4c2.9 0 4.8 1.5 4.8 1.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      <path d="M3.5 6.5 L12 13 L20.5 6.5" />
    </svg>
  );
}

const links = [
  { to: "/acting", label: "acting" },
  { to: "/writing", label: "writing" },
  { to: "/about", label: "about" },
  { to: "/press", label: "press" },
  { to: "/contact", label: "contact" },
];

export default function Nav() {
  return (
    <nav className="nav wrap">
      <div className="nav-left">
        <Link to="/" className="monogram" aria-label="Home">
          <CurtainIcon size={42} />
        </Link>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
      <div className="nav-social">
        <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href={site.threads} target="_blank" rel="noreferrer" aria-label="Threads">
          <ThreadsIcon />
        </a>
        <a href={`mailto:${site.email}`} aria-label="Email Lindsey">
          <MailIcon />
        </a>
      </div>
    </nav>
  );
}
