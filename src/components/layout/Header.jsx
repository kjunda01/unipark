import Navbar from "./Navbar";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.cabecalho}>
      <a
        className={styles.tituloPrincipal}
        href="https://unilavras.edu.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>UNIPARK</h1>
      </a>
      <Navbar />
    </header>
  );
}

export default Header;
