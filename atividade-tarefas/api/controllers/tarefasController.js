import TarefaModel from "../models/Tarefa.js";

let listaTarefas = [];

export const criarNovaTarefa = (req, res) => {
  const { descricao, concluida } = req.body;

  if (!descricao) {
    return res.status(400).json({ erro: "Campo 'descricao' é obrigatório!" });
  }

  const tarefa = new TarefaModel(descricao, concluida);
  listaTarefas.push(tarefa);

  res.status(201).json({ mensagem: "Tarefa adicionada com sucesso!", tarefa });
};

export const listarTodasTarefas = (req, res) => {
  res.json(listaTarefas);
};

export const pegarTarefaPorId = (req, res) => {
  const { objectId } = req.params;
  const tarefa = listaTarefas.find(t => t.objectId === objectId);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada!" });
  }

  res.json(tarefa);
};

export const atualizarTarefaPorId = (req, res) => {
  const { objectId } = req.params;
  const tarefa = listaTarefas.find(t => t.objectId === objectId);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  const { descricao, concluida } = req.body;

  if (descricao !== undefined) tarefa.descricao = descricao;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json({ mensagem: "Tarefa atualizada", tarefa });
};

export const deletarTarefaPorId = (req, res) => {
  const { objectId } = req.params;
  const index = listaTarefas.findIndex(t => t.objectId === objectId);

  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  listaTarefas.splice(index, 1);

  res.json({ mensagem: "Tarefa removida com sucesso!" });
};