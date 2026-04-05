import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type UiState = {
  mobileMenuOpen: boolean;
  activePortfolioId: string | null;
};

const initialState: UiState = {
  mobileMenuOpen: false,
  activePortfolioId: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    openPortfolioModal: (state, action: PayloadAction<string>) => {
      state.activePortfolioId = action.payload;
    },
    closePortfolioModal: (state) => {
      state.activePortfolioId = null;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, openPortfolioModal, closePortfolioModal } =
  uiSlice.actions;

export default uiSlice.reducer;
