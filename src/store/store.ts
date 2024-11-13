import { create } from "zustand";

interface StoreState {
  isMenuOpen: boolean;
  isContactFormOpen: boolean;
  isAboutMeCardOpen: boolean;
  setIsMenuOpen: () => void;
  setIsContactFormOpen: () => void;
  setIsAboutMeCardOpen: () => void;
}

const useStore = create<StoreState>((set) => ({
  isMenuOpen: false,
  isContactFormOpen: false,
  isAboutMeCardOpen: false,
  setIsMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setIsContactFormOpen: () =>
    set((state) => ({ isContactFormOpen: !state.isContactFormOpen })),
  setIsAboutMeCardOpen: () =>
    set((state) => ({ isAboutMeCardOpen: !state.isAboutMeCardOpen })),
}));

export default useStore;
