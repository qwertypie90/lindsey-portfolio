import { useState } from "react";
import { featuredPilot, films, publications, television, Still } from "../content";
import Placeholder from "../components/Placeholder";

function PlayMini() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 4.5 L19 12 L7 19.5 Z" />
    </svg>
  );
}

function ExternalMini() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5 H19 V15 M19 5 L7 17" />
    </svg>
  );
}

function TvCarousel({ photos }: { photos: Still[] }) {
  const [idx, setIdx] = useState(0);
  const total = photos.length;
  const prev = () => setIdx((idx - 1 + total) % total);
  const next = () => setIdx((idx + 1) % total);
  const photo = photos[idx];

  return (
    <div className="tv-carousel">
      <div className="tv-carousel-stage">
        <Placeholder src={photo.src} alt={photo.alt} tone={idx % 4} showLabel={false} />
        <button className="lb-arrow lb-prev" onClick={prev} aria-label="Previous photo">&#8249;</button>
        <button className="lb-arrow lb-next" onClick={next} aria-label="Next photo">&#8250;</button>
      </div>
      <p className="tv-carousel-counter">{idx + 1} / {total}</p>
    </div>
  );
}

export default function Writing() {
  const tvPhotos: Still[] = [
    { src: television.featuredPhoto, alt: television.featuredPhotoAlt },
    ...television.gallery,
  ];

  return (
    <div className="wrap">
      <header className="page-head">
        <h1>the Writing</h1>
        <p className="sub">television · film · prose</p>
      </header>

      {/* ───── featured pilot ───── */}
      <section className="pilot-hero" aria-label="Featured pilot">
        <p className="kicker">Featured pilot</p>
        <div className="pilot-grid">
          <div className="pilot-art">
            <Placeholder
              src={featuredPilot.keyArt}
              alt={`${featuredPilot.title} key art`}
              tone={2}
            />
          </div>
          <div className="pilot-info">
            <h2>{featuredPilot.title}</h2>
            <p className="pilot-format">{featuredPilot.format}</p>
            <p className="pilot-logline">{featuredPilot.logline}</p>
            <div className="laurel-row">
              {featuredPilot.laurels.map((l) => (
                <span className="laurel" key={l}>
                  {l}
                </span>
              ))}
            </div>
            <a
              className="btn btn-orange"
              href="mailto:lindseymcd@me.com?subject=Script%20Request%3A%20Developers&body=Hi%20Lindsey%2C%0A%0AI%27d%20love%20to%20read%20the%20Developers%20pilot.%20Please%20send%20it%20my%20way!%0A%0AThanks,%0A%0A"
            >
              {featuredPilot.ctaLabel} →
            </a>
          </div>
        </div>
      </section>

      {/* ───── television ───── */}
      <section className="w-section" aria-label="Television writing">
        <p className="kicker" style={{ color: "var(--green)" }}>
          Television
        </p>
        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}>{television.seriesTitle}</h2>
        <p style={{ color: "var(--muted)", marginTop: 4 }}>{television.credit}</p>
        <p style={{ color: "var(--muted)", marginTop: 14, maxWidth: 620, fontSize: 16 }}>
          {television.blurb}
        </p>

        <TvCarousel photos={tvPhotos} />
      </section>

      {/* ───── produced films ───── */}
      <section className="films-band" aria-label="Produced films">
        <p className="kicker" style={{ color: "var(--orange)" }}>
          Produced films
        </p>
        <div className="film-grid">
          {films.map((film, i) => (
            <article className="film-card" key={film.title}>
              <div className="film-poster">
                <Placeholder src={film.poster} alt={`${film.title} poster`} tone={(i + 1) % 4} />
              </div>
              <div className="film-body">
                <h3>{film.title}</h3>
                <p className="film-format">{film.format}</p>
                <p className="film-synopsis">{film.synopsis}</p>
                {film.laurels.length > 0 && (
                  <p className="film-laurels">★ {film.laurels.join(" · ")}</p>
                )}
              <div className="film-links">
                {film.trailerUrl && (
                  <a href={film.trailerUrl} target="_blank" rel="noreferrer">
                    <PlayMini /> trailer
                  </a>
                )}
                {film.watchUrl && (
                  <a href={film.watchUrl} target="_blank" rel="noreferrer">
                    <ExternalMini /> watch
                  </a>
                )}
              </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ───── publications ───── */}
      <section className="w-section" aria-label="Publications">
        <p className="kicker" style={{ color: "var(--purple)" }}>
          Publications
        </p>
        <div className="pub-list">
          {publications.map((pub, i) => (
            <article className="pub" key={pub.title}>
              <div className="pub-cover">
                <Placeholder src={pub.image} alt={`${pub.publication} cover`} tone={(i + 1) % 4} showLabel={false} />
              </div>
              <div>
                <h3>{pub.title}</h3>
                <p className="pub-meta">
                  {pub.publication} · {pub.year}
                </p>
                <p className="pub-excerpt">“{pub.excerpt}”</p>
                {pub.readUrl && (
                  <a className="text-link" href={pub.readUrl} target="_blank" rel="noreferrer">
                    read the piece
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
