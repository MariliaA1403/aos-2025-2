import express from "express";
import cors from "cors";
import pessoaRoutes from "./routes/pessoaRoutes.js";
import formacaoRoutes from "./routes/formacaoRoutes.js";
import experienciaRoutes from "./routes/experienciaRoutes.js";
import habilidadeRoutes from "./routes/habilidadeRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rota raiz
app.get("/", (req, res) => {
  res.send("🚀 API de Currículos funcionando!");
});

// Rotas das entidades
app.use("/pessoas", pessoaRoutes);
app.use("/formacoes", formacaoRoutes);
app.use("/experiencias", experienciaRoutes);
app.use("/habilidades", habilidadeRoutes);

app.listen(3000, () => console.log("🚀 Servidor rodando na porta 3000"));
