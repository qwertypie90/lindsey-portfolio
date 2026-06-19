import { useState, useEffect } from "react";
import { press } from "../content";
import { Flower, Clover, Squiggle } from "../components/Doodles";
import Placeholder from "../components/Placeholder";

function useOgImage(url?: string) {
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    setSrc(null);
    if (!url || url === "#") return;
    fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`)
      .then((r) => r.json())
      .then((d) => setSrc(d?.data?.image?.url ?? null))
      .catch(() => {});
  }, [url]);
  return src;
}

function tagClass(type: string): string {
  switch (type.toLowerCase()) {
    case "interview":
      return "press-tag tag-interview";
    case "feature":
      return "press-tag tag-feature";
    case "review":
      return "press-tag tag-review";
    default:
      return "press-tag tag-default";
  }
}

export default function Press() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = press[activeIdx] ?? press[0];
  const total = press.length;
  const ogImage = useOgImage(active?.url);

  return (
    <div className="wrap">
      <header className="page-head" style={{ position: "relative" }}>
        <Flower
          size={38}
          className="doodle spin-slow"
          style={{ top: 14, right: 120 }}
        />
        <Clover size={28} className="doodle" style={{ top: 48, right: 70 }} />
        <h1>
          press <span style={{ color: "var(--orange)" }}>&amp;</span> kind words
        </h1>
        <p className="sub">people said nice things. and i didn't pay them to.</p>
      </header>

      <div className="press-layout">
        <div>
          {press.map((item, i) => {
            const number = String(i + 1).padStart(2, "0");
            const row = (
              <>
                <span className="press-num">{number}</span>
                <span className="press-main">
                  <span className="headline">
                    {item.outlet}
                    <span className="year"> &middot; {item.year}</span>
                  </span>
                  <span className="quote">&ldquo;{item.quote}&rdquo;</span>
                </span>
                <span className={tagClass(item.type)}>{item.type}</span>
              </>
            );
            return item.url ? (
              <a
                className="press-row"
                key={`${item.outlet}-${item.year}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setActiveIdx(i)}
                onFocus={() => setActiveIdx(i)}
              >
                {row}
              </a>
            ) : (
              <div
                className="press-row"
                key={`${item.outlet}-${item.year}`}
                onMouseEnter={() => setActiveIdx(i)}
              >
                {row}
              </div>
            );
          })}
        </div>

        <aside className="press-side" aria-hidden="true">
          <div className="polaroid">
            <div className="polaroid-img">
              <Placeholder
                src={ogImage ?? active?.image ?? null}
                alt={`${active?.outlet ?? ""} article photo`}
                tone={activeIdx % 4}
              />
            </div>
            <p>
              {active?.outlet} &middot; {active?.year} &#10026;
            </p>
          </div>
          <Squiggle />
        </aside>
      </div>
    </div>
  );
}
