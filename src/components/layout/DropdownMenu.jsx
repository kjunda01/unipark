import Dropdown from 'react-bootstrap/Dropdown';

function DropdownMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Placas
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="consulta">Listar veículos</Dropdown.Item>
        <Dropdown.Item href="novaplaca">Cadastrar veículos</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;