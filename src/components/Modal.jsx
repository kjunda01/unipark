import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    min-width: 30vw;
    text-align: left;
    
    h2{
        text-align: center;
    }

`;

export const ModalSendButton = styled.button`
    padding: 10px;
    margin: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const ModalCancelButton = styled(ModalSendButton)`
    background-color: #dc3545;
    &:hover {
        background-color: #c82333;
    }
`;

export const ModalSair = styled.div`
    text-align: right;
    cursor: pointer;
    color: red;
`;
