import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';
import styles from './ProjectCard.module.css';

function ProjectCard({
  title,
  ariaLabel,
  githubUrl,
  githubServerUrl,
  slug,
  image,
  direction = 'left',
  delay = 0,
}) {
  const { ref, isInView } = useInView();
  const directionClass =
    direction === 'right' ? styles.fromRight : styles.fromLeft;

  return (
    <div ref={ref} className={styles.sentinel}>
      <article
        className={`${styles.portfolioBox} ${directionClass} ${
          isInView ? styles.visible : ''
        }`}
        style={{ transitionDelay: `${delay}ms` }}
        aria-label={ariaLabel}
      >
        <h3 className={styles.caption}>{title}</h3>
        <hr className={styles.divider} />
        <div className={styles.links}>
          <Link className={styles.show} to={`/${slug}`}>
            Show more
          </Link>
          {githubServerUrl ? (
            <div className={styles.serverLinks}>
              <a
                className={styles.show}
                target="_blank"
                rel="noopener noreferrer"
                href={githubUrl}
              >
                GitHub-client
              </a>
              <a
                className={styles.show}
                target="_blank"
                rel="noopener noreferrer"
                href={githubServerUrl}
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
            >
              GitHub
            </a>
          )}
        </div>
        <Link to={`/${slug}`} className={styles.imageLink} aria-label={title}>
          <img
            className={styles.portfolioImages}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            loading="lazy"
            decoding="async"
          />
        </Link>
      </article>
    </div>
  );
}

export default ProjectCard;
