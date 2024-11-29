import styled from "styled-components";

// Estilo do Label
export const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`;

// Estilo do Input
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 16px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

// Agrupamento de campos do formulário
export const FormGroup = styled.div`
    margin-bottom: 15px;
`;

// Estilo do Botão (Reutilizando do ModalEdit)
export const Button = styled.button`
background-color:blue;
    padding: 10px 15px;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    max-width: 200px;

    &:hover {
        opacity: 0.9;
    }

    /* Botão de salvar (verde mais forte) */
    &.save {
        background-color: #28a745; /* Verde mais intenso */
    }

    /* Botão de cancelar (vermelho) */
    &.cancel {
        background-color: #dc3545;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 16px;
    background-color: white;
    cursor: pointer;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;
