import React, { useEffect, useState } from "react";
import axios from "axios";

function VeiculoComponent() {
  const [carros, setVeiculo] = useState(null);
  const [tipo, setTipo] = useState("carros"); // Defina o tipo desejado
  const [codigo, setCodigo] = useState("102"); // Código do veículo a buscar

  useEffect(() => {
    const fetchVeiculo = async () => {
      try {
        const response = await axios.get("http://192.168.1.199:5000/marcas?tipo=carros&id=1");
        const marcas = response.data;

        // Filtrando para encontrar o veículo específico baseado no código
        const tipoVeiculos = marcas.find((m) => m.tipo === tipo);
        const veiculoEncontrado = tipoVeiculos?.veiculos.find(
          (v) => v.codigo === codigo,
        );

        setVeiculo(veiculoEncontrado);
      } catch (error) {
        console.error("Erro ao buscar os veículos:", error);
      }
    };

    fetchVeiculo();
  }, [tipo, codigo]); // Dependências para atualizar a busca se o tipo ou código mudarem

  return (
    <div>
      <h1>Veículo Específico</h1>
      {carros ? (
        <div>
          <p>Código: {carros.codigo}</p>
          <p>Nome: {carros.nome}</p>
        </div>
      ) : (
        <p>Nenhum veículo encontrado.</p>
      )}
    </div>
  );
}

export default VeiculoComponent;
