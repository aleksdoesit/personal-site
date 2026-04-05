import AOS from 'aos';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PORTFOLIO_ITEMS } from '../data/portfolio';
import { closePortfolioModal } from '../store/uiSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export function PortfolioModal() {
  const dispatch = useAppDispatch();
  const activeId = useAppSelector((s) => s.ui.activePortfolioId);

  const item = PORTFOLIO_ITEMS.find((p) => p.id === activeId);
  const modal = item?.modal;

  useEffect(() => {
    if (!activeId) {
      AOS.refresh();
    }
  }, [activeId]);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch(closePortfolioModal());
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal, dispatch]);

  if (!modal || !item) return null;

  const close = () => dispatch(closePortfolioModal());

  const node = (
    <div className="portfolioDiv" id="portfolioDiv" role="dialog" aria-modal="true" aria-labelledby="portfolio-modal-title">
      <div
        className="portfolioMask"
        id="portfolioMask"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button type="button" id="closePortfolioItem" className="closePortfolioItem" onClick={close}>
          <i className="fas fa-times" aria-hidden />
        </button>
      </div>
      <div className="popupContainer">
        <img className="portfolioImage1" src={modal.image} alt={modal.imageAlt} />
        <h3 id="portfolio-modal-title">{modal.heading}</h3>
        <div>
          {modal.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        <div className="linkWrapper">
          <button type="button">
            <a href={modal.visitUrl} target="_blank" rel="noreferrer">
              Visit Site
            </a>
          </button>
          <button type="button">
            <a href={modal.repoUrl} target="_blank" rel="noreferrer">
              Git Hub
            </a>
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(node, document.body);
}
