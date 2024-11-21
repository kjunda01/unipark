import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Title = styled.h1`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
`;

const TextoBotaoFechar = styled.p`
    display: flex;
    justify-content: flex-end;
`;

const BotaoFechar = styled.button`
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
`;

const Body = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    font-size: 1.7rem;
    text-align: center;
`;

const Footer = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BotaoEnviar = styled.button`
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.azulClaro};
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`;

const BotaoCancelar = styled.button`
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: red;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`;

const Modal = ({
    setIsOpen,
    title = "Título",
    body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima eos perferendis rem et, esse obcaecati laboriosam ipsum consequuntur maxime nihil tempore ratione totam adipisci! Est beatae consequuntur pariatur labore.",
    BtnEnviar = "Enviar",
    BtnCancel = "Cancelar",
}) => {
    return (
        <ModalBackground>
            <ModalContainer>
                <BotaoFechar onClick={() => setIsOpen(false)}>
                    <TextoBotaoFechar>X</TextoBotaoFechar>
                </BotaoFechar>
                <Title>{title}</Title>
                <Body>{body}</Body>
                <Footer>
                    <BotaoCancelar>{BtnCancel}</BotaoCancelar>
                    <BotaoEnviar>{BtnEnviar}</BotaoEnviar>
                </Footer>
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
