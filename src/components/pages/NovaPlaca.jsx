import FormNovaPlaca from "../form/FormNovaPlaca";
import styles from "../form/FormNovaPlaca.module.css"


function NovaPlaca() {
  return (
    <div className={styles.novaPlacaContainer}>
      <h1>Adicionar veículo</h1>
      <p>Adicione o veículo desejado preenchendo o formulário:</p>
      <FormNovaPlaca />
    </div>
  );
}

export default NovaPlaca;
