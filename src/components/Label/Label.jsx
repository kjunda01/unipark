import styled from "styled-components";

const CustomLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.azulEscuro};
`;

const Label = ({ ...rest }) => {
    return <CustomLabel {...rest} />;
};

export default Label;
