import { writingContent } from "@/config/site";

export default function Writing() {
  return (
    <section id="writing">
      <h2>{writingContent.title}</h2>
      <p>{writingContent.description}</p>
      {writingContent.items.map((item) => (
        <article key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <p>
            <a href={item.href} target="_blank" rel="noreferrer">
              Read more
            </a>
            {" · "}
            {item.publishedOn}
          </p>
        </article>
      ))}
    </section>
  );
}
