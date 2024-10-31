import Item from "./Item";
import styles from "./List.module.css";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" />
        <Item marca="Fiat" />
        <Item marca="Wolkswagen" />
      </ul>
    </>
  );
}

export default List;
