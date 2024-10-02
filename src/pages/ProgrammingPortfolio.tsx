import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProgrammingPortfolio.css";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProgrammingPortfolio: React.FC = () => {
  // Estados para controlar cada dropdown
  const [experienciasOpen, setExperienciasOpen] = useState(false);
  const [habilidadesOpen, setHabilidadesOpen] = useState(false);
  const [certificadosOpen, setCertificadosOpen] = useState(false);
  // Função para alternar o dropdown
  const toggleExperiencias = () => {
    setExperienciasOpen(!experienciasOpen);
  };
  const toggleHabilidades = () => {
    setHabilidadesOpen(!habilidadesOpen);
  };

  const toggleCertificados = () => {
    setCertificadosOpen(!certificadosOpen);
  };

  return (
    <div className="page-content-Programming">
      <Link to="/portfolio/" className="back-button-programming">
        <FaArrowLeft />
      </Link>
      <h1>
        Desenvolvedor & <br />
        Cyber Security
      </h1>

      {/* Dropdown Experiências */}
      <div className="dropdown-section">
        <div className="dropdown-header" onClick={toggleExperiencias}>
          <h2>Experiências</h2>
          {experienciasOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {experienciasOpen && (
          <div className="dropdown-content">
            <h3> Vivo (Telefonica Brasil)</h3>
            <h2>Analista em Segurança da Informação Jr • 2022 - 2024</h2>
            <p>
              Atuei com os times de Cloud e Arquitetura, adquirindo
              conhecimentos em CIS, Owasp, AWS, GCP, Huawei Cloud e Microsoft
              Azure. Após ser efetivado, colaborei em pesquisas sobre a
              arquitetura da empresa e estratégias de segurança em um modelo
              zero trust. Organizei informações em uma wiki interna, facilitando
              a comunicação entre as áreas. Implementei Power BI em uma página
              interativa, usando HTML, CSS e JavaScript, e gerenciei conteúdos
              no Microsoft Confluence e SharePoint. Utilize o ServiceNow para
              atender chamados de instalação de software, analisando
              vulnerabilidades e verificando riscos segundo o NIST. Após
              aprovação, os aplicativos eram adicionados à nossa central de
              softwares interna, permitindo que os colaboradores realizassem a
              instalação.
            </p>
            <h3> Telefonica Educação Digital</h3>
            <h2>Estagiário Help Desk • 2021 - 2022</h2>
            <p>
              Criação e manutenção de usuários, computadores e grupos utilizando
              o Active Directory (AD). Utilizando OCS Inventory para gerenciar
              computadores. Instalação, configuração e manutenção de softwares
              da plataforma Office 365. Atendimento de colaboradores através da
              ferramenta de tickets Redmine. E manutenção de computadores via
              Teamviewer
            </p>
            <h3> Phooto Brasil</h3>
            <h2>Estagiário de Suporte Técnico • Jun 2018 - Dez 2018</h2>
            <p>
              Fui designado para arrumar hardwares e softwares de máquinas e
              também configurando a rede interna da empresa
            </p>

            {/* Adicione mais experiências aqui */}
          </div>
        )}
      </div>

      <div className="dropdown-section">
        <div className="dropdown-header" onClick={toggleHabilidades}>
          <h2>Habilidades</h2>
          {habilidadesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {habilidadesOpen && (
          <div className="dropdown-content">
            <h3>Principais habilidades</h3>
            <p>
              HTML 5 (intermediário)  <br />
              CSS (Intermediário) <br />
              JavaScript (Intermediário) <br />
              React.js (Básico) <br />
              Node.Js (básico) <br />
              Vite (Básico)<br />
              TailWind CSS (Básico) <br />
              ChatGPT (Avançado) <br />
              Adobe Photoshop (básico)<br />
              ServiceNow (básico) <br />
              Jira (Básico) <br />
              PowerBI (Intermediário) <br />
              Python (básico) <br />
              Kali Linux (básico) <br />
              Microsoft Visio (básico) <br />
              Microsoft Sharepoint (Intermediário) <br />
              OWASP (Básico) <br />
              Redmine ( Básico) <br />
              Office 365 (Intermediário)<br />
              Typescript (Intermediário) <br />
              Vite (Intermediário) <br />
            </p>
          </div>
        )}
      </div>

      <div className="dropdown-section">
        <div className="dropdown-header" onClick={toggleCertificados}>
          <h2>Certificados</h2>
          {certificadosOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {certificadosOpen && (
          <div className="dropdown-content">
            <h3>Principais Certificações</h3>
            <p>
              <a
                href="https://drive.google.com/file/d/1vNPKgtSErgjUG9MkxhoRzH5lWjj8EWAK/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                - API DESIGN (API ACADEMY) <br />
              </a>
              <a
                href="https://drive.google.com/file/d/1TywcSviJbOEGCUAyDMNRM7tZg6du5nXr/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                - CyberSecurity (FIAP) <br />
              </a>
              <a
                href="https://www.sp.senai.br/consulta-certificado?qrcode=00013113/6906163"
                target="_blank"
                rel="noopener noreferrer"
              >
                - LGPD (SENAI) <br />
              </a>
              <a
                href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/66047/e82daadf98311d01f1caa4f6b2ee5654/certificado.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                - Cloud Fundamentals, Administration and Solution Architect
                (FIAP) <br />
              </a>
              <a
                href="https://www.schoolofnet.com/validar-certificado/?certificate=1ca04bb0-c99b-468b-ab65-e7979ffc65c1"
                target="_blank"
                rel="noopener noreferrer"
              >
                - Javascript <br />
              </a>
              <a
                href="https://www.schoolofnet.com/validar-certificado/?certificate=00c136f7-6d72-42cc-ae4e-87af291e671a"
                target="_blank"
                rel="noopener noreferrer"
              >
                - SASS
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Você pode adicionar mais dropdowns para outros tópicos */}
    </div>
  );
};

export default ProgrammingPortfolio;
