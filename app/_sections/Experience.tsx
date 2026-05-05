import { experienceContent } from "@/config/experience";

export default function Experience() {
  const items = experienceContent.sections.flatMap((s) => s.items);

  return (
    <section id="experience">
      <div className="section-heading">
        <span className="section-tag">Work History</span>
        <h2>Experience</h2>
      </div>
      <div className="exp-list">
        {items.map((item) => (
          <a
            key={`${item.company}-${item.role}`}
            href={item.companyHref}
            className="exp-card"
            target="_blank"
            rel="noreferrer"
          >
            <div className="exp-logo-wrap">
              <img
                src={item.logo}
                alt={item.company}
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <div className="exp-body">
              <div className="exp-header">
                <span className="exp-role">{item.role}</span>
                <span className="exp-arrow">↗</span>
              </div>
              <span className="exp-company">{item.company}</span>
              <div className="exp-tags">
                <span className="exp-tag">{item.location}</span>
                <span className="exp-tag exp-tag--time">{item.duration}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
