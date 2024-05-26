import React from 'react'

import Orc from "../assets/consulta.png"


const Orientacao = () => {
  return (
    <div className='flex-col px-5 md:px-20 py-10  '>
        <div className='flex-col justify-start '>
            <h1 className=' bg-[#922E42] md:px-10 px-2 font-title text-1xl md:text-5xl text-nowrap text-[#f3f3f3] max-w-[30%]'>Orientação Contraceptiva</h1>
        </div>

        <div>
            <img src = {Orc} alt="" className='w-screen '/>
        </div>

        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>O que é?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            A orientação contraceptiva para mulheres é um serviço oferecido por profissionais de saúde, como ginecologistas e enfermeiras obstetras, para fornecer informações detalhadas sobre os métodos contraceptivos disponíveis. Durante a orientação, são discutidas as opções contraceptivas, seus benefícios, riscos e como usá-las corretamente. O objetivo é capacitar as mulheres a fazerem escolhas informadas sobre sua saúde reprodutiva, contribuindo para uma vida sexual e reprodutiva saudável e segura.
            </h4>

        </div>

       
        
        <div className='py-6'>
           <h1 className='border-l-8 border-[#922E42] px-2 md:px-4 font-title text-4xl md:text-5xl text-[#1e1e1e]'>Quem deve e quando fazer o exame preventivo?</h1>

            <h4 className='pt-6 py-4 px-4 font-infant font-medium text-xl text-justify'>
            Uma consulta contraceptiva é recomendada para mulheres em diferentes momentos da vida. Isso inclui quando uma mulher se torna sexualmente ativa e deseja discutir opções contraceptivas para prevenir gravidez indesejada e proteger contra DSTs.<br></br>
            Outras situações incluem quando há consideração de troca de método contraceptivo, planejamento familiar, pós-parto e antes de uma viagem internacional. Em resumo, uma consulta contraceptiva é indicada sempre que uma mulher precisa de orientação sobre métodos contraceptivos para tomar decisões informadas sobre sua saúde reprodutiva.




            </h4>

        </div>
    </div>
  )
}

export default Orientacao