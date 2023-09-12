import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AiOutlineMenu } from 'react-icons/ai'


function NavBar() {
  return (
    <header className={styles.navContainer}>
      <Link to='/' className={styles.logo}> Guilherme </Link>
      <nav className={styles.navSection}>
        <i class="fa-solid fa-bars"></i>
        <Link to='/' className={styles.navItens}>Home</Link>
        <Link to='/about-me' className={styles.navItens}>About Me</Link>
        <Link to='/' className={styles.navItens}>Socials</Link>
        <Link to='/' className={styles.navItens}>Contact</Link>
        <div className={styles.menuNav}>
        
        <AiOutlineMenu 
          color="white" 
          size={'40px'}/>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
