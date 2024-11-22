import styled from "styled-components";

const CustomInput = styled.input``;

const Input = ({ ...rest }) => {
    return <CustomInput {...rest} />;
};

export default Input;
