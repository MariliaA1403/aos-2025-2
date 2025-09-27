import express from "express";
import tarefasRouter from "./routes/tarefasRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

  
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API de Tarefas funcionando! ✅");
});


app.use("/tarefas", tarefasRouter);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});


export default app;

