import React from "react";
import { Route, Routes } from 'react-router-dom';
import Cadastro from '../Cadastro/CadastroView';
import Home from '../Home/HomeController';
import ConsultaController from "../Consulta/ConsultaController";


export default () => {
       
    return(
        <Routes>
                
            <Route path="/"  element={ <ConsultaController /> }> 
            </Route>

            <Route path="/cadastro"  element={ <Cadastro /> }>
            </Route>
            
            <Route path="/consulta"  element={ <ConsultaController /> }>
            </Route>
        </Routes>

    )


}

