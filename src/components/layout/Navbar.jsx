import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import DropdownMenu from "./DropdownMenu";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="https://unilavras.edu.br"></Link>

      <DropdownMenu className={styles.dropdownVeiculos}/>
    </nav>
  );
}
export default Navbar;
