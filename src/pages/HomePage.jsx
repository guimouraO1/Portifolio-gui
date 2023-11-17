import img from "../img/gui.jpg";
import styles from "./HomePage.module.css";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { BiLogoKubernetes } from "react-icons/bi";
import ExamplePdf from './curriculo-guilherme.pdf'

function HomePage() {
  return (
    <section>
      <div className={styles.Container}>
        <img className={styles.imagem} src={img} alt="Guilherme de Moura" />
        <div className={styles.textMain}>
          <h1>Desenvolvedor</h1>
          <p>Estou ansioso para saber como posso contribuir para sua equipe!</p>
        </div>
        <div className={styles.linguagens}>
          <h1>Tecnologias</h1>
          <br />
          <div className={styles.linha}></div>
          <br />
          <FaPython size={60} color="" />
          <FaReact size={60} color="#4cc9f0" />
          <IoLogoJavascript size={60} color="#fcd757" />
          <FaDocker size={60} color="#023047" />
          <BiLogoKubernetes size={60} color="#0466c8" />
        </div>
      </div>

      <div className={styles.cv}>
        <a
          href={ExamplePdf}
          download="curriculo-guilherme.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>

      </div>
    </section>
  );
}
export default HomePage;
