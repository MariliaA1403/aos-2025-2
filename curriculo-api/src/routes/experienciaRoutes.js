import express from "express";
import { experienciaController } from "../controllers/experienciaController.js";

const router = express.Router();

router.get("/", experienciaController.listar);
router.get("/:id", experienciaController.buscarPorId); 
router.post("/", experienciaController.criar);
router.put("/:id", experienciaController.atualizar);
router.delete("/:id", experienciaController.deletar);

export default router;
