import FormAdicionarVeiculo from "../form/FormAdicionarVeiculo";
import styles from "../form/FormAdicionarVeiculo.module.css";

function AdicionarVeiculo() {
  return (
    <div className={styles.adicionarVeiculoContainer}>
      <h1>Adicionar veículo</h1>
      <p>Adicione o veículo desejado preenchendo o formulário:</p>
      <FormAdicionarVeiculo btnText="Adicionar placa" />
    </div>
  );
}

export default AdicionarVeiculo;
