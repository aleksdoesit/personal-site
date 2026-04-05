const TOOLS = [
  { src: '/assets/html5.svg', alt: 'HTML5' },
  { src: '/assets/css3.svg', alt: 'CSS3' },
  { src: '/assets/sass.svg', alt: 'Sass' },
  { src: '/assets/javascript.svg', alt: 'JavaScript' },
  { src: '/assets/jquery.svg', alt: 'jQuery' },
  { src: '/assets/react.svg', alt: 'React' },
  { src: '/assets/github.svg', alt: 'GitHub' },
  { src: '/assets/firebase.svg', alt: 'Firebase' },
  { src: '/assets/responsive.svg', alt: 'Responsive design' },
  { src: '/assets/terminal.svg', alt: 'Terminal' },
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
