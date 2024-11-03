import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./TabelaListaPlacas.module.css";

function TabelaListaPlacas() {
  const [placas, setPlacas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://192.168.1.199:5000/placas")
      .then((response) => {
        setPlacas(response.data);
        setLoading(false);
      })
      .catch((erro) => {
        console.error(erro);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando....</div>;
  }
  return (
    <table className={styles.tabela}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ano</th>
          <th>Cor</th>
          <th>Marca</th>
          <th>Matrícula Proprietário</th>
          <th>Modelo</th>
          <th>Nome Proprietário</th>
          <th>Placa</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {placas.map((placa) => (
          <tr key={placa.id}>
            <td>{placa.id}</td>
            <td>{placa.ano}</td>
            <td>{placa.cor}</td>
            <td>{placa.marca}</td>
            <td>{placa.matriculaproprietario}</td>
            <td>{placa.modelo}</td>
            <td>{placa.nomeproprietario}</td>
            <td>{placa.placa}</td>
            <td>{placa.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TabelaListaPlacas;
