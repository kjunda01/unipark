import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import MensagemFooter from "./MensagemFooter";

function Footer() {
  function paginaFacebook() {
    location.replace("https://www.facebook.com/unilavras");
  }
  function paginaInstagram() {
    location.replace("https://www.instagram.com/unilavras");
  }
  function paginaLinkedin() {
    location.replace(
      "https://br.linkedin.com/school/unilavras-centro-universitario/",
    );
  }

  return (
    <footer className={styles.rodape}>
      <div className={styles.imagemRodape}>
        <img src="src/assets/img/logo_uni.png" alt="Logo unilavras" />
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
