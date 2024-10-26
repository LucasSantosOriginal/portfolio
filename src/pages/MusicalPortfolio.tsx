import React from "react";
import { Link } from "react-router-dom";
import "./MusicalPortfolio.css"; // Importe o CSS para estilização
import { FaArrowLeft } from "react-icons/fa";

const MusicalPortfolio: React.FC = () => {
  return (
    <div className="page-content-Musical">
      <Link to="/portfolio/" className="back-button">
        <FaArrowLeft />{" "}
      </Link>
      <h1> Music Producer</h1>
      <p>coming soon...</p>
      {/* Adicione aqui o conteúdo do portfólio musical */}
    </div>
  );
};

export default MusicalPortfolio;
