import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

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
        <footer className={styles.rodape}>
            <div className={styles.imagemRodape}>
                <img
                    src="src/img/logo_unilavras_rodape.png"
                    alt="Logo unilavras"
                    className={styles.imagem}
                />
            </div>
            <div className={styles.mensagemRodape}>
                <ul className={styles.listaIcones}>
                    <li className={styles.icones}>
                        <FaFacebook onClick={paginaFacebook} />
                    </li>
                    <li className={styles.icones}>
                        <FaInstagram onClick={paginaInstagram} />
                    </li>
                    <li className={styles.icones}>
                        <FaLinkedin onClick={paginaLinkedin} />
                    </li>
                </ul>
                <span className={styles.mensagem}>
                    UNILAVRAS - UNIPARK <br />
                    &copy; Todos os direitos reservados - 2024
                </span>
            </div>
        </footer>
    );
};
export default Footer;
