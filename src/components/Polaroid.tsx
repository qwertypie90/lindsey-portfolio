import Placeholder from "./Placeholder";

interface Props {
  src: string | null;
  alt: string;
  caption?: string;
  rotate?: number;
  tapeColor?: string;
  bob?: boolean;
  tone?: number;
  objectPosition?: string;
}

/** A taped-down scrapbook polaroid. */
export default function Polaroid({
  src,
  alt,
  caption,
  rotate = -4,
  tapeColor = "#C5B8E0",
  bob = false,
  tone = 0,
  objectPosition,
}: Props) {
  return (
    <figure
      className={`polaroid-card${bob ? " bobbing" : ""}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span
        className="tape"
        style={{ background: tapeColor, transform: `rotate(${-rotate - 2}deg)` }}
        aria-hidden="true"
      />
      <div className="polaroid-card-img">
        <Placeholder src={src} alt={alt} tone={tone} objectPosition={objectPosition} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
