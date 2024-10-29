import React from "react";

const ListaPlacas = ({ placas, onDeletePlaca }) => {
  return (
    <ul>
      {placas.map((placa) => (
        <li key={placa.id}>
          <strong>Placa:</strong> {placa.placa}, <strong>Marca:</strong>{" "}
          {placa.marca}, <strong>Status:</strong> {placa.status}
          <button onClick={() => onDeletePlaca(placa.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaPlacas;
