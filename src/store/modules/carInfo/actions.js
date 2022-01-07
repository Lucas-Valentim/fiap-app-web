export function getListaMarcas() {
    console.log("Action getListaMarcas");
    return{
        type: 'carInfo/GET_LISTA_MARCAS',
    };
}

export function getListaMarcasStart() {
    return {
        type: 'carInfo/GET_LISTA_MARCAS_START',
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
