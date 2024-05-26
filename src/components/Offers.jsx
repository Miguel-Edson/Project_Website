import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import { Link } from 'react-router-dom'

import '../../src/index.css';

import Line from "../assets/linhas2.png"
import Papanicolau from "../assets/papanicolau.png"
import Exame_Mama from "../assets/exame_mama.png"
import Consulta from "../assets/consulta.png"
import Consulta2 from "../assets/consulta2.jpg"
import Consulta3 from "../assets/consulta3.jpg"
import Teste_Rapido from "../assets/teste_rapido.png"
import Prenatal from "../assets/prenatal.png"

const Offers = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {

          arrows:true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      }
      ],
  };
  return (
    
    <div id='Serviços' className='relative pt-10'>
      <div className='flex justify-center items-center'>  
        <h1 className=' font-title text-4xl md:text-8xl text-[#D19473] absolute '>Linhas de Cuidado</h1>
        <img className="shrink   w-fit max-w-[80%] " src={Line} alt=''/>
      </div>
     
    <div className='pb-3'>
      
      <div className='w-10/12 m-auto '>
        <div className='mt-10   '>
          <Slider {...settings}>
            {data.map((d) => (
              <div className='bg-[#D19473] font-infant  text-[#f3f3f3] rounded-xl md:text-3xl text-sm md:h-96 h-72 max-w-64 '>
                <div className='flex justify-center items-center'>
                  <img src = {d.img} alt="" className='rounded-t-xl p-[2px] md:h-52 h-32'/>
                </div>
                
                <div className='text-center pt-4 flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='md:pb-16 pb-4 text-Inter md:text-2xl text-lg h-24 '>{d.name}</p>
                  <a className='border-2 rounded-full px-3 bg-[f3f3f3] text-[#f3f3f3]'>
                  <Link to= {d.path} smooth target="_blank"> Saiba mais</Link>
                  </a>
                </div>

                <div className='text-center pt-4 flex flex-col justify-center items-center gap-4 p-4'>
                 
                </div>

              </div>
            ))}
          
            </Slider>
    
        </div>
      </div>
    
    
    
    
    
    
    
    </div>

</div> 

  )
}

export default Offers

const data = [
  {
    name: "Exame de Prevenção do câncer de colo do útero" ,
    img: Papanicolau ,
    path: "/Exame_Papanicolau",
  },
  {
    name: "Exame Clínico das Mamas" ,
    img: Exame_Mama ,
    path: "/Exame_Mama",
  },
  {
    name: "Orientação Contraceptiva" ,
    img: Consulta ,
    path: "/Orientação",
  },
  {
    name: "Testes rápidos para ISTs" ,
    img: Teste_Rapido ,
    path: "/Testes_Rapidos",
  },
  {
    name: "Consulta ginecológica de Enfermagem" ,
    img: Consulta2 ,
    path: "/Consulta_Ginecologica",
  },
  {
    name: "Queixas genitais e Saúde sexual" ,
    img: Consulta3 ,
    path: "/Queixas_Ginecologicas",
  },
  {
    name: "Acompanhamento Pré-Natal" ,
    img: Prenatal ,
    path: "/Pre_Natal",
  },


]