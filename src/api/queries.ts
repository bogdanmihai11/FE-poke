import { PokemonClient } from "pokenode-ts";

export const getPokemonList = async (offset: number, limit: number) => {
  const api = new PokemonClient();
  const pokemonList = await api.listPokemons(offset, limit);

  return pokemonList;
};

export const getPokemonTypes = async () => {
  const api = new PokemonClient();
  const types = await api.listTypes();

  return types.results.map((type) => type.name);
};


export const getPokemonByName = async (name: string) => {
  const api = new PokemonClient();
  const pokemonName = await api.getPokemonByName(name);

  return pokemonName;
};

export const getPokemonById = async (id: number) => {
  const api = new PokemonClient();
  const pokemon = await api.getPokemonById(id);

  return pokemon;
}
