import { toggleMobileMenu } from '../store/uiSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export function MobileHeader() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.ui.mobileMenuOpen);

  return (
    <div className="mobileHeader">
      <div>
        <button
          type="button"
          id="toggleMenu"
          onClick={() => dispatch(toggleMobileMenu())}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <i className="fas fa-hamburger" aria-hidden />
        </button>
      </div>
      <h2>
        Aleks<span>.</span>
      </h2>
    </div>
  );
}
