import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  const enviarEmail = (e) => {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  };

  const limparEmail = (e) => {
    e.preventDefault();
    setUserEmail("");
  };

  return (
    <>
      <h2>Cadastre o seu e-mail</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu e-mail..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar e-mail
        </button>
        {userEmail && (
          <div>
            <p>O email do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </>
  );
}

export default Condicional;
