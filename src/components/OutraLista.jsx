function OutraLista({ itens }) {
  const lista =
    itens.length > 0
      ? itens.map((item, index) => <p key={index}>{item}</p>)
      : "Não há itens na lista.";

  return (
    <>
      <h3>Lista de coisas boas:</h3>
      {console.log(lista)}
      {lista}
    </>
  );
}

export default OutraLista;
