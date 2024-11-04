import React, { useEffect, useState } from "react";
import styles from "./FormNovaPlaca.module.css";
 
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

function FormNovaPlaca({ btnText }) {
  // name = nome do tributo para pegar
  // setName = o que será alterado
  //const [name, setName] = useState();
  //const [password, setPassword] = useState();

  // URL MOCK
  //https://6727abed270bd0b9755344ee.mockapi.io/api/Placas
  //https://unipark-a9b95-default-rtdb.firebaseio.com/marcas.json

  const[marcas, setMarcas] = useState([]);

  useEffect(() => {
    fetch("https://unipark-a9b95-default-rtdb.firebaseio.com/marcas.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMarcas(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <form className={styles.formulario}>

      <Select name="marcas_id" text="Marcas" options={marcas}/>

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

      <SubmitButton btnText={btnText} />
    </form>
  );
}

export default FormNovaPlaca;
