import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <p>
        <span aria-hidden="true">&#169; </span>
        <span className="visually-hidden">Copyright </span>
        <span>{currentYear}</span> Rudolf Zachar
      </p>
    </footer>
  );
}

export default Footer;
