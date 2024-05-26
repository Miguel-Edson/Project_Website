import React from 'react'

import Rosto1 from "../assets/rosto3.png"
import Rosto2 from "../assets/rosto4.png"
import OndasC from "../assets/ondas_cima.png"
import OndasB from "../assets/ondas_baixo.png"
//dark
import OndasCdark from "../assets/ondas_cima_dark.png"
import OndasBdark from "../assets/ondas_baixo_dark.png"

const AboutUs = ({darkMode}) => {
  return (
    <div id='Saiba_mais' className=' pt-16'>
        {darkMode ? <img src={OndasCdark}></img> : <img src={OndasC}></img>}
        <div className='bg-[#BD6475] dark:bg-[#512D34]'>
        
        <div className='flex justify-center items-center'>
            <h1 className='font-title text-5xl md:text-9xl text-[#f3f3f3]'>Sobre a Empresa</h1>
        </div>
        
        <div className='py-16 flex justify-around items-center'>
            <h2 className=' w-[50%] text-[#f3f3f3]  font-infant md:leading-relaxed text-xs text-justify text-inter md:text-4xl max-w-[40%] md:max-w-[40%]'>
              O consultório de Enfermagem  Saúde da Mulher acredita que a saúde íntima é fundamental para o bem-estar da mulher, e é por isso que nos dedicamos a oferecer serviços de enfermagem especializados, focados exclusivamente nas necessidades únicas das mulheres.
            </h2>
            <img className=" max-w-[50%] py-1 max-h-40 md:max-h-[80vh] w-fit" src={Rosto2}/>
        </div>
        
        <div className='flex justify-around items-center'>
            <img className=" max-w-[50%] py-1 max-h-40 md:max-h-[60vh] w-fit" src={Rosto1}/>
            <h3 className='w-[50%] text-[#f3f3f3]  font-infant md:leading-relaxed text-xs text-justify text-inter md:text-4xl max-w-[40%] md:max-w-[40%]'>
              Nosso objetivo é oferecer cuidados especializados para ajudar as mulheres a desenvolver uma relação mais saudável e compassiva com seus corpos. Oferecemos serviços abrangentes, desde exames de rotina até aconselhamento sobre saúde íntima, em um ambiente acolhedor onde você pode receber apoio personalizado para suas necessidades de saúde.            
            </h3>
        </div>

      </div>

      {darkMode ? <img src={OndasBdark}></img> : <img src={OndasB}></img>}
    </div>
    
  )
}

export default AboutUs