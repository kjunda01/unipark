import styled from "styled-components";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;

    padding: 20px;
    text-align: center;
    width: 100%;
    background-color: whitesmoke;
`;

const Filtro = styled.div`
    display: flex;
    gap: 20px;

    label {
        padding-right: 10px;
    }
`;

const PaginaConsulta = () => {
    return (
        <Wrapper>
            <Header />

            <Container>
                <Filtro>
                    <div>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Informe a placa"
                        />
                    </div>
                    <div>
                        <label>Filtrar por:</label>
                        <select>
                            <option>Selecione</option>
                            <option>Marca</option>
                            <option>Modelo</option>
                            <option>Colaborador</option>
                        </select>
                    </div>
                    <div>
                        <button>Pesquisar</button>
                    </div>
                    <br />
                    <div>
                        <h3>Placa</h3>
                        <p>Marca - Veículo</p>
                    </div>
                </Filtro>
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default PaginaConsulta;
