import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${(props) =>
        props.backgroundcolor === "cancel" ? "#f44336" : "#0861F2"};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        opacity: 0.8;
    }
`;

export default StyledButton;
