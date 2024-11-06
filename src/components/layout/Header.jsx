import Navbar from "./Navbar";
import styles from "./Header.module.css";
import LinkButton from "./LinkButton";
import { FaHome } from "react-icons/fa";
import Home from "../pages/Home";

function Header() {
  function Home() {}
  return (
    <header className={styles.cabecalho}>
      <LinkButton to="/" texto={<FaHome className={styles.home} />} />
      <Navbar />
    </header>
  );
}

export default Header;
