import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

// Simulando __dirname em ES Modules
const __dirname = path.resolve();

const app = express();
const PORT = 5000;
app.use(cors()); // Habilita CORS para todas as rotas

// Função para ler o arquivo db.json e retornar os dados
function readData() {
  const filePath = path.join(__dirname, "db.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// Rota para obter todas as marcas
app.get("/veiculos", (req, res) => {
  const data = readData();
  res.json(data.veiculos);
});

// Rota para obter todas as marcas
app.get("/marcas", (req, res) => {
  const data = readData();
  res.json(data.marcas);
});

// Rota para obter os carros
app.get("/marcas/carros", (req, res) => {
  const data = readData();
  res.json(data.marcas.carros);
});

// Rota para obter as motos
app.get("/marcas/motos", (req, res) => {
  const data = readData();
  res.json(data.marcas.motos);
});

// Rota para obter os caminhoes
app.get("/marcas/caminhoes", (req, res) => {
  const data = readData();
  res.json(data.marcas.caminhoes);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

[
  {
    veiculos: {
      ABC5O67: {
        id: "2967",
        marca: "21213213",
        modelo: "213122",
        cor: "123123",
        ano: "123123",
        proprietario: "12321",
        matricula: "12312321",
        status: "12312321213",
      },
    },
  },
]
