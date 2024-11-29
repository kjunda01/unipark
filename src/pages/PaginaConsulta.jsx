import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importando ícones
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MOCKAPI from "../service/ApiMockApi";

import { Modal, ModalSair, ModalBackground } from "../components/Modal";
import StyledButton from "../components/Button/StyledButton";
import FormContainer from "../components/form/FormContainer";

import StyledForm from "../components/form/StyledForm";
import StyledSelect from "../components/Select/StyledSelect";
import ModalEdit from "../components/ModalEdit";

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

const Actions = styled.div`
    display: flex;
    gap: 10px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 50%;
        cursor: pointer;

        &.edit {
            background-color: #ffc107;
            color: white;
        }

        &.delete {
            background-color: #dc3545;
            color: white;
        }

        &:hover {
            opacity: 0.9;
        }
    }
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

const PaginaConsulta = () => {
    const [veiculos, setVeiculos] = useState([]);
    const [termoBuscado, setTermoBuscado] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [veiculoAtual, setVeiculoAtual] = useState("");
    const itemsPerPage = 12;

    useEffect(() => {
        const obterVeiculos = async () => {
            try {
                const data = await MOCKAPI.getVeiculos();
                setVeiculos(data);
            } catch (error) {
                console.error("Erro ao carregar veículos:", error);
            }
        };
        obterVeiculos();
    }, []);

    const deletarVeiculo = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar este veículo?")) {
            try {
                await MOCKAPI.deleteVeiculo(id);
                setVeiculos((prev) =>
                    prev.filter((veiculo) => veiculo.id !== id)
                );
            } catch (error) {
                console.error("Erro ao deletar veículo:", error);
            }
        }
    };

    const handleCancel = () => setIsOpen(!open);

    const handleSubmit = async (veiculoID, objeto) => {
        const dadosAtualizados = {
            tipo: objeto.tipo,
            marca: objeto.marca,
            modelo: objeto.modelo,
            ano: objeto.ano,
            placa: objeto.placa,
            cor: objeto.cor,
            proprietario: objeto.proprietario,
            matricula: objeto.matricula,
            status: objeto.status,
        };

        try {
            const veiculoAtualizado = await MOCKAPI.putVeiculo(
                veiculoID,
                dadosAtualizados
            );
            console.log("Veículo atualizado com sucesso:", veiculoAtualizado);
        } catch (error) {
            console.error("Erro ao atualizar veículo:", error);
        }
    };

    const filteredVeiculos = veiculos.filter((veiculo) =>
        `${veiculo.placa} ${veiculo.tipo} ${veiculo.marca} ${veiculo.modelo}`
            .toLowerCase()
            .includes(termoBuscado.toLowerCase())
    );

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
                                <th>ID</th>
                                <th>Tipo</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Ano</th>
                                <th>Placa</th>
                                <th>Cor</th>
                                <th>Proprietário</th>
                                <th>Matrícula</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedVeiculos.map((veiculo) => (
                                <tr key={veiculo.id}>
                                    <td>{veiculo.id}</td>
                                    <td>{veiculo.tipo}</td>
                                    <td>{veiculo.marca}</td>
                                    <td>{veiculo.modelo}</td>
                                    <td>{veiculo.ano}</td>
                                    <td>{veiculo.placa}</td>
                                    <td>{veiculo.cor}</td>
                                    <td>{veiculo.proprietario}</td>
                                    <td>{veiculo.matricula}</td>
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
                                    <td>
                                        <Actions>
                                            <button
                                                className="edit"
                                                onClick={() => {
                                                    setIsOpen(!isOpen);
                                                    setVeiculoAtual(veiculo.id);
                                                }}
                                            >
                                                <FaEdit />
                                            </button>

                                            {isOpen && (
                                                <ModalEdit isOpen={isOpen} ID={veiculo.id} />
                                            )}

                                            <button
                                                className="delete"
                                                onClick={() =>
                                                    deletarVeiculo(veiculo.id)
                                                }
                                            >
                                                <FaTrash />
                                            </button>
                                        </Actions>
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
