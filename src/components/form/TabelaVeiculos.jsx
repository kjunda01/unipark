import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./TabelaVeiculos.module.css";

function TabelaVeiculos() {
    const [placas, setPlacas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                "https://unipark-a9b95-default-rtdb.firebaseio.com/veiculos.json"
            )
            .then((response) => {
                const data = response.data
                    ? Object.entries(response.data).map(([placa, dados]) => ({
                          placa,
                          ...dados,
                      }))
                    : [];
                setPlacas(data);
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
                    <th>Placa</th>
                    <th>Ano</th>
                    <th>Cor</th>
                    <th>Marca</th>
                    <th>Matrícula</th>
                    <th>Modelo</th>
                    <th>Proprietário</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {placas.map((placa, index) => (
                    <tr key={index}>
                        <td>{placa.id}</td>
                        <td>{placa.ano}</td>
                        <td>{placa.cor}</td>
                        <td>{placa.marca}</td>
                        <td>{placa.matricula}</td>
                        <td>{placa.modelo}</td>
                        <td>{placa.proprietario}</td>
                        <td>{placa.status ? "Permitido" : "Não permitido"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TabelaVeiculos;
