import { useEffect, useState } from "react";
import type { VideoClip } from "../content";

interface Props {
  clip: VideoClip;
  onClose: () => void;
}

function embedUrl(clip: VideoClip): string {
  if (clip.source === "youtube") {
    return `https://www.youtube-nocookie.com/embed/${clip.videoId}?autoplay=1&rel=0`;
  }
  return `https://player.vimeo.com/video/${clip.videoId}?autoplay=1`;
}

/**
 * Fullscreen video player. Every clip has a shareable deep link
 * (/acting/clip/:id) — the copy button grabs it.
 */
export default function Lightbox({ clip, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const copyLink = async () => {
    const url = `${window.location.origin}/acting/clip/${clip.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this link:", url);
    }
  };

  return (
    <div
      className="lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={clip.title}
    >
      <div className="lightbox-inner">
        <iframe
          src={embedUrl(clip)}
          title={clip.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <div className="lightbox-bar">
          <span className="title">{clip.title}</span>
          <div className="lightbox-actions">
            <button className="chip" onClick={copyLink}>
              {copied ? "copied!" : "copy link to this clip"}
            </button>
            <button className="chip" onClick={onClose}>
              close ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
