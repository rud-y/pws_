import styles from './SkipLink.module.css';

function SkipLink() {
  return (
    <a className={styles.skipLink} href="#main-content">
      Skip to main content
    </a>
  );
}

export default SkipLink;
