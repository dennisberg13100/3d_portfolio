import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    java,
    php,
    wordpress,
    uam,
    freecodecamp,
    php_logocompleta,
    beepack,
    cs50,
    petshop,
    agenciadeviagens,
    carpentry,
    mysql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalho",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor Front-end",
      icon: web,
    },
    {
      title: "Desenvolvedor Back-end",
      icon: mobile,
    },
    {
      title: "Desenvolvedor Mobile",
      icon: backend,
    },
    {
      title: "Desenvolvedor WordPress",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "mySQL",
      icon: mysql,
    },
    {
      name: "Php",
      icon: php,
    },
    {
      name: "WordPress",
      icon: wordpress,
    },
    {
      name: "java",
      icon: java
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Sistemas Para Internet",
      company_name: "Anhebi Morumbi",
      icon: uam,
      iconBg: "#fff",
      date: "Jan 2022 - Jun 2024 (cursando)",
      points: [
        "Desenvolvimento front-end, web e mobile.",
        "Lógica de programação, Orientação a objetos e Engenharia de Software.",
        "Banco de dados e desenvolvimento Back-end.",
        "Rede de computadores.",
        "Estatística e Data Science.",
        "Gestão de conteúdo e administração web.",
        "Comércio eletrônico.", 
        "Projetos em educação a distância."    
      ],
    },
    {
      title: "BeePack",
      company_name: "Desenvolvedor e Fundador",
      icon: beepack,
      iconBg: "#fff",
      date: "Jan 2021 - atualidade",
      points: [
        "Desenvolvimento e manutençao do site de e-comerce.",
        "Gerenciamento das redes sociais.",
        "Design de logos, layouts, postagens e videos.",
        "Integração com meio de pagamento, logistica e market places .",
      ],
    },
    {
      title: "Introdução a ciência da computação -Harvard",
      company_name: "David J. Malan",
      icon: cs50,
      iconBg: "#fff",
      date: "Jan 2020 - Jun 2020",
      points: [
        "Obtive um entendimento amplo e robusto de ciência da computação e programação.",
        "Aprendi a pensar algorítmicamente e solucionar problemas de programação de forma eficiente.",
        "Aprendi conceitos como abstração, algoritmos, estruturas de dados, encapsulamento, gestão de recursos, segurança, engenharia de software e desenvolvimento web.",
        "Conheci várias linguagens, incluindo C, Python, SQL e JavaScript, além de CSS e HTML.",
        "Desenvolvi e apresentei o projeto final de programação para meus colegas.",
      ],
    },
    {
      title: "freeCodeCamp",
      company_name: "Quincy Larson",
      icon: freecodecamp,
      iconBg: "#fff",
      date: "Mai 2020 - Jun-2020",
      points: [
        "Desenvolvimento web responsivo.",
        "Algoritmos e estrutura de dados em JavaScript."
      ],
    },
    {
      title: "PHP do Zero ao Profissional",
      company_name: "Bonieky Lacerda",
      icon: php_logocompleta,
      iconBg: "#fff",
      date: "jun 2020 - jun 2021",
      points: [
        "HTML5, CSS3, JavaScript.",
        "PHP iniciante, intermediário e avançado.",
        "Fundamento da programação.",
        "Banco de dados.",
        "Arquitetura da informação.",
        "Desenvolvimento ágil.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pet Shop",
      description:
        "Este site foi desenvolvido com objetivo de cumprir com as atividades da matéria de Desenvolvimento Web Cliente do terceiro semestre do curso de Sistemas Para Internet.",
      tags: [
        {
          name: "HTML 5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS 3",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: petshop,
      source_code_link: "https://github.com/dennisberg13100/petshop_site_bootstrap.git",
    },
    {
      name: "Agência de Viagens",
      description:
        "Neste projeto eu realizo o desfia do estagiário do canal DevMedia. Para o desafio foi disponibilizado quatro desenhos do Layout em diferentes tamanhos de tela.",
      tags: [
        {
          name: "HTML 5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS 3",
          color: "green-text-gradient",
        }
      ],
      image: agenciadeviagens,
      source_code_link: "https://github.com/dennisberg13100/desafio_do_estagiario.git",
    },
    {
      name: "Site de Marcenaria",
      description:
        "Um site simples para apresentar os trabalho de um marceneiro, com uma apresentação, fotos de seus trabalhos e um formulário paar entrar em contato.",
      tags: [
        {
          name: "HTML 5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS 3",
          color: "green-text-gradient",
        },
      ],
      image: carpentry,
      source_code_link: "https://github.com/dennisberg13100/design_para_web_atividade2.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };