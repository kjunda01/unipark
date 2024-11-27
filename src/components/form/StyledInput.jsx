import styled from "styled-components";
import Input from "./Input";

const StyledInput = styled(Input)`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: ${({ theme }) => theme.colors.azulEscuro};
        outline: none;
    }
`;

export default StyledInput