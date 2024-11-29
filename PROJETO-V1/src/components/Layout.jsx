// components/Layout.js
import styled from "styled-components";
import Header from "./Header"; // Header já componentizado
import Footer from "./Footer"; // Footer já componentizado

const Wrapper = styled.div`
    min-height: 100vh; // Garantir que ocupe toda a altura da tela
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5; // Cor de fundo da página inteira
`;

const Content = styled.div`
    width: 98%;
    max-width: 80%;
    margin: 0 auto; // Centraliza a box
    padding: 20px;
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    flex: 1; // Permite que o conteúdo ocupe o espaço restante
`;

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </Wrapper>
    );
};

export default Layout;
