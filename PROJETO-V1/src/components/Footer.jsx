import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

// Estilos do Footer
const CustomFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.cinzaEscuro};
    color: white;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
    z-index: 100;

    ul {
        display: flex;
        gap: 20px;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        cursor: pointer;
        font-size: 24px;
        transition: transform 0.3s ease, color 0.3s ease;
    }

    li:hover {
        transform: scale(1.1);
        color: ${({ theme }) => theme.colors.primary};
    }

    a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    span {
        text-align: center;
        margin-top: 10px;
    }

    @media (max-width: 768px) {
        padding: 10px;

        ul {
            flex-direction: column;
            gap: 10px;
        }
    }
`;

const socialLinks = [
    {
        href: "https://www.facebook.com/unilavras",
        icon: <FaFacebook />,
        label: "Facebook",
    },
    {
        href: "https://www.instagram.com/unilavras",
        icon: <FaInstagram />,
        label: "Instagram",
    },
    {
        href: "https://br.linkedin.com/school/unilavras-centro-universitario/",
        icon: <FaLinkedin />,
        label: "LinkedIn",
    },
];

const Footer = () => {
    return (
        <CustomFooter>
            <ul>
                {socialLinks.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
            <span>
                UNILAVRAS - UNIPARK <br />
                &copy; Todos os direitos reservados - 2024
            </span>
        </CustomFooter>
    );
};

export default Footer;
