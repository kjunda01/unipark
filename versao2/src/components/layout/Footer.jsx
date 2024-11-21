import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const CustomFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.cinzaEscuro};
    color: white;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;

    ul {
        display: flex;
        gap: 20px;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        cursor: pointer;
    }

    span {
        text-align: center;
        margin-top: 10px;
    }
`;

const Footer = () => {
    const paginaFacebook = () =>
        window.open("https://www.facebook.com/unilavras", "_blank");

    const paginaInstagram = () =>
        window.open("https://www.instagram.com/unilavras", "_blank");

    const paginaLinkedin = () => {
        window.open(
            "https://br.linkedin.com/school/unilavras-centro-universitario/",
            "_blank"
        );
    };

    return (
        <CustomFooter>
            <ul>
                <li>
                    <FaFacebook onClick={paginaFacebook} />
                </li>
                <li>
                    <FaInstagram onClick={paginaInstagram} />
                </li>
                <li>
                    <FaLinkedin onClick={paginaLinkedin} />
                </li>
            </ul>
            <span>
                UNILAVRAS - UNIPARK <br />
                &copy; Todos os direitos reservados - 2024
            </span>
        </CustomFooter>
    );
};

export default Footer;
