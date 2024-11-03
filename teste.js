fetch("https://unipark-a9b95-default-rtdb.firebaseio.com/Placas.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Dados recebidos:", data);
  })
  .catch((error) => {
    console.error("Houve um problema com a requisição GET:", error);
  });
