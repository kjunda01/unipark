import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "../components/layout/Wrapper.style";
import { Container } from "../components/layout/Container.style";
import { useEffect, useState } from "react";
import { Form } from "../components/form/Form.style";

import apiFipe from "../service/ApiFIPE";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Input from "../components/form/Input";
import Label from "../components/Label/Label";
import BotaoEnviar from "../components/Button/BotaoEnviar";
import {
    Modal,
    ModalBackground,
    ModalCancelButton,
    ModalSair,
    ModalSendButton,
} from "../components/Modal";

const Div = styled.div`
    margin-bottom: 20px;
`;

const Row = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

const Column = styled.div`
    flex: 1;
    min-width: 250px;
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
        border-color: #007bff;
    }
`;

const PaginaNovoVeiculo = () => {
    const [tipo, setTipo] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState("");

    const [todasAsMarcas, setTodasAsMarcas] = useState([]);
    const [todosOsModelos, setTodosOsModelos] = useState([]);
    const [todosOsAnos, setTodosOsAnos] = useState([]);

    const [carregandoMarcas, setCarregandoMarcas] = useState(true);
    const [carregandoModelos, setCarregandoModelos] = useState(true);
    const [carregandoAnos, setCarregandoAnos] = useState(true);

    const [tipoTexto, setTipoTexto] = useState("");
    const [marcaTexto, setMarcaTexto] = useState("");
    const [modeloTexto, setModeloTexto] = useState("");
    const [anoTexto, setAnoTexto] = useState("");

    const [placa, setPlaca] = useState("");
    const [cor, setCor] = useState("");
    const [proprietario, setProprietario] = useState("");
    const [matricula, setMatricula] = useState("");
    const [status, setStatus] = useState("Permitido");

    const [isOpen, setIsOpen] = useState(false);

    const objeto = {
        tipo: tipoTexto,
        marca: marcaTexto,
        modelo: modeloTexto,
        ano: anoTexto,
        placa: placa,
        cor: cor,
        proprietario: proprietario,
        matricula: matricula,
        status: status,
    };

    useEffect(() => {
        setCarregandoMarcas(true);
        apiFipe
            .getMarcas(tipo)
            .then(setTodasAsMarcas)
            .catch(() => setTodasAsMarcas([]))
            .finally(() => setCarregandoMarcas(false));
    }, [tipo]);

    useEffect(() => {
        if (!marca) return;
        setCarregandoModelos(true);
        apiFipe
            .getModelos(tipo, marca)
            .then(setTodosOsModelos)
            .catch(() => setTodosOsModelos([]))
            .finally(() => setCarregandoModelos(false));
    }, [tipo, marca]);

    useEffect(() => {
        if (!modelo) return;
        setCarregandoAnos(true);
        apiFipe
            .getAnos(tipo, marca, modelo)
            .then(setTodosOsAnos)
            .catch(() => setTodosOsAnos([]))
            .finally(() => setCarregandoAnos(false));
    }, [tipo, marca, modelo]);

    const handleTextChange = (event) => {
        const opcao = event.target.options[event.target.selectedIndex]; // Acessa a opção selecionada
        const texto = opcao.textContent || opcao.innerText; // Pega o texto da opção
        return texto;
    };

    const irAteAPaginaConsulta = useNavigate();

    const handleSubmit = async () => {
        setIsOpen(!isOpen);
        if (
            tipoTexto &&
            marcaTexto &&
            modeloTexto &&
            anoTexto &&
            placa &&
            cor &&
            proprietario &&
            matricula &&
            status
        ) {
            try {
                const response = await axios.post(
                    "https://6741e396e4647499008f23d9.mockapi.io/api/veiculos",
                    objeto
                );

                // Caso o POST seja bem-sucedido, redirecionar para a página desejada
                if (response.status !== 404) {
                    // Verifique o código de status HTTP para garantir sucesso
                    irAteAPaginaConsulta("/buscarveiculo"); // Substitua com a URL desejada
                }
            } catch (error) {
                console.error("Erro ao enviar os dados", error);
                // Aqui você pode adicionar um tratamento de erro, como um toast
            }
        } else {
            console.error("Todos os campos são obrigatórios.");
            // Adicione mensagem de erro ou validação aqui, se necessário
        }
    };

    const handleCancel = () => {
        setIsOpen(!isOpen);
    };

    const redefinirEstadosDependentes = () => {
        // Redefine os estados dependentes
        setMarca("");
        setModelo("");
        setAno("");
        setMarcaTexto("");
        setModeloTexto("");
        setAnoTexto("");

        // Limpa as listas dependentes
        setTodasAsMarcas([]);
        setTodosOsModelos([]);
        setTodosOsAnos([]);
    };

    return (
        <>
            <Wrapper>
                <Header />
                <Container>
                    <Form>
                        <Row>
                            <Column>
                                <Label>Tipo do veículo</Label>
                                <Select
                                    required
                                    value={tipo}
                                    onChange={(event) => {
                                        setTipo(event.target.value);

                                        switch (event.target.value) {
                                            case "1":
                                                setTipoTexto("Carro");
                                                break;
                                            case "2":
                                                setTipoTexto("Moto");
                                                break;
                                            case "3":
                                                setTipoTexto("Caminhão");
                                        }
                                        redefinirEstadosDependentes();
                                    }}
                                >
                                    <option value="">
                                        Selecione um tipo...
                                    </option>
                                    <option value={1}>Carro</option>
                                    <option value={2}>Moto</option>
                                    <option value={3}>Caminhão</option>
                                </Select>
                            </Column>

                            <Column>
                                <Label>Marca</Label>
                                <Select
                                    value={marca}
                                    onChange={(event) => {
                                        setMarca(event.target.value);
                                        setMarcaTexto(handleTextChange(event));
                                    }}
                                >
                                    <option value="">
                                        Selecione uma marca...
                                    </option>
                                    {carregandoMarcas ? (
                                        <option>Carregando...</option>
                                    ) : todasAsMarcas.length > 0 ? (
                                        todasAsMarcas.map((marca) => (
                                            <option
                                                key={marca.Value}
                                                value={marca.Value}
                                            >
                                                {marca.Label.toUpperCase()}
                                            </option>
                                        ))
                                    ) : (
                                        <option>
                                            Nenhum modelo disponível
                                        </option>
                                    )}
                                </Select>
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                <Label>Modelo</Label>
                                <Select
                                    required
                                    value={modelo}
                                    onChange={(event) => {
                                        setModelo(event.target.value);
                                        setModeloTexto(handleTextChange(event));
                                    }}
                                >
                                    <option value="">
                                        Selecione um modelo...
                                    </option>
                                    {carregandoModelos ? (
                                        <option>Carregando...</option>
                                    ) : todosOsModelos.length > 0 ? (
                                        todosOsModelos.map((modelo) => (
                                            <option
                                                key={modelo.Value}
                                                value={modelo.Value}
                                            >
                                                {modelo.Label.toUpperCase()}
                                            </option>
                                        ))
                                    ) : (
                                        <option>
                                            Nenhum modelo disponível
                                        </option>
                                    )}
                                </Select>
                            </Column>

                            <Column>
                                <Label>Ano</Label>
                                <Select
                                    required
                                    value={ano}
                                    onChange={(event) => {
                                        setAno(event.target.value);
                                        setAnoTexto(handleTextChange(event));
                                    }}
                                >
                                    <option value="">Selecione o ano...</option>
                                    {carregandoAnos ? (
                                        <option>Carregando...</option>
                                    ) : todosOsAnos.length > 0 ? (
                                        todosOsAnos.map((ano) => (
                                            <option
                                                key={ano.Value}
                                                value={ano.Value}
                                            >
                                                {ano.Label.toUpperCase()}
                                            </option>
                                        ))
                                    ) : (
                                        <option>Nenhum ano disponível</option>
                                    )}
                                </Select>
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                <Label>Placa</Label>
                                <Input
                                    required
                                    type="text"
                                    placeholder="Informe a placa do veículo"
                                    onChange={(event) =>
                                        setPlaca(event.target.value)
                                    }
                                />
                            </Column>

                            <Column>
                                <Label>Cor</Label>
                                <Input
                                    required
                                    type="text"
                                    placeholder="Informe a cor do veículo"
                                    onChange={(event) =>
                                        setCor(event.target.value)
                                    }
                                />
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                <Label>Proprietário</Label>
                                <Input
                                    required
                                    type="text"
                                    placeholder="Informe o proprietário(a) do veículo"
                                    onChange={(event) =>
                                        setProprietario(event.target.value)
                                    }
                                />
                            </Column>

                            <Column>
                                <Label>Matrícula</Label>
                                <Input
                                    required
                                    type="text"
                                    placeholder="Informe a matrícula do proprietário(a)"
                                    onChange={(event) =>
                                        setMatricula(event.target.value)
                                    }
                                />
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                <Label>Status</Label>
                                <Select
                                    required
                                    value={status}
                                    onChange={(event) =>
                                        setStatus(event.target.value)
                                    }
                                >
                                    <option value="Permitido">Permitido</option>
                                    <option value="Proibido">Proibido</option>
                                </Select>
                            </Column>
                        </Row>

                        <Div>
                            <BotaoEnviar
                                onClick={(event) => {
                                    event.preventDefault();
                                    setIsOpen(!isOpen);
                                }}
                            >
                                Enviar
                            </BotaoEnviar>
                        </Div>
                    </Form>
                    {isOpen && (
                        <ModalBackground>
                            <Modal>
                                <ModalSair onClick={handleCancel}>X</ModalSair>
                                <h2>Confirmar Dados</h2>
                                <Div>
                                    <strong>Tipo:</strong>
                                    {objeto.tipo}
                                </Div>
                                <Div>
                                    <strong>Marca: </strong>
                                    {objeto.marca}
                                </Div>
                                <Div>
                                    <strong>Modelo: </strong>
                                    {objeto.modelo}
                                </Div>
                                <Div>
                                    <strong>Ano: </strong>
                                    {objeto.ano}
                                </Div>
                                <Div>
                                    <strong>Placa: </strong>
                                    {objeto.placa}
                                </Div>
                                <Div>
                                    <strong>Cor: </strong>
                                    {objeto.cor}
                                </Div>
                                <Div>
                                    <strong>Proprietário: </strong>
                                    {objeto.proprietario}
                                </Div>
                                <Div>
                                    <strong>Matricula: </strong>
                                    {objeto.matricula}
                                </Div>
                                <Div>
                                    <strong>Status: </strong>
                                    {objeto.status}
                                </Div>

                                <ModalSendButton
                                    onClick={() => handleSubmit(objeto)}
                                >
                                    Confirmar
                                </ModalSendButton>
                                <ModalCancelButton onClick={handleCancel}>
                                    Cancelar
                                </ModalCancelButton>
                            </Modal>
                        </ModalBackground>
                    )}
                </Container>
                <Footer />
            </Wrapper>
        </>
    );
};

export default PaginaNovoVeiculo;
