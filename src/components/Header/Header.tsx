import styles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.appTitle}>Pokedex</div>
      </div>
    </>
  );
};

export default Header;
