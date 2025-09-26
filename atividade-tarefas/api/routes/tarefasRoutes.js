import { Router } from 'express';
import {
  criarTarefa,
  listarTarefas,
  obterTarefa,
  atualizarTarefa,
  removerTarefa
} from '../controllers/tarefasController.js';

const router = Router();

router.post('/', criarTarefa);
router.get('/', listarTarefas);
router.get('/:id', obterTarefa);
router.put('/:id', atualizarTarefa);
router.delete('/:id', removerTarefa);

export default router;
