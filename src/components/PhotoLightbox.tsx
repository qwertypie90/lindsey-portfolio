import { useEffect } from "react";
import type { Still } from "../content";

interface Props {
  stills: Still[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}

export default function PhotoLightbox({ stills, index, onClose, onChange }: Props) {
  const photo = stills[index];
  const total = stills.length;

  const prev = () => onChange((index - 1 + total) % total);
  const next = () => onChange((index + 1) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  return (
    <div
      className="lightbox"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      <div className="photo-lb-wrap">
        <div className="photo-lb-stage">
          <button className="lb-arrow lb-prev" onClick={prev} aria-label="Previous photo">‹</button>

          {photo.src ? (
            <img src={photo.src} alt={photo.alt} className="photo-lb-img" />
          ) : (
            <div className="photo-lb-placeholder" />
          )}

          <button className="lb-arrow lb-next" onClick={next} aria-label="Next photo">›</button>
        </div>

        <div className="lightbox-bar">
          <span className="title">{photo.alt}</span>
          <div className="lightbox-actions">
            <span className="lb-counter">{index + 1} / {total}</span>
            <button className="chip" onClick={onClose}>close ✕</button>
          </div>
        </div>
      </div>
    </div>
  );
}
