import styles from "./pokemonItem.module.scss";

type PokemonItemProps = {
  name: string;
  type: string;
};

const PokemonItem = ({ name, type }: PokemonItemProps) => {
  return (
    <div className={styles.pokemonItem}>
      <img src="https://placehold.it/50x50" />
      {name} [{type}]
    </div>
  );
};

export default PokemonItem;
