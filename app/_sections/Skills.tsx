"use client";

import { skillCategories } from "@/config/skills";

const categoryColors = [
  { bg: "rgba(18, 31, 60, 0.92)", accent: "#20f6ff", shadow: "rgba(32,246,255,0.18)" },
  { bg: "rgba(22, 18, 58, 0.92)", accent: "#ff46d6", shadow: "rgba(255,70,214,0.16)" },
  { bg: "rgba(18, 36, 52, 0.92)", accent: "#b7ff3c", shadow: "rgba(183,255,60,0.14)" },
  { bg: "rgba(22, 24, 64, 0.92)", accent: "#7f8cff", shadow: "rgba(127,140,255,0.16)" },
  { bg: "rgba(16, 33, 56, 0.92)", accent: "#24c8ff", shadow: "rgba(36,200,255,0.16)" },
  { bg: "rgba(28, 18, 54, 0.92)", accent: "#ff7af6", shadow: "rgba(255,122,246,0.15)" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, i) => {
          const color = categoryColors[i % categoryColors.length];

          return (
            <details
              key={category.title}
              className="skill-card"
              style={{
                "--card-bg": color.bg,
                "--card-accent": color.accent,
                "--card-shadow": color.shadow,
              } as React.CSSProperties}
            >
              <summary className="skill-card-toggle">
                <h3 className="skill-card-title">
                  <span className="skill-toggle-left">
                    <span className="skill-color-dot" />
                    {category.title}
                  </span>
                </h3>
                <span className="skill-toggle-right">
                  <span className="skill-count-badge">{category.items.length}</span>
                  <span className="skill-chevron">›</span>
                </span>
              </summary>
              <div className="skill-logo-grid">
                {category.items.map((item) => (
                  <div key={item.name} className="skill-logo-item">
                    <div className="skill-logo-icon">
                      <img
                        src={item.logo}
                        alt={item.name}
                        loading="lazy"
                        width="24"
                        height="24"
                        style={{
                          transform: `translateY(${item.logoTranslateY ?? 0}px) scale(${item.logoScale ?? 1})`,
                        }}
                      />
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
