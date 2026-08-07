import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        &#169; <span>{currentYear}</span> Rudolf Zachar
      </p>
    </footer>
  );
}

export default Footer;
