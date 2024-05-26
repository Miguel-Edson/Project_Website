import React, { useState } from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { FaWhatsappSquare , FaInstagramSquare  } from "react-icons/fa";

import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Logo from "../assets/image.png"
import logo_branca from "../assets/logo_branca.png"


const Navbar = () => {
        const [nav, setNav] = useState(false)
        const handleNav = () =>{
            setNav(!nav)
        }
       

    return(
        <div id="Home2" className= "sticky top-0 z-10 border-b-2 border-[#ababab] dark:border-[#7c6f6f]">
            <div className ='relative bg-[rgb(243,243,243)] dark:bg-[#1E1E1E] flex justify-between items-center h-[10vh] min-w-[500] max-w-screen max-h-52 mx-auto px-4'>
            
          
                <img className=" mx-10 py-1 max-w-[50%] max-h-[100%]" src={Logo}/>
                    
                <ul className="hidden md:flex text-xl font-bold text-[#B1344D] cursor-pointer align-items items-center z-">
                    <li className="p-4 hover:text-[#be6274]"><Link to="/#Start" smooth>Home </Link></li> 
                    <li className="p-4 hover:text-[#be6274]"><Link to="/#Serviços" smooth>Serviços</Link></li> 
                    <li className="p-4 hover:text-[#be6274] whitespace-nowrap "><Link to="/#Saiba_mais" smooth>Saiba mais</Link></li>
                    <li className="p-4 hover:text-[#be6274]"><Link to="/#Localização" smooth>Localização</Link></li>
                    <li className="p-2 "> <a target="_blank" href="https://api.whatsapp.com/send?phone=5588999734958"> <FaWhatsappSquare className="hover:text-[#be6274]"  size={40}/> </a> </li>
                    <li className="p-2 pr-4 "><a target="_blank" href="https://www.instagram.com/eleni.ramos.enf/"> <FaInstagramSquare  className="hover:text-[#be6274]" size={40} /> </a></li>
                </ul>

                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose className="z-10 absolute top-4 right-4" size={30} color="#f3f3f3"/> : <AiOutlineMenu  size={30} color="#B1344D"/>}
                </div>
                
                <div className={nav ? '  md:hidden absolute left-0 top-0 w-[100%] h-96 bg-[#922E42] ease-in-out duration-500 font-bold    ': 'fixed top-[-100%]'}>
                
                    <img className=" h-20 py-5 px-14 "  src={logo_branca}/>

                    <ul className="text-[#f3f3f3] flex-col text-xl font-inter justify-center text-center pt-4 uppercase">
                        <li className="p-4 hover:text-[#1e1e1e]"><Link to="/#Start" smooth>Home </Link></li> 
                        <li className="p-4 hover:text-[#1e1e1e]"><Link to="/#Serviços" smooth>Serviços</Link></li> 
                        <li className="p-4 hover:text-[#1e1e1e] whitespace-nowrap "><Link to="/#Saiba_mais" smooth>Saiba mais</Link></li>
                        <li className="p-4 hover:text-[#1e1e1e]"><Link to="/#Localização" smooth>Localização</Link></li>
                    </ul>
                
                </div>

            </div>
        </div>

    )
}

export default Navbar