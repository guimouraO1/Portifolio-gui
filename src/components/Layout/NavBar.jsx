import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AiOutlineMenu } from 'react-icons/ai'


function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <Link to='/' className={styles.logo}> Guilherme </Link>
      <ul className={styles.navSection}>
        <li><Link to='/' className={styles.navItens}>Home</Link></li>
        <li><Link to='/Sobre' className={styles.navItens}>Sobre</Link></li>
        <li><Link to='/Projetos' className={styles.navItens}>Projetos</Link></li>
        <li><Link to='/Contato' className={styles.navItens}>Contato</Link></li>

        
      </ul>
        
        
        <div className={styles.menuNav}>
          <AiOutlineMenu 
            color="white" 
            size={'40px'}/></div>
    </nav>
  );
}
export default NavBar;
