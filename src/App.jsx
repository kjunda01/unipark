import React, { useEffect, useState } from "react";
import FormCadastro from "./components/FormCadastro";
import ListaPlacas from "./components/ListaPlacas";
import { getPlacas, createPlaca, deletePlaca } from "./services/Api";
import "./app.css";

const App = () => {
  const [placas, setPlacas] = useState([]);

  useEffect(() => {
    fetchPlacas();
  }, []);

  const fetchPlacas = async () => {
    const response = await getPlacas();
    setPlacas(response.data);
  };

  const handleAddPlaca = async (formData) => {
    await createPlaca(formData);
    fetchPlacas();
  };

  const handleDeletePlaca = async (id) => {
    await deletePlaca(id);
    fetchPlacas();
  };

  return (
    <div className="App">
      <h1>Cadastro de Placas de Veículos</h1>
      <FormCadastro onAddPlaca={handleAddPlaca} />
      <ListaPlacas placas={placas} onDeletePlaca={handleDeletePlaca} />
    </div>
  );
};

export default App;
