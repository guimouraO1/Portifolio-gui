import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";
import Socials from "./pages/Socials";
import Contact from "./pages/Contact";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="App">
      < NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sobre" element={<AboutMe />} />
        <Route path="/Projetos" element={<Socials />} />
        <Route path="/Contato" element={<Contact />} />
      </Routes>
      < Footer />
    </div>
  );
}
export default App;