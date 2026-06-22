import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Acting from "./pages/Acting";
import Writing from "./pages/Writing";
import About from "./pages/About";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import { site } from "./content";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Footer() {
  return (
    <footer className="site-footer wrap">
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <div className="footer-social">
        <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href={site.threads} target="_blank" rel="noreferrer" aria-label="Threads">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M12 21.5c-5 0-8-3.2-8-9.5S7 2.5 12 2.5c4.3 0 7.1 2.3 7.8 6" />
            <path d="M9.5 13.8c0-1.8 1.5-3 3.5-3 2.6 0 4.5 1.3 4.5 3.8s-2 4-4.4 4c-1.9 0-3.3-1-3.3-2.5s1.4-2.4 3.2-2.4c2.9 0 4.8 1.5 4.8 1.5" />
          </svg>
        </a>
        <a href={`mailto:${site.email}`} aria-label="Email Lindsey">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
            <path d="M3.5 6.5 L12 13 L20.5 6.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acting" element={<Acting />} />
        <Route path="/acting/clip/:clipId" element={<Acting />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/about" element={<About />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
