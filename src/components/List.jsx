import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" anoLancamento={1985} />
        <Item marca="Ford" />
        <Item anoLancamento={1985} />
      </ul>
    </>
  );
}

export default List;
