import React, { useEffect, useState } from "react";
import styles from "./FormNovaPlaca.module.css";
import axios from "axios";

import Input from "./Input";

function FormNovaPlaca() {
  // name = nome do tributo para pegar
  // setName = o que será alterado
  //const [name, setName] = useState();
  //const [password, setPassword] = useState();

  // URL MOCK
  //https://6727abed270bd0b9755344ee.mockapi.io/api/Placas
  //https://unipark-a9b95-default-rtdb.firebaseio.com/marcas.json

  const [ano, setAno] = useState(); // Valor padrão
  const [cor, setCor] = useState("");
  const [marca, setMarca] = useState("");
  const [matriculaProprietario, setMatriculaProprietario] = useState("");
  const [modelo, setModelo] = useState("");
  const [nomedoproprietario, setNomedoproprietario] = useState("");
  const [placa, setPlaca] = useState("");
  const [status, setStatus] = useState("Permitido"); // Valor padrão

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ano,
      cor,
      marca,
      matriculaProprietario,
      modelo,
      nomedoproprietario,
      placa,
      status,
    };

    try {
      const response = await axios.post("http://localhost:5000/placas", data);
      console.log("Registro adicionado:", response.data);
    } catch (error) {
      console.log("Erro ao adicionar registro:", error);
    }
  };

  return (
    <div className={styles.novaPlacaContainer}>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <Input
          type="number"
          text="Ano"
          name="ano"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          required
        />
        <Input
          type="text"
          text="Cor"
          name="cor"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
          required
        />
        <Input
          type="text"
          text="Marca"
          name="marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        />
        <Input
          type="text"
          text="Matrícula do Proprietário"
          name="matriculaProprietario"
          value={matriculaProprietario}
          onChange={(e) => setMatriculaProprietario(e.target.value)}
          required
        />
        <Input
          type="text"
          text="Modelo"
          name="modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
        />
        <Input
          type="text"
          text="Nome do Proprietário"
          name="nomedoproprietario"
          value={nomedoproprietario}
          onChange={(e) => setNomedoproprietario(e.target.value)}
          required
        />
        <Input
          type="text"
          text="Placa"
          name="placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          required
        />
        <Input
          type="text"
          text="Status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
        <div className={styles.boxBtn}>
          <button type="submit">Adicionar Placa</button>
        </div>
      </form>
    </div>
  );
}

export default FormNovaPlaca;

// {
//   "ano":2024,
//   "cor":"Verde",
//   "marca":"Fiat",
//   "matriculaProprietario":"000 asd000",
//   "modelo":"Palasdasdio",
//   "nomedoproprietario":"Josasdasdaé",
//   "placa":"HCZ4807",
//   "status":"Permitido"
// }
