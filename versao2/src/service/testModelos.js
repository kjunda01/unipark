import axios from "axios";

const URL_CONSULTAR_MODELOS =
    "https://veiculos.fipe.org.br/api/veiculos/ConsultarModelos";
// Tem que passar "codigoTipoVeiculo" - Vai de 1 a 3
// Tem que passar "codigoTabelaReferencia" - 315 é nov/2024
// Tem que passar "codigoMarca" - Código referente a marca específica

const codigoTabelaPadrao = 315;

const getModelos = async (
    codigoTipoVeiculo,
    codigoMarca,
    codigoTabelaReferencia = codigoTabelaPadrao,
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

let tipo = 1
let marca = 1

getModelos(tipo, marca)
    .then((marca) => {
        console.log(marca)
    })
    .catch((error) => {
        console.error("Erro ao processar marcas:", error);
    });
