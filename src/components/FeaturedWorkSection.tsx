import type { ProjectCardItem } from '../data/projectTypes';
import { openPortfolioModal } from '../store/uiSlice';
import { useAppDispatch } from '../store/hooks';

type Props = {
  id: string;
  title: string;
  /** Optional line under the section heading */
  subtitle?: string;
  items: ProjectCardItem[];
};

export function FeaturedWorkSection({ id, title, subtitle, items }: Props) {
  const dispatch = useAppDispatch();

  return (
    <section id={id} className="portfolio sectionContainer">
      <h2 className="sectionTitle" data-aos="fade-up" data-aos-duration="800">
        {title}
      </h2>
      {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}

      <div className="portfolioCarousel">
        {items.map((project) => {
          const { category, title: projectTitle, cardImage, cardImageAlt, aosDelay, modal } = project;
          const hasModal = Boolean(modal);

          return (
            <div
              key={project.id}
              className="portfolioItem"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay={aosDelay}
            >
              <div
                className="hoverDetails"
                role={hasModal ? 'button' : undefined}
                tabIndex={hasModal ? 0 : undefined}
                onClick={hasModal ? () => dispatch(openPortfolioModal(project.id)) : undefined}
                onKeyDown={
                  hasModal
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          dispatch(openPortfolioModal(project.id));
                        }
                      }
                    : undefined
                }
              >
                <span className="portfolioCategory">{category}</span>
                <h3 className="projectTitle">{projectTitle}</h3>
                <span className="moreInfo">
                  <i className={`fas ${hasModal ? 'fa-link' : 'fa-expand'}`} aria-hidden />
                </span>
              </div>
              <div className="portfolioImage">
                <img src={cardImage} alt={cardImageAlt} />
                <div className="mask" aria-hidden />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
