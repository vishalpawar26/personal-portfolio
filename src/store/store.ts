import { create } from "zustand";

interface StoreState {
  isMenuOpen: boolean;
  isContactFormOpen: boolean;
  isAboutMeCardOpen: boolean;
  isProjectCardOpen: boolean;
  setIsMenuOpen: () => void;
  setIsContactFormOpen: () => void;
  setIsAboutMeCardOpen: () => void;
  setIsProjectCardOpen: () => void;
}

const useStore = create<StoreState>((set) => ({
  isMenuOpen: false,
  isContactFormOpen: false,
  isAboutMeCardOpen: false,
  isProjectCardOpen: false,

  setIsMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setIsContactFormOpen: () =>
    set((state) => ({ isContactFormOpen: !state.isContactFormOpen })),
  setIsAboutMeCardOpen: () =>
    set((state) => ({ isAboutMeCardOpen: !state.isAboutMeCardOpen })),
  setIsProjectCardOpen: () =>
    set((state) => ({
      isProjectCardOpen: !state.isProjectCardOpen,
    })),
}));

export default useStore;
