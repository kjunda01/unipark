function Evento({ numero }) {
  const meuEvento = () => {
    console.log(`Opa, fui ativado - número ${numero}`);
  };

  return (
    <>
      <p>Clique para disparar um evento</p>
      <button onClick={meuEvento}>Ativar!</button>
    </>
  );
}

export default Evento;
