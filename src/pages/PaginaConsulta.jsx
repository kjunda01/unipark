import styled from "styled-components";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { getVeiculos } from "../service/ApiMockApi";
import { useEffect, useState } from "react";

const CustomBackground = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px; // Reduzindo a largura máxima
    background: #fafafa;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Menos sombra para não pesar tanto
    border-radius: 8px; // Reduzindo o arredondamento
    overflow: hidden;
    margin-bottom: 15px; // Menor margem inferior
`;

const BoxTitulo = styled.div`
    width: 100%;
    padding: 12px 16px; // Menor padding
    background: linear-gradient(135deg, #021d34, #043d6c);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px; // Menor fonte
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
    grid-gap: 10px; // Menor espaçamento entre as colunas
    width: 100%;
    margin-bottom: 15px; // Menor margem inferior
`;

const Linha = styled.div`
    font-size: 14px; // Menor tamanho de fonte
    line-height: 1.4; // Menor altura da linha
    color: #333;
    padding: 6px 8px; // Menor padding
    background-color: #fff;
    border-radius: 6px; // Menos arredondado
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
    padding: 15px; // Menor padding
    background-color: #fff;
    border-radius: 6px; // Menos arredondado
`;

const StatusLabel = styled.h3`
    font-weight: bold;
    font-size: 16px; // Menor fonte
    color: #021d34;
    margin-bottom: 8px; // Menor margem inferior
`;

const StatusValue = styled.h1`
    font-weight: bold;
    font-size: 24px;
    color: ${(props) => 
        props.status === "PERMITIDO" ? "green" : 
        props.status === "PROIBIDO" ? "red" : 
        "black"}; // Cor baseada no valor de status
    margin: 0;
`;

const SearchBox = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;

    input {
        width: 100%;
        max-width: 600px;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        outline: none;
    }
`;

const PaginationControls = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;

    button {
        padding: 10px 20px;
        margin: 0 10px;
        font-size: 16px;
        background-color: #021d34;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;

        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }
`;

const PaginaConsulta = () => {
    const [veiculos, setVeiculos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        const fetchVeiculos = async () => {
            try {
                const data = await getVeiculos(); // A função getVeiculos precisa retornar os dados
                setVeiculos(Object.entries(data));
            } catch (error) {
                console.error("Erro ao carregar veículos:", error);
            }
        };
        fetchVeiculos();
    }, []);

    const filteredVeiculos = veiculos.filter(([_, veiculo]) =>
        `${veiculo.placa} ${veiculo.tipo} ${veiculo.marca} ${veiculo.modelo}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const paginatedVeiculos = filteredVeiculos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredVeiculos.length / itemsPerPage);

    return (
        <>
            <Header />

            <SearchBox>
                <input
                    type="text"
                    placeholder="Pesquisar por placa, tipo, marca ou modelo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </SearchBox>

            {paginatedVeiculos.length > 0 ? (
                paginatedVeiculos.map(([id, veiculo]) => (
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
                                <StatusValue
                                    status={veiculo.status.toUpperCase()}
                                >
                                    {veiculo.status.toUpperCase()}
                                </StatusValue>
                            </BoxStatus>
                        </BoxConteudo>
                    </CustomBackground>
                ))
            ) : (
                <p>Carregando veículos...</p>
            )}

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

            <Footer />
        </>
    );
};

export default PaginaConsulta;
