import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';
import styles from './ProjectCard.module.css';

function ProjectCard({
  title,
  githubUrl,
  githubServerUrl,
  slug,
  image,
  index = 0,
  total = 1,
  direction = 'left',
  delay = 0,
}) {
  const { ref, isInView } = useInView();
  const directionClass =
    direction === 'right' ? styles.fromRight : styles.fromLeft;

  const titleId = `${slug}-title`;
  const metaId = `${slug}-meta`;
  const position = index + 1;

  return (
    <div ref={ref} className={styles.sentinel}>
      <article
        className={`${styles.portfolioBox} ${directionClass} ${
          isInView ? styles.visible : ''
        }`}
        style={{ transitionDelay: `${delay}ms` }}
        tabIndex={0}
        aria-labelledby={titleId}
        aria-describedby={metaId}
      >
        <h3 className={styles.caption} id={titleId}>
          {title}
        </h3>
        <p className="visually-hidden" id={metaId}>
          Project {position} of {total}.
        </p>
        <hr className={styles.divider} aria-hidden="true" />
        <div className={styles.links}>
          <Link
            className={styles.show}
            to={`/${slug}`}
            aria-label={`View details for ${title}, project ${position} of ${total}`}
          >
            Show more
            <span className="visually-hidden"> about {title}</span>
          </Link>
          {githubServerUrl ? (
            <div className={styles.serverLinks}>
              <a
                className={styles.show}
                target="_blank"
                rel="noopener noreferrer"
                href={githubUrl}
                aria-label={`${title} GitHub client repository (opens in a new tab)`}
              >
                GitHub-client
              </a>
              <a
                className={styles.show}
                target="_blank"
                rel="noopener noreferrer"
                href={githubServerUrl}
                aria-label={`${title} GitHub server repository (opens in a new tab)`}
              >
                GitHub-server
              </a>
            </div>
          ) : (
            <a
              className={styles.show}
              target="_blank"
              rel="noopener noreferrer"
              href={githubUrl}
              aria-label={`${title} on GitHub (opens in a new tab)`}
            >
              GitHub
            </a>
          )}
        </div>
        <Link
          to={`/${slug}`}
          className={styles.imageLink}
          tabIndex={-1}
          aria-hidden="true"
        >
          <img
            className={styles.portfolioImages}
            src={image.src}
            width={image.width}
            height={image.height}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </Link>
      </article>
    </div>
  );
}

export default ProjectCard;
