import styles from './Contact.module.css';

const CONTACT_LINKS = [
  {
    href: 'mailto:rudolf.zachar@gmail.com',
    label: 'Email Rudolf Zachar',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2v.2l9 5.4 9-5.4V7H3zm18 2.8-9 5.4-9-5.4V18h18V9.8z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/rudolf-zachar/',
    label: 'Rudolf Zachar on LinkedIn (opens in a new tab)',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.5 8.5A2 2 0 1 1 6.5 4.5a2 2 0 0 1 0 4zM4.75 20V9.75h3.5V20h-3.5zM10.5 20V9.75h3.35v1.4h.05c.47-.9 1.6-1.85 3.3-1.85 3.53 0 4.18 2.32 4.18 5.34V20h-3.5v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V20h-3.52z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/rud-y',
    label: 'Rudolf Zachar on GitHub (opens in a new tab)',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.1c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    href: 'https://twitter.com/rudolf_zachar',
    label: 'Rudolf Zachar on Twitter (opens in a new tab)',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M18.9 2H22l-6.8 7.78L23.3 22h-6.55l-5.13-6.7L5.7 22H2.58l7.28-8.32L.7 2h6.7l4.64 6.14L18.9 2zm-1.15 18h1.82L6.37 3.9H4.42L17.75 20z" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section
      className={`section ${styles.contact}`}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className={styles.content}>
        <h2 className={styles.heading} id="contact-heading">
          Contact
        </h2>
        <p className={styles.copy} id="contact-summary">
          Open to conversations about software, collaboration, and new
          challenges.
        </p>
        <ul className={styles.links} aria-labelledby="contact-heading">
          {CONTACT_LINKS.map((link) => (
            <li key={link.href}>
              <a
                className={styles.link}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
