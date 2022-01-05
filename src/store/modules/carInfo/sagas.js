import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import api from '../../../services/api';
import { getListaMarcas, getListaMarcasSuccess, getListaMarcaseError, getListaMarcasStart } from './actions';

function* getMarcas(){

    try {

        console.log("Starting Connection:");
        yield put(getListaMarcasStart());

        const returnInfo = yield call(api.get, '/listarmarcas');
        
        console.log("Retorno API listarmarcas" + JSON.stringify(returnInfo.data));
        

        if (returnInfo.data instanceof Array){
            console.log("Success Call");
            yield put(getListaMarcasSuccess(returnInfo.data));
        } else {
            console.log("NOT SUCCESS");
            yield put(getListaMarcaseError());
        } 

    }catch(err){
        console.log("Error Call");   
        yield put(getListaMarcaseError());
    }

}

//Junta todos as sagas deste objeto
export default all([
    takeLatest('carInfo/GET_LISTA_MARCAS', getMarcas),  
]);
