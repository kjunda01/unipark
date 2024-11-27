import { useEffect, useState } from "react";
import ApiFIPE from "../service/ApiFIPE";
import styled from "styled-components";
import { Modal, ModalBackground, ModalSair } from "../components/Modal";
import Input from "../components/form/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BotaoEnviar from "../components/Button/BotaoEnviar";
import BotaoCancelar from "../components/Button/BotaoCancelar";
import Label from "../components/Label/Label";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Div = styled.div`
    margin-bottom: 1rem;
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
            veiculo.matricula
        ) {
            try {
                const response = await axios.post(
                    "https://6727abed270bd0b9755344ee.mockapi.io/api/veiculos",
                    veiculo
                );

                if (response.status !== 404) {
                    irAteAPaginaConsulta("/buscarveiculo"); // Substitua com a URL desejada
                }
            } catch (error) {
                console.log("Erro ao enviar os dados", error);
                // ADICIONAR UM TOAST AQUI
            }
        } else {
            toast.error("Todos os campos são obrigatórios.");

            console.error("Todos os campos são obrigatórios.");
        }
    };

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                {/* Seleção de Tipo */}
                <select
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
                </select>

                {/* Seleção de Marca */}
                <select
                    onChange={(event) => {
                        setMarcaSelecionada(event.target.value);
                        atualizarVeiculo("marca", event, setVeiculo);
                    }}
                    value={marcaSelecionada}
                    disabled={!tipo || carregando}
                >
                    <option value="">Selecione a marca...</option>
                    {carregando ? (
                        <option>Carregando...</option>
                    ) : marcas.length > 0 ? (
                        marcas.map((marca) => (
                            <option key={marca.Value} value={marca.Value}>
                                {marca.Label.toUpperCase()}
                            </option>
                        ))
                    ) : (
                        <option>Indisponível</option>
                    )}
                </select>

                {/* Seleção de Modelo */}
                <select
                    onChange={(event) => {
                        setModeloSelecionado(event.target.value);
                        atualizarVeiculo("modelo", event, setVeiculo);
                    }}
                    value={modeloSelecionado}
                    disabled={!marcaSelecionada || carregando}
                >
                    <option value="">Selecione o modelo...</option>
                    {carregando ? (
                        <option>Carregando...</option>
                    ) : modelos.length > 0 ? (
                        modelos.map((modelo) => (
                            <option key={modelo.Value} value={modelo.Value}>
                                {modelo.Label.toUpperCase()}
                            </option>
                        ))
                    ) : (
                        <option>Indisponível</option>
                    )}
                </select>

                {/* Seleção de Ano */}
                <select
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
                            <option key={ano.Value} value={ano.Value}>
                                {ano.Label.toUpperCase()}
                            </option>
                        ))
                    ) : (
                        <option>Indisponível</option>
                    )}
                </select>
                <Div>
                    <Label>Placa</Label>
                    <Input
                        type="text"
                        placeholder="Informe a placa do veículo"
                        onChange={(event) => {
                            setPlaca(event.target.value);
                            veiculo["placa"] = event.target.value;
                        }}
                    />
                </Div>
                <Div>
                    <Label>Cor</Label>
                    <Input
                        type="text"
                        placeholder="Informe a cor do veículo"
                        onChange={(event) => {
                            setCor(event.target.value);
                            veiculo["cor"] = event.target.value;
                        }}
                    />
                </Div>

                <Div>
                    <Label>Proprietário</Label>
                    <Input
                        type="text"
                        placeholder="Informe o proprietário(a) do veículo"
                        onChange={(event) => {
                            setProprietario(event.target.value);
                            veiculo["proprietario"] = event.target.value;
                        }}
                    />
                </Div>

                <Div>
                    <Label>Matrícula</Label>
                    <Input
                        type="text"
                        placeholder="Informe a matrícula do proprietário(a)"
                        onChange={(event) => {
                            setMatricula(event.target.value);
                            veiculo["matricula"] = event.target.value;
                        }}
                    />
                </Div>

                <Div>
                    <Label>Status</Label>
                    <select
                        value={status}
                        onChange={(event) => {
                            function paraBooleano(str) {
                                return str === "true";
                            }

                            setStatus(event.target.value);
                            veiculo["status"] = paraBooleano(event.target.value)
                                ? "Permitido"
                                : "Proibido";
                        }}
                    >
                        <option>Selecione...</option>
                        <option value={"true"}>Permitido</option>
                        <option value={"false"}>Proibido</option>
                    </select>
                </Div>

                {/* Confirma os dados no modal com o botão de enviar */}
                <BotaoEnviar type="submit" onClick={() => setIsOpen(!isOpen)}>
                    Enviar
                </BotaoEnviar>

                {isOpen && (
                    <ModalBackground>
                        <Modal>
                            <ModalSair onClick={handleCancel}>X</ModalSair>
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
                                <BotaoEnviar
                                    onClick={() => handleSubmit(veiculo)}
                                >
                                    Confirmar
                                </BotaoEnviar>
                                <BotaoCancelar onClick={handleCancel}>
                                    Cancelar
                                </BotaoCancelar>
                            </Div>
                        </Modal>
                    </ModalBackground>
                )}
            </form>
            <ToastContainer autoClose={3000} position="bottom-left" />
        </>
    );
};

export default PaginaNovoVeiculo;
