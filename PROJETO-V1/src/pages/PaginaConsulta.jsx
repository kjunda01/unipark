import  { useState, useEffect } from "react";
import MOCKAPI from "../service/ApiMockApi"; // A API mockada
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import ModalEdit from "../components/ModalEdit";
import ModalConfirm from "../components/ModalConfirm"; // Importando o modal de confirmação
import Layout from "../components/Layout";

const PaginaConsultar = () => {
    const [veiculos, setVeiculos] = useState([]);
    const [termoBuscado, setTermoBuscado] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(30);
    const [isOpen, setIsOpen] = useState(false);
    const [veiculoAtual, setVeiculoAtual] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false); // Controle para o modal de confirmação
    const [veiculoToDelete, setVeiculoToDelete] = useState(null); // Armazena o id do veículo a ser deletado

    // Função para buscar veículos da API
    useEffect(() => {
        const fetchVeiculos = async () => {
            const dadosVeiculos = await MOCKAPI.getVeiculos();
            setVeiculos(dadosVeiculos);
        };

        fetchVeiculos();
    }, []);

    // Filtro dos veículos com base no termo de pesquisa
    const filteredVeiculos = veiculos.filter((veiculo) =>
        `${veiculo.placa} ${veiculo.tipo} ${veiculo.marca} ${veiculo.modelo} ${veiculo.ano} ${veiculo.cor} ${veiculo.proprietario} ${veiculo.matricula} ${veiculo.status}`
            .toLowerCase()
            .includes(termoBuscado.toLowerCase())
    );

    // Paginação dos veículos
    const paginatedVeiculos = filteredVeiculos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Total de páginas para a paginação
    const totalPages = Math.ceil(filteredVeiculos.length / itemsPerPage);

    // Função de deletar veículo, chamada no modal de confirmação
    const deletarVeiculo = async () => {
        if (veiculoToDelete) {
            await MOCKAPI.deleteVeiculo(veiculoToDelete);
            const dadosVeiculos = await MOCKAPI.getVeiculos();
            setVeiculos(dadosVeiculos);
            setShowConfirmModal(false); // Fechar o modal após a exclusão
        }
    };

    // Função para atualizar a lista de veículos após a edição
    const handleUpdate = () => {
        const fetchVeiculos = async () => {
            const dadosVeiculos = await MOCKAPI.getVeiculos();
            setVeiculos(dadosVeiculos); // Recarregar os dados de veículos
        };
        fetchVeiculos();
    };

    return (
        <Layout>
            {/* Barra de pesquisa */}
            <SearchBar
                value={termoBuscado}
                onChange={(e) => setTermoBuscado(e.target.value)}
            />

            {/* Tabela de veículos */}
            <Table
                veiculos={paginatedVeiculos}
                onEdit={(id) => {
                    setIsOpen(true);
                    setVeiculoAtual(id);
                }}
                onDelete={(id) => {
                    setVeiculoToDelete(id); // Definir o veículo a ser deletado
                    setShowConfirmModal(true); // Mostrar o modal de confirmação
                }}
            />

            {/* Paginação */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

            {/* Modal de Edição */}
            {isOpen && (
                <ModalEdit
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    veiculoId={veiculoAtual}
                    onUpdate={handleUpdate} // Passa a função de atualização para o modal
                />
            )}

            {/* Modal de confirmação de exclusão */}
            <ModalConfirm
                isOpen={showConfirmModal}
                onClose={() => setShowConfirmModal(false)} // Fechar o modal sem excluir
                onConfirm={deletarVeiculo} // Confirmar a exclusão
                message="Tem certeza que deseja excluir este veículo?"
            />
        </Layout>
    );
};

export default PaginaConsultar;
