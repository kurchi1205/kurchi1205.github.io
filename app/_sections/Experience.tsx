import { experienceContent } from "@/config/experience";

export default function Experience() {
  return (
    <section id="experience">
      <h2>{experienceContent.title}</h2>
      <p>{experienceContent.description}</p>
      {experienceContent.sections.map((section) => (
        <article key={section.title}>
          <h3>{section.title}</h3>
          {section.items.map((item) => (
            <div key={`${item.company}-${item.role}-${item.duration}`}>
              <h4>{item.role}</h4>
              <p>
                <a href={item.companyHref} target="_blank" rel="noreferrer">
                  {item.company}
                </a>
                {" · "}
                {item.location}
                {" · "}
                {item.duration}
              </p>
              <p>{item.description}</p>
            </div>
          ))}
        </article>
      ))}
    </section>
  );
}
