import type { AppState } from './appReducer';

export const STORAGE_KEY = 'pokemon-app';

export const initState = (initialState: AppState) => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const storedState = JSON.parse(storedData);
      return storedState as AppState;
    }
  } catch {
    //do nothing
  }
  return initialState;
};

export const persistState = (state: AppState, prevState: AppState) => {
  if (JSON.stringify(state) !== JSON.stringify(prevState)) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      //do nothing
    }
  }
};
