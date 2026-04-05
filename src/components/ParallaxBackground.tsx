import Parallax from 'parallax-js';
import { useEffect, useRef } from 'react';
import { useAppSelector } from '../store/hooks';

const ICONS: { className: string; depth: string }[] = [
  { className: 'i1 fas fa-coffee', depth: '0.2' },
  { className: 'i2 fab fa-css3', depth: '0.5' },
  { className: 'i3 fas fa-desktop', depth: '0.4' },
  { className: 'i4 fab fa-html5', depth: '0.5' },
  { className: 'i5 fab fa-js-square', depth: '0.2' },
  { className: 'i6 fab fa-github', depth: '0.1' },
  { className: 'i7 fas fa-laptop', depth: '0.3' },
  { className: 'i8 fas fa-mobile-alt', depth: '0.4' },
  { className: 'i9 fab fa-react', depth: '0.2' },
  { className: 'i10 fas fa-code-branch', depth: '0.2' },
  { className: 'i11 fas fa-code', depth: '0.4' },
  { className: 'i12 fab fa-sass', depth: '0.1' },
];

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const mobileMenuOpen = useAppSelector((s) => s.ui.mobileMenuOpen);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const instance = new Parallax(el);
    return () => instance.destroy();
  }, []);

  return (
    <div
      ref={ref}
      className={`parallaxBackground${mobileMenuOpen ? ' toggleBody' : ''}`}
      id="parallaxScene"
    >
      {ICONS.map(({ className, depth }) => (
        <i key={className} className={className} data-depth={depth} aria-hidden />
      ))}
    </div>
  );
}
