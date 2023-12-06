
import Projeto1 from "../components/Projeto1";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.main}>
        <h1>Projeto para mapa interativo<a href="https://labsat.vercel.app/" target="_blank" rel="noreferrer">link</a></h1> 
        <Projeto1/>
    </div >
  );
}
export default Projects