export function FormularioNovaPlaca() {
  return (
    <form>
      <input name="placa" placeholder="Placa" required />

      <input name="marca" placeholder="Marca" required />
      <input name="modelo" placeholder="Modelo" required />
      <input name="cor" placeholder="Cor" required />
      <input name="ano" placeholder="Ano" required />
      <input name="colaborador" placeholder="Colaborador" required />
      <input name="matricula" placeholder="Matrícula" required />

      <button type="submit">Cadastrar Placa</button>
    </form>
  );
}

