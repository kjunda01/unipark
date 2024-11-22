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

const Div = styled.div``;
const Form = styled.form``;
const Datalist = styled.datalist``;

const PaginaNovoVeiculo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [tipo, setTipo] = useState(1);
    const [marca, setMarca] = useState(1);
    const [modelo, setModelo] = useState(1);
    const [ano, setAno] = useState("1992-1");

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

    // useEffect(() => {
    //     setCarregandoAnos(true);
    //     getAnos(tipo, marca, modelo)
    //         .then((ano) => {
    //             setTodosOsAnos(ano || []);
    //         })
    //         .catch((error) => {
    //             console.error("Erro ao processar anos:", error);
    //         })
    //         .finally(() => setCarregandoAnos(false));
    // }, [tipo, marca, modelo]);

    return (
        <>
            <Wrapper>
                <Header />
                <Container>
                    <Form>
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
                            <Label>Tipo do veículo</Label>
                            <Datalist
                                value={tipo}
                                onChange={(event) => {
                                    setTipo(event.target.value);
                                }}
                            >
                                <option value={1}>Carro</option>
                                <option value={2}>Moto</option>
                                <option value={3}>Caminhão</option>
                            </Datalist>
                        </Div>
                        <Div>
                            <Label>Marca</Label>
                            <Datalist
                                value={marca}
                                onChange={(event) => {
                                    setMarca(event.target.value);
                                }}
                            >
                                {carregandoMarcas ? (
                                    <option>Selecione...</option>
                                ) : (
                                    todasAsMarcas.map((marca) => (
                                        <option
                                            key={marca.Value}
                                            value={marca.Value}
                                        >
                                            {marca.Label.toUpperCase()}
                                        </option>
                                    ))
                                )}
                            </Datalist>
                        </Div>
                        <Div>
                            <Label>Modelo</Label>
                            <Datalist
                                value={modelo}
                                onChange={(event) => {
                                    setModelo(event.target.value);
                                }}
                            >
                                {carregandoModelos ? (
                                    <option>Selecione...</option>
                                ) : (
                                    todosOsModelos.map((modelo) => (
                                        <option
                                            key={modelo.Value}
                                            value={modelo.Value}
                                        >
                                            {modelo.Label.toUpperCase()}
                                        </option>
                                    ))
                                )}
                            </Datalist>
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
                            <Label>Ano</Label>
                            <Datalist
                                value={ano}
                                onChange={(event) => {
                                    setAno(event.target.value);
                                }}
                            >
                                {carregandoAnos ? (
                                    <option>Selecione...</option>
                                ) : (
                                    todosOsAnos.map((ano) => (
                                        <option
                                            key={ano.Value}
                                            value={ano.Value}
                                        >
                                            {ano.Label.toUpperCase()}
                                        </option>
                                    ))
                                )}
                            </Datalist>
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
                            <input type="text" /><Datalist>
                                <option value={"Permitido"}>Permitido</option>
                                <option value={"Proibido"}>Proibido</option>
                            </Datalist>
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
