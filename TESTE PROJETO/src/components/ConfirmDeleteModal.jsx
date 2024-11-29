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
    background-color: ${(props) => (props.confirm ? "#dc3545" : "#28a745")};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, vehicleId }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <h3>Você tem certeza que deseja excluir este veículo?</h3>
                <div>
                    <ModalButton onClick={onConfirm} confirm>
                        Sim, excluir
                    </ModalButton>
                    <ModalButton onClick={onClose}>Cancelar</ModalButton>
                </div>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ConfirmDeleteModal;
