import styled from "styled-components";

export const Form = styled.form`
    background: ${({ theme }) => theme.colors.cinzaClaro};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 70vw;
    margin: 0 auto;
`;
