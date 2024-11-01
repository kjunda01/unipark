function Formulario() {
  const cadastrarUsuario = (e) => {
    e.preventDefault();
    console.log("Cadastrou o usuario");
  };

  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label>Nome</label>
          <input type="text" placeholder="Informe seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Formulario;
