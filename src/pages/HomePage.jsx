import img from '../img/gui.jpg'
import styles from "./HomePage.module.css";


function HomePage() {
  return (
    <section>
        
        <div className={styles.imgContainer}>
          <img className={styles.imagem} src={img} alt="Guilherme de Moura"/>
          <div className={styles.textMain}>
            <h1>Desenvolvedor Junior</h1>
          </div>
        </div>

    </section>
  );
}
export default HomePage