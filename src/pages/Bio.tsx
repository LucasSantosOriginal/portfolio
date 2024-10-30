import React from "react";
import { Link } from "react-router-dom";
import "./Bio.css"; // Importe o CSS para estilização
import { FaArrowLeft } from "react-icons/fa";

const MusicalPortfolio: React.FC = () => {
  return (
    <div className="page-content">
      <Link to="/portfolio/" className="back-button">
        <FaArrowLeft />{" "}
      </Link>
      <h1>PORTUGUESE</h1>
      <p>
        Olá, meu nome é Lucas Santos, moro em São Paulo, Brasil. Tenho 25 anos e
        sou apaixonado por música, futebol, programação, design e games. <br />
        Meu sonho de infância é criar e desenvolver um jogo que seja acessível
        para todos os meus irmãos e irmãs no Brasil e no mundo. Comecei a me
        interessar por tecnologia aos 10 anos, vendo meu pai arrumando nosso
        computador com frequência, o que despertou minha curiosidade. <br />
        Aos 12 anos, fiquei completamente fascinado ao descobrir o jogo
        Battlefield 3 no Xbox 360, mas queria muito jogar no computador. Comecei
        então a pesquisar sobre placa-mãe, placa de vídeo, processadores (CPU) e
        periféricos como teclado e mouse. Depois de muito pesquisar e com a
        ajuda da minha mãe, aos 14 anos finalmente comprei meu primeiro
        computador gamer, que tenho até hoje após 10 anos. Esse computador
        sempre me ajudou; às vezes me deixava na mão, mas isso só aumentou minha
        curiosidade pela tecnologia. Qualquer erro, eu passava horas, dias e
        semanas nos fóruns resolvendo (saudades de ser um adolescente com
        tempo). Foi assim que, aos 16 anos, conheci o mundo da programação,
        cibersegurança e afins. Comecei a estudar HTML, CSS, JavaScript e, desde
        então, não parei mais. Porém, nunca trabalhei formalmente na área de
        programação, seja front-end, back-end ou fullstack. Aos 18 anos, comecei
        a trabalhar como estagiário de suporte técnico em TI, mas deixei a
        empresa por conta da falta de respeito de algumas pessoas. Decidi
        abandonar o emprego e os estudos, o que me deixou triste. Foi aí que
        comecei a compor e gravar músicas, e minha paixão por produzir música
        surgiu - mas essa é uma história para outro dia. Depois de um tempo,
        decidi voltar a estudar e me matriculei em uma faculdade em 2020. Em
        2021, com 21 anos, entrei na Telefónica Educação Digital, atuando
        remotamente por conta da pandemia de Covid-19. Mesmo assim, trabalhei e
        aprendi, sem desistir. Minha experiência na Telefónica foi ótima;
        aprendi muito e me senti confortável, pois arrumava os computadores dos
        funcionários, algo que já fazia na vida pessoal. Mas a empresa fechou
        sua unidade de "Educação Digital", e eu e todos os funcionários fomos
        demitidos. Essa notícia foi um baque, especialmente para um estagiário
        com 11 meses de experiência, ansioso para ser efetivado. Mas, no início
        de 2022, fui contratado como estagiário na área de CyberSecurity da Vivo
        e, após três meses, fui efetivado. A Vivo mudou minha vida e visão de
        mundo, tanto em negócios quanto em tecnologia e como pessoa. Embora essa
        não fosse a área com que eu sonhava, aprendi muito sobre segurança e
        percebi como estava desprotegido no mundo virtual. Tive contato com
        ideias, softwares e sistemas como Azure, GCP, Oracle, OWASP, CIS, NIST,
        Zero Trust, DLP e ServiceNow, entre outros. Depois dessa trajetória,
        sigo buscando meu sonho de ser um desenvolvedor web e, quem sabe,
        futuramente um desenvolvedor de jogos. Fiz este portfólio para mostrar
        que sou capaz e espero que você goste. Obrigado pela paciência e pelo
        seu tempo. Abraços,
        <br />
        <br />
        Lucas Santos.
      </p>

      <h1>ENGLISH</h1>
      <p>
        Hey! My name is Lucas Santos, and I live in São Paulo, Brazil. I’m 25
        years old and super passionate about music, football, programming,
        design, and games. Ever since I was a kid, I’ve dreamed of creating and
        developing a game that’s accessible to all my brothers and sisters in
        Brazil and around the world. I got interested in technology when I was
        10, watching my dad fix our computer and getting curious about it. At
        12, I became totally hooked when I discovered Battlefield 3 on the Xbox
        360, but I really wanted to play it on a computer. So, I started
        researching motherboards, graphics cards, processors, and peripherals
        like keyboards and mice. After a lot of searching and with my mom’s
        help, at 14, I finally got my first gaming PC, which I still have after
        10 years. That computer has always been there for me; sometimes it let
        me down, but it only made me more curious about tech. Whenever something
        went wrong, I’d spend hours in forums looking for fixes (I miss being a
        teenager with all that time). By 16, I discovered the world of
        programming and cybersecurity. I started learning HTML, CSS, and
        JavaScript, and I haven’t looked back since. But until now, I’ve never
        had a formal job in programming, whether front-end, back-end, or full
        stack. At 18, I started as an IT support intern but ended up leaving due
        to some disrespectful people. I quit my job and school, which made me
        feel pretty down. That’s when I started composing and recording music,
        and my passion for producing music started — but that’s a story for
        another day. After a while, I decided to go back to studying and
        enrolled in college in 2020. In 2021, at 21, I joined Telefónica
        Educación Digital, working remotely because of the Covid-19 pandemic.
        Still, I managed to work, learn, and keep going. My time at Telefónica
        was great. I learned a lot and felt comfortable fixing employees’
        computers, something I’d been doing in my personal life. But then the
        company closed its "Digital Education" unit, and all of us, including
        me, got laid off. That news hit hard, especially for an intern who’d
        been there for 11 months, hoping to get promoted. But at the beginning
        of 2022, I was hired as a CyberSecurity intern at Vivo, and just three
        months later, I was promoted. Vivo changed my life and my outlook on
        business, technology, and even on myself. Even though I never imagined
        working in this area, I learned so much about security and realized how
        vulnerable I was in the virtual world. I got to know lots of tools and
        systems like Azure, GCP, Oracle, OWASP, CIS, NIST, Zero Trust, DLP, and
        ServiceNow. After all this, I’m still chasing my dream of becoming a web
        developer and maybe one day a game developer. I put this portfolio
        together to show that I’m capable, and I hope you like it! Thanks for
        your patience and time. <br />
        <br />
        Lucas Santos.
      </p>
    </div>
  );
};

export default MusicalPortfolio;
