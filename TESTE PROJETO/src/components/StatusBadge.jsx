import styled from "styled-components";

const Badge = styled.span`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    background-color: ${(props) =>
        props.status === "permitido"
            ? "green"
            : props.status === "proibido"
            ? "red"
            : "gray"};
`;

const StatusBadge = ({ status, children }) => {
    return <Badge status={status}>{children}</Badge>;
};

export default StatusBadge;
