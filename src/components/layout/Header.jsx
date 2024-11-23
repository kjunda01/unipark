import { Link } from "react-router-dom";
import styled from "styled-components";


const CustomHeader = styled.header`
    background-color: white;
    color: ${({ theme }) => theme.colors.azulEscuro};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    position: relative;
    z-index: 100;

    @media (max-width: 768px) {
        height: auto;
        flex-direction: column;
        padding: 0.5em;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.azulEscuro};
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.azulClaro};
    }
`;

const Nav = styled.nav`
    display: block;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
`;

const Li = styled.li`
    margin: 0 15px;
    padding: 5px;
    transition: background-color 0.3s, padding 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.amarelo};
        border-radius: 4px;
    }
`;

// Componente funcional
const Header = () => {
    return (
        <CustomHeader>
            <Link to="/">
                <img
                    src="https://unilavras.edu.br/new_site/wp-content/uploads/2018/10/Logo-para-site-barra-de-menu-1.png"
                    alt="Logo do projeto Unipark"
                    loading="lazy"
                />
            </Link>

            <Nav>
                <Ul>
                    <Li>
                        <StyledLink to="/aovivo">AO VIVO</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to="/buscarveiculo">Consultar</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to="/cadastrarveiculo">
                            Novo Veículo
                        </StyledLink>
                    </Li>
                </Ul>
            </Nav>
        </CustomHeader>
    );
};

export default Header;
