const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

router.post('/', tarefasController.criarTarefa);
router.get('/', tarefasController.listarTarefas);
router.get('/:objectId', tarefasController.buscarTarefa);
router.put('/:objectId', tarefasController.atualizarTarefa);
router.delete('/:objectId', tarefasController.deletarTarefa);

module.exports = router;
