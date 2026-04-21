import { contactContent } from "@/config/site";

const contactIcons: Record<string, JSX.Element> = {
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7c.5.1.68-.22.68-.49c0-.24-.01-1.03-.01-1.87c-2.78.62-3.37-1.2-3.37-1.2c-.46-1.18-1.11-1.5-1.11-1.5c-.91-.64.07-.63.07-.63c1 .08 1.53 1.05 1.53 1.05c.89 1.56 2.34 1.11 2.91.85c.09-.66.35-1.11.63-1.37c-2.22-.26-4.56-1.14-4.56-5.08c0-1.12.39-2.03 1.03-2.75c-.1-.26-.45-1.31.1-2.73c0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.86c.85 0 1.71.12 2.51.35c1.91-1.33 2.75-1.05 2.75-1.05c.55 1.42.2 2.47.1 2.73c.64.72 1.03 1.63 1.03 2.75c0 3.95-2.34 4.81-4.57 5.07c.36.32.68.94.68 1.9c0 1.38-.01 2.49-.01 2.83c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.94 8.5H3.56V19.5h3.38Zm.22-3.4a1.96 1.96 0 1 0-3.92 0a1.96 1.96 0 0 0 3.92 0m5.18 3.4H9.02V19.5h3.32v-5.78c0-1.52.29-2.99 2.13-2.99c1.81 0 1.83 1.76 1.83 3.09v5.68h3.33v-6.36c0-3.13-.67-5.54-4.34-5.54c-1.76 0-2.94.98-3.42 1.92h-.05z"
      />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25Zm1.75-.25a.25.25 0 0 0-.18.07L12 12.5l7.43-5.93a.25.25 0 0 0-.18-.07Zm14.75 1.35l-6.57 5.24a1.5 1.5 0 0 1-1.86 0L4.5 7.85v9.4c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25Z"
      />
    </svg>
  ),
};

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <h2>Contact Me</h2>
      </div>
      <p className="contact-copy">{contactContent.description}</p>
      <div className="contact-links">
        {contactContent.socialLinks.map((link) => (
          <a
            key={link.label}
            className="contact-link-card"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <span className="contact-link-icon">{contactIcons[link.label]}</span>
            <span className="contact-link-label">{link.label === "Email" ? "Gmail" : link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
