import express from "express";
import tarefasRouter from "./routes/tarefasRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Habilita o Express a receber JSON no corpo das requisições
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.send("API de Tarefas funcionando! ✅");
});

// Rotas da API de tarefas
app.use("/tarefas", tarefasRouter);

// Porta do servidor
const PORT = process.env.PORT || 3000;

// Inicializa o servidor (apenas para ambiente local)
app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});

// Exporta o app (útil para testes e Vercel no futuro)
export default app;
