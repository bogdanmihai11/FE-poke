import React, { useContext, createContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useAppReducer } from './useAppReducer';

type AppContextType = ReturnType<typeof useAppReducer>;

type AppContextProviderProps = {
  children?: ReactNode;
};

export const AppContext = createContext({} as AppContextType);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const { appState, appDispatch } = useAppReducer();

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};
