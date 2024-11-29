// components/ModalConfirm.js
import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
`;

const ModalButton = styled.button`
    padding: 10px 20px;
    margin: 10px;
    background-color: ${(props) =>
        props.confirm ? "#dc3545" : "#28a745"};  // Verifica se a propriedade confirm é verdadeira
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;


const ModalConfirm = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <h3>Confirmar Ação</h3>
                <p>{message}</p>
                <div>
                    {/* Passando a classe confirm diretamente, ao invés de uma propriedade booleana */}
                    <ModalButton onClick={onConfirm} confirm={true}>
                        Confirmar
                    </ModalButton>
                    <ModalButton onClick={onClose}>Cancelar</ModalButton>
                </div>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ModalConfirm;
