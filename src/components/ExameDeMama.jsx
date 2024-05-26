import React from 'react'

import Mama from "../assets/exame_mama.png"


const Exame_mamas = () => {
  return (
    <div className='flex-col px-5 md:px-20 py-10  '>
        <div className='flex-col justify-start '>
            <h1 className=' bg-[#922E42] md:px-10 px-2 font-title text-1xl md:text-5xl text-nowrap text-[#f3f3f3] max-w-[30%]'>Exame de Mamas</h1>
        </div>

        <div>
            <img src = {Mama} alt="" className='w-screen '/>
        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>O que é?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            O exame de mamas, também conhecido como autoexame das mamas ou autoavaliação mamária, é um procedimento simples que as mulheres podem realizar regularmente para detectar quaisquer alterações nas suas mamas. Este exame é importante na detecção precoce de possíveis sinais de câncer de mama, bem como de outras condições mamárias.

O objetivo principal do exame de mamas é detectar quaisquer alterações na textura, tamanho, forma ou aparência da mama, bem como qualquer protuberância ou nódulo que possa estar presente. As mulheres são encorajadas a realizar o autoexame das mamas mensalmente, geralmente alguns dias após o término do ciclo menstrual, quando as mamas estão menos sensíveis e inchadas.
            </h4>

        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Como é feito?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            Durante o exame clínico das mamas, a pessoa deitada na maca enquanto o médico ou enfermeiro toca e examina cuidadosamente suas mamas e as áreas próximas. Eles olham e sentem para procurar por qualquer coisa estranha, como caroços ou mudanças na textura da pele. O profissional pode também examinar os mamilos e as áreas das axilas. Se encontrarem algo preocupante, eles podem sugerir mais exames para entender melhor o problema.
            </h4>

        </div>
        
        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Quem deve e quando fazer o exame de mamas?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            O exame clínico das mamas é recomendado para mulheres como parte de seus cuidados de saúde preventivos. Embora as diretrizes possam variar, muitos profissionais de saúde sugerem que as mulheres comecem a fazer o exame anualmente a partir dos 25 anos. No entanto, isso pode variar de acordo com o histórico médico pessoal e familiar, bem como outros fatores de risco. Além disso, o autoexame das mamas também é importante para a detecção precoce de problemas mamários. O melhor é discutir com o médico sobre a frequência e o momento adequados para os exames com base nas circunstâncias individuais.
            </h4>

        </div>
    </div>
  )
}

export default Exame_mamas