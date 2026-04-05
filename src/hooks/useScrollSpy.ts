import { useCallback, useEffect, useState } from 'react';

/**
 * Scroll-spy: highlights the nav item for the section whose top has passed a marker
 * below the top of the viewport (similar to Bootstrap scrollspy).
 */
export function useScrollSpy(sectionIds: readonly string[], initialId = 'home') {
  const [activeId, setActiveId] = useState(initialId);

  const resolveActiveId = useCallback((): string => {
    const ids = sectionIds;
    const y = window.scrollY;
    const doc = document.documentElement;
    const maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight);

    if (y < 72) {
      return ids[0];
    }
    if (maxScroll > 0 && y >= maxScroll - 12) {
      return ids[ids.length - 1];
    }

    const marker = y + window.innerHeight * 0.22;
    let current = ids[0];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (top <= marker) {
        current = id;
      }
    }
    return current;
  }, [sectionIds]);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const next = resolveActiveId();
      setActiveId((prev) => (prev === next ? prev : next));
    };

    const onScrollOrResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [resolveActiveId]);

  return [activeId, setActiveId] as const;
}
