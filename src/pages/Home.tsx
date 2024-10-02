import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importe o CSS para estilização
import '../animation.css';
import { FaDownload } from "react-icons/fa";


const Home: React.FC = () => {
  return (
    <div className="home-container">
      
      <h1>LUCAS SANTOS</h1>
      <div className="button-container">
        <Link to="/portfolio/musical-portfolio" className="button">
          Produtor Musical
        </Link>
        <Link to="/portfolio/programming-portfolio" className="button">
          Desenvolvedor & Cyber
        </Link>
        <a href="./CV_LUCAS_SANTOS.pdf" download className="button">
        <FaDownload />
        </a>
        
      </div>
      <br />
      <br />
      <br />
      <p>fiz esse site para vocês não terem mais desculpas <br />
      dizendo que nao tenho experiência!</p>
    </div>
  );
};

export default Home;
