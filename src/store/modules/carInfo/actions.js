export function getListaMarcas() {
    console.log("Action getListaMarcas");
    return{
        type: 'carInfo/GET_LISTA_MARCAS',
    };
}

export function getSuccess(veiculo) {
    console.log("Aciont getSuccess");
    return{
        type: 'carInfo/GET_SUCCESS',
        payload: { veiculo },
    };
}

export function getError(err) {
    console.log(`Aciont getError: ${err}`);
    return{
        type: 'carInfo/GET_ERROR',
        payload: { },
    };
}

export function getListaModelos(param) {
    console.log("Action getListaModelos");
    return{
        type: 'carInfo/GET_LISTA_MODELOS',
        payload: {param}
    };
}

export function getListaCores() {
    console.log("Action getListaCores");
    return{
        type: 'carInfo/GET_LISTA_CORES',
    };
}

export function getCor(param) {
    console.log("Action getCor");
    return{
        type: 'carInfo/GET_COR',
        payload: {param}
    };
}

export function getListaFiliais() {
    console.log("Action getListaFiliais");
    return{
        type: 'carInfo/GET_LISTA_FILIAIS',
    };
}

export function getListaAnos() {
    console.log("Action getListaAnos");
    return{
        type: 'carInfo/GET_LISTA_ANOS',
    };
}

