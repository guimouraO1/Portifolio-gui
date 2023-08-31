import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <header className={styles.navContainer}>
      <h1 className={styles.logo}>Guilherme</h1>
      <nav className={styles.navSection}>
        <i class="fa-solid fa-bars"></i>
        <a href="#top" className={styles.navItens}>
          Home
        </a>
        <a href="#top" className={styles.navItens}>
          About
        </a>
        <a href="#top" className={styles.navItens}>
          Socials
        </a>
        <a href="#top" className={styles.navItens} target="_blank">
          Contact
        </a>
      </nav>
    </header>
  );
}
export default NavBar;
