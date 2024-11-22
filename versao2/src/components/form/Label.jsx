import styled from "styled-components";

const CustomLabel = styled.label``;

const Label = ({ ...rest }) => {
    return <CustomLabel {...rest} />;
};

export default Label;
