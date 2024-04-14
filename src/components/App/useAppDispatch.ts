import { Dispatch } from "react";
import { PokemonList, PokemonData } from "../../api/types";

export enum ActionType {
  SET_POKEMON_LIST_DATA,
  SET_POKEMON_DATA,
  SET_NETWORK_ERROR,
  SET_POKEMONS_TOTAL,
  SET_POKEMONS_TYPES,
  SET_POKEMONS_FETCHED,
  SET_POKEMONS_FULL_DATA_FETCHED
}

export type AppAction =
  | {
      type: ActionType.SET_POKEMON_LIST_DATA;
      payload: PokemonList;
    }
  | {
      type: ActionType.SET_POKEMON_DATA;
      payload: PokemonData;
    }
  | {
      type: ActionType.SET_NETWORK_ERROR;
      payload: boolean;
    }
  | {
      type: ActionType.SET_POKEMONS_TOTAL;
      payload: number;
    }
  | {
      type: ActionType.SET_POKEMONS_FETCHED;
      payload: number;
    }
  | {
      type: ActionType.SET_POKEMONS_FULL_DATA_FETCHED;
      payload: number;
    }
  | {
      type: ActionType.SET_POKEMONS_TYPES;
      payload: string[];
    };

export const useAppDispatch = (dispatch: Dispatch<AppAction>) => {
  const setPokemonListData = (pokemonList: PokemonList) =>
    dispatch({ type: ActionType.SET_POKEMON_LIST_DATA, payload: pokemonList });
  
    const setPokemonData = (pokemonData: PokemonData) =>
    dispatch({ type: ActionType.SET_POKEMON_DATA, payload: pokemonData });

  const setNetworkError = (networkError: boolean) =>
    dispatch({ type: ActionType.SET_NETWORK_ERROR, payload: networkError });

  const setPokemonsTotal = (pokemonsTotal: number) =>
    dispatch({ type: ActionType.SET_POKEMONS_TOTAL, payload: pokemonsTotal });

  const setPokemonsFetched = (pokemonsFetched: number) =>
    dispatch({
      type: ActionType.SET_POKEMONS_FETCHED,
      payload: pokemonsFetched,
    });
  
    const setPokemonsFullDataFetched = (pokemonsFullDataFetched: number) =>
    dispatch({
      type: ActionType.SET_POKEMONS_FULL_DATA_FETCHED,
      payload: pokemonsFullDataFetched,
    });

  const setPokemonsTypes = (pokemonsTypes: string[]) =>
    dispatch({ type: ActionType.SET_POKEMONS_TYPES, payload: pokemonsTypes });

  return {
    setPokemonListData,
    setPokemonData,
    setPokemonsTotal,
    setPokemonsFetched,
    setPokemonsFullDataFetched,
    setPokemonsTypes,
    setNetworkError,
  };
};
