import { heroContent } from "@/config/site";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-orbit" aria-hidden="true" />

      <div className="hero-copy">
        <div className="hero-kicker-row">
          <span className="section-tag">{heroContent.role}</span>
        </div>
        <h1>{heroContent.name}</h1>
        <p className="hero-location-line">Based in {heroContent.location}</p>
        <p className="hero-intro">{heroContent.intro}</p>
        <div className="hero-chip-row">
          {heroContent.focusAreas.map((area) => (
            <span key={area} className="pill">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
