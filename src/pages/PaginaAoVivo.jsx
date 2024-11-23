import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { Wrapper } from "../components/layout/Wrapper.style";
import { Container } from "../components/layout/Container.style";
import InfoVeiculo from "../components/layout/InfoVeiculo";

const PaginaAoVivo = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <InfoVeiculo />
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default PaginaAoVivo;
