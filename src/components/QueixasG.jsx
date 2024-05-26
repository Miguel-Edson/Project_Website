import React from 'react'

import queixas from "../assets/consulta3.jpg"


const QueixasG = () => {
  return (
    <div className='flex-col px-5 md:px-20 py-10  '>
        <div className='flex-col justify-start '>
            <h1 className=' bg-[#922E42] md:px-10 px-2 font-title text-1xl md:text-5xl text-nowrap text-[#f3f3f3] max-w-[45%]'>Queixas genitais e Saúde sexual</h1>
        </div>

        <div>
            <img src = {queixas} alt="" className='w-screen '/>
        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>O que é?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            Queixas Genitais e Saúde Sexual" abrange uma variedade de sintomas e preocupações relacionados à saúde sexual e reprodutiva, como dor, coceira, secreções anormais, alterações na função sexual, entre outros. Essas queixas podem afetar tanto homens quanto mulheres e podem ser causadas por uma variedade de condições médicas, desde infecções comuns até condições mais graves.<br></br>
            O diagnóstico e tratamento das queixas genitais e questões relacionadas à saúde sexual geralmente envolvem uma avaliação médica detalhada, que pode incluir uma entrevista para entender os sintomas e o histórico médico, um exame físico, exames laboratoriais e, em alguns casos, exames de imagem. Dependendo dos sintomas apresentados, o médico pode encaminhar o paciente para um especialista, como um ginecologista ou urologista.
            </h4>

        </div>

        
        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Quem deve e quando fazer a consulta?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            Quanto a quem deve fazer e quando, qualquer pessoa que esteja enfrentando sintomas relacionados à saúde sexual ou genitais deve buscar avaliação médica. Isso inclui homens e mulheres de todas as idades. Não há uma idade específica para começar a considerar a saúde sexual, mas é importante estar atento aos sinais de problemas e buscar cuidados médicos quando necessário.<br></br> 
            Além disso, pessoas sexualmente ativas devem considerar exames regulares para detecção de infecções sexualmente transmissíveis (ISTs) e outras preocupações relacionadas à saúde sexual.
            </h4>

        </div>
    </div>
  )
}

export default QueixasG