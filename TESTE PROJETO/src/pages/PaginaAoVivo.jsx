import React, { useState, useEffect } from "react";
import MOCKAPI from "../service/ApiMockApi";
import Layout from "../components/Layout"; // Supondo que o Layout esteja no caminho correto
import styled from "styled-components";

const VeiculoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const VeiculoInfo = styled.div`
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

const VeiculoImage = styled.img`
    max-width: 300px;
    margin-bottom: 20px;
`;

const PaginaAoVivo = () => {
    const [veiculo, setVeiculo] = useState(null); // Estado para armazenar o último veículo
    const [loading, setLoading] = useState(true); // Estado para indicar se os dados estão sendo carregados
    const [error, setError] = useState(null); // Estado para tratar erros

    // Função para buscar o último veículo
    useEffect(() => {
        const fetchVeiculo = async () => {
            try {
                setLoading(true); // Marca como "carregando"

                const dadosVeiculo = await MOCKAPI.getUltimoVeiculo(); // Chama a API para pegar o último veículo

                // Aqui, pegamos o primeiro item do array (já que a API retorna uma lista)
                setVeiculo(dadosVeiculo[0]); // Atualiza o estado com os dados do veículo (o primeiro da lista)
                setLoading(false); // Marca como "carregado"
            } catch (error) {
                setLoading(false); // Marca como "carregado"
                setError("Erro ao carregar os dados do veículo.");
                console.error("Erro ao carregar os dados do veículo:", error);
            }
        };

        fetchVeiculo(); // Executa a função ao carregar o componente
    }, []); // O array vazio garante que a função só será chamada uma vez

    // Exibição enquanto os dados estão carregando
    if (loading) {
        return <h2>Carregando último veículo...</h2>;
    }

    // Exibição caso ocorra um erro
    if (error) {
        return <h2>{error}</h2>;
    }

    // Exibição dos dados do veículo
    return (
        <Layout>
            <VeiculoContainer>
                <h1>Último Veículo</h1>
                {veiculo ? (
                    <>
                        {/* Aqui você pode adicionar uma imagem se disponível */}
                        {/* <VeiculoImage src={veiculo.imagem} alt={veiculo.modelo} /> */}
                        <VeiculoInfo>
                            <p>
                                <strong>Tipo:</strong> {veiculo.tipo}
                            </p>
                            <p>
                                <strong>Marca:</strong> {veiculo.marca}
                            </p>
                            <p>
                                <strong>Modelo:</strong> {veiculo.modelo}
                            </p>
                            <p>
                                <strong>Ano:</strong> {veiculo.ano}
                            </p>
                            <p>
                                <strong>Placa:</strong> {veiculo.placa}
                            </p>
                            <p>
                                <strong>Cor:</strong> {veiculo.cor}
                            </p>
                            <p>
                                <strong>Proprietário:</strong>{" "}
                                {veiculo.proprietario}
                            </p>
                            <p>
                                <strong>Matrícula:</strong> {veiculo.matricula}
                            </p>
                            <p>
                                <strong>Status:</strong> {veiculo.status}
                            </p>
                        </VeiculoInfo>
                    </>
                ) : (
                    <p>Não foi possível encontrar o último veículo.</p>
                )}
            </VeiculoContainer>
        </Layout>
    );
};

export default PaginaAoVivo;
