import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AiOutlineMenu } from 'react-icons/ai'


function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <Link to='/' className={styles.logo}> Guilherme </Link>
      <ul className={styles.navSection}>
        <li><Link to='/' className={styles.navItens}>Home</Link></li>
        <li><Link to='/about-me' className={styles.navItens}>About</Link></li>
        <li><Link to='/Socials' className={styles.navItens}>Socials</Link></li>
        <li><Link to='/Contact' className={styles.navItens}>Contact</Link></li>
      </ul>
        
        
        <div className={styles.menuNav}>
          <AiOutlineMenu 
            color="white" 
            size={'40px'}/></div>
    </nav>
  );
}
export default NavBar;
