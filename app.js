import express from "express";
import mecanica from "./mecanica.js";

const app = express();
const port = 3000;

app.get("/", (requisicao, resposta) => {
  resposta.send(mecanica);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));