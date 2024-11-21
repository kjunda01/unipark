import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import PaginaInicial from "../../pages/PaginaInicial";

export const CustomHeader = styled.header`
    background-color: white;
    color: ${({ theme }) => theme.colors.azulEscuro};
    height: 10vh; /* 15% da altura da tela */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
`;

const Nav = styled.nav`
    a {
        text-decoration: none;
        font-size: 16px;
        padding: 8px 16px;
        display: block;
        transition: background-color 0.3s;
    }
`;

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
`;

const Li = styled.li`
    margin: 0 15px;
    padding: 10px;
    transition:
        background-color 0.3s,
        padding 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.amarelo};
        border-radius: 4px;
    }
`;

const Header = () => {
    return (
        <CustomHeader>
            <Link to="/">
                <img
                    src="https://unilavras.edu.br/new_site/wp-content/uploads/2018/10/Logo-para-site-barra-de-menu-1.png"
                    alt="Logo-para-site-barra-de-menu"
                />
            </Link>

            <Nav>
                <Ul>
                    <Li>
                        <Link to="/aovivo">AO VIVO</Link>
                    </Li>
                    <Li>
                        <Link to="/buscarveiculo">Consultar</Link>
                    </Li>
                    <Li>
                        <Link to="/cadastrarveiculo">Novo Veículo</Link>
                    </Li>
                </Ul>
            </Nav>
        </CustomHeader>
    );
};

export default Header;
