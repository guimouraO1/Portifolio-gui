import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>           
    </div>
  );
}
export default App;