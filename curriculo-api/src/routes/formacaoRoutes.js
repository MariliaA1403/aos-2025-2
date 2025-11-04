import express from "express";
import { formacaoController } from "../controllers/formacaoController.js";

const router = express.Router();

router.get("/", formacaoController.listar);
router.get("/:id", formacaoController.buscarPorId); 
router.post("/", formacaoController.criar);
router.put("/:id", formacaoController.atualizar);
router.delete("/:id", formacaoController.deletar);

export default router;
