import React from 'react'

import Logo from "../assets/LogoCompleta.png"

import { FaWhatsappSquare , FaInstagramSquare  } from "react-icons/fa";

const End = () => {
  return (
    <div className='overflow-hidden flex justify-between dark:bg-[#1e1e1e] bg-[#922E42] md:h-52 h-20 max-h-80'>
        <div className=' h-20 md:h-[100%] md:w-[30%] w-[30%]'>
            <img src={Logo} className=' md:h-[100%] h-[100%] px-2  md:px-[10vh] md:w-[100%] w-[100%]'/>
        </div>
        <div className='text-[#f3f3f3] min-w-[30%] flex flex-col justify-center items-center text-[0.6vh] md:text-sm'>
            <p className='md:pb-[10vh] pb-2  text-center'>Praça São Francisco, 1097, Centro, Tianguá - CE <br></br>
                Praça do IET - Ao lado da Igreja São Francisco</p>
            <p className=''>© Todos os direitos reservados</p>

        </div>
        <div className='min-w-[30%] flex justify-center items-center'>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5588999734958">  <FaWhatsappSquare className="text-[#f3f3f3]  mx-4 md:mx-5 hover:size-[50px]  size-[30px]"   /> </a>
            <a target="_blank" href="https://www.instagram.com/eleni.ramos.enf/"> <FaInstagramSquare className="text-[#f3f3f3] mx-4 md:mx-5 hover:size-[50px] size-[30px] "   /> </a>

        </div>
    
    </div>

  )
}

export default End