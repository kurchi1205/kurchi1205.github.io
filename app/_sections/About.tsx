import { aboutContent } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <span className="section-tag">Profile</span>
        <h2>{aboutContent.title}</h2>
      </div>
      <div className="about-layout">
        <div className="about-copy">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="about-grid">
          {aboutContent.highlights.map((highlight) => (
            <article key={highlight.title} className="info-card">
              <h3>{highlight.title}</h3>
              <p>{highlight.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
