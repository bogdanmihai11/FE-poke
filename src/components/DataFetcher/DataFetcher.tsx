import { useEffect, ReactElement, useState } from "react";
import { useAppContext } from "../App/AppContextProvider";
import {
  getPokemonList,
  getPokemonTypes,
  getPokemonByName,
} from "../../api/queries";

import styles from "./dataFetcher.module.scss";

const DataFetcher = ({ children }: { children: ReactElement }) => {
  const { appDispatch, appState } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonFullList = async () => {
    let pokemons = appState.pokemonList || [];
    const offset = 100;
    const limit = 100;
    const totalPokemons = appState.pokemonsTotal || 1302;

    if (pokemons.length === 0) {
      for (let i = 0; i < Math.trunc(totalPokemons / offset) + 1; i++) {
        const pokemonsBatch = await getPokemonList(offset * i, limit);
        appDispatch.setPokemonsFetched(i);
        pokemons = [...pokemons, ...pokemonsBatch.results];
      }
      appDispatch.setPokemonListData(pokemons);
    }

    setIsLoading(false);
  };

  const getPokemonsData = () => {
    let pokemonList = appState.pokemonList || [];
    let pokemonsData = appState.pokemonData || [];

    if (pokemonsData.length === 0) {
      pokemonList.map(async (p, i) => {
        const pokemon = await getPokemonByName(p.name);
        appDispatch.setPokemonsFullDataFetched(i);
        const pokemonDetails = {
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types,
        };
        pokemonsData.push(pokemonDetails);
      });
    }

    appDispatch.setPokemonData(pokemonsData);
  };

  useEffect(() => {
    appState.pokemonsTotal === 0 && getPokemonList(1, 1);
    appState.pokemonList.length === 0 && getPokemonFullList();
    appState.pokemonsTypes?.length === 0 &&
      getPokemonTypes()
        .then((types) => {
          appDispatch.setPokemonsTypes(types);
        })
        .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getPokemonsData();
  }, [isLoading]);

  return isLoading ? (
    <div className={styles.loading}>
      <div className={styles.loadingInfo}>
        Fetching pokemon list{" "}
        {appState.pokemonsFetched && appState.pokemonsFetched * 100} / 1302
      </div>
      {children}
    </div>
  ) : (
    children
  );
};

export default DataFetcher;
