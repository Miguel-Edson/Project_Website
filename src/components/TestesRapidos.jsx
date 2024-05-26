import React from 'react'

import Teste from "../assets/teste_rapido.png"


const TestesRapidos = () => {
  return (
    <div className='flex-col px-5 md:px-20 py-10  '>
        <div className='flex-col justify-start '>
            <h1 className=' bg-[#922E42] md:px-10 px-2 font-title text-1xl md:text-5xl text-nowrap text-[#f3f3f3] max-w-[40%]'>Testes rápidos para ISTs</h1>
        </div>

        <div>
            <img src = {Teste} alt="" className='w-screen '/>
        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>O que é?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            Um teste rápido de Infecções Sexualmente Transmissíveis (IST) é um método conveniente e rápido para detectar a presença de infecções como HIV, sífilis, clamídia e gonorréia. Geralmente feito com amostras de sangue, urina ou secreções genitais, fornece resultados em minutos. <br></br>
            É uma opção prática para mulheres que desejam um diagnóstico rápido de ISTs, especialmente em clínicas de saúde sexual ou durante campanhas de testagem. No entanto, é importante lembrar que, em alguns casos, testes adicionais podem ser necessários para confirmar os resultados. <br></br>
            A consulta com um profissional de saúde é sempre recomendada para aconselhamento e orientação adequada.
            </h4>

        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Como é feito?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            Durante o teste rápido de Infecções Sexualmente Transmissíveis (IST), a mulher fornece uma amostra, que pode ser de sangue, urina ou secreções genitais, dependendo da infecção que está sendo testada. 
            A amostra é então colocada em um dispositivo de teste que contém reagentes específicos para a infecção em questão. Os resultados são geralmente disponibilizados em poucos minutos, dependendo do tipo de teste e da infecção detectada.<br></br>
            É importante ressaltar que, em alguns casos, podem ser necessários testes adicionais para confirmar os resultados. Uma consulta com um profissional de saúde é sempre recomendada para aconselhamento e orientação adequada sobre testes e tratamento de ISTs.
            </h4>

        </div>
        
        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Quem deve e quando fazer o exame?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            O teste rápido de Infecções Sexualmente Transmissíveis (IST) é recomendado para mulheres que são sexualmente ativas ou que tenham múltiplos parceiros sexuais. Idealmente, deve ser realizado regularmente como parte dos cuidados de saúde preventivos.
A frequência dos testes pode variar dependendo de vários fatores, como o número de parceiros sexuais, a prática de sexo desprotegido e o histórico de infecções anteriores. Além disso, é importante fazer o teste se houver qualquer sintoma de uma possível infecção, como dor ao urinar, corrimento anormal, dor abdominal ou pélvica, úlceras genitais, entre outros.
Em geral, é aconselhável fazer o teste de ISTs pelo menos uma vez por ano, ou com maior frequência, dependendo do estilo de vida sexual e dos fatores de risco individuais. É sempre melhor discutir com um profissional de saúde sobre a frequência ideal dos testes, levando em consideração suas circunstâncias específicas.
            </h4>

        </div>
    </div>
  )
}

export default TestesRapidos