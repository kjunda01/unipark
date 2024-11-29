import styled from "styled-components";

const PaginationControls = styled.div`
    display: flex;
    justify-content: center;

    button {
        margin: 0 5px;
        padding: 10px 20px;
        background-color: #043d6c;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;

        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }
`;

export default PaginationControls;
