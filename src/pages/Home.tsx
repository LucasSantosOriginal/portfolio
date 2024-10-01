import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importe o CSS para estilização

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Portfólio</h1>
      <div className="button-container">
      <Link to="/portfolio/musical-portfolio" className="button">
  Produtor Musical
</Link>
<Link to="/portfolio/programming-portfolio" className="button">
Desenvolvedor & Cyber
</Link>
      </div>
    </div>
  );
};

export default Home;