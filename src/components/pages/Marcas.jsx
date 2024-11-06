import React, { useState, useEffect } from "react";
import axios from "axios";

const Marcas = () => {
  const [marcas, setMarcas] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/marcas");
        setMarcas(response.data);
      } catch (err) {
        setErro("Erro ao buscar marcas");
        console.error(err);
      }
    };

    fetchMarcas();
  }, []); // A requisição é feita quando o componente é montado

  return (
    <div>
      <h1>Marcas</h1>
      {erro && <p>{erro}</p>}
      <ul>
        {marcas.length > 0 ? (
          marcas.map((marca) => <li key={marca.id}>{marca.nome}</li>)
        ) : (
          <p>Carregando...</p>
        )}
      </ul>
    </div>
  );
};

export default Marcas;
