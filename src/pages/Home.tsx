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
        <Link to="/portfolio/Bio" className="button">
          Bio
        </Link>
        <Link to="/portfolio/programming-portfolio" className="button">
          Experience
        </Link>
        <Link to="/portfolio/Projects" className="button">
          Projects
        </Link>
        <a href="./CV_LUCAS_SANTOS.pdf" download className="button">
          <FaDownload /> Portuguese CV
        </a>
        <a href="./CV_English_LUCAS_SANTOS.pdf" download className="button">
          <FaDownload /> English CV
        </a>
      </div>

      <p>
        This project was developed with React Vite, CSS, TypeScript! <br />
      </p>

      {/* Rodapé */}
      <footer className="footer">
        <h2>
          <a
            href="https://github.com/LucasSantosOriginal"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
        </h2>
      </footer>
    </div>
  );
};

export default Home;
