export function AboutSection() {
    return (
        <section id="about" className="about sectionContainer">
            <h2 className="sectionTitle" data-aos="fade-up" data-aos-duration="800">
                About Me
            </h2>

            <div className="aboutContainer">
                <div className="imageWrapper" data-aos="fade-up" data-aos-duration="800">
                    <img className="aboutProfilePic" src="/assets/tempProfilePic.jpg" alt="Aleksandar Nikolic" />
                    <button type="button">
                        <a href="/assets/Aleksandar Nikolic - Senior Software Developer.pdf" target="_blank" rel="noreferrer">
                            Download CV
                        </a>
                    </button>
                </div>
                <div
                    className="aboutMeParagraph chatBox"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                >
                    <div>
                        <p>
                            I&apos;m Aleksandar Nikolic, a full-stack software developer based in Toronto. For more than five
                            years I have worked in a consultancy capacity, delivering end-to-end solutions across back-end
                            services, databases, and front-end applications for large, regulated environments.
                        </p>
                        <p>
                            Recent engagements include work for Bell Media on streaming and metadata platforms, and for the Royal
                            Canadian Mounted Police on national digital services, alongside other federal and provincial programs.
                            I care about clear architecture, reliable data flows, accessible UIs, and shipping software that holds up
                            under real-world scale.
                        </p>
                        <p>
                            Outside of client work I like tinkering on passion projects, getting lost in books, movies, and games,
                            and spending time outdoors hiking, camping, and exploring.
                        </p>
                        <p>
                            I always love to hear what people are building - if you have an idea or a product in mind, get in touch and let's explore how I can help.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
