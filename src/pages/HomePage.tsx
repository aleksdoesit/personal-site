import AOS from 'aos';
import { useEffect } from 'react';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { Header } from '../components/Header';
import { HomeSection } from '../components/HomeSection';
import { MobileHeader } from '../components/MobileHeader';
import { PortfolioModal } from '../components/PortfolioModal';
import { PortfolioSection } from '../components/PortfolioSection';
import { ScrollToTop } from '../components/ScrollToTop';
import { ToolkitSection } from '../components/ToolkitSection';
import { closeMobileMenu } from '../store/uiSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { MOBILE_NAV_BREAKPOINT } from '../utils/scroll';

let aosInitialized = false;

export function HomePage() {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((s) => s.ui.mobileMenuOpen);

  useEffect(() => {
    if (aosInitialized) return;
    aosInitialized = true;
    AOS.init();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
        dispatch(closeMobileMenu());
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={`wrapper${mobileMenuOpen ? ' toggleBody' : ''}`}>
        <MobileHeader />
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ToolkitSection />
        <ContactSection />
        <ScrollToTop />
      </main>
      <PortfolioModal />
    </>
  );
}
