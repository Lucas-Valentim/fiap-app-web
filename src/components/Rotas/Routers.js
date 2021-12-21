import React from "react";
import { Route, Routes } from 'react-router-dom';
import Cadastro from '../Cadastro/CadastroView';
import Home from '../Home/HomeController';
import Consulta from '../Consulta/consulta';


export default () => {

    return(
        <Routes>
                
            <Route path="/"  element={ <Consulta /> }>
            </Route>

            <Route path="/cadastro"  element={ <Cadastro /> }>
            </Route>
            
            <Route path="/consulta"  element={ <Consulta /> }>
            </Route>
        </Routes>

    )
}

