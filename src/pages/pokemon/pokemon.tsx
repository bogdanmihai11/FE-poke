import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../../api/queries";
import { Pokemon } from "pokenode-ts";

import styles from "./pokemon.module.scss";

const PokemonDetail: React.FC = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const fetchPokemon = async () => {
    if (pokemonId) {
      const pokemon = await getPokemonById(parseInt(pokemonId));
      setPokemon(pokemon);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className={styles.content}>
      <Link to="/" className={styles.backButton}>
        &lt; go back
      </Link>
      <div className={styles.mainInfo}>
        <div>
          <div>Name: {pokemon?.name}</div>
          <div>Base xp: {pokemon?.base_experience}</div>
          <div>Height: {pokemon?.height && pokemon?.height} m</div>
          <div>Weight: {pokemon?.weight && pokemon?.weight} kg</div>
        </div>
        <div className={styles.image}>
          {pokemon?.sprites?.front_default && (
            <img src={pokemon?.sprites?.front_default} />
          )}
        </div>
      </div>

      <div>
        Abilities:
        {pokemon?.abilities?.map((ability) => ability.ability.name).join(", ")}
      </div>
      <div>
        Types: {pokemon?.types?.map((type) => type.type.name).join(", ")}
      </div>
      <div>
        Stats:
        {pokemon?.stats
          ?.map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
          .join(", ")}
      </div>
    </div>
  );
};

export default PokemonDetail;
