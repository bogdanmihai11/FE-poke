import { PokemonType } from "pokenode-ts";

export type Pokemon = {
  id?: number;
  name: string;
  types?: PokemonType[];
  url?: string | null;
};

export type PokemonList = Pokemon[];
export type PokemonData = Pokemon[];
