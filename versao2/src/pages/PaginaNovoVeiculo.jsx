import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Wrapper } from "../components/layout/Wrapper.style";
import { Container } from "../components/layout/Container.style";

const PaginaNovoVeiculo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Wrapper>
                <Header />

                <Container>
                    <form>
                        
                    </form>
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
