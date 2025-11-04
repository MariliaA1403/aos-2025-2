import express from "express";
import {
  listarPessoas,
  buscarPessoaPorId,
  criarPessoa,
  atualizarPessoa,
  deletarPessoa,
} from "../controllers/pessoaController.js";

const router = express.Router();

router.get("/", listarPessoas);
router.get("/:id", buscarPessoaPorId);
router.post("/", criarPessoa);
router.put("/:id", atualizarPessoa);
router.delete("/:id", deletarPessoa);

export default router;
