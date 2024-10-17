import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProgrammingPortfolio.css";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProgrammingPortfolio: React.FC = () => {
  const [experienciasOpen, setExperienciasOpen] = useState(false);
  const [habilidadesOpen, setHabilidadesOpen] = useState(false);
  const [certificadosOpen, setCertificadosOpen] = useState(false);

  const toggleExperiencias = () => setExperienciasOpen(!experienciasOpen);
  const toggleHabilidades = () => setHabilidadesOpen(!habilidadesOpen);
  const toggleCertificados = () => setCertificadosOpen(!certificadosOpen);

  return (
    <div className="page-content-Programming">
      <Link to="/portfolio/" className="back-button-programming">
        <FaArrowLeft /> {/* Seta de voltar */}
      </Link>
      <h1>
        Desenvolvedor & <br />
        Cyber Security
      </h1>

      {/* Navbar */}
      {/* <nav className="navbar">
        <ul>
          <li>
            <a href="#experiencias">Experiências</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#certificados">Certificados</a>
          </li>
        </ul>
      </nav> */}

      {/* Conteúdo */}
      <div id="experiencias" className="dropdown-section">
        <div onClick={toggleExperiencias} className="dropdown-header">
          <h2>Experiências</h2>
          {experienciasOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {experienciasOpen && (
          <div className="dropdown-content">
            <h3> Vivo (Telefonica Brasil)</h3>
            <p>Analista em Segurança da Informação Jr - 2022 - 2024</p>
            <h2> Telefonica Educação Digital</h2>
            <p>Estagiário Help Desk - 2021 - 2022</p>
            <h2> Phooto Brasil</h2>
            <p>Estagiário de Suporte Técnico - Jun 2018 - Dez 2018</p>
          </div>
        )}
      </div>

      <div id="habilidades" className="dropdown-section">
        <div onClick={toggleHabilidades} className="dropdown-header">
          <h2>Habilidades</h2>
          {habilidadesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {habilidadesOpen && (
          <div className="dropdown-content-skills">
            <p>
              HTML 5 (intermediário) CSS (Intermediário) JavaScript <br />
              (Intermediário) React.js (Básico) Node.Js <br />
              (básico) Vite (Básico) TailWind CSS (Básico) ChatGPT (Avançado)
            </p>
            <p>
              Adobe Photoshop (básico) ServiceNow (básico) Jira (Básico) <br />
              PowerBI (Intermediário) Python (básico) Kali Linux (básico)
            </p>
            <p>
              Microsoft Visio (básico) Microsoft Sharepoint (Intermediário)
              OWASP (Básico)
              <br /> Redmine ( Básico) Office 365 (Intermediário)
            </p>

            {/* Adicione outras habilidades aqui */}
          </div>
        )}
      </div>

      <div id="certificados" className="dropdown-section">
        <div onClick={toggleCertificados} className="dropdown-header">
          <h2>Certificados</h2>
          {certificadosOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {certificadosOpen && (
          <div className="dropdown-content">
            <div className="certificados">
              {/* <h1>Principais Certificações</h1> */}
              <p>
                <a
                  href="https://drive.google.com/file/d/1vNPKgtSErgjUG9MkxhoRzH5lWjj8EWAK/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API DESIGN (API ACADEMY)
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1TywcSviJbOEGCUAyDMNRM7tZg6du5nXr/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CyberSecurity (FIAP)
                </a>
              </p>
              <p>
                <a
                  href="https://www.sp.senai.br/consulta-certificado?qrcode=00013113/6906163"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LGPD (SENAI)
                </a>
              </p>
              <p>
                <a
                  href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/66047/e82daadf98311d01f1caa4f6b2ee5654/certificado.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cloud Fundamentals, Administration and Solution Architect
                  (FIAP)
                </a>
              </p>
              <p>
                <a
                  href="https://www.schoolofnet.com/validar-certificado/?certificate=1ca04bb0-c99b-468b-ab65-e7979ffc65c1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Javascript
                </a>
              </p>
              <p>
                <a
                  href="https://www.schoolofnet.com/validar-certificado/?certificate=00c136f7-6d72-42cc-ae4e-87af291e671a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SASS
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgrammingPortfolio;
