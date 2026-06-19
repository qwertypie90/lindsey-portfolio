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
