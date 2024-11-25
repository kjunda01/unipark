import styled from "styled-components";

const CustomBotaoCancelar = styled.button`
    display: block;
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #b80000;
    }
`;

export const BotaoCancelar = ({ ...rest }) => {
    return <CustomBotaoCancelar {...rest} />;
};

export default BotaoCancelar;
