import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    width: 65%; /* 65% da largura da tela */
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
`;

const Modal = ({
    setIsOpen,
    title = "Título",
    body = "Mensagem",
    footer = "Botões",
}) => {
    return (
        <ModalBackground>
            <ModalContainer>
                <button onClick={() => setIsOpen(false)}>X</button>
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
