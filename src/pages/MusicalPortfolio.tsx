import React from 'react';
import { Link } from 'react-router-dom';
import './MusicalPortfolio.css'; // Importe o CSS para estilização

const MusicalPortfolio: React.FC = () => {
  return (
    <div className="page-content">
      <Link to="/" className="back-button">Voltar</Link>
      <h1>Produtor Musical</h1>
      {/* Adicione aqui o conteúdo do portfólio musical */}
    </div>
  );
};

export default MusicalPortfolio;
