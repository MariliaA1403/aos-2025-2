const { v4: uuidv4 } = require('uuid');
const Tarefa = require('../models/Tarefa');

let tarefas = []; 


const listarTarefas = (req, res) => {
  res.json(tarefas);
};


const criarTarefa = (req, res) => {
  const { descricao, concluida = false } = req.body;

  if (!descricao) {
    return res.status(400).json({ error: 'Descrição é obrigatória' });
  }

  const novaTarefa = new Tarefa({
    objectId: uuidv4(),
    descricao,
    concluida,
  });

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
};


const buscarTarefa = (req, res) => {
  const { objectId } = req.params;

  const tarefa = tarefas.find(t => t.objectId === objectId);

  if (!tarefa) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  res.json(tarefa);
};


const atualizarTarefa = (req, res) => {
  const { objectId } = req.params;
  const { descricao, concluida } = req.body;

  const tarefaIndex = tarefas.findIndex(t => t.objectId === objectId);

  if (tarefaIndex === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  if (descricao !== undefined) tarefas[tarefaIndex].descricao = descricao;
  if (concluida !== undefined) tarefas[tarefaIndex].concluida = concluida;

  res.json(tarefas[tarefaIndex]);
};


const deletarTarefa = (req, res) => {
  const { objectId } = req.params;

  const tarefaIndex = tarefas.findIndex(t => t.objectId === objectId);

  if (tarefaIndex === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  tarefas.splice(tarefaIndex, 1);

  res.json({ message: 'Tarefa removida com sucesso' });
};

module.exports = {
  listarTarefas,
  criarTarefa,
  buscarTarefa,
  atualizarTarefa,
  deletarTarefa,
};
