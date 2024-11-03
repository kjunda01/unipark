import { useState } from "react";
import styles from "./FormNovaPlaca.module.css";
import Input from "./Input";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

function FormNovaPlaca({btnText}) {
  // name = nome do tributo para pegar
  // setName = o que será alterado
  //const [name, setName] = useState();
  //const [password, setPassword] = useState();

  return (
    <form className={styles.formulario}>
      <Input
        type="text"
        text="Placa"
        name="name"
        placeholder="Informe a placa do veículo"
      />

      <Input
        type="text"
        text="Marca"
        name="name"
        placeholder="Informe a marca do veículo"
      />

      <Input
        type="text"
        text="Modelo"
        name="name"
        placeholder="Informe o modelo do veículo"
      />

      <Input
        type="text"
        text="Cor"
        name="name"
        placeholder="Informe a cor do veículo"
      />

      <Input
        type="number"
        text="Ano"
        name="name"
        placeholder="Informe o ano do veículo"
      />

      <Input
        type="text"
        text="Nome do colaborador (proprietário)"
        name="name"
        placeholder="Informe o nome do colaborador (proprietário)"
      />

      <Input
        type="text"
        text="Matrícula do colaborador (proprietário)"
        name="name"
        placeholder="Informe a matrícula do colaborador (proprietário)"
      />

      <Select
        name="Status"
        text="Status (permitida ou não a entrada no estacionamento)"
      />

      <SubmitButton btnText={btnText}/>

    </form>
  );
}

export default FormNovaPlaca;
