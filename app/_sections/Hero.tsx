import { Github, Linkedin, Mail } from "lucide-react";
import { contactContent, heroContent } from "@/config/site";

const heroSocialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

type HeroProps = {
  variant?: "home" | "sidebar";
};

export default function Hero({ variant = "home" }: HeroProps) {
  const pills = (
    <div className={`hero-chip-row${variant === "sidebar" ? " hero-chip-row--sidebar" : ""}`}>
      {heroContent.focusAreas.map((area) => (
        <span key={area} className="pill">
          {area}
        </span>
      ))}
    </div>
  );

  return (
    <section id="hero" className="hero-section">
      <div className="hero-orbit" aria-hidden="true" />

      <div className="hero-layout">
        <div className="hero-copy">
          <div className="hero-kicker-row">
            <span className="section-tag">{heroContent.role}</span>
          </div>
          <h1>{heroContent.name}</h1>
          <p className="hero-location-line">Based in {heroContent.location}</p>
          <p className="hero-intro">{heroContent.intro}</p>
          {variant === "home" ? pills : null}
        </div>

        {heroContent.photo && (
          <div className="hero-portrait-panel">
            <div className="hero-photo-wrap">
              <img
                src={heroContent.photo}
                alt={heroContent.name}
                className="hero-photo"
                width="160"
                height="160"
              />
            </div>
            <p className="hero-photo-caption">AI/ML engineer building production-ready generative systems.</p>
            <div className="hero-social-row" aria-label="Contact links">
              {contactContent.socialLinks.map((link) => {
                const Icon = heroSocialIcons[link.label as keyof typeof heroSocialIcons];

                if (!Icon) return null;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hero-social-link"
                    aria-label={link.label}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {variant === "sidebar" ? pills : null}
      </div>
    </section>
  );
}
