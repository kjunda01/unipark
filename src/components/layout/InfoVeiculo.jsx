import styled from "styled-components";
import { getUltimoVeiculo } from "../../service/ApiMockApi";
import axios from "axios";
import { useEffect, useState } from "react";

// Estilo do componente de fundo
const CustomBackground = styled.div`
    position: relative;
    width: 671px;
    background: #d9d9d9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`;

// Estilo do título do box
const BoxTitulo = styled.div`
    width: 100%;
    height: 8vh;
    background: #021d34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    color: #ffffff;
    justify-content: space-between;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

// Estilo do título principal (identificação do veículo)
const Titulo = styled.h1`
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

// Estilo do conteúdo principal
const BoxConteudo = styled.div`
    flex: 1;
    background: rgba(51, 183, 119, 0.2);
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    border-radius: 10px;
`;

// Estilo da tabela
const Tabela = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr; /* Primeira coluna maior */
    grid-gap: 10px;
    width: 100%;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

// Estilo da linha da tabela
const Linha = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #021d34;
    text-align: left;
    word-wrap: break-word;
    word-break: break-word;
    padding: 5px;
    border: 1px solid transparent;
    & strong {
        font-weight: 700;
    }
`;

// Estilo do box de status
const BoxStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

// Estilo do label de status
const StatusLabel = styled.h3`
    font-weight: 700;
    font-size: 22.75px;
    line-height: 27px;
    color: #021d34;
`;

// Estilo do valor de status, com a possibilidade de customização de cor
const StatusValue = styled.h1`
    font-weight: 700;
    font-size: 33.33px;
    line-height: 39px;
    color: ${(props) => (props.status === "PERMITIDO" ? "#33b777" : "#ff4c4c")};
    margin: 0;
`;

const InfoVeiculo = () => {
    const [ultimoVeiculo, setUltimoVeiculo] = useState([]);

    // useEffect para buscar os dados ao montar o componente
    useEffect(() => {
        const fetchUltimoVeiculo = async () => {
            try {
                const data = await getUltimoVeiculo();
                setUltimoVeiculo(data);
            } catch (error) {
                console.error("Erro ao carregar último veículo:", error);
            }
        };

        fetchUltimoVeiculo();
    }, []);
    
    return (
        <CustomBackground>
            <BoxTitulo>
                <Titulo>
                    {ultimoVeiculo.length > 0 ? (
                        ultimoVeiculo.map((x) => (
                            <div key={x.id}>{x.placa}</div>
                        ))
                    ) : (
                        <p>Carregando...</p>
                    )}
                </Titulo>
                <Titulo>BRA0S17</Titulo>
            </BoxTitulo>
            <BoxConteudo>
                <Tabela>
                    <Linha>
                        <strong>Tipo de veículo:</strong> Carro
                    </Linha>
                    <Linha>
                        <strong>Marca:</strong> FIAT
                    </Linha>
                    <Linha>
                        <strong>Modelo:</strong> PALIO ATTRA. BEST SELLER 1.0
                        EVO FLEX 5P
                    </Linha>
                    <Linha>
                        <strong>Ano:</strong> 2016 GASOLINA
                    </Linha>
                    <Linha>
                        <strong>Proprietário:</strong> José Francisco Pereira
                        dos Reis
                    </Linha>
                    <Linha>
                        <strong>Cor:</strong> Vermelho
                    </Linha>
                </Tabela>
                <BoxStatus>
                    <StatusLabel>Status</StatusLabel>
                    <StatusValue status="PERMITIDO">PERMITIDO</StatusValue>
                </BoxStatus>
            </BoxConteudo>
        </CustomBackground>
    );
};

export default InfoVeiculo;
