import { educationContent } from "@/config/education";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-heading">
        <span className="section-tag">Academic Background</span>
        <h2>{educationContent.title}</h2>
        <p>{educationContent.subtitle}</p>
      </div>
      <div className="education-list">
        {educationContent.items.map((item) => (
          <article key={`${item.school}-${item.degree}`} className="education-card">
            <div className="education-card-top">
              <div className="education-logo-wrap">
                <img
                  src={item.logo}
                  alt={item.altName}
                  className="education-logo"
                  width="56"
                  height="56"
                  loading="lazy"
                />
              </div>
              <div className="education-head">
                <h3>{item.school}</h3>
                <p className="education-degree">{item.degree}</p>
                <div className="education-meta">
                  <span className="education-badge">{item.duration}</span>
                  <a href={item.website} target="_blank" rel="noreferrer">
                    Visit site
                  </a>
                </div>
              </div>
            </div>
            <ul className="education-highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
