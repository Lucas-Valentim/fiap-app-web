import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import api from '../../../services/api';
import { getListaMarcas, getListaMarcasSuccess, getListaMarcaseError } from './actions';

function* getMarcas({ payload }){

    try{

        console.log("entrou no SAGA 1 ");
        const  {listaMarcas} = payload;

        console.log("entrou no SAGA 2");

      //  yield put(getListaMarcas(listaMarcas));

        console.log("entrou no SAGA 3 ");

        const returnInfo = yield call(api.get, '/veiculos/listarmarcas');
        
        console.log("Retorno API listarmarcas" + returnInfo.data);
        

        if (returnInfo.data instanceof Array){
            console.log("Success Call");
            yield put(getListaMarcasSuccess(returnInfo.data));
        } else {
            console.log("NOT SUCCESS");
            yield put(getListaMarcaseError());
        } 

    }catch(err){
        console.log("Error Call");    
    }

}

//Junta todos as sagas deste objeto
export default all([
    takeLatest('carInfo/GET_LISTA_MARCAS', getMarcas),  
]);
