import produce from "immer";

const INITIAL_STATE = { 
    listaMarcas: [],
    listaModelos: [],
    listaAno: [],
    listaCor: [],
    km: 0,
    placa: '',
    listaFiliais: [],
    descricao: '',
    isConnection: false,
    Success: 0
};

export default function carInfo(state = INITIAL_STATE, {type, payload}){

    return produce(state, (draft) => {

        switch(type) {

            case 'carInfo/GET_LISTA_MARCAS': {
                console.log("REDUCER carInfo/GET_LISTA_MARCAS");
                break;
            }
                case 'carInfo/GET_LISTA_MARCAS_START': {
                console.log("REDUCER carInfo/GET_LISTA_MARCAS_START");
                draft.isConnection = true;
                draft.Success = 0;
                break;            
            }
            case 'carInfo/GET_LISTA_MARCAS_SUCCESS': {
                console.log("REDUCER carInfo/GET_LISTA_MARCAS_SUCCESS");
                draft.listaMarcas = payload.listaMarcas;
                draft.isConnection = false;
                draft.Success = 1;
                break;
            }
            case 'carInfo/GET_LISTA_MARCAS_ERROR': {
                console.log("REDUCER carInfo/GET_LISTA_MARCAS_ERROR");
                draft.listaMarcas = [];
                draft.isConnection = false;
                draft.Success = 2;
                break;
            }

            default:
        }
    });
}
