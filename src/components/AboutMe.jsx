import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Mainha from "../assets/mainha3.png"


const AboutMe = () => {
    const settings = {
        dots: false,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 0,
        initialSlide: 0,
        vertical: true,
        infinite: false,
        verticalSwiping: false,
        responsive: [
          {
            breakpoint: 400,
            settings: {
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            vertical: false,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear",
            }
          },
          {
            breakpoint: 600,
            settings: {
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            vertical: false,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear",
            }
          },
         
          
          ],
      };

  return (
    <div id='Home'  className='flex justify-between  bg-[#64202D] w-full rounded-bl-[50px] md:rounded-bl-[150px]'>
        <div className=''>
            <img src = {Mainha} alt="" className='md:pl-4   pl-2 h-[30vh] md:py-4 md:h-fit pt-2 pb-2'/>
        </div>

        <div className='w-[70%] pl-1'>
            <div className=''>
                <p className='md:pb-10 pb-2 w-fit font-waterfall text-5xl md:text-9xl text-[#D19473]'>Eleni Ramos</p>
            </div>
            <Slider{...settings}>
            {data.map((d) => (
            <div className='shrink w-[80%] h-fit font-infant text-lg md:text-3xl text-[#f3f3f3]'>
                
                <p className='pb-0 md:pb-6'>{d.text}</p>
                
                </div>
            ))}
            </Slider>
        </div>

    </div>
  )
}

export default AboutMe

const data = [
    {
        text:"Enfermeira graduada pela Universidade Estadual Vale do Acaraú especialista em saúde pública e Educação Profissional na área de saúde: enfermagem.", 
    },
    {
        text:"Com mais de 26 anos de experiência, concentra sua atuação na assistência à saúde da mulher, tanto na atenção básica quanto em atendimento particular. ", 
    },
    {
        text:"Lecionou em cursos profissionalizantes na área de saúde, compartilhando seu conhecimento e experiência com futuros profissionais da área.", 
    },
    {
        text:"Sua trajetória profissional é marcada por uma vasta experiência e comprometimento com o bem-estar e a qualidade de vida das mulheres que atende.", 
    },


]