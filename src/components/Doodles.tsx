interface IconProps {
  size?: number;
  color?: string;
  accent?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** Comedy/tragedy masks — the acting icon */
export function MasksIcon({ size = 22, color = "#F4EFE6", accent = "#534AB7" }: IconProps) {
  return (
    <svg width={size} height={(size * 20) / 22} viewBox="0 0 44 40" aria-hidden="true">
      <path
        d="M4 6 Q 12 3, 20 6 L 19 18 Q 18 27, 11.5 27 Q 5 27, 4.5 18 Z"
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 12 Q 32 9, 40 12 L 39 24 Q 38 33, 31.5 33 Q 25 33, 24.5 24 Z"
        fill={color}
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M8 12.5 L 11 12.5 M 14 12.5 L 17 12.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M9 19 Q 12 22, 15 19" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M28 18.5 L 31 18.5 M 34 18.5 L 37 18.5" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <path d="M29 26 Q 32 23, 35 26" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Typewriter with the little red page — the writing icon */
export function TypewriterIcon({ size = 22, color = "#1C1B18", accent = "#E84E26" }: IconProps) {
  return (
    <svg width={size} height={(size * 20) / 22} viewBox="0 0 44 40" aria-hidden="true">
      <rect x="6" y="16" width="32" height="14" rx="3" fill="none" stroke={color} strokeWidth="2.4" />
      <path
        d="M10 16 L 10 9 Q 10 7, 12 7 L 32 7 Q 34 7, 34 9 L 34 16"
        fill="none"
        stroke={color}
        strokeWidth="2.4"
      />
      <path d="M14 11.5 L 30 11.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="13" cy="21.5" r="1.4" fill={color} />
      <circle cx="19" cy="21.5" r="1.4" fill={color} />
      <circle cx="25" cy="21.5" r="1.4" fill={color} />
      <circle cx="31" cy="21.5" r="1.4" fill={color} />
      <path d="M16 26 L 28 26" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M22 7 L 22 4 L 36 4" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Flower({ size = 44, color = "#E84E26", center = "#F4EFE6", className, style }: IconProps & { center?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} style={style} aria-hidden="true">
      <g fill={color}>
        <ellipse cx="20" cy="8" rx="5" ry="9" />
        <ellipse cx="20" cy="32" rx="5" ry="9" />
        <ellipse cx="8" cy="20" rx="9" ry="5" />
        <ellipse cx="32" cy="20" rx="9" ry="5" />
      </g>
      <circle cx="20" cy="20" r="4" fill={center} />
    </svg>
  );
}

export function Clover({ size = 34, color = "#C5B8E0", className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} style={style} aria-hidden="true">
      <g fill={color}>
        <circle cx="13" cy="13" r="9" />
        <circle cx="27" cy="13" r="9" />
        <circle cx="13" cy="27" r="9" />
        <circle cx="27" cy="27" r="9" />
      </g>
    </svg>
  );
}

export function Squiggle({ width = 80, color = "#E84E26", className, style }: IconProps & { width?: number }) {
  return (
    <svg width={width} height={(width * 28) / 80} viewBox="0 0 80 28" className={className} style={style} aria-hidden="true">
      <path
        d="M4 22 Q 20 4, 40 14 T 76 8"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PaperPlane({ size = 36, color = "#C5B8E0", outline = "#1C1B18", className, style }: IconProps & { outline?: string }) {
  return (
    <svg width={size} height={(size * 30) / 36} viewBox="0 0 36 30" className={className} style={style} aria-hidden="true">
      <path d="M2 14 L 34 2 L 22 28 L 16 18 Z" fill={color} stroke={outline} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M16 18 L 34 2" fill="none" stroke={outline} strokeWidth="1.8" />
    </svg>
  );
}

/** Theater curtains — the home icon */
export function CurtainIcon({ size = 44, color = "#1E5C45", knot = "#F4EFE6", className, style }: IconProps & { knot?: string }) {
  return (
    <svg width={size} height={(size * 44) / 48} viewBox="0 0 48 44" className={className} style={style} aria-hidden="true">
      <rect x="3" y="2" width="42" height="4" rx="2" fill={color} />
      <path
        d="M5 6 L23 6 C 22 16, 19 23, 14 27 C 17 31, 18 36, 18 42 L 8 42 C 9 36, 8 31, 7 27 C 5 20, 5 13, 5 6 Z"
        fill={color}
      />
      <path
        d="M43 6 L25 6 C 26 16, 29 23, 34 27 C 31 31, 30 36, 30 42 L 40 42 C 39 36, 40 31, 41 27 C 43 20, 43 13, 43 6 Z"
        fill={color}
      />
      <rect x="9.5" y="25" width="9" height="3.6" rx="1.8" fill={knot} transform="rotate(-18 14 27)" />
      <rect x="29.5" y="25" width="9" height="3.6" rx="1.8" fill={knot} transform="rotate(18 34 27)" />
    </svg>
  );
}

export function Spiral({ size = 64, color = "#1E5C45", className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" className={className} style={style} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="3.4">
        <circle cx="30" cy="30" r="26" />
        <circle cx="30" cy="30" r="19.5" />
        <circle cx="30" cy="30" r="13" />
        <circle cx="30" cy="30" r="6.5" />
      </g>
    </svg>
  );
}
