export function getListaMarcas(listaMarcas) {
    console.log("Action getListaMarcas");
    return{
        type: 'carInfo/GET_LISTA_MARCAS_SAGA',
        payload: { listaMarcas },
    };
}

export function getListaMarcasSuccess(listaMarcas) {
    console.log("Aciont getListaMarcasSuccess");
    return{
        type: 'carInfo/GET_LISTA_MARCAS_SUCCESS',
        payload: { listaMarcas },
    };
}

export function getListaMarcaseError() {
    console.log("Aciont getListaMarcasError");
    return{
        type: 'carInfo/GET_LISTA_MARCAS_ERROR',
        payload: { },
    };
}
