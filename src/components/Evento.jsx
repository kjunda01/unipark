import Button from "./evento/Button";

function Evento() {
  const meuEvento = () => {
    console.log("Ativando primeiro evento");
  };

  const segundoEvento = () => {
    console.log("Ativando segundo evento");
  };

  return (
    <>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </>
  );
}

export default Evento;
