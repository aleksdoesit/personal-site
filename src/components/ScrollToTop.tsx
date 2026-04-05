import { useCallback, useEffect, useState } from 'react';

const THRESHOLD_PX = 200;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    const y = document.documentElement.scrollTop || document.body.scrollTop;
    setVisible(y > THRESHOLD_PX);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button type="button" className="scrollToTop" id="scrollToTop" onClick={goTop} aria-label="Scroll to top">
      <i className="fas fa-arrow-up" aria-hidden />
    </button>
  );
}
