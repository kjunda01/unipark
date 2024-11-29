import styled from "styled-components";

const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    input {
        width: 100%;
        max-width: 800px;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        outline: none;
    }
`;

const SearchBar = ({ value, onChange }) => {
    return (
        <SearchBarWrapper>
            <input
                type="text"
                placeholder="Pesquisar por placa, tipo, marca ou modelo..."
                value={value}
                onChange={onChange}
            />
        </SearchBarWrapper>
    );
};

export default SearchBar;
