import styled from "styled-components";

const StyledSelect = styled.select`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ffffff;
    color: #333;

    &:focus {
        outline: none;
        border-color: #4caf50;
        box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    }

    &:disabled {
        background-color: #e0e0e0;
        color: #999;
        cursor: not-allowed;
    }
`;

export default StyledSelect;
