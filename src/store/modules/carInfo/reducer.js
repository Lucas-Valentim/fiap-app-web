import produce from "immer";

const INITIAL_STATE = { 
    listaMarcas: [],
    listaModelos: [],
    listaAno: [],
    listaCor: [],
    km: 0,
    placa: '',
    listaFiliais: [],
    descricao: ''};

export default function carInfo(state = INITIAL_STATE, {type, payload}){

    return produce(state, (draft) => {

        switch(type) {

            case 'carInfo/GET_LISTA_MARCAS': {
                console.log("REDUCER carInfo/GET_LISTA_MARCAS" + payload.listaMarcas);
                draft.listaMarcas = payload.listaMarcas;
                break;            
            }
            case 'carInfo/GET_LISTA_MARCAS_SUCCESS': {
                console.log("REDUCER carInfo/GET_LISTA_MARCAS_SUCCESS" + String(payload.listaMarcas));
                draft.listaMarcas = payload.listaMarcas;
                break;
            }
            case 'carInfo/GET_LISTA_MARCAS_ERROR': {
                console.log("REDUCER carInfo/GET_LISTA_MARCAS_ERROR");
                draft.listaMarcas = [];
                break;
            }

            default: return state;
        }
    });
}
