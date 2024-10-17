import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "../animation.css";
import { FaDownload } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>LUCAS SANTOS </h1>

      <div className="button-container">
        <Link to="/portfolio/musical-portfolio" className="button">
          Produtor Musical
        </Link>
        <Link to="/portfolio/programming-portfolio" className="button">
          Desenvolvedor & Cyber
        </Link>
        <a href="./CV_LUCAS_SANTOS.pdf" download className="button">
          <FaDownload /> MEU CV
        </a>
      </div>

      <p>
        fiz esse site para vocês não terem mais desculpas <br />
        dizendo que nao tenho experiência!
      </p>

      {/* Rodapé */}
      <footer className="footer">
        <h2>
          <a
            href="https://github.com/azevedorar"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/azevedorar
          </a>
        </h2>
      </footer>
    </div>
  );
};

export default Home;
