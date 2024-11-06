import axios from "axios";

axios
  .get("http://localhost:5000/marcas")  
  .then((response) => response.data)  
  .then((data) => data)
  .then((carros) => {

    // ordem alfabética
    const carrosOrdenados = carros.sort((a, b) => a.nome.localeCompare(b.nome));
    
    // Imprime os nomes dos carros ordenados
    carrosOrdenados.forEach((carro) => console.log(carro.nome.toUpperCase()));

  })  
  .catch((error) => console.error("Erro ao buscar dados:", error));  
