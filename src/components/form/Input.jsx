import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
        border-color: #007bff;
    }
`;

export default Input;
