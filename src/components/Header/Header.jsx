import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';
import styles from './Header.module.css';

const NAV_LINKS = [
  { to: '/#about-me', label: 'About', description: 'About Rudy Zachar' },
  { to: '/#portfolio', label: 'Portfolio', description: 'Portfolio projects' },
  { to: '/#contact', label: 'Contact', description: 'Contact information' },
];

function Header() {
  const [showStickyName, setShowStickyName] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { ref: navRef, isInView } = useInView({
    threshold: 0,
    rootMargin: '0px',
  });

  useEffect(() => {
    let catchingUp = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollablePart =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage =
        scrollablePart > 0
          ? Math.round((scrollTop / scrollablePart) * 100)
          : 0;

      setScrollProgress(percentage);
      setShowStickyName(scrollTop > 180);
      catchingUp = false;
    };

    const onScroll = () => {
      if (!catchingUp) {
        requestAnimationFrame(updateProgress);
        catchingUp = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={styles.navWrapper}>
      <Link
        className={`${styles.stickyName} ${showStickyName ? '' : styles.hidden}`}
        to="/"
        aria-label="Rudy Zachar home"
        tabIndex={showStickyName ? 0 : -1}
        aria-hidden={!showStickyName}
      >
        RUDY
      </Link>
      <nav
        ref={navRef}
        className={styles.nav}
        aria-label="Primary"
      >
        {NAV_LINKS.map((link, index) => (
          <NavLink
            key={link.to}
            className={`${styles.navLink} ${styles.navLinkMotion} ${
              isInView ? styles.navLinkVisible : ''
            }`}
            style={{ transitionDelay: `${120 + index * 90}ms` }}
            to={link.to}
            aria-label={link.description}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className={styles.progressBarPlaceholder} aria-hidden="true">
        <div
          className={styles.progressBar}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}

export default Header;
