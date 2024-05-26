import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Exame_papanicolau from './pages/Exame_papanicolau'
import Exame_mamas from './pages/Exame_mamas'
import Orientacao from './pages/Orientação_contr'
import Testes from './pages/Testes_rapidos'
import Consulta from './pages/Consulta_gin'
import Queixas from './pages/Queixas'
import Prental from './pages/Pre_natal'



function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/Exame_Papanicolau" element={<Exame_papanicolau/>} ></Route>
                <Route path="/Exame_Mama" element={<Exame_mamas/>} ></Route>
                <Route path="/Orientação" element={<Orientacao/>} ></Route>
                <Route path="/Testes_Rapidos" element={<Testes/>} ></Route>
                <Route path="/Consulta_Ginecologica" element={<Consulta/>} ></Route>
                <Route path="/Queixas_Ginecologicas" element={<Queixas/>} ></Route>
                <Route path="/Pre_Natal" element={<Prental/>} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes