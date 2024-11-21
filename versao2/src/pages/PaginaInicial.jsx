import styled from "styled-components";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    width: 100%;
    background-color: whitesmoke;
`;

const Span = styled.span`
    background-color: ${({ theme }) => theme.colors.amarelo};
`;

const Title = styled.h1``;

const Div = styled.div`
    &:hover {
        color: ${({ theme }) => theme.colors.azulEscuro};
        transform: scale(1.2);
        transition:
            background-color 0.3s,
            transform 0.3s;
    }
`;
const Subtitle = styled.h3``;

const PaginaInicial = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <Div>
                    <Title>
                        Bem-vindo(a) ao <Span>Projeto Unipark</Span>
                    </Title>

                    <Subtitle>
                        Para visualizar em tempo real a câmera clique aqui
                    </Subtitle>
                </Div>
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default PaginaInicial;
