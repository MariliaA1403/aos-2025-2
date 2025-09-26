import { v4 as uuidv4 } from 'uuid';
import Tarefa from '../models/Tarefa.js';

let tarefas = [];

export function criarTarefa(req, res) {
  const { descricao, concluida } = req.body;

  if (!descricao) {
    return res.status(400).json({ erro: 'Descrição é obrigatória' });
  }

  const novaTarefa = new Tarefa(uuidv4(), descricao, concluida ?? false);
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
}

export function listarTarefas(req, res) {
  res.json(tarefas);
}

export function obterTarefa(req, res) {
  const tarefa = tarefas.find(t => t.id === req.params.id);
  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
  res.json(tarefa);
}

export function atualizarTarefa(req, res) {
  const tarefa = tarefas.find(t => t.id === req.params.id);
  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  const { descricao, concluida } = req.body;
  if (descricao !== undefined) tarefa.descricao = descricao;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
}

export function removerTarefa(req, res) {
  const index = tarefas.findIndex(t => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  tarefas.splice(index, 1);
  res.json({ mensagem: 'Tarefa removida com sucesso' });
}
