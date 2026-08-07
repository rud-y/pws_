import { useInView } from '../../hooks/useInView';
import styles from './Reveal.module.css';

const DIRECTION_CLASS = {
  left: styles.fromLeft,
  right: styles.fromRight,
  up: styles.fromUp,
};

function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Component = 'div',
  ...rest
}) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className={styles.sentinel}>
      <Component
        className={[
          styles.motion,
          DIRECTION_CLASS[direction] || styles.fromUp,
          isInView ? styles.visible : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ transitionDelay: `${delay}ms` }}
        {...rest}
      >
        {children}
      </Component>
    </div>
  );
}

export default Reveal;
