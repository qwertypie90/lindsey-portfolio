import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { actingClips, site, stills, VideoSource } from "../content";
import Lightbox from "../components/Lightbox";
import PhotoLightbox from "../components/PhotoLightbox";
import Placeholder from "../components/Placeholder";

function VideoThumb({ source, videoId }: { source: VideoSource; videoId: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (source === "youtube") {
      setSrc(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
    } else {
      fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`)
        .then((r) => r.json())
        .then((d) => setSrc(d.thumbnail_url))
        .catch(() => {});
    }
  }, [source, videoId]);

  if (!src) return null;
  return <img src={src} alt="" className="video-thumb" aria-hidden="true" />;
}

function PlayDisc() {
  return (
    <span className="play-disc">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#F4EFE6" aria-hidden="true">
        <path d="M7 4.5 L19 12 L7 19.5 Z" />
      </svg>
    </span>
  );
}


function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5 H19 V15 M19 5 L7 17" />
    </svg>
  );
}

export default function Acting() {
  const { clipId } = useParams();
  const navigate = useNavigate();
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const openClip = clipId ? actingClips.find((c) => c.id === clipId) : undefined;
  const featured = actingClips.find((c) => c.featured) ?? actingClips[0];
  const rest = actingClips.filter((c) => c.id !== featured.id);

  const firstGroup = stills.slice(0, 5);
  const secondGroup = stills.slice(5, 10);

  return (
    <div className="wrap">
      <header className="page-head">
        <h1>reel &amp; clips</h1>
        <div className="head-actions">
          {/* <a className="btn btn-solid btn-sm" href={site.resumeUrl} download="Lindsey-McDowell-Resume.pdf">
            <DownloadIcon />
            resume (PDF)
          </a> */}
          <a className="text-link" href={site.imdb} target="_blank" rel="noreferrer">
            IMDb <ExternalIcon />
          </a>
          <a className="text-link" href={site.actorsAccess} target="_blank" rel="noreferrer">
            Actors Access <ExternalIcon />
          </a>
        </div>
      </header>

      <section className="video-feature" aria-label="Featured reel">
        <button className="video-frame" onClick={() => navigate(`/acting/clip/${featured.id}`)}>
          <VideoThumb source={featured.source} videoId={featured.videoId} />
          <PlayDisc />
          <span className="video-label">
            {featured.title}
            {featured.duration && <span> — {featured.duration}</span>}
          </span>
        </button>

        <div className="clip-grid">
          {rest.map((clip) => (
            <button
              key={clip.id}
              className="video-frame"
              onClick={() => navigate(`/acting/clip/${clip.id}`)}
            >
              <VideoThumb source={clip.source} videoId={clip.videoId} />
              <PlayDisc />
              <span className="video-label">{clip.title}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="stills-section" aria-label="On set and stills">
        <p className="kicker" style={{ color: "var(--green)" }}>
          On set / stills
        </p>

        <div className="stills-block">
          <button className="still big still-btn" onClick={() => setPhotoIndex(0)}>
            <Placeholder src={firstGroup[0]?.src ?? null} alt={firstGroup[0]?.alt ?? ""} tone={0} />
          </button>
          {firstGroup.slice(1).map((s, i) => (
            <button className="still still-btn" key={s.alt} onClick={() => setPhotoIndex(i + 1)}>
              <Placeholder src={s.src} alt={s.alt} tone={i + 1} showLabel={false} />
            </button>
          ))}
        </div>

        <div className="stills-block flip">
          {secondGroup.slice(1).map((s, i) => (
            <button className="still still-btn" key={s.alt} onClick={() => setPhotoIndex(5 + i + 1)}>
              <Placeholder src={s.src} alt={s.alt} tone={i} showLabel={false} objectPosition={i === 3 ? "center 20%" : undefined} />
            </button>
          ))}
          <button className="still big still-btn" style={{ gridColumn: 3, gridRow: "1 / span 2" }} onClick={() => setPhotoIndex(5)}>
            <Placeholder src={secondGroup[0]?.src ?? null} alt={secondGroup[0]?.alt ?? ""} tone={2} />
          </button>
        </div>
      </section>

      {openClip && <Lightbox clip={openClip} onClose={() => navigate("/acting")} />}
      {photoIndex !== null && (
        <PhotoLightbox
          stills={stills}
          index={photoIndex}
          onClose={() => setPhotoIndex(null)}
          onChange={setPhotoIndex}
        />
      )}
    </div>
  );
}
