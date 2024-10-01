import React from 'react';
import { Link } from 'react-router-dom';
import './ProgrammingPortfolio.css'; // Importe o CSS para estilização
import { FaArrowLeft  } from 'react-icons/fa';


const ProgrammingPortfolio: React.FC = () => {
  return (
    <div className="page-content-Programming">
      <Link to="/portfolio/" className="back-button-programming"><FaArrowLeft /></Link>
      <h1>Desenvolvedor & Cyber</h1>
      {/* Adicione aqui o conteúdo do portfólio de programação */}
    </div>
  );
};

export default ProgrammingPortfolio;
