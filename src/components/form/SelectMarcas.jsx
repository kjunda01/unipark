import React, { useState, useEffect } from "react";
import axios from "axios";

const SelectMarcas = () => {
  const [marcas, setMarcas] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await axios.get("https://unipark-a9b95-default-rtdb.firebaseio.com/marcas.json");

        // Utiliza um Set para eliminar duplicatas com base no nome
        const marcasUnicas = Array.from(
          new Set(response.data.map((marca) => marca.nome.toUpperCase())),
        ).map((nome) => {
          return response.data.find(
            (marca) => marca.nome.toUpperCase() === nome,
          );
        });

        // Ordena as marcas únicas por nome
        const marcasOrdenadas = marcasUnicas.sort((a, b) =>
          a.nome.localeCompare(b.nome),
        );

        setMarcas(marcasOrdenadas);
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
      <select>
        <option value="">Selecione uma marca</option>
        {marcas.length > 0 ? (
          marcas.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.nome.toUpperCase()}
            </option>
          ))
        ) : (
          <option>Carregando...</option>
        )}
      </select>
    </div>
  );
};

export default SelectMarcas;
