import styles from './Footer.module.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.iconsContainer}>
        <Link to={'https://www.linkedin.com/in/guilherme-moura-oliveira/'} target='blank'>
          < FaLinkedin className={styles.icons} size={40} />
        </Link>
        <Link to={'https://github.com/guimouraO1'} target='blank'>
          < FaGithub className={styles.icons} size={40} />
        </Link>
        </div>
    </div>
  );
}
export default Footer