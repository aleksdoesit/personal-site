import { PORTFOLIO_ITEMS } from '../data/portfolio';
import { openPortfolioModal } from '../store/uiSlice';
import { useAppDispatch } from '../store/hooks';

export function PortfolioSection() {
  const dispatch = useAppDispatch();

  return (
    <section id="portfolio" className="portfolio sectionContainer">
      <h2 className="sectionTitle" data-aos="fade-up" data-aos-duration="800">
        Recent Work
      </h2>

      <div className="portfolioCarousel">
        {PORTFOLIO_ITEMS.map((project) => {
          const { id, category, title, cardImage, cardImageAlt, aosDelay, modal } = project;
          const hasModal = Boolean(modal);

          return (
            <div
              key={id}
              className="portfolioItem"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay={aosDelay}
            >
              <div
                className="hoverDetails"
                role={hasModal ? 'button' : undefined}
                tabIndex={hasModal ? 0 : undefined}
                onClick={hasModal ? () => dispatch(openPortfolioModal(id)) : undefined}
                onKeyDown={
                  hasModal
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          dispatch(openPortfolioModal(id));
                        }
                      }
                    : undefined
                }
              >
                <span className="portfolioCategory">{category}</span>
                <h3 className="projectTitle">{title}</h3>
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
