import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MusicalPortfolio from "./pages/MusicalPortfolio";
import ProgrammingPortfolio from "./pages/ProgrammingPortfolio";

const App: React.FC = () => {
  return (
    <Router basename="/portfolio/">
      {" "}
      {/* Adicione esta linha */}
      <Navbar />
      <div
        className="main-content"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Escolha um dos portfólios abaixo:</p>
        <div className="portfolio-buttons">
          <a href="/portfolio/musical" className="portfolio-button">
            Portfólio Musical
          </a>
          <a href="/portfolio/programador" className="portfolio-button">
            Portfólio Programador
          </a>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/musical" element={<MusicalPortfolio />} />
        <Route path="/programador" element={<ProgrammingPortfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
