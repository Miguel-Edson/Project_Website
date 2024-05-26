import React from 'react'
import Clinica from "../assets/clinica.png"
import Bird from "../assets/passinm.png"


const Localization = () => {
  return (
    <div id='Localização' className='p-16 '>
        <div className='flex  justify-center '>
                <h1 className=' whitespace-nowrap text-center font-title text-5xl md:text-9xl text-[#922E42]  '>Conheça nossa Clínica</h1>
                <img src = {Bird} alt="" className=' h-fit  max-w-[20%] py-1 max-h-40 md:max-h-[20vh] w-fit  '/>
        </div>

        <div className='md:flex justify-between items-center '>
            <div className=' text-center pt-[12%] md:px-6 px-2 flex-col justify-between md:w-[50%] w-full'>
                <p  className='pb-4 md:pb-10 font-infant text-lg md:text-3xl text-[#922E42]	' >Praça São Francisco, 1097, Centro,Tianguá - CE. </p>
                <p  className='pb-4 md:pb-10 font-infant text-lg md:text-3xl text-[#922E42]	' >Consultório localizado na clínica da Dra. Thaís. </p>
                <p  className='pb-4 md:pb-10 font-infant text-lg md:text-3xl text-[#922E42]	' >Praça do IET - Ao lado da Igreja São Francisco. </p>    
            </div>
            <div className='flex justify-center md:justify-normal w-[100%]  md:w-[50%]'>
                <img src = {Clinica} alt="" className='md:px-8 h-[40vh] md:h-fit py-4 '/>
            </div>
        </div>

        <div className='flex justify-center pt-10'>
            <iframe className='border-4 border-[#B1344D] rounded-3xl w-[1300px] '  height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=250&amp;hl=en&amp;q=Pra%C3%A7a%20S%C3%A3o%20Francisco,%201097,%20Centro,%20%20Tiangu%C3%A1%20-%20CE+(Consult%C3%B3rio)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
        </div>
    </div>
  )
}

export default Localization