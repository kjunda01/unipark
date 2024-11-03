import Navbar from "./Navbar";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.cabecalho}>
      
      <h1 className={styles.tituloPrincipal}>UNIPARK</h1>

      <Navbar />
    </header>
  );
}

export default Header;
