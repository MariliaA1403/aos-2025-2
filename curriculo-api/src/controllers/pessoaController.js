import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const listarPessoas = async (req, res) => {
  const pessoas = await prisma.pessoa.findMany({
    include: { formacoes: true, experiencias: true, habilidades: true },
  });
  res.json(pessoas);
};

export const buscarPessoaPorId = async (req, res) => {
  const { id } = req.params;
  const pessoa = await prisma.pessoa.findUnique({
    where: { id: Number(id) },
    include: { formacoes: true, experiencias: true, habilidades: true },
  });
  if (!pessoa) return res.status(404).json({ mensagem: "Pessoa não encontrada" });
  res.json(pessoa);
};

export const criarPessoa = async (req, res) => {
  const { nome, email, telefone, resumo } = req.body;
  const novaPessoa = await prisma.pessoa.create({
    data: { nome, email, telefone, resumo },
  });
  res.status(201).json(novaPessoa);
};

export const atualizarPessoa = async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, resumo } = req.body;
  const atualizada = await prisma.pessoa.update({
    where: { id: Number(id) },
    data: { nome, email, telefone, resumo },
  });
  res.json(atualizada);
};

export const deletarPessoa = async (req, res) => {
  const { id } = req.params;
  await prisma.pessoa.delete({ where: { id: Number(id) } });
  res.json({ mensagem: "Pessoa removida com sucesso" });
};
