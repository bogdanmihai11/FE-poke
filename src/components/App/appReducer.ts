import { ActionType } from "./useAppDispatch";

import type { PokemonData, PokemonList } from "../../api/types";
import type { AppAction } from "./useAppDispatch";

export type AppState = {
  pokemonList: PokemonList;
  pokemonData: PokemonData;
  pokemonsTotal?: number;
  pokemonsFetched?: number | 0;
  pokemonsFullDataFetched?: number | 0;
  pokemonsTypes?: string[];
  networkError?: boolean;
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.SET_POKEMON_LIST_DATA: {
      return { ...state, pokemonList: action.payload };
    }

    case ActionType.SET_POKEMON_DATA: {
      return { ...state, pokemonData: action.payload };
    }

    case ActionType.SET_NETWORK_ERROR: {
      return { ...state, networkError: action.payload };
    }

    case ActionType.SET_POKEMONS_TOTAL: {
      return { ...state, pokemonsTotal: action.payload };
    }

    case ActionType.SET_POKEMONS_FETCHED: {
      return { ...state, pokemonsFetched: action.payload };
    }

    case ActionType.SET_POKEMONS_FULL_DATA_FETCHED: {
      return { ...state, pokemonsFullDataFetched: action.payload };
    }

    case ActionType.SET_POKEMONS_TYPES: {
      return { ...state, pokemonsTypes: action.payload };
    }

    default: {
      return state;
    }
  }
};
