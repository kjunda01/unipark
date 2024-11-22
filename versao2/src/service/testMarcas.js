import axios from "axios";

const URL_CONSULTAR_MARCAS =
    "https://veiculos.fipe.org.br/api/veiculos///ConsultarMarcas";
// Tem que passar "codigoTipoVeiculo" - Vai de 1 a 3
// Tem que passar "codigoTabelaReferencia" - 315 é nov/2024

const codigoTabelaPadrao = 315;

export const getMarcas = async (
    codigoTipoVeiculo,
    codigoTabelaReferencia = codigoTabelaPadrao
) => {
    return axios({
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: URL_CONSULTAR_MARCAS,
        data: {
            codigoTipoVeiculo: codigoTipoVeiculo,
            codigoTabelaReferencia: codigoTabelaReferencia,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

let tipo = 3
getMarcas(tipo)
    .then((marcas) => {
        console.log(marcas);
    })
    .catch((error) => {
        console.error("Erro ao processar marcas:", error);
    });
