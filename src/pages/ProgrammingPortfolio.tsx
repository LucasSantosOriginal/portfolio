import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProgrammingPortfolio.css";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProgrammingPortfolio: React.FC = () => {
  const [experienciasOpen, setExperienciasOpen] = useState(false);
  const [habilidadesOpen, setHabilidadesOpen] = useState(false);
  const [certificadosOpen, setCertificadosOpen] = useState(false);
  const [projetosOpen, setProjetosOpen] = useState(false);

  const toggleExperiencias = () => setExperienciasOpen(!experienciasOpen);
  const toggleHabilidades = () => setHabilidadesOpen(!habilidadesOpen);
  const toggleCertificados = () => setCertificadosOpen(!certificadosOpen);
  const toggleProjetos = () => setProjetosOpen(!projetosOpen);

  return (
    <div className="page-content-Programming">
      <Link to="/portfolio/" className="back-button-programming">
        <FaArrowLeft />
      </Link>
      <h1>
        Desenvolvedor & <br />
        Cyber Security
      </h1>

      <div className="dropdown-section">
        <div
          className="dropdown-header"
          onClick={toggleProjetos}
          aria-expanded={projetosOpen}
        >
          <h2>Projetos</h2>
          {projetosOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {projetosOpen && (
          <div className="dropdown-content-projetos">
            {/* <h2>Principais habilidades</h2> */}
            <button className="button-link-projetos">
              <a
                href="https://azevedorar.github.io/lildigs-siteofc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SITE LIL DIGS
              </a>
            </button>
          </div>
        )}
      </div>

      <div className="dropdown-section">
        <div
          className="dropdown-header"
          onClick={toggleExperiencias}
          aria-expanded={experienciasOpen}
        >
          <h2>Experiências</h2>
          {experienciasOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {experienciasOpen && (
          <div className="dropdown-content">
            <h2> Vivo (Telefonica Brasil)</h2>
            <h3>
              Analista em Segurança da Informação Jr
              <br />
              2022 - 2024
            </h3>
            {/* <p> Descrição da experiência... </p> */}
            <h2> Telefonica Educação Digital</h2>
            <h3>
              Estagiário Help Desk <br />
              2021 - 2022
            </h3>
            {/* <p> Descrição da experiência... </p> */}
            <h2> Phooto Brasil</h2>
            <h3>
              Estagiário de Suporte Técnico <br /> Jun 2018 - Dez 2018
            </h3>
            {/* <p> Descrição da experiência... </p> */}
          </div>
        )}
      </div>

      <div className="dropdown-section">
        <div
          className="dropdown-header"
          onClick={toggleHabilidades}
          aria-expanded={habilidadesOpen}
        >
          <h2>Habilidades</h2>
          {habilidadesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {habilidadesOpen && (
          <div className="dropdown-content-skills">
            {/* <h2>Principais habilidades</h2> */}
            <h3>HTML 5 - intermediário</h3>
            <h3>CSS - intermediário</h3>
            <h3>JavaScript - intermediário</h3>
            <h3>React.js - Básico</h3>
            <h3>Node.Js - Básico</h3>
            <h3>Vite - Básico</h3>
            <h3>TailWind CSS - Básico</h3>
            <h3>ChatGPT - Avançado</h3>
            <h3>Adobe Photoshop - Básico</h3>
            <h3>ServiceNow - Básico</h3>
            <h3>Jira - Básico</h3>
            <h3>PowerBI - intermediário</h3>
            <h3>Python - Básico</h3>
            <h3>Kali Linux - Básico</h3>
            <h3>Microsoft Visio - Básico</h3>
            <h3>Microsoft Sharepoint - intermediário</h3>
            <h3>OWAS - Básico</h3>
            <h3>Redmine - Básico</h3>
            <h3>Office 365 - intermediário</h3>
            <h3>Typescript - intermediário</h3>
            <h3>Vite - intermediário</h3>
          </div>
        )}
      </div>

      <div className="dropdown-section">
        <div
          className="dropdown-header"
          onClick={toggleCertificados}
          aria-expanded={certificadosOpen}
        >
          <h2>Certificados</h2>
          {certificadosOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {certificadosOpen && (
          <div className="dropdown-content">
            <div className="certificados">
              <h1>Principais Certificações</h1>
              <h3>
                <a
                  href="https://drive.google.com/file/d/1vNPKgtSErgjUG9MkxhoRzH5lWjj8EWAK/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API DESIGN (API ACADEMY)
                </a>
              </h3>
              <h3>
                <a
                  href="https://drive.google.com/file/d/1TywcSviJbOEGCUAyDMNRM7tZg6du5nXr/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CyberSecurity (FIAP)
                </a>
              </h3>
              <h3>
                <a
                  href="https://www.sp.senai.br/consulta-certificado?qrcode=00013113/6906163"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LGPD (SENAI)
                </a>
              </h3>
              <h3>
                <a
                  href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/66047/e82daadf98311d01f1caa4f6b2ee5654/certificado.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cloud Fundamentals, Administration and Solution Architect
                  (FIAP)
                </a>
              </h3>
              <h3>
                <a
                  href="https://www.schoolofnet.com/validar-certificado/?certificate=1ca04bb0-c99b-468b-ab65-e7979ffc65c1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Javascript
                </a>
              </h3>
              <h3>
                <a
                  href="https://www.schoolofnet.com/validar-certificado/?certificate=00c136f7-6d72-42cc-ae4e-87af291e671a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SASS
                </a>
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgrammingPortfolio;
