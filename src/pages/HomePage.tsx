import AOS from 'aos';
import { useEffect } from 'react';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { Header } from '../components/Header';
import { HomeSection } from '../components/HomeSection';
import { MobileHeader } from '../components/MobileHeader';
// import { FeaturedWorkSection } from '../components/FeaturedWorkSection';
import { PortfolioModal } from '../components/PortfolioModal';
import { ScrollToTop } from '../components/ScrollToTop';
import { ProfessionalWorkSection } from '../components/ProfessionalWorkSection';
import { SectionComingSoon } from '../components/SectionComingSoon';
import { ToolkitSection } from '../components/ToolkitSection';
// import { PERSONAL_PROJECT_ITEMS } from '../data/personalProjects';
// import { PROFESSIONAL_ITEMS } from '../data/professionalWork';
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

                <ProfessionalWorkSection />

                <SectionComingSoon
                    id="projects"
                    title="Projects"
                    message="Coming soon - personal builds and demos will appear here."
                />

                {/*
        Restore project grids when ready (uncomment imports above):
        <FeaturedWorkSection
          id="professional"
          title="Professional Work"
          subtitle="Consulting and client delivery - representative engagements (many under NDA)."
          items={PROFESSIONAL_ITEMS}
        />
        <FeaturedWorkSection
          id="projects"
          title="Projects"
          subtitle="Personal builds, experiments, and public demos."
          items={PERSONAL_PROJECT_ITEMS}
        />
        */}

                <ToolkitSection />
                <ContactSection />
                <ScrollToTop />
            </main>
            <PortfolioModal />
        </>
    );
}
