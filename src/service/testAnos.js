import axios from "axios";

const URL_CONSULTAR_ANOS =
    "https://veiculos.fipe.org.br/api/veiculos//ConsultarAnoModelo";
// Tem que passar "codigoTipoVeiculo" - Vai de 1 a 3
// Tem que passar "codigoTabelaReferencia" - 315 é nov/2024
// Tem que passar "codigoMarca" - Código referente a marca específica
// Tem que passar "codigoModelo" - Codigo do modelo específico

const codigoTabelaPadrao = 315;

const getAnos = async (
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

const tipo = 1;
const marca = 1;
const modelo = 1;

getAnos(tipo, marca, modelo)
    .then((modelo) => {
        console.log(modelo);
    })
    .catch((error) => {
        console.error("Erro ao processar modelos:", error);
    });
