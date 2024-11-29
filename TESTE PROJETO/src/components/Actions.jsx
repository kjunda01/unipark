import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";

const ActionsWrapper = styled.div`
    display: flex;
    gap: 10px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 50%;
        cursor: pointer;

        &.edit {
            background-color: #ffc107;
            color: white;
        }

        &.delete {
            background-color: #dc3545;
            color: white;
        }

        &:hover {
            opacity: 0.9;
        }
    }
`;


const Actions = ({ veiculo, onEdit, onDelete }) => {
    return (
        <ActionsWrapper>
            <button
                className="edit"
                onClick={() => {
                    onEdit(veiculo.id);
                }}
            >
                <FaEdit />
            </button>
            <button
                className="delete"
                onClick={() => {
                    onDelete(veiculo.id);
                }}
            >
                <FaTrash />
            </button>
        </ActionsWrapper>
    );
};

export default Actions;
