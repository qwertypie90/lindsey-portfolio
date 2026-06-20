import { about } from "../content";
import { Flower } from "../components/Doodles";
import Polaroid from "../components/Polaroid";

const TAPE = ["#C5B8E0", "#E84E26", "#CFCBB8", "#1E5C45"];
const STOP_COLORS = ["#E84E26", "#C5B8E0", "#1E5C45", "#534AB7", "#CFCBB8", "#E84E26"];
const STOP_Y = [80, 45, 60, 40, 70, 50];

/** Winding dotted bus-route timeline. Stops come from content.ts. */
function FieldTrip({ stops }: { stops: string[] }) {
  const n = stops.length;
  const xs = stops.map((_, i) => (n === 1 ? 310 : 20 + (i * 580) / (n - 1)));
  const ys = stops.map((_, i) => STOP_Y[i % STOP_Y.length]);
  const d = xs
    .map((x, i) => {
      if (i === 0) return `M ${x} ${ys[0]}`;
      const cx = (xs[i - 1] + x) / 2;
      return `Q ${cx} ${ys[i - 1] - 26}, ${x} ${ys[i]}`;
    })
    .join(" ");

  return (
    <>
      <svg viewBox="0 0 620 112" className="field-trip-svg" aria-hidden="true">
        <path d={d} fill="none" stroke="#534AB7" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />
        {stops.map((label, i) => {
          const last = i === n - 1;
          return (
            <g key={label}>
              <circle cx={xs[i]} cy={ys[i]} r={last ? 11 : 9} fill={STOP_COLORS[i % STOP_COLORS.length]} />
              <text
                x={xs[i]}
                y={ys[i] > 60 ? ys[i] + 26 : ys[i] - 18}
                fontSize="12"
                fill={last ? "#26215C" : "#5F5E5A"}
                fontWeight={last ? 600 : 400}
                textAnchor={i === 0 ? "start" : i === n - 1 ? "end" : "middle"}
                fontFamily="Space Grotesk, sans-serif"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* vertical version for small screens */}
      <ul className="field-trip-list">
        {stops.map((label, i) => (
          <li key={label}>
            <span className="dot" style={{ background: STOP_COLORS[i % STOP_COLORS.length] }} />
            {label}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function About() {
  return (
    <div className="wrap">
      <header className="page-head" style={{ position: "relative" }}>
        <Flower size={38} className="doodle spin-slow" style={{ top: 14, right: 80 }} />
        <h1>
          {about.headline.includes("✺") ? (
            <>
              {about.headline.split("it's")[0]}
              <span style={{ whiteSpace: "nowrap" }}>it's lindsey <span style={{ color: "var(--green)" }}>✺</span></span>
            </>
          ) : (
            about.headline
          )}
        </h1>
        <p className="sub">{about.sub}</p>
      </header>

      <section className="about-top" aria-label="About Lindsey">
        <div className="polaroid-cluster">
          {about.polaroids.map((p, i) => (
            <Polaroid
              key={p.caption}
              src={p.src}
              alt={p.alt}
              caption={p.caption}
              rotate={i % 2 === 0 ? -5 : 4}
              tapeColor={TAPE[i % TAPE.length]}
              tone={i % 4}
              bob={i === 1}
              objectPosition={i === 0 ? "center 5%" : undefined}
            />
          ))}
        </div>
        <div className="about-bio">
          {about.bio.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </div>
      </section>

      <section className="w-section" aria-label="Career timeline" style={{ paddingTop: 40 }}>
        <p className="kicker" style={{ color: "var(--green)" }}>
          The field trip so far
        </p>
        <FieldTrip stops={about.fieldTrip} />
      </section>

      <section className="sticker-section" aria-label="Fun facts">
        <p className="kicker" style={{ color: "var(--orange)" }}>
          fun facts, mostly lies
        </p>
        <div className="sticker-wall">
          {about.stickers.map((s, i) => (
            <span className={`sticker-pill sp-${i % 5}`} key={s}>
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
