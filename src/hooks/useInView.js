import { useEffect, useRef, useState } from 'react';

/**
 * Keep transforms on a child — IO uses the transformed box, which was
 * preventing portfolio cards from ever reaching the intersection threshold.
 */
export function useInView({
  threshold = 0,
  rootMargin = '0px 0px -12% 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const motionQuery = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    );
    if (
      motionQuery?.matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      setIsInView(true);
      return undefined;
    }

    let active = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || !active) return;
        setIsInView(true);
        if (once) observer.disconnect();
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return { ref, isInView };
}
