import { useEffect, useReducer, useRef } from "react";
import { appReducer } from "./appReducer";
import { useAppDispatch } from "./useAppDispatch";

import { initState, persistState } from "./utils";
import type { AppState } from "./appReducer";
import { PokemonData, PokemonList } from "../../api/types";

export const initialAppState: AppState = {
  pokemonList: [] as PokemonList,
  pokemonData: [] as PokemonData,
};

export const usePrevState = (state: AppState) => {
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  });
  return stateRef.current;
};

export const useAppReducer = () => {
  const [state, dispatch] = useReducer(appReducer, initialAppState, initState);
  const prevState = usePrevState(state);
  const appDispatch = useAppDispatch(dispatch);

  useEffect(() => {
    persistState(state, prevState);
  }, [state]);

  return { appState: state, appDispatch };
};
