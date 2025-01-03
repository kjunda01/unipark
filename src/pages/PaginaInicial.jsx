import styled from "styled-components";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import { Wrapper } from "../components/layout/Wrapper.style";
import { Container } from "../components/layout/Container.style";
import MOCKAPI from "../service/ApiMockApi";

const Span = styled.span`
    background-color: ${({ theme }) => theme.colors.amarelo};
`;

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
`;

const Div = styled.div`
    &:hover {
        color: ${({ theme }) => theme.colors.azulEscuro};
        transform: scale(1.2);
        transition:
            background-color 0.3s,
            transform 0.3s;
    }
`;

const Subtitle = styled.h3`
    text-align: center;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.cinzaClaro};
`;

const PaginaInicial = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <Div>
                    <Title>
                        Bem-vindo(a) ao <Span>Projeto Unipark</Span>
                    </Title>
                    <Subtitle>Navegue com o menu acima</Subtitle>
                </Div>
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default PaginaInicial;
