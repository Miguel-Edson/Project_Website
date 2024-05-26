import React, { useState } from 'react'

// Componentes
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs';
import Offers from '../components/Offers';
import AboutMe from '../components/AboutMe';
import Localization from '../components/Localization';
import News from '../components/News';
import End from '../components/End';

// Ícones
import { VscColorMode } from "react-icons/vsc";

export function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  }

 

  return (
    
    <div id='Start' className= {`${darkMode && "dark"} `}>
      <div className=' dark:bg-[#1e1e1e] bg-[#f3f3f3] scrollbar scrollbar-thumb-red-700'>
        <div className='flex-col justify-center items-center max-w-[1500px] m-auto ' >       
          <Navbar darkMode={darkMode} className="z-20"/>
          <VscColorMode className=" z-10 absolute top-5 left-4 md:right-6 dark:text-[#f3f3f3] text-[#1e1e1e] " size={20} 
                        onClick= {toggleDarkMode}/> 
          <AboutMe/>
          <Offers/> 
          <AboutUs darkMode={darkMode} /> 
          <Localization/>
          <News darkMode={darkMode}/>
          <End/>
        </div>
      </div>
    </div>
   
  );
}

export default App;
