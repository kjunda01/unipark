import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import MensagemFooter from "./MensagemFooter";

function Footer() {
  function paginaFacebook() {
    window.open("https://www.facebook.com/unilavras", "_blank");
  }
  function paginaInstagram() {
    window.open("https://www.instagram.com/unilavras", "_blank");
  }
  function paginaLinkedin() {
    window.open(
      "https://br.linkedin.com/school/unilavras-centro-universitario/",
      "_blank",
    );
  }

  return (
    <footer className={styles.rodape}>
      <div className={styles.magemRodape}>
        <img src="src/img/logo_unilavras_rodape.png" alt="Logo unilavras" className={styles.imagem}/>
      </div>
      <div className={styles.mensagemRodape}>
        <ul className={styles.listaIcones}>
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
        <MensagemFooter />
      </div>
    </footer>
  );
}
export default Footer;
