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

const Div = styled.div`
    margin-bottom: 1.5rem;
`;
const Form = styled.form`
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width:70vw;
    margin: 0 auto;
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
    const [isOpen, setIsOpen] = useState(false);

    const [tipo, setTipo] = useState();
    const [marca, setMarca] = useState();
    const [modelo, setModelo] = useState();
    const [ano, setAno] = useState();

    const [todasAsMarcas, setTodasAsMarcas] = useState([]);
    const [todosOsModelos, setTodosOsModelos] = useState([]);
    const [todosOsAnos, setTodosOsAnos] = useState([]);

    const [carregandoMarcas, setCarregandoMarcas] = useState(true);
    const [carregandoModelos, setCarregandoModelos] = useState(true);
    const [carregandoAnos, setCarregandoAnos] = useState(true);

    const [placa, setPlaca] = useState("");
    const [cor, setCor] = useState("");
    const [proprietario, setProprietario] = useState("");
    const [matricula, setMatricula] = useState("");

    useEffect(() => {
        setCarregandoMarcas(true);
        getMarcas(tipo)
            .then((marcas) => {
                setTodasAsMarcas(marcas || []);
            })
            .catch((error) => {
                console.error("Erro ao processar marcas:", error);
                setTodasAsMarcas([]);
            })
            .finally(() => setCarregandoMarcas(false));
    }, [tipo]);

    useEffect(() => {
        setCarregandoModelos(true);
        getModelos(tipo, marca)
            .then((modelos) => {
                setTodosOsModelos(modelos || []);
            })
            .catch((error) => {
                console.error("Erro ao processar modelos:", error);
                setTodosOsModelos([]);
            })
            .finally(() => setCarregandoModelos(false));
    }, [tipo, marca]);

    useEffect(() => {
        setCarregandoAnos(true);
        getAnos(tipo, marca, modelo)
            .then((ano) => {
                setTodosOsAnos(ano || []);
            })
            .catch((error) => {
                console.error("Erro ao processar anos:", error);
            })
            .finally(() => setCarregandoAnos(false));
    }, [tipo, marca, modelo]);

    return (
        <>
            <Wrapper>
                <Header />
                <Container>
                    <Form>
                        <Div>
                            <Label>Tipo do veículo</Label>
                            <Select
                                value={tipo}
                                onChange={(event) => {
                                    setTipo(event.target.value);
                                }}
                            >
                                <option value={""}>Selecione</option>
                                <option value={1}>Carro</option>
                                <option value={2}>Moto</option>
                                <option value={3}>Caminhão</option>
                            </Select>
                        </Div>
                        <Div>
                            <Label>Marca</Label>
                            <Select
                                value={marca}
                                onChange={(event) => {
                                    setMarca(event.target.value);
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
                                    <option>Nenhuma marca disponível</option>
                                )}
                            </Select>
                        </Div>
                        <Div>
                            <Label>Modelo</Label>
                            <Select
                                value={modelo}
                                onChange={(event) => {
                                    setModelo(event.target.value);
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
                                    <option>Nenhum modelo disponível</option>
                                )}
                            </Select>
                        </Div>
                        <Div>
                            <Label>Ano</Label>
                            <Select
                                value={ano}
                                onChange={(event) => {
                                    setAno(event.target.value);
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
                        </Div>
                        <Div>
                            <Label>Placa</Label>
                            <Input
                                type="text"
                                placeholder="Informe a placa do veículo"
                                onChange={(event) =>
                                    setPlaca(event.target.value)
                                }
                            />
                        </Div>
                        <Div>
                            <Label>Cor</Label>
                            <Input
                                type="text"
                                placeholder="Informe a cor do veículo"
                                onChange={(event) => setCor(event.target.value)}
                            />
                        </Div>

                        <Div>
                            <Label>Proprietário</Label>
                            <Input
                                type="text"
                                placeholder="Informe o proprietário(a) do veículo"
                                onChange={(event) =>
                                    setProprietario(event.target.value)
                                }
                            />
                        </Div>
                        <Div>
                            <Label>Matrícula</Label>
                            <Input
                                type="text"
                                placeholder="Informe a matrícula do proprietário(a)"
                                onChange={(event) =>
                                    setMatricula(event.target.value)
                                }
                            />
                        </Div>
                        <Div>
                            <Label>Status</Label>
                            <Select>
                                <option value={"Permitido"}>Permitido</option>
                                <option value={"Proibido"}>Proibido</option>
                            </Select>
                        </Div>
                        <Div>
                            <BotaoEnviar
                                onClick={(event) => {
                                    event.preventDefault();
                                    console.log("Valor do form");
                                }}
                            >
                                Enviar
                            </BotaoEnviar>
                        </Div>
                    </Form>
                </Container>
                <Footer />
            </Wrapper>
            {/* <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    }}
                    >
                    Abrir
                    </button>
                    
                    {isOpen && <Modal setIsOpen={setIsOpen} />} */}
        </>
    );
};

export default PaginaNovoVeiculo;
