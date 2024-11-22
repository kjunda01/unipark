import axios from "axios";

const URL_CONSULTAR_MARCAS =
    "https://veiculos.fipe.org.br/api/veiculos///ConsultarMarcas";
// Tem que passar "codigoTipoVeiculo" - Vai de 1 a 3
// Tem que passar "codigoTabelaReferencia" - 315 é nov/2024

const URL_CONSULTAR_MODELOS =
    "https://veiculos.fipe.org.br/api/veiculos//ConsultarModelos";
// Tem que passar "codigoTipoVeiculo" - Vai de 1 a 3
// Tem que passar "codigoTabelaReferencia" - 315 é nov/2024
// Tem que passar "codigoMarca" - Código referente a marca específica

const URL_CONSULTAR_ANOS =
    "https://veiculos.fipe.org.br/api/veiculos//ConsultarAnoModelo";
// Tem que passar "codigoTipoVeiculo" - Vai de 1 a 3
// Tem que passar "codigoTabelaReferencia" - 315 é nov/2024
// Tem que passar "codigoMarca" - Código referente a marca específica
// Tem que passar "codigoModelo" - Codigo do modelo específico

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

export const getModelos = async (
    codigoTipoVeiculo,
    codigoMarca,
    codigoTabelaReferencia = codigoTabelaPadrao
) => {
    return await axios({
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: URL_CONSULTAR_MODELOS,
        data: {
            codigoTipoVeiculo: codigoTipoVeiculo,
            codigoMarca: codigoMarca,
            codigoTabelaReferencia: codigoTabelaReferencia,
        },
    })
        .then((response) => {
            return response.data.Modelos;
        })
        .catch((error) => console.log(error));
};

export const getAnos = async (
    codigoTipoVeiculo,
    codigoMarca,
    codigoModelo,
    codigoTabelaReferencia = codigoTabelaPadrao
) => {
    return await axios({
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: URL_CONSULTAR_ANOS,
        data: {
            codigoTipoVeiculo: codigoTipoVeiculo,
            codigoMarca: codigoMarca,
            codigoModelo: codigoModelo,
            codigoTabelaReferencia: codigoTabelaReferencia,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};
