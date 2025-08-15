import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./router/router.js";

const __filename = fileURLToPath(import.meta.url); // Caminho completo do arquivo atual
const __dirname = path.dirname(__filename); // Diretório do arquivo atual

const app = express(); // Cria instância do Express
const PORT = process.env.PORT || 3000; // Define a porta do servidor

app.use(express.json()); // Permite receber requisições JSON

app.use(express.static(path.join(__dirname, "public"))); 
// Serve arquivos estáticos da pasta "public"

app.use("/", router); // Usa o router para gerenciar rotas

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html")); 
    // Rota principal: envia index.html para o navegador
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}!`); 
    // Inicia o servidor e exibe mensagem no console
});
