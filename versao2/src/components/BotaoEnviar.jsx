import styled from "styled-components";

const CustomBotaoEnviar = styled.button`
    display: block;
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.azulClaro};
    color: #fff;
    border: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #0056b3;
    }
`;

export const BotaoEnviar = ({ ...rest }) => {
    return <CustomBotaoEnviar {...rest} />;
};

export default BotaoEnviar;
