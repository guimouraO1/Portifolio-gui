import img from '../img/gui.jpg'
import styles from "./HomePage.module.css";
import { FaPython } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io'
import { FaDocker } from 'react-icons/fa'
import { BiLogoKubernetes } from 'react-icons/bi'

function HomePage() {
  return (
    <section>
        
        <div className={styles.Container}>
          <img className={styles.imagem} src={img} alt="Guilherme de Moura"/>
          
          <div className={styles.textMain}>
            <h1>Desenvolvedor</h1>
            <p></p>
          </div>
          <div className={styles.linguagens}>
            <h1>Tecnologias</h1><br/>
            <div className={styles.linha}></div><br/>
            < FaPython size={80} color='white'/>
            < FaReact size={80} color='white' />
            < IoLogoJavascript size={80} color='white'/>
            < FaDocker size={80} color='white'/>
            < BiLogoKubernetes size={80} color='white'/>
            
          </div>
        </div>

    </section>
  );
}
export default HomePage