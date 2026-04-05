export function AboutSection() {
    return (
        <section id="about" className="about sectionContainer">
            <h2 className="sectionTitle" data-aos="fade-up" data-aos-duration="800">
                About Me
            </h2>

            <div className="aboutContainer">
                <div className="imageWrapper" data-aos="fade-up" data-aos-duration="800">
                    <img className="aboutProfilePic" src="/assets/tempProfilePic.jpg" alt="Me, obviously" />
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
                            Hi I&apos;m Aleks! A web developer based out of Toronto, Canada. I have a passion for writing DRY and
                            functional code, perfecting responsiveness, and designing accessible web-sites and web-apps.
                        </p>
                        <p>
                            My path to web development started through self-teaching before completing an extensive and rigirous
                            bootcamp through Juno College.
                        </p>
                    </div>
                    <div>
                        <p>
                            Before a life as a programmer I attended and completed undergraduate degrees from York University and
                            Humber College.
                        </p>
                        <p>
                            When not coding you can find me drinking copious amounts of coffee, geeking out over movies and games,
                            or relaxing with a warm book.
                        </p>
                        <div className="interests">
                            <i className="fas fa-coffee coffee" aria-hidden />
                            <i className="fas fa-tv tv" aria-hidden />
                            <i className="fas fa-gamepad gamepad" aria-hidden />
                            <i className="fas fa-book book" aria-hidden />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
