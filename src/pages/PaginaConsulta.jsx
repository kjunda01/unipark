import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MOCKAPI from "../service/ApiMockApi";

// Estrutura base do layout
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #f5f5f5;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
`;

const Div = styled.div`
    width: 100%;
    max-width: 1200px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
`;

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    input {
        width: 100%;
        max-width: 800px;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        outline: none;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;

    thead {
        background-color: #043d6c;
        color: white;

        th {
            padding: 10px;
            text-align: left;
            font-weight: bold;
        }
    }

    tbody {
        tr {
            &:nth-child(even) {
                background-color: #f9f9f9;
            }

            &:hover {
                background-color: #f1f1f1;
            }
        }

        td {
            padding: 10px;
            font-size: 14px;
            text-align: left;
        }
    }
`;

const StatusBadge = styled.span`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    background-color: ${(props) =>
        props.status === "permitido"
            ? "green"
            : props.status === "proibido"
            ? "red"
            : "gray"};
`;

const PaginationControls = styled.div`
    display: flex;
    justify-content: center;

    button {
        margin: 0 5px;
        padding: 10px 20px;
        background-color: #043d6c;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;

        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }
`;

// Componente principal
const PaginaConsulta = () => {
    const [veiculos, setVeiculos] = useState([]);
    const [termoBuscado, setTermoBuscado] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Exibindo mais itens por página

    // Fetch da API
    useEffect(() => {
        const obterVeiculos = async () => {
            try {
                const data = await MOCKAPI.getVeiculos();
                setVeiculos(data); // Supondo que a API retorna uma lista de objetos
            } catch (error) {
                console.error("Erro ao carregar veículos:", error);
            }
        };
        obterVeiculos();
    }, []);

    // Filtrando veículos com base no termo de busca
    const filteredVeiculos = veiculos.filter((veiculo) =>
        `${veiculo.placa} ${veiculo.tipo} ${veiculo.marca} ${veiculo.modelo}`
            .toLowerCase()
            .includes(termoBuscado.toLowerCase())
    );

    // Paginação
    const paginatedVeiculos = filteredVeiculos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredVeiculos.length / itemsPerPage);

    return (
        <Wrapper>
            <Header />
            <Container>
                <Div>
                    {/* Barra de Pesquisa */}
                    <SearchBar>
                        <input
                            type="text"
                            placeholder="Pesquisar por placa, tipo, marca ou modelo..."
                            value={termoBuscado}
                            onChange={(e) => setTermoBuscado(e.target.value)}
                        />
                    </SearchBar>

                    {/* Tabela */}
                    <Table>
                        <thead>
                            <tr>
                                <th>Placa</th>
                                <th>Tipo</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Ano</th>
                                <th>Cor</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedVeiculos.map((veiculo) => (
                                <tr key={veiculo.id}>
                                    <td>{veiculo.placa}</td>
                                    <td>{veiculo.tipo}</td>
                                    <td>{veiculo.marca}</td>
                                    <td>{veiculo.modelo}</td>
                                    <td>{veiculo.ano}</td>
                                    <td>{veiculo.cor}</td>
                                    <td>
                                        <StatusBadge
                                            status={
                                                veiculo.status
                                                    ? veiculo.status.toLowerCase()
                                                    : "indefinido"
                                            }
                                        >
                                            {veiculo.status
                                                ? veiculo.status.toUpperCase()
                                                : "INDEFINIDO"}
                                        </StatusBadge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    {/* Controle de Paginação */}
                    <PaginationControls>
                        <button
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </button>
                        <button
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Próximo
                        </button>
                    </PaginationControls>
                </Div>
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default PaginaConsulta;
