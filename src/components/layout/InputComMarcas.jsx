import React, { useEffect, useState } from "react";
import axios from "axios";

function MarcasComponent() {
  const [caminhoes, setcaminhoes] = useState([]);

  useEffect(() => {
    const fetchcaminhoes = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.199:5000/caminhoes/marcas",
        );
        setcaminhoes(response.data.caminhoes);
      } catch (error) {
        console.error("Erro ao buscar marcas de caminhoes:", error);
      }
    };
    fetchcaminhoes();
  }, []);

  return (
    <div>
      <h1>Marcas de caminhoes</h1>
      <ul>
        {caminhoes.map((caminhoes) => (
          <li key={caminhoes.codigo}>{caminhoes.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default MarcasComponent;
