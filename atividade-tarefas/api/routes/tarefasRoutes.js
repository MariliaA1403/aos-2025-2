import { Router } from "express";
import {
  criarNovaTarefa,
  listarTodasTarefas,
  pegarTarefaPorId,
  atualizarTarefaPorId,
  deletarTarefaPorId
} from "../controllers/tarefasController.js";

const tarefasRouter = Router();

tarefasRouter.post("/", criarNovaTarefa);
tarefasRouter.get("/", listarTodasTarefas);
tarefasRouter.get("/:objectId", pegarTarefaPorId);
tarefasRouter.put("/:objectId", atualizarTarefaPorId);
tarefasRouter.delete("/:objectId", deletarTarefaPorId);

export default tarefasRouter;