import { type MouseEvent } from 'react';
import { closeMobileMenu } from '../store/uiSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { MOBILE_NAV_BREAKPOINT, scrollToSectionId } from '../utils/scroll';

const LINKS = [
  { id: 'home', label: 'Home', icon: 'fas fa-home' },
  { id: 'about', label: 'About', icon: 'fas fa-user' },
  { id: 'portfolio', label: 'Portfolio', icon: 'fas fa-folder-open' },
  { id: 'toolkit', label: 'Toolkit', icon: 'fas fa-toolbox' },
  { id: 'contact', label: 'Contact', icon: 'fas fa-comments' },
] as const;

const SECTION_IDS = LINKS.map((l) => l.id);

export function Header() {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((s) => s.ui.mobileMenuOpen);
  const [activeSection, setActiveSection] = useScrollSpy(SECTION_IDS, 'home');

  const onNavClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSectionId(sectionId);
    setActiveSection(sectionId);
    if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) {
      dispatch(closeMobileMenu());
    }
  };

  return (
    <header
      id="fullHeader"
      className={mobileMenuOpen ? 'headerToggle' : undefined}
    >
      <h2>
        Aleks<span>.</span>
      </h2>
      <nav>
        <ul className="navMenu">
          {LINKS.map(({ id, label, icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : undefined}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={(e) => onNavClick(e, id)}
              >
                <i className={`icon ${icon}`} aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <footer>
        <p>
          Created by Aleks Nikolic, {new Date().getFullYear()}
          <span>.</span>
        </p>
      </footer>
    </header>
  );
}
