import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__wrapper}>
        <li className={styles.navbar__item}>
          <a href="#">Home</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#">About me</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#">Skills</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#">Contact me</a>
        </li>
      </ul>
    </nav>
  );
};
