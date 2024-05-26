import React from 'react'

import Consulta from "../assets/consulta2.jpg"


const ConsultaGin = () => {
  return (
    <div className='flex-col px-5 md:px-20 py-10  '>
        <div className='flex-col justify-start '>
            <h1 className=' bg-[#922E42] md:px-10 px-2 font-title text-1xl md:text-5xl text-nowrap text-[#f3f3f3] max-w-[50%]'>Consulta Ginecológica de Enfermagem</h1>
        </div>

        <div>
            <img src = {Consulta} alt="" className='w-screen '/>
        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>O que é?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
                A consulta ginecológica de enfermagem é um serviço em que enfermeiras especializadas cuidam da saúde ginecológica e reprodutiva das mulheres. <br></br>
                Durante essa consulta, são realizados exames físicos, coletadas informações sobre o histórico de saúde da paciente e oferecidas orientações sobre contracepção, prevenção de DSTs e outros aspectos relacionados à saúde feminina. <br></br>
                A enfermeira pode realizar exames complementares e encaminhar a paciente para outros profissionais de saúde, se necessário. O objetivo é oferecer cuidados abrangentes e promover uma vida saudável para as mulheres.
            </h4>

        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Como é feito?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            Durante uma consulta ginecológica de enfermagem, a enfermeira inicia com uma entrevista para obter o histórico médico da paciente. Em seguida, realiza um exame físico, que inclui a palpação abdominal, exame das mamas e exame pélvico. Dependendo das necessidades da paciente, podem ser coletadas amostras para exames complementares.<br></br>
            Durante a consulta, a enfermeira oferece orientações sobre saúde ginecológica e reprodutiva, métodos contraceptivos e prevenção de DSTs. Se necessário, a paciente é encaminhada para outros profissionais de saúde para tratamento adicional.
            </h4>

        </div>
        
        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Quem deve e quando fazer a consulta?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
                A consulta ginecológica de enfermagem é recomendada para mulheres de todas as idades, especialmente aquelas que são sexualmente ativas, adolescentes, mulheres que planejam engravidar ou evitar gravidezes, e aquelas com preocupações relacionadas à saúde ginecológica. Também é indicada para mulheres com sintomas como dor pélvica, irregularidades menstruais ou qualquer outra preocupação ginecológica.<br></br> 
                Mesmo na ausência de sintomas, é importante fazer consultas ginecológicas de rotina para exames de prevenção, como o exame de Papanicolau. Em resumo, todas as mulheres devem considerar fazer consultas ginecológicas de enfermagem regularmente para garantir uma saúde ginecológica e reprodutiva adequada.
           </h4>

        </div>
    </div>
  )
}

export default ConsultaGin