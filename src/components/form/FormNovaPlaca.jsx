import { useState } from "react";
import styles from "./FormNovaPlaca.module.css";

function FormNovaPlaca() {
  // name = nome do tributo para pegar
  // setName = o que será alterado
  //const [name, setName] = useState();
  //const [password, setPassword] = useState();

  return (
    <form className={styles.formulario}>
      <div>
        <label>Placa</label>
        <input type="text" placeholder="Informe a placa do veículo" />
      </div>

      <div>
        <label>Marca</label>
        <input type="text" placeholder="Informe a marca do veículo" />
      </div>

      <div>
        <label>Modelo</label>
        <input type="text" placeholder="Informe o modelo do veículo" />
      </div>

      <div>
        <label>Cor</label>
        <input type="text" placeholder="Informe a cor do veículo" />
      </div>

      <div>
        <label>Ano</label>
        <input type="text" placeholder="Informe o ano do veículo" />
      </div>

      <div>
        <label>Nome do colaborador (proprietário)</label>
        <input
          type="text"
          placeholder="Informe o nome do colaborador (proprietário)"
        />
      </div>

      <div>
        <label>Matrícula do colaborador (proprietário)</label>
        <input type="text" placeholder="" />
      </div>

      <div>
        <label>Status (permitida ou não a entrada no estacionamento)</label>
        <select>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
      </div>

      <div>
        <input type="submit" value="Realizar cadastro" />
      </div>
      
    </form>
  );
}

export default FormNovaPlaca;
