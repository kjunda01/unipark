import styled from "styled-components";
import { Wrapper } from "../components/layout/Wrapper.style";
import { Container } from "../components/layout/Container.style";
import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import { getMarcas, getModelos } from "../service/ApiFIPE";

const Div = styled.div``;
const Form = styled.form``;
const Select = styled.select``;

const PaginaNovoVeiculo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [tipo, setTipo] = useState(1);

    const [todasAsMarcas, setTodasAsMarcas] = useState([]);
    const [marca, setMarca] = useState(1);

    const [todosOsModelos, setTodosOsModelos] = useState([]);
    const [modelo, setModelo] = useState("Integra GS 1.8");

    const [carregandoMarcas, setCarregandoMarcas] = useState(true);
    const [carregandoModelos, setCarregandoModelos] = useState(true);

    const [placa, setPlaca] = useState("");

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
                            <Select
                                value={tipo}
                                onChange={(event) => {
                                    setTipo(event.target.value);
                                }}
                            >
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
                            </Select>
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
