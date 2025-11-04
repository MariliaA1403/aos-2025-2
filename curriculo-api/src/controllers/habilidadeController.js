import { prisma } from "../config/db.js";

export const habilidadeController = {
  async listar(req, res) {
    const dados = await prisma.habilidade.findMany();
    res.json(dados);
  },

  async buscarPorId(req, res) {
    const { id } = req.params;
    const dado = await prisma.habilidade.findUnique({
      where: { id: Number(id) },
    });
    if (!dado) return res.status(404).json({ mensagem: "Habilidade não encontrada" });
    res.json(dado);
  },

  async criar(req, res) {
    const dado = await prisma.habilidade.create({ data: req.body });
    res.status(201).json(dado);
  },

  async atualizar(req, res) {
    const { id } = req.params;
    const dadoAtualizado = await prisma.habilidade.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(dadoAtualizado);
  },

  async deletar(req, res) {
    const { id } = req.params;
    await prisma.habilidade.delete({ where: { id: Number(id) } });
    res.json({ mensagem: "Habilidade excluída" });
  },
};
