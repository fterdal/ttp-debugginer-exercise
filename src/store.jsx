import { create } from "zustand";

const useStore = create((set, get) => ({
  cookies: 0,
  clickMultiplier: 1,
  autoClickers: 0,
  superAutoClickers: 0,

  // Add cookies (used by both manual clicks and auto-clickers)
  addCookies: (amount) =>
    set((state) => ({
      cookies: state.cookies + amount * state.clickMultiplier,
    })),

  // Purchase upgrades
  purchaseAutoClicker: () => {
    const { cookies } = get();
    if (cookies >= 10) {
      set((state) => ({
        cookies: state.cookies - 10,
        autoClickers: state.autoClickers + 1,
      }));
      return true;
    }
    return false;
  },

  purchaseClickEnhancer: () => {
    const { cookies } = get();
    if (cookies >= 50) {
      set((state) => ({
        cookies: state.cookies - 50,
        clickMultiplier: state.clickMultiplier * 2,
      }));
      return true;
    }
    return false;
  },

  purchaseSuperAutoClicker: () => {
    const { cookies } = get();
    if (cookies >= 100) {
      set((state) => ({
        cookies: state.cookies - 100,
        superAutoClickers: state.superAutoClickers + 1,
      }));
      return true;
    }
    return false;
  },
}));

export default useStore;
