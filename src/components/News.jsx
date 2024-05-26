import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Onda from "../assets/onda_2.png"
import OndaDark from "../assets/onda_2_dark.png"

import Noticia1 from "../assets/noticia1.jpg"
import Noticia2 from "../assets/noticia2.png"
import Noticia3 from "../assets/noticia3.png"
import Noticia4 from "../assets/noticia4.png"
import Noticia5 from "../assets/noticia5.png"

const News = ({darkMode}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024 ,
        settings: {

          arrows:true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600 ,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
      ],
  };
  return (
    
    <div className='relative'>
        {darkMode ? <img src={OndaDark}></img> : <img src={Onda}></img>}
        
        <div className=' bg-[#DEA688] flex justify-center items-center'>  
            <h1 className=' font-title text-5xl md:text-9xl text-[#f3f3f3] absolute '>Informativos</h1>
        </div>
        
        <div className=' bg-[#DEA688] dark:bg-[#775543]  '>
        
        <div className='w-11/12 m-auto '>
          <div className='bg-[#DEA688]   dark:bg-[#775543]  pt-4   '>
            <Slider className=''{...settings}>
              {data.map((d) => (
                <div className='bg-[#f3f3f3] text-[#64202D] rounded-xl mt-20 mb-10 h-[100] max-w-64'>
                  <div className='flex justify-center items-center'>
                    <img src = {d.img} alt="" className='rounded-t-xl w-full h-40'/>
                  </div>
                  
                  <div className=' border-b-4 border-[#D19473]  dark:border-[#775543]  pt-4 flex flex-col justify-center items-center gap-4  p-4 max-w-fit' >
                    <p className='inline-block h-24 pb-16 text-Inter font-bold  overflow-ellipsis  line-clamp-2 text-[#D19473] '>{d.name}</p>
                    <p className='inline-block h-24 text-sm text-gray-500 text-ellipsis  overflow-x-hidden overflow-y-auto line-clamp-2 scrollbar-thin scrollbar-none'>{d.complement} </p>
                    <a target="_blank" href={d.link}>
                      <button  className='bg-[#f3f3f300] text-[#64202D] text-xs px-2 py-0'> Continue lendo &gt;&gt; </button>
                    </a>
                  </div>

                  <div className='px-3   max-w-[30%] whitespace-nowrap '>
                    <p className=' font-thin font-xs '> {d.data}</p>
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

export default News

const data = [
  {
    name: "Programa ‘Toda Mulher’ esclarece sobre mudanças hormonais e saúde feminina" ,
    complement:"Convidadas foram a psicoterapeuta clínica, autora do e-book “Reacendendo o fogo da paixão”, Evelyn Lindholm, e a ginecologista e obstetra Andressa Benvindo ...",
    img: Noticia1 ,
    link:"https://www.al.ma.leg.br/sitealema/programa-toda-mulher-esclarece-sobre-mudancas-hormonais-e-saude-feminina/",
    data:"9 de Abril de 2024"
  },
  {
    name: "Saúde feminina sob uma perspectiva ampliada" ,
    complement:"A médica Elizabeth Alexandre aponta como a saúde das mulheres vai além de cuidados com as mamas e os órgãos reprodutores - e quais as particularidades ...",
    img: Noticia2 ,
    link:"https://saude.abril.com.br/podcast/saude-feminina-sob-uma-perspectiva-ampliada",
    data:"22 de Abril de 2024"
  },
  {
    name: "Saúde da mulher: consultas e exames de rotina básicos podem prevenir inúmeras doenças" ,
    complement:"No mês de maio, comemora-se o Dia Internacional de Ação pela Saúde da Mulher (28/5), data que chama a atenção para os cuidados com a saúde feminina... ",
    img: Noticia3 ,
    link:"https://niddedigital.com/saude-da-mulher-consultas-e-exames-de-rotina-basicos-podem-prevenir-inumeras-doencas/",
    data:"21 de Abril de 2024"
  },
  {
    name: "Drauzio Varella explica síndrome dos ovários policísticos e mioma" ,
    complement:"Sangramento intenso, cólicas fortes, irregularidade no ciclo menstrual. Esses são sintomas de doenças ginecológicas comuns que, se não forem tratadas, podem acabar em problemas graves... ",
    img: Noticia4 ,
    link:"https://g1.globo.com/fantastico/quadros/mulher-saude-intima/noticia/2013/12/drauzio-varella-explica-sindrome-dos-ovarios-policisticos-e-mioma.html",
    data:"9 de Abril de 2024"
  },
  {
    name: "Porque a menopausa causa tanto calor?" ,
    complement:"A Dra. Bruna Merlo, Ginecologista da HAS Clínica, explica as dúvidas frequentes sobre essa condição feminina. A menopausa é um processo biológico que ocorre como parte do envelhecimento da mulher. É caracterizada pela interrupção fisiológica dos ciclos menstruais devido ao fim da ",
    img: Noticia5 ,
    link:"https://niddedigital.com/porque-a-menopausa-causa-tanto-calor/",
    data:"12 de Abril de 2024"
  },


]