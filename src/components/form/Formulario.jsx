import { useState } from "react";

function Formulario() {
  // name = nome do tributo para pegar
  // setName = o que será alterado

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const cadastrarUsuario = (e) => {
    e.preventDefault();
    if (name || password !== undefined) {
      console.log({ name: name, password: password });
    
    } else {
      alert("Nome ou senha não podem estar vazios!");
    }
  };

  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Informe seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Informe sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Formulario;
