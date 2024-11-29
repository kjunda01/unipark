import styled from "styled-components";

import Layout from "../components/Layout";

const Span = styled.span`
    background-color: ${({ theme }) => theme.colors.amarelo};
`;

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
`;

const Subtitle = styled.h3`
    text-align: center;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.cinzaClaro};
`;

const PaginaInicial = () => {
    return (
        <Layout>
            
                <Title>
                    Bem-vindo(a) ao <Span>Projeto Unipark</Span>
                </Title>
                <Subtitle>Navegue com o menu acima</Subtitle>
            
        </Layout>
    );
};

export default PaginaInicial;
