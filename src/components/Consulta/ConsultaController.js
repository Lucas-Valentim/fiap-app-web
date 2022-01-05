import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routers from '../Rotas/Routers'
import store from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import ConsultaView from './ConsultaView'
import carInfo from '../../store/modules/carInfo/reducer';
import { getListaMarcas, getListaMarcasStart } from '../../store/modules/carInfo/actions';

const ConsultaController = () => {

    console.log("CHEGOU NO CONSULTA CONTROLLER");

    //Busca as variaveis do Reducer
    const listaMarcas = useSelector((state) => state.carInfo.listaMarcas);
  
   // Inicia o dispatch
    const dispatch = useDispatch();

    const buscaMarcas = () => {
        console.log("entrou no buscaMarcas");
        var lst = dispatch(getListaMarcas());
        return lst
    }

    return (
        <ConsultaView
            buscaMarcas={buscaMarcas}
            listaMarcas={listaMarcas}/>
    )

}
export default ConsultaController;