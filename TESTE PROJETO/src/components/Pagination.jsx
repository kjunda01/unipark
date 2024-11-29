import styled from "styled-components";

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    button {
        padding: 10px 20px;
        cursor: pointer;
        &:disabled {
            background-color: #ddd;
        }
    }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <PaginationWrapper>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Anterior
            </button>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Próximo
            </button>
        </PaginationWrapper>
    );
};

export default Pagination;
