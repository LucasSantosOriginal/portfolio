import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css"; // Importe o CSS para estilização
import { FaArrowLeft } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <div className="page-content">
      <Link to="/portfolio/" className="back-button">
        <FaArrowLeft />{" "}
      </Link>
      <div className="projects-button">
        <a
          href="https://azevedorar.github.io/pokedex/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokedex
        </a>
        <a
          href="https://azevedorar.github.io/lildigs-siteofc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lil Digs Site
        </a>
      </div>
    </div>
  );
};

export default Projects;
