import axios from "axios";

const URL_MOCKAPI_VEICULOS =
    "https://6727abed270bd0b9755344ee.mockapi.io/api/veiculos";

const URL_MOCKAPI_ULTIMO_VEICULO =
    "https://6741e396e4647499008f23d9.mockapi.io/api/ultimoVeiculo";

const MOCKAPI = {
    async getVeiculos() {
        try {
            const response = await axios.get(URL_MOCKAPI_VEICULOS); // Aguarda a resposta da API
            return response.data; // Retorna os dados
        } catch (error) {
            console.error("Erro ao carregar veículos:", error);
            throw error; // Lança o erro para que você possa tratá-lo onde for necessário
        }
    },

    async getUltimoVeiculo() {
        try {
            const response = await axios.get(URL_MOCKAPI_ULTIMO_VEICULO);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async postVeiculo(objeto) {
        try {
            const response = await axios.post(URL_MOCKAPI_VEICULOS, objeto);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
};

export default MOCKAPI;
