import PropTypes from "prop-types";

function Item({ marca, anoLancamento }) {
  return (
    <>
      <li>
        {marca} - {anoLancamento}
      </li>
    </>
  );
}

export default Item;

Item.propTypes = {
  marca: PropTypes.string,
  anoLancamento: PropTypes.number,
};

Item.defaultProps = {
  marca: "Faltou a marca",
  anoLancamento: 0,
};
