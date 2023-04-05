import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    bootstrap,
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
    pm,
    am,
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
      name: "Bootstrap",
      icon: bootstrap,
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
         ["O Dennis é um profissional muito habilidoso, entregou meu projeto antes do prazo combinado, com muito capricho e organização. Estes detalhes fizeram toda a diferença para meu cliente final! Muito obrigado"],
      name: "Paulo Marcelo",
      designation: "Supervisor de Marketing",
      company: "Mottanet",
      image: pm,
    },
    {
      testimonial:
        ["Este programador full stack é absolutamente excepcional! Desde o início do projeto, demonstrou habilidades técnicas impressionantes, domínio completo das tecnologias front-end e back-end, e um compromisso sério com a qualidade do trabalho. Sempre esteve disponível para discutir ideias, propor soluções inovadoras e adaptar-se às mudanças de requisitos, mantendo-se sempre profissional e paciente.", 
        "Acapacidade de resolver problemas complexos de forma rápida e eficiente é uma de suas principais qualidades, garantindo a entrega do projeto no prazo e com qualidade excepcional. Além disso, sua habilidade em trabalhar em equipe e se comunicar de forma clara e eficaz facilitou a colaboração e o entendimento entre todos os envolvidos."],
      name: "Alan Moraes",
      designation: "Fundador proprietário",
      company: "Haylou Brasil",
      image: am,
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