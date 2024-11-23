import styled from "styled-components";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Wrapper } from "../components/layout/Wrapper.style";
import { Container } from "../components/layout/Container.style";
import { getVeiculos } from "../service/ApiFIREBASE";
import { useEffect, useState } from "react";

const Filtro = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;

    label {
        font-weight: 600;
        font-size: 14px;
        padding-right: 10px;
        color: #333;
    }

    select,
    input {
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 14px;
        color: #333;
        outline: none;
        transition: all 0.3s ease;

        &:focus {
            border-color: #33b777;
            box-shadow: 0 0 5px rgba(51, 183, 119, 0.4);
        }
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
    background-color: #f4f4f4;
    border-radius: 10px;
`;

const Card = styled.div`
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 280px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    }
`;

const CardTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
    color: #222;
    font-weight: 700;
`;

const CardSubtitle = styled.p`
    font-size: 16px;
    color: #666;
`;

const CustomBackground = styled.div`
    position: relative;
    width: 100%;
    max-width: 800px;
    background: #fafafa;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 20px;
`;

const BoxTitulo = styled.div`
    width: 100%;
    padding: 15px 20px;
    background: linear-gradient(135deg, #021d34, #043d6c);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

const Titulo = styled.h3`
    font-weight: 700;
    font-size: 20px;
`;

const BoxConteudo = styled.div`
    flex: 1;
    background: #e8f5e9;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Tabela = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 12px;
    width: 100%;
    margin-bottom: 20px;
`;

const Linha = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    padding: 8px 10px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
        font-weight: bold;
        color: #222;
    }
`;

const BoxStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
`;

const StatusLabel = styled.h3`
    font-weight: bold;
    font-size: 18px;
    color: #021d34;
    margin-bottom: 10px;
`;

const StatusValue = styled.h1`
    font-weight: bold;
    font-size: 28px;
    color: #33b777;
    margin: 0;
`;

const PaginaConsulta = () => {
    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        // Simulação de requisição
        getVeiculos.then((data) => setVeiculos(Object.entries(data)));
    }, []);

    return (
        <Wrapper>
            <Header />

            {veiculos.length > 0 ? (
                veiculos.map(([id, veiculo]) => (
                    <CustomBackground key={id}>
                        <BoxTitulo>
                            <Titulo>Placa: {veiculo.placa}</Titulo>
                            <Titulo>Tipo: {veiculo.tipo}</Titulo>
                        </BoxTitulo>
                        <BoxConteudo>
                            <Tabela>
                                <Linha>
                                    <strong>Tipo de veículo:</strong>{" "}
                                    {veiculo.tipo}
                                </Linha>
                                <Linha>
                                    <strong>Marca:</strong> {veiculo.marca}
                                </Linha>
                                <Linha>
                                    <strong>Modelo:</strong> {veiculo.modelo}
                                </Linha>
                                <Linha>
                                    <strong>Ano:</strong> {veiculo.ano}
                                </Linha>
                                <Linha>
                                    <strong>Proprietário:</strong>{" "}
                                    {veiculo.proprietario}
                                </Linha>
                                <Linha>
                                    <strong>Cor:</strong> {veiculo.cor}
                                </Linha>
                            </Tabela>
                            <BoxStatus>
                                <StatusLabel>Status</StatusLabel>
                                <StatusValue>
                                    {veiculo.status.toUpperCase()}
                                </StatusValue>
                            </BoxStatus>
                        </BoxConteudo>
                    </CustomBackground>
                ))
            ) : (
                <p>Carregando veículos...</p>
            )}

            <Footer />
        </Wrapper>
    );
};

export default PaginaConsulta;
