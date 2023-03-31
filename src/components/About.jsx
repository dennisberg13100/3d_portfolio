import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ( {index, title, icon} ) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale:1, 
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão Geral.</h2>
      </motion.div> 

      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className={"mt-4 text-secondary text-[17px] max-w-3-xl leading-[30px]"}  
      >
        <p className={"mb-3"}>Sou estudante de Sistemas Para Internet. Estou buscando uma oportunidade de estágio ou meu primeiro emprego na área de desenvolvimento web.</p>

        <p className={"mb-3"}>Tenho realizado diversos cursos na área de desenvolvimento de sistemas, incluindo HTML, CSS, PHP, React e Node.js. Atualmente, tenho focado meus estudos em Java, com o objetivo de aprender a trabalhar com o framework Spring - uma ferramenta incrível para o desenvolvimento de microserviços.</p>
        
        <p className={"mb-3"}>Em meu portfólio, você encontrará alguns dos meus trabalhos e projetos desenvolvidos até o momento. Espero que possamos trabalhar juntos em breve!</p>
      </motion.p>

      <div className="mt-[60px] flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")