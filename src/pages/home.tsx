import React, { useState } from "react";
import { useAppContext } from "../components/App/AppContextProvider";
import PokemonItem from "../components/PokemonItem/PokemonItem";
import { Link } from "react-router-dom";

import styles from "./home.module.scss";

const Home: React.FC = () => {
  const { appState } = useAppContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredData = appState.pokemonData.filter((item) => {
    const nameMatch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const typeMatch =
      !selectedType ||
      item?.types?.some((type) => type.type.name === selectedType);

    return nameMatch && typeMatch;
  });

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <div>
          <label htmlFor="types">Filter type:</label>
          <select
            id="types"
            name="types"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All</option>
            {appState?.pokemonsTypes?.map((type) => {
              return (
                <option key={type} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
      </form>

      {searchQuery && (
        <ul>
          {filteredData.map((pokemon) => (
            <Link to={`/pokemon/${pokemon.id}`}>
              <li key={pokemon.id}>
                <PokemonItem
                  name={pokemon.name}
                  type={
                    (pokemon.types && pokemon.types[0].type.name) || "no type"
                  }
                />
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
