import express from "express";
import { habilidadeController } from "../controllers/habilidadeController.js";

const router = express.Router();

router.get("/", habilidadeController.listar);
router.post("/", habilidadeController.criar);
router.put("/:id", habilidadeController.atualizar);
router.delete("/:id", habilidadeController.deletar);

export default router;
