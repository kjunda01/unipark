import axios from "axios";

const URL_PADRAO_FIREBASE = "https://unipark-a9b95-default-rtdb.firebaseio.com";

export const getVeiculos = axios
    .get(URL_PADRAO_FIREBASE + "/veiculos.json")
    .then((response) => response.data);



