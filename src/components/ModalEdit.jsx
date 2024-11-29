import { useEffect, useState } from "react";
import { Modal, ModalBackground, ModalSair } from "./Modal";
import MOCKAPI from "../service/ApiMockApi";
import { ToastContainer } from "react-toastify";
import StyledButton from "./Button/StyledButton";
import FormContainer from "./form/FormContainer";
import StyledForm from "./form/StyledForm";
import StyledSelect from "./Select/StyledSelect";
import styled from "styled-components";
import StyledInput from "./form/StyledInput";
import Label from "./Label/Label";

const Div = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
`;

const ModalEdit = ({ ID, isOpen }) => {
    const [veiculo, setVeiculo] = useState(null); // Estado para armazenar os dados do veículo
    const [loading, setLoading] = useState(true); // Estado para indicar o carregamento
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        // Chama a API quando o componente é montado
        const fetchVeiculo = async () => {
            try {
                const response = await MOCKAPI.getVeiculoUnico(ID);
                setVeiculo(response); // Armazena os dados no estado
            } catch (error) {
                console.error("Erro ao buscar o veículo:", error);
            } finally {
                setLoading(false); // Finaliza o carregamento
            }
        };

        fetchVeiculo();
    }, [ID]); // Executa o efeito quando o ID muda

    if (loading) {
        return (
            <ModalBackground>
                <Modal>Carregando...</Modal>
            </ModalBackground>
        );
    }

    const handleCancel = (isOpen) => !isOpen;

    // PEGA O TEXTO DO VALOR SELECIONADO PARA MANDAR PRO CADASTRO
    const atualizarVeiculo = (chave, event, setVeiculo) => {
        const textoSelecionado =
            event.target.options[event.target.selectedIndex].text;

        setVeiculo((valorAnterior) => ({
            ...valorAnterior,
            [chave]: textoSelecionado,
        }));
    };

    return (
        <ModalBackground>
            <Modal>
                <Div>
                    <FormContainer>
                        <StyledForm onSubmit={(e) => e.preventDefault()}>
                            {/* Seleção de Tipo */}
                            <StyledSelect
                                onChange={(event) => {
                                    atualizarVeiculo("tipo", event, setVeiculo);
                                }}
                                value={veiculo.tipo}
                            >
                                <option value="">Selecione o tipo...</option>
                                <option value="1">Carro</option>
                                <option value="2">Moto</option>
                                <option value="3">Caminhão</option>
                            </StyledSelect>

                            {/* Seleção de Marca */}
                            {/* <StyledSelect
                                onChange={(event) => {
                                    atualizarVeiculo(
                                        "marca",
                                        event,
                                        setVeiculo
                                    );
                                }}
                                value={veiculo.marca}
                                // disabled={!veiculo.marca || carregando}
                            >
                                <option value="">Selecione a marca...</option>
                                {carregando ? (
                                    <option>Carregando...</option>
                                ) : marcas.length > 0 ? (
                                    marcas.map((marca) => (
                                        <option
                                            key={marca.Value}
                                            value={marca.Value}
                                        >
                                            {marca.Label.toUpperCase()}
                                        </option>
                                    ))
                                ) : (
                                    <option>Indisponível</option>
                                )}
                            </StyledSelect> */}

                            {/* Seleção de Modelo */}
                            {/* <StyledSelect
                                onChange={(event) => {
                                    setModeloSelecionado(event.target.value);
                                    atualizarVeiculo(
                                        "modelo",
                                        event,
                                        setVeiculo
                                    );
                                }}
                                value={modeloSelecionado}
                                disabled={!marcaSelecionada || carregando}
                            >
                                <option value="">Selecione o modelo...</option>
                                {carregando ? (
                                    <option>Carregando...</option>
                                ) : modelos.length > 0 ? (
                                    modelos.map((modelo) => (
                                        <option
                                            key={modelo.Value}
                                            value={modelo.Value}
                                        >
                                            {modelo.Label.toUpperCase()}
                                        </option>
                                    ))
                                ) : (
                                    <option>Indisponível</option>
                                )}
                            </StyledSelect> */}

                            {/* Seleção de Ano */}
                            {/* <StyledSelect
                                onChange={(event) => {
                                    setAnoSelecionado(event.target.value);
                                    atualizarVeiculo("ano", event, setVeiculo);
                                }}
                                value={anoSelecionado}
                                disabled={!modeloSelecionado || carregando}
                            >
                                <option value="">Selecione o ano...</option>
                                {carregando ? (
                                    <option>Carregando...</option>
                                ) : anos.length > 0 ? (
                                    anos.map((ano) => (
                                        <option
                                            key={ano.Value}
                                            value={ano.Value}
                                        >
                                            {ano.Label.toUpperCase()}
                                        </option>
                                    ))
                                ) : (
                                    <option>Indisponível</option>
                                )}
                            </StyledSelect> */}
                            {/* <div>
                                <Label>Placa</Label>
                                <StyledInput
                                    type="text"
                                    placeholder="Informe a placa do veículo"
                                    onChange={(event) => {
                                        setPlaca(event.target.value);
                                        veiculo["placa"] = event.target.value;
                                    }}
                                />
                            </div> */}
                            {/* <div>
                                <Label>Cor</Label>
                                <StyledInput
                                    type="text"
                                    placeholder="Informe a cor do veículo"
                                    onChange={(event) => {
                                        setCor(event.target.value);
                                        veiculo["cor"] = event.target.value;
                                    }}
                                />
                            </div> */}

                            {/* <div>
                                <Label>Proprietário</Label>
                                <StyledInput
                                    type="text"
                                    placeholder="Informe o proprietário(a) do veículo"
                                    onChange={(event) => {
                                        setProprietario(event.target.value);
                                        veiculo["proprietario"] =
                                            event.target.value;
                                    }}
                                />
                            </div> */}

                            {/* <div>
                                <Label>Matrícula</Label>
                                <StyledInput
                                    type="text"
                                    placeholder="Informe a matrícula do proprietário(a)"
                                    onChange={(event) => {
                                        setMatricula(event.target.value);
                                        veiculo["matricula"] =
                                            event.target.value;
                                    }}
                                />
                            </div> */}

                            {/* <div>
                                <Label>Status</Label>
                                <StyledSelect
                                    value={status}
                                    onChange={(event) => {
                                        function paraBooleano(str) {
                                            return str === "true";
                                        }

                                        setStatus(event.target.value);

                                        veiculo["status"] = paraBooleano(
                                            event.target.value
                                        )
                                            ? "Permitido"
                                            : "Proibido";
                                    }}
                                >
                                    <option value={""}>Selecione...</option>
                                    <option value={"true"}>Permitido</option>
                                    <option value={"false"}>Proibido</option>
                                </StyledSelect>
                            </div> */}

                            {/* Confirma os dados no modal com o botão de enviar */}
                            {/* <StyledButton
                                type="submit"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Enviar
                            </StyledButton> */}
                        </StyledForm>
                        <ToastContainer
                            autoClose={3000}
                            position="bottom-left"
                        />
                    </FormContainer>
                </Div>
            </Modal>
        </ModalBackground>
    );
};

export default ModalEdit;
