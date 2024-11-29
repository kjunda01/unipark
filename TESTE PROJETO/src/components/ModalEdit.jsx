import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import MOCKAPI from "../service/ApiMockApi"; // A API mockada

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    width: 90%;
    max-width: 600px;
    min-width: 300px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow-y: auto;
    max-height: 90vh;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    color: #333;
    cursor: pointer;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 16px;
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 16px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

const Button = styled.button`
    padding: 10px 15px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    /* Botão de salvar (verde) */
    &.save {
        background-color: #28a745;
    }

    /* Botão de cancelar (vermelho) */
    &.cancel {
        background-color: #dc3545;
    }
`;

const ModalEdit = ({ isOpen, onRequestClose, veiculoId, onUpdate }) => {
    const [veiculo, setVeiculo] = useState(null);

    // Carregar o veículo com base no ID
    useEffect(() => {
        if (veiculoId) {
            const fetchVeiculo = async () => {
                const dadosVeiculo = await MOCKAPI.getVeiculoUnico(veiculoId);
                setVeiculo(dadosVeiculo);
            };

            fetchVeiculo();
        }
    }, [veiculoId]);

    // Função para lidar com a alteração dos campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setVeiculo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Função de envio do formulário (PUT)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (veiculo) {
            try {
                await MOCKAPI.putVeiculo(veiculo.id, veiculo); // Chamada PUT na API

                if (onUpdate) {
                    onUpdate(); // Chama a função de atualização da lista de veículos
                }
                onRequestClose(); // Fecha o modal após a atualização
            } catch (error) {
                console.error("Erro ao atualizar veículo:", error);
                alert(
                    "Ocorreu um erro ao salvar as alterações. Tente novamente."
                );
            }
        }
    };

    if (!veiculo) return null;

    return (
        <ModalWrapper>
            <ModalContent>
                <CloseButton onClick={onRequestClose}>
                    <FaTimes />
                </CloseButton>
                <h2>Editar Veículo</h2>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="placa">Placa</Label>
                        <Input
                            type="text"
                            id="placa"
                            name="placa"
                            value={veiculo.placa}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="tipo">Tipo</Label>
                        <Select
                            id="tipo"
                            name="tipo"
                            value={veiculo.tipo}
                            onChange={handleChange}
                        >
                            <option value="">Selecione o tipo...</option>
                            <option value="1">Carro</option>
                            <option value="2">Moto</option>
                            <option value="3">Caminhão</option>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="marca">Marca</Label>
                        <Input
                            type="text"
                            id="marca"
                            name="marca"
                            value={veiculo.marca}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="modelo">Modelo</Label>
                        <Input
                            type="text"
                            id="modelo"
                            name="modelo"
                            value={veiculo.modelo}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="ano">Ano</Label>
                        <Input
                            type="text"
                            id="ano"
                            name="ano"
                            value={veiculo.ano}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cor">Cor</Label>
                        <Input
                            type="text"
                            id="cor"
                            name="cor"
                            value={veiculo.cor}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="proprietario">Proprietário</Label>
                        <Input
                            type="text"
                            id="proprietario"
                            name="proprietario"
                            value={veiculo.proprietario}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="matricula">Matrícula</Label>
                        <Input
                            type="text"
                            id="matricula"
                            name="matricula"
                            value={veiculo.matricula}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="status">Status</Label>
                        <Select
                            id="status"
                            name="status"
                            value={veiculo.status}
                            onChange={handleChange}
                        >
                            <option value="Permitido">Permitido</option>
                            <option value="Proibido">Proibido</option>
                        </Select>
                    </FormGroup>
                    <ButtonGroup>
                        <Button className="save" type="submit">
                            Salvar
                        </Button>
                        <Button
                            className="cancel"
                            type="button"
                            onClick={onRequestClose}
                        >
                            Cancelar
                        </Button>
                    </ButtonGroup>
                </form>
            </ModalContent>
        </ModalWrapper>
    );
};

export default ModalEdit;
