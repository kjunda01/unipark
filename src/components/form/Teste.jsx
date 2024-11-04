import { useEffect, useState } from "react";

const Teste = () => {
  const [placas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Teste = async () => {
      try {
        const response = await fetch(
          "https://unipark-a9b95-default-rtdb.firebaseio.com/placas.json",
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const data = await response.json();

        if (data) {
          const formattedMarcas = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setMarcas(formattedMarcas);
        } else {
          setMarcas([]);
        }
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    };

    Teste();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>placas</h1>
      {placas.length > 0 ? (
        <ul>
          {placas.map((placas) => (
            <li key={placas.placas}>{placas.Placa}</li> // Supondo que cada marca tenha uma propriedade `nome`
          ))}
        </ul>
      ) : (
        <p>Nenhuma marca encontrada.</p>
      )}
    </div>
  );
};

export default Teste;
