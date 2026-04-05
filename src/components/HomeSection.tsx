import { type MouseEvent } from 'react';
import { closeMobileMenu } from '../store/uiSlice';
import { useAppDispatch } from '../store/hooks';
import { MOBILE_NAV_BREAKPOINT, scrollToSectionId } from '../utils/scroll';
import { ParallaxBackground } from './ParallaxBackground';
import { RotatingText } from './RotatingText';

export function HomeSection() {
  const dispatch = useAppDispatch();

  const hireMe = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToSectionId('contact');
    if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) {
      dispatch(closeMobileMenu());
    }
  };

  const scrollAbout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSectionId('about');
  };

  return (
    <section id="home" className="home">
      <div className="intro">
        <img src="/assets/profile.png" alt="An avatar of me, Aleks!" />

        <h1>Aleks Nikolic</h1>
        <span>
          I&apos;m a <RotatingText />
        </span>

        <ul className="socialNav">
          <li>
            <a href="https://www.linkedin.com/in/aleksandar-nikolic-24a03644/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in" aria-hidden />
            </a>
          </li>
          <li>
            <a href="https://github.com/aleksdoesit" target="_blank" rel="noreferrer">
              <i className="fab fa-github" aria-hidden />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/http_aleks" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter" aria-hidden />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@nikolic.aleks90" target="_blank" rel="noreferrer">
              <i className="fab fa-medium-m" aria-hidden />
            </a>
          </li>
        </ul>

        <button type="button" className="contactMe" onClick={hireMe}>
          Hire Me
        </button>
      </div>

      <div className="scrollArrow">
        <p>Scroll Down</p>
        <a href="#about" onClick={scrollAbout}>
          <i
            className="animate__animated animate__slideOutDown animate__infinite animate__slow fas fa-sort-down"
            aria-hidden
          />
        </a>
      </div>

      <ParallaxBackground />
    </section>
  );
}
