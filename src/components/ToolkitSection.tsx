const TOOLS = [
    { src: '/assets/spring.svg', alt: 'Spring (Spring Framework / Spring Boot)' },
    { src: '/assets/react.svg', alt: 'React' },
    { src: '/assets/sass.svg', alt: 'Sass' },
    { src: '/assets/typescript.svg', alt: 'TypeScript' },
    { src: '/assets/jquery.svg', alt: 'jQuery' },
    { src: '/assets/jest.svg', alt: 'Jest' },
    { src: '/assets/junit.png', alt: 'JUnit' },
    { src: '/assets/mpp.png', alt: 'Microsoft Power Platform' },
    { src: '/assets/nodejs.svg', alt: 'Node.js' },
    { src: '/assets/sql.svg', alt: 'SQL' },
    { src: '/assets/docker.svg', alt: 'Docker' },
    { src: '/assets/github.svg', alt: 'Git / GitHub' },
    { src: '/assets/aws.svg', alt: 'Amazon Web Services' },
    { src: '/assets/responsive.svg', alt: 'Responsive design' },
    { src: '/assets/accessibility.svg', alt: 'Accessibility (WCAG / AODA)' },
] as const;

export function ToolkitSection() {
    return (
        <section id="toolkit" className="toolkit sectionContainer">
            <h2 className="sectionTitle" data-aos="fade-up" data-aos-duration="800">
                My Toolkit
            </h2>

            <div className="toolkitWrapper" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                {TOOLS.map(({ src, alt }) => (
                    <div key={src}>
                        <img className="toolkitImage" src={src} alt={alt} />
                    </div>
                ))}
            </div>
        </section>
    );
}
