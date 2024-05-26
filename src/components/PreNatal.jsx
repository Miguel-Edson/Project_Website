import React from 'react'

import preN from "../assets/prenatal.png"


const PreNatal = () => {
  return (
    <div className='flex-col px-5 md:px-20 py-10  '>
        <div className='flex-col justify-start '>
            <h1 className=' bg-[#922E42] md:px-10 px-2 font-title text-1xl md:text-5xl text-nowrap text-[#f3f3f3] max-w-[40%]'>Acompanhamento Pré-Natal</h1>
        </div>

        <div>
            <img src = {preN} alt="" className='w-screen '/>
        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>O que é?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            O acompanhamento pré-natal realizado por enfermeiros é um serviço fundamental no cuidado da saúde materno-infantil. Durante o pré-natal, os enfermeiros realizam uma série de atividades que visam monitorar a saúde da gestante e do feto, além de oferecer suporte emocional, educacional e prático à mulher grávida e sua família.<br></br> 
            Isso inclui a realização de exames físicos regulares para avaliar o progresso da gestação, o rastreamento de condições médicas que possam afetar a gravidez, a educação sobre hábitos saudáveis de vida, o preparo para o parto e o pós-parto, e a coordenação dos cuidados com outros profissionais de saúde, quando necessário.<br></br> 
            O acompanhamento pré-natal realizado por enfermeiros desempenha um papel crucial na promoção de uma gravidez saudável e na preparação da gestante para a maternidade, oferecendo cuidados compassivos e baseados em evidências.
            </h4>

        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Como é feito?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            Durante uma consulta pré-natal conduzida por enfermeiros, o processo começa com uma entrevista detalhada para coletar informações sobre o histórico médico da gestante e suas preocupações atuais. Em seguida, a enfermeira realiza um exame físico completo, que inclui medição da pressão arterial, avaliação do peso e altura uterina, entre outros. Durante a consulta, são fornecidas orientações educacionais sobre nutrição, exercícios, sinais de trabalho de parto e cuidados pós-parto.<br></br> 
            Dependendo das necessidades da gestante, podem ser realizados rastreamentos adicionais e encaminhamentos para outros profissionais de saúde. Ao longo de todo o processo, a enfermeira oferece apoio emocional à gestante, garantindo um ambiente acolhedor e seguro para discutir suas preocupações. O objetivo é promover uma gravidez saudável e preparar a gestante para a maternidade, oferecendo cuidados completos e personalizados.
            </h4>

        </div>
        
        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Quem deve e quando fazer o exame preventivo?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            O acompanhamento pré-natal realizado por enfermeiros é recomendado para todas as mulheres grávidas, independentemente da idade, estado de saúde ou história obstétrica anterior. Idealmente, o acompanhamento pré-natal deve começar o mais cedo possível após a confirmação da gravidez, de preferência nas primeiras semanas.<br></br>

            É especialmente importante que as mulheres grávidas iniciem o acompanhamento pré-natal assim que souberem que estão grávidas, pois isso permite que recebam cuidados adequados desde o início da gestação, identificando e tratando precocemente quaisquer problemas de saúde que possam surgir durante a gravidez.<br></br>

            Além disso, o acompanhamento pré-natal é crucial para monitorar o desenvolvimento do feto, garantir a saúde da gestante e prepará-la para o parto e para a maternidade. É uma oportunidade para receber orientações sobre hábitos de vida saudáveis, nutrição adequada, exercícios físicos, opções de parto e cuidados com o recém-nascido.<br></br>
            </h4>

        </div>
    </div>
  )
}

export default PreNatal