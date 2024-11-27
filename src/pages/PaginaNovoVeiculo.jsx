// 1. Bibliotecas externas
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

// 2. Componentes gerais
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Modal, ModalBackground, ModalSair } from "../components/Modal";
import Input from "../components/form/Input";
import Label from "../components/Label/Label";

// 3. Componentes estilizados
import { Wrapper } from "../components/layout/Wrapper.style";
import { Container } from "../components/layout/Container.style";
import StyledButton from "../components/Button/StyledButton";
import StyledSelect from "../components/Select/StyledSelect";
import FormContainer from "../components/form/FormContainer";
import StyledForm from "../components/form/StyledForm";

// 4. Serviços/APIs
import ApiFIPE from "../service/ApiFIPE";
import MOCKAPI from "../service/ApiMockApi";
import StyledInput from "../components/form/StyledInput";

const Div = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
`;

const PaginaNovoVeiculo = () => {
    const [tipo, setTipo] = useState("");
    const [marcas, setMarcas] = useState([]);
    const [modelos, setModelos] = useState([]);
    const [anos, setAnos] = useState([]);
    const [veiculo, setVeiculo] = useState({});
    const [placa, setPlaca] = useState("");
    const [cor, setCor] = useState("");
    const [proprietario, setProprietario] = useState("");
    const [matricula, setMatricula] = useState("");
    const [status, setStatus] = useState("");

    const [marcaSelecionada, setMarcaSelecionada] = useState("");
    const [modeloSelecionado, setModeloSelecionado] = useState("");
    const [anoSelecionado, setAnoSelecionado] = useState("");

    const [carregando, setCarregando] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    // SE O TIPO MUDAR, ELE BUSCA AS MARCAS
    useEffect(() => {
        // LIMPA AS SELEÇÕES PARA TROCAR DE CAMINHÃO PARA CARRO, EXEMPLO
        setMarcas([]);
        setModelos([]);
        setAnos([]);
        setMarcaSelecionada("");
        setModeloSelecionado("");
        setAnoSelecionado("");

        const obterMarcas = async () => {
            if (tipo.length > 0) {
                setCarregando(true);
                try {
                    const response = await ApiFIPE.getMarcas(tipo);
                    setMarcas(response || []);
                    setModelos([]);
                    setAnos([]);
                } catch (error) {
                    console.error("Erro ao carregar marcas:", error);
                    setMarcas([]);
                } finally {
                    setCarregando(false);
                }
            } else return;
        };
        obterMarcas();
    }, [tipo]);

    // SE A MARCA MUDAR, ELE BUSCA OS MODELOS
    useEffect(() => {
        const obterModelos = async () => {
            if (marcaSelecionada.length > 0) {
                setCarregando(true);
                try {
                    const response = await ApiFIPE.getModelos(
                        tipo,
                        marcaSelecionada
                    );
                    setModelos(response || []);
                } catch (error) {
                    console.error("Erro ao carregar modelos:", error);
                    setModelos([]);
                } finally {
                    setCarregando(false);
                }
            } else return;
        };
        obterModelos();
    }, [tipo, marcaSelecionada]);

    //  SE O MODELO MUDAR ELE BUSCA OS ANOS
    useEffect(() => {
        const obterAnos = async () => {
            if (modeloSelecionado.length > 0) {
                setCarregando(true);
                try {
                    const response = await ApiFIPE.getAnos(
                        tipo,
                        marcaSelecionada,
                        modeloSelecionado
                    );
                    setAnos(response || []);
                } catch (error) {
                    console.error("Erro ao carregar modelos:", error);
                    setAnos([]);
                } finally {
                    setCarregando(false);
                }
            } else return;
        };
        obterAnos();
    }, [tipo, marcaSelecionada, modeloSelecionado]);

    // PEGA O TEXTO DO VALOR SELECIONADO PARA MANDAR PRO CADASTRO
    const atualizarVeiculo = (chave, event, setVeiculo) => {
        const textoSelecionado =
            event.target.options[event.target.selectedIndex].text;

        setVeiculo((valorAnterior) => ({
            ...valorAnterior,
            [chave]: textoSelecionado,
        }));
    };

    // FECHA O MODAL
    const handleCancel = () => setIsOpen(false);

    // NAVEGA PARA A PAGINA DE CONSULTA APÓS ENVIAR O FORMULARIO
    const irAteAPaginaConsulta = useNavigate();

    // LIDA COM O ENVIO DOS DADOS
    const handleSubmit = async () => {
        setIsOpen(!isOpen);
        if (
            veiculo.tipo &&
            veiculo.marca &&
            veiculo.modelo &&
            veiculo.ano &&
            veiculo.placa &&
            veiculo.cor &&
            veiculo.proprietario &&
            veiculo.matricula &&
            veiculo.status
        ) {
            try {
                const response = MOCKAPI.postVeiculo(veiculo);

                if (response.status !== 404) {
                    toast.success(
                        `Veículo "${veiculo.placa}" adicionado com sucesso.`
                    );
                    irAteAPaginaConsulta("/buscarveiculo");
                }
            } catch (error) {
                toast.error("Erro ao enviar os dados", error);
            }
        } else {
            toast.error("Todos os campos são obrigatórios.");
        }
    };

    return (
        <Wrapper>
            <Header />
            <Container>
                <Div>
                    <FormContainer>
                        <StyledForm onSubmit={(e) => e.preventDefault()}>
                            {/* Seleção de Tipo */}
                            <StyledSelect
                                onChange={(event) => {
                                    setTipo(event.target.value);
                                    atualizarVeiculo("tipo", event, setVeiculo);
                                }}
                                value={tipo}
                            >
                                <option value="">Selecione o tipo...</option>
                                <option value="1">Carro</option>
                                <option value="2">Moto</option>
                                <option value="3">Caminhão</option>
                            </StyledSelect>

                            {/* Seleção de Marca */}
                            <StyledSelect
                                onChange={(event) => {
                                    setMarcaSelecionada(event.target.value);
                                    atualizarVeiculo(
                                        "marca",
                                        event,
                                        setVeiculo
                                    );
                                }}
                                value={marcaSelecionada}
                                disabled={!tipo || carregando}
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
                            </StyledSelect>

                            {/* Seleção de Modelo */}
                            <StyledSelect
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
                            </StyledSelect>

                            {/* Seleção de Ano */}
                            <StyledSelect
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
                            </StyledSelect>
                            <div>
                                <Label>Placa</Label>
                                <StyledInput
                                    type="text"
                                    placeholder="Informe a placa do veículo"
                                    onChange={(event) => {
                                        setPlaca(event.target.value);
                                        veiculo["placa"] = event.target.value;
                                    }}
                                />
                            </div>
                            <div>
                                <Label>Cor</Label>
                                <StyledInput
                                    type="text"
                                    placeholder="Informe a cor do veículo"
                                    onChange={(event) => {
                                        setCor(event.target.value);
                                        veiculo["cor"] = event.target.value;
                                    }}
                                />
                            </div>

                            <div>
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
                            </div>

                            <div>
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
                            </div>

                            <div>
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
                            </div>

                            {/* Confirma os dados no modal com o botão de enviar */}
                            <StyledButton
                                type="submit"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Enviar
                            </StyledButton>

                            {isOpen && (
                                <ModalBackground>
                                    <Modal>
                                        <ModalSair onClick={handleCancel}>
                                            X
                                        </ModalSair>
                                        <h2>Confirmar Dados</h2>
                                        <Div>
                                            <strong>Tipo: </strong>
                                            {veiculo.tipo}
                                        </Div>
                                        <Div>
                                            <strong>Marca: </strong>
                                            {veiculo.marca}
                                        </Div>
                                        <Div>
                                            <strong>Modelo: </strong>
                                            {veiculo.modelo}
                                        </Div>
                                        <Div>
                                            <strong>Ano: </strong>
                                            {veiculo.ano}
                                        </Div>
                                        <Div>
                                            <strong>Placa: </strong>
                                            {veiculo.placa}
                                        </Div>
                                        <Div>
                                            <strong>Cor: </strong>
                                            {veiculo.cor}
                                        </Div>
                                        <Div>
                                            <strong>Proprietário: </strong>
                                            {veiculo.proprietario}
                                        </Div>
                                        <Div>
                                            <strong>Matricula: </strong>
                                            {veiculo.matricula}
                                        </Div>
                                        <Div>
                                            <strong>Status: </strong>
                                            {veiculo.status}
                                        </Div>
                                        <Div>
                                            <StyledButton
                                                onClick={() =>
                                                    handleSubmit(veiculo)
                                                }
                                            >
                                                Confirmar
                                            </StyledButton>
                                            <StyledButton
                                                backgroundcolor={"cancel"}
                                                onClick={handleCancel}
                                            >
                                                Cancelar
                                            </StyledButton>
                                        </Div>
                                    </Modal>
                                </ModalBackground>
                            )}
                        </StyledForm>
                        <ToastContainer
                            autoClose={3000}
                            position="bottom-left"
                        />
                    </FormContainer>
                </Div>
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default PaginaNovoVeiculo;
