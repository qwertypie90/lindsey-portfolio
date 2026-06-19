import { contact } from "../content";
import { Flower } from "../components/Doodles";

export default function Contact() {
  return (
    <div className="wrap">
      <header className="page-head" style={{ position: "relative" }}>
        <Flower size={36} color="#C5B8E0" center="#F4EFE6" className="doodle spin-slow" style={{ top: 16, right: 90 }} />
        <h1>say hello</h1>
        <p className="sub">{contact.intro}</p>
      </header>

      <div className="contact-grid">
        {contact.reps.map((rep) => (
          <div className="contact-card" key={rep.label}>
            <p className="label">{rep.label}</p>
            <h3>{rep.name}</h3>
            <p className="company">{rep.company}</p>
            <a href={`mailto:${rep.email}`}>{rep.email}</a>
            {rep.phone && <span className="phone">{rep.phone}</span>}
          </div>
        ))}

        <div className="contact-card">
          <p className="label">{contact.direct.label}</p>
          <h3>Lindsey McDowell</h3>
          <p className="company">for everything else</p>
          <a href={`mailto:${contact.direct.email}`}>{contact.direct.email}</a>
        </div>
      </div>
    </div>
  );
}
