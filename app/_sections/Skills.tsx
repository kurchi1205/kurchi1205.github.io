"use client";

import { useState } from "react";
import { skillCategories } from "@/config/skills";

const categoryColors = [
  { bg: "#fff0e8", accent: "#e05a20", shadow: "rgba(224,90,32,0.16)" },
  { bg: "#fff8e6", accent: "#c07a10", shadow: "rgba(192,122,16,0.15)" },
  { bg: "#ffece8", accent: "#d03820", shadow: "rgba(208,56,32,0.15)" },
  { bg: "#fff5e0", accent: "#b08000", shadow: "rgba(176,128,0,0.14)" },
  { bg: "#fff2e8", accent: "#c05618", shadow: "rgba(192,86,24,0.15)" },
  { bg: "#ffe8e0", accent: "#c04030", shadow: "rgba(192,64,48,0.15)" },
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, i) => {
          const isOpen = openIndex === i;
          const color = categoryColors[i % categoryColors.length];
          return (
            <article
              key={category.title}
              className={`skill-card${isOpen ? " is-open" : ""}`}
              style={{
                "--card-bg": color.bg,
                "--card-accent": color.accent,
                "--card-shadow": color.shadow,
              } as React.CSSProperties}
            >
              <h3 className="skill-card-title">
                <button
                  className="skill-card-toggle"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="skill-toggle-left">
                    <span className="skill-color-dot" />
                    {category.title}
                  </span>
                  <span className="skill-toggle-right">
                    <span className="skill-count-badge">{category.items.length}</span>
                    <span className={`skill-chevron${isOpen ? " is-open" : ""}`}>›</span>
                  </span>
                </button>
              </h3>
              {isOpen && (
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
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
