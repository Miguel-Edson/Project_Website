import React from 'react'

import Papanicolau from "../assets/papanicolau.png"


const ExamePapanicolau = () => {
  return (
    <div className='flex-col px-5 md:px-20 py-10  '>
        <div className='flex-col justify-start '>
            <h1 className=' bg-[#922E42] md:px-10 px-2 font-title text-1xl md:text-5xl text-nowrap text-[#f3f3f3] max-w-[65%]'>Exame de Prevenção do câncer de colo do útero</h1>
        </div>

        <div>
            <img src = {Papanicolau} alt="" className='w-screen '/>
        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>O que é?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
                É um teste realizado para detectar alterações nas células do colo do útero. Este exame também pode ser chamado de esfregaço cervicovaginal e colpocitologia oncótica cervical.<br></br> O nome “Papanicolaou” é uma homenagem ao patologista grego Georges Papanicolaou, que criou o método no início do século. Esse exame é a principal estratégia para detectar lesões precocemente e fazer o diagnóstico da doença bem no início, antes que a mulher tenha sintomas. Pode ser feito em postos ou unidades de saúde da rede pública que tenham profissionais capacitados. É fundamental que os serviços de saúde orientem sobre o que é e qual a importância do exame preventivo, pois sua realização periódica permite que o diagnóstico seja feito cedo e reduza a mortalidade por câncer do colo do útero. O exame preventivo é indolor, simples e rápido.<br></br> Pode, no máximo, causar um pequeno desconforto que diminui se a mulher conseguir relaxar e se o exame for realizado com boa técnica e de forma delicada.

                Para garantir um resultado correto, a mulher não deve ter relações sexuais (mesmo com camisinha) nos dois dias anteriores ao exame, evitar também o uso de duchas, medicamentos vaginais e anticoncepcionais locais nas 48 horas anteriores à realização do exame. É importante também que não esteja menstruada, porque a presença de sangue pode alterar o resultado.

                Mulheres grávidas também podem se submeter ao exame, sem prejuízo para sua saúde ou a do bebê.
            
            </h4>

        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Como é feito?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            Durante a coleta do material para exames ginecológicos, um instrumento chamado espéculo é introduzido na vagina (conhecido popularmente como “bico de pato”, devido ao seu formato). 
            
            O médico realiza a inspeção visual do interior da vagina e do colo do útero. Em seguida, o profissional provoca uma pequena escamação da superfície externa e interna do colo do útero com uma espátula de madeira e uma escovinha. As células colhidas são então colocadas numa lâmina para análise em laboratório especializado em citopatologia.
            
            </h4>

        </div>
        
        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Quem deve e quando fazer o exame preventivo?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            Toda mulher que tem ou já teve vida sexual deve submeter-se ao exame preventivo periódico, especialmente as que têm entre 25 e 59 anos. Inicialmente, 
            
            o exame deve ser feito anualmente. Após dois exames seguidos (com um intervalo de um ano) apresentando resultado normal, o preventivo pode passar a ser feito a cada três anos.
            </h4>

        </div>
    </div>
  )
}

export default ExamePapanicolau