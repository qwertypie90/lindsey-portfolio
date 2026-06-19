import { Link } from "react-router-dom";
import { site } from "../content";
import { MasksIcon, TypewriterIcon, Flower, Clover, PaperPlane, Spiral } from "../components/Doodles";
import Polaroid from "../components/Polaroid";

/** Renders the hero line with the accent word in orange */
function HeroLine() {
  const { heroLine, heroAccentWord } = site;
  const idx = heroLine.lastIndexOf(heroAccentWord);
  if (idx === -1) return <>{heroLine}</>;
  return (
    <>
      {heroLine.slice(0, idx)}
      <span className="accent">{heroAccentWord}</span>
      {heroLine.slice(idx + heroAccentWord.length)}
    </>
  );
}

export default function Home() {
  return (
    <div className="wrap">
      <section className="hero">
        <div>
          <h1>
            <HeroLine />
          </h1>
          <p className="hero-kicker">VIEW THE WORK ↓</p>
          <div className="hero-ctas">
            <Link to="/acting" className="btn btn-solid">
              <MasksIcon />
              the acting
            </Link>
            <Link to="/writing" className="btn btn-outline">
              <TypewriterIcon />
              the writing
            </Link>
          </div>
        </div>

        <div className="hero-art">
          <Flower className="doodle spin-slow" style={{ top: -30, left: 10 }} />
          <Clover className="doodle" style={{ top: -16, right: 30 }} />
          <PaperPlane className="doodle" style={{ top: 90, left: -20, transform: "rotate(-12deg)" }} />
          <div className="hero-photo">
            <Polaroid
              src="/images/main.jpg"
              alt="Lindsey"
              rotate={-3}
              tapeColor="#C5B8E0"
              tone={0}
            />
          </div>
          <span className="sticker">{site.currently}</span>
          <Spiral className="doodle" style={{ bottom: -24, right: -10 }} />
        </div>
      </section>
    </div>
  );
}
