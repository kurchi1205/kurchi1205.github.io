import { featuredReposContent } from "@/config/featured-repos";

export default function Projects() {
  return (
    <section id="projects">
      <h2>{featuredReposContent.title}</h2>
      <p>{featuredReposContent.description}</p>
      {featuredReposContent.repos.map((repo) => (
        <article key={repo.name}>
          <h3>{repo.name}</h3>
          <p>{repo.summary}</p>
          <p>
            <a href={repo.href} target="_blank" rel="noreferrer">
              View repository
            </a>
            {" · "}
            {repo.status}
          </p>
        </article>
      ))}
    </section>
  );
}
