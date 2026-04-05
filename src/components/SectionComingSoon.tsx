type Props = {
  id: string;
  title: string;
  /** Main banner line */
  message?: string;
};

export function SectionComingSoon({
  id,
  title,
  message = 'Under construction — content coming soon.',
}: Props) {
  return (
    <section id={id} className="sectionContainer sectionComingSoon">
      <h2 className="sectionTitle" data-aos="fade-up" data-aos-duration="800">
        {title}
      </h2>
      <div
        className="comingSoonBanner"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="150"
        role="status"
      >
        <i className="fas fa-hard-hat" aria-hidden />
        <p>{message}</p>
      </div>
    </section>
  );
}
