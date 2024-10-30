import React, { useEffect, useState } from "react";
import "./app.css";
import { Frase } from "./components/Frase";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = "João";

  return (
    <div>
      <Frase />
      <SayMyName nome="Maria" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Paulo"
        idade="28"
        profissao="Programador"
        foto="https://placehold.co/150"
      />
    </div>
  );
}

export default App;
