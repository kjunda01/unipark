import React, { useState } from "react";

const FormCadastro = ({ onAddPlaca }) => {
  const [formData, setFormData] = useState({
    placa: "",
    marca: "",
    modelo: "",
    cor: "",
    ano: "",
    colaborador: "",
    matricula: "",
    status: "permitida",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlaca(formData);
    setFormData({
      placa: "",
      marca: "",
      modelo: "",
      cor: "",
      ano: "",
      colaborador: "",
      matricula: "",
      status: "permitida",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="placa"
        value={formData.placa}
        onChange={handleChange}
        placeholder="Placa"
        required
      />

      <input
        name="marca"
        value={formData.marca}
        onChange={handleChange}
        placeholder="Marca"
        required
      />
      <input
        name="modelo"
        value={formData.modelo}
        onChange={handleChange}
        placeholder="Modelo"
        required
      />
      <input
        name="cor"
        value={formData.cor}
        onChange={handleChange}
        placeholder="Cor"
        required
      />
      <input
        name="ano"
        value={formData.ano}
        onChange={handleChange}
        placeholder="Ano"
        required
      />
      <input
        name="colaborador"
        value={formData.colaborador}
        onChange={handleChange}
        placeholder="Colaborador"
        required
      />
      <input
        name="matricula"
        value={formData.matricula}
        onChange={handleChange}
        placeholder="Matrícula"
        required
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="permitida">Permitida</option>
        <option value="negada">Negada</option>
      </select>
      <button type="submit">Cadastrar Placa</button>
    </form>
  );
};

export default FormCadastro;
