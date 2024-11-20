import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function MeuDropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Veículos
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/veiculos">
                    Consultar veículos
                </Dropdown.Item>

                <Dropdown.Item as={Link} to="/adicionarVeiculo">
                    Cadastrar veículo
                </Dropdown.Item>

                <Dropdown.Item as={Link} to="/aovivo">
                    AO VIVO
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default MeuDropdown;
