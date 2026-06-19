const PALETTE = [
  { bg: "#CFCBB8", text: "#444441" },
  { bg: "#C5B8E0", text: "#26215C" },
  { bg: "#1E5C45", text: "#9FE1CB" },
  { bg: "#E84E26", text: "#F4EFE6" },
];

interface Props {
  src: string | null;
  alt: string;
  /** which palette color the placeholder block uses (cycles 0-3) */
  tone?: number;
  showLabel?: boolean;
  /** CSS object-position for the image crop, e.g. "top" or "center 20%" */
  objectPosition?: string;
}

/**
 * Renders the real image when `src` is set, otherwise a styled
 * color block so the layout looks intentional before photos exist.
 */
export default function Placeholder({ src, alt, tone = 0, showLabel = true, objectPosition }: Props) {
  if (src) {
    return <img src={src} alt={alt} style={objectPosition ? { objectPosition } : undefined} />;
  }
  const c = PALETTE[tone % PALETTE.length];
  return (
    <div className="ph" style={{ background: c.bg, color: c.text }} role="img" aria-label={alt}>
      {showLabel ? alt : ""}
    </div>
  );
}
