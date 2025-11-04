import { prisma } from "../config/db.js";

export const listarPessoas = async (req, res) => {
  const pessoas = await prisma.pessoa.findMany({
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true,
      resumo: true,
    },
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


  await prisma.formacao.deleteMany({ where: { pessoaId: Number(id) } });
  await prisma.experiencia.deleteMany({ where: { pessoaId: Number(id) } });
  await prisma.habilidade.deleteMany({ where: { pessoaId: Number(id) } });

  // Depois deleta a pessoa
  await prisma.pessoa.delete({ where: { id: Number(id) } });

  res.json({ mensagem: "Pessoa e todos os dados relacionados foram removidos com sucesso" });
};
