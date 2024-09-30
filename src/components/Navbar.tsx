import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <Link to="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Link para /portfolio */}
            Meu Portfólio
          </Link>
        </h1>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#about">Sobre</a></li>
          <li className="navbar-item"><a href="#projects">Projetos</a></li>
          <li className="navbar-item"><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;