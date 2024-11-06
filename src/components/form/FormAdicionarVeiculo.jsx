import React, { useState } from "react";
import styles from "./FormAdicionarVeiculo.module.css";
import axios from "axios";
import Input from "./Input";

function FormAdicionarVeiculo() {
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");
  const [marca, setMarca] = useState("");
  const [matricula, setMatricula] = useState("");
  const [modelo, setModelo] = useState("");
  const [proprietario, setProprietario] = useState("");
  const [placa, setPlaca] = useState("");
  const [status, setStatus] = useState("Permitido");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Estrutura dos dados conforme o formato necessário
    const data = {
      [placa]: {
        marca,
        modelo,
        cor,
        ano,
        proprietario,
        matricula,
        status,
      },
    };

    try {
      const response = await axios.patch(
        "https://unipark-a9b95-default-rtdb.firebaseio.com/veiculos.json",
        data,
      );
      alert(
        "Registro adicionado com sucesso: " + JSON.stringify(response.data),
      );
    } catch (error) {
      alert("Erro ao adicionar registro: " + error.message);
    }
  };

  return (
    <div className={styles.adicionarVeiculoContainer}>
      <form onSubmit={handleSubmit} className={styles.formulario}>
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
          text="Marca"
          name="marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
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
          text="Cor"
          name="cor"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
          required
        />
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
          text="Nome do Proprietário"
          name="nomedoproprietario"
          value={proprietario}
          onChange={(e) => setProprietario(e.target.value)}
          required
        />
        <Input
          type="text"
          text="Matrícula do Proprietário"
          name="matricula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          required
        />
        <Input
          type="text"
          text="Status (Permitido ou Proibido)"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
        <div className={styles.boxBtn}>
          <button type="submit">Cadastrar Veículo</button>
        </div>
      </form>
    </div>
  );
}

export default FormAdicionarVeiculo;
