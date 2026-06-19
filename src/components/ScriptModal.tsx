import { useState } from "react";

interface Props {
  onClose: () => void;
}

export default function ScriptModal({ onClose }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/request-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
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
      aria-label="Request script"
    >
      <div className="script-modal">
        {status === "success" ? (
          <div className="script-modal-body">
            <p className="script-modal-title">Script on its way!</p>
            <p className="script-modal-sub">
              Check your inbox for <em>Developers</em>. If it doesn't show up in a few minutes, check your spam.
            </p>
            <button className="btn btn-orange" onClick={onClose}>
              close
            </button>
          </div>
        ) : (
          <div className="script-modal-body">
            <p className="script-modal-title">Read <em>Developers</em></p>
            <p className="script-modal-sub">
              Enter your email and we'll send the pilot script right over.
            </p>
            <form onSubmit={handleSubmit} className="script-modal-form">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="script-modal-input"
                autoFocus
              />
              <button
                type="submit"
                className="btn btn-orange"
                disabled={status === "loading"}
              >
                {status === "loading" ? "sending..." : "send me the script →"}
              </button>
            </form>
            {status === "error" && (
              <p className="script-modal-error">
                Something went wrong. Try again or email{" "}
                <a href="mailto:lindseymcd@me.com">lindseymcd@me.com</a> directly.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
