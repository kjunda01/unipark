import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import Container from "./Container";

import DropdownMenu from './DropdownMenu';


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
      <DropdownMenu/>
        {/* <Link to="https://unilavras.edu.br"></Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Início</Link>
          </li>

          <li className={styles.item}>
            <Link to="/consulta">Consultar Placa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/novaplaca">Nova Placa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/aovivo">Tempo Real</Link>
          </li>
        </ul> */}
      </Container>
    </nav>
  );
}
export default Navbar;
