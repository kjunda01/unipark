import styled from "styled-components";

const CustomBotaoEnviar = styled.button`
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.azulClaro};
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`;

export const BotaoEnviar = ({ ...rest }) => {
    return <CustomBotaoEnviar {...rest} />;
};

export default BotaoEnviar;
