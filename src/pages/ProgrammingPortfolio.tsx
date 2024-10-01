import React from 'react';
import { Link } from 'react-router-dom';
import './ProgrammingPortfolio.css'; // Importe o CSS para estilização

const ProgrammingPortfolio: React.FC = () => {
  return (
    <div className="page-content">
      <Link to="/" className="back-button">Voltar</Link>
      <h1>Desenvolvedor & Cyber</h1>
      {/* Adicione aqui o conteúdo do portfólio de programação */}
    </div>
  );
};

export default ProgrammingPortfolio;
