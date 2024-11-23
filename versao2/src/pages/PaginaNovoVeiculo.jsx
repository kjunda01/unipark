import axios from "axios";
import styled from "styled-components";

import { getAnos, getMarcas, getModelos } from "../service/ApiFIPE";
import { Wrapper } from "../components/layout/Wrapper.style";
import { Container } from "../components/layout/Container.style";
import { useEffect, useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import BotaoEnviar from "../components/BotaoEnviar";
import {
    Modal,
    ModalBackground,
    ModalCancelButton,
    ModalSendButton,
} from "../components/Modal";
import { Form } from "../components/form/Form.style";

const Div = styled.div`
    margin-bottom: 1.5rem;
`;

const Row = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

const Column = styled.div`
    flex: 1;
    min-width: 250px;
`;

const Select = styled.select`
    width: 100%;
    padding: 0.75rem;
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
        tipo: tipo,
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
        getMarcas(tipo)
            .then(setTodasAsMarcas)
            .catch(() => setTodasAsMarcas([]))
            .finally(() => setCarregandoMarcas(false));
    }, [tipo]);

    useEffect(() => {
        if (!marca) return;
        setCarregandoModelos(true);
        getModelos(tipo, marca)
            .then(setTodosOsModelos)
            .catch(() => setTodosOsModelos([]))
            .finally(() => setCarregandoModelos(false));
    }, [tipo, marca]);

    useEffect(() => {
        if (!modelo) return;
        setCarregandoAnos(true);
        getAnos(tipo, marca, modelo)
            .then(setTodosOsAnos)
            .catch(() => setTodosOsAnos([]))
            .finally(() => setCarregandoAnos(false));
    }, [tipo, marca, modelo]);

    const handleTextChange = (event) => {
        const opcao = event.target.options[event.target.selectedIndex]; // Acessa a opção selecionada
        const texto = opcao.textContent || opcao.innerText; // Pega o texto da opção
        return texto;
    };

    const handleSubmit = async (e) => {
        
        setIsOpen(!isOpen);
        if (
            tipo &&
            marca &&
            modelo &&
            ano &&
            placa &&
            cor &&
            proprietario &&
            matricula &&
            status
        ) {
            await axios.post(
                "https://unipark-a9b95-default-rtdb.firebaseio.com/veiculos.json",
                objeto
            );
        }
        // Adicionar um toast message aqui
    };

    const handleCancel = () => {
        setIsOpen(!isOpen);
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
                                    onChange={(event) =>
                                        setTipo(event.target.value)
                                    }
                                >
                                    <option value={""}>Selecione</option>
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
                                <h3>Confirmar Dados</h3>
                                <Div>Ano: {objeto.ano}</Div>
                                <Div>Cor: {objeto.cor}</Div>
                                <Div>Marca: {objeto.marca}</Div>
                                <Div>Matricula: {objeto.matricula}</Div>
                                <Div>Modelo: {objeto.modelo}</Div>
                                <Div>Placa: {objeto.placa}</Div>
                                <Div>Proprietário: {objeto.proprietario}</Div>
                                <Div>Status: {objeto.status}</Div>
                                <Div>
                                    Tipo:
                                    {objeto.tipo === 1
                                        ? " Carro"
                                        : objeto.tipo === 2
                                          ? " Moto"
                                          : " Caminhão"}
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
