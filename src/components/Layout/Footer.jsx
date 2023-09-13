import styles from './Footer.module.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <div className={styles.footerContainer}>
        < FaLinkedin className={styles.icons} size={40} />
        < FaGithub className={styles.icons} size={40} />

    </div>
  );
}
export default Footer