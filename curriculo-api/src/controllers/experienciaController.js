import { prisma } from "../config/db.js";

export const experienciaController = {
  async listar(req, res) {
    const dados = await prisma.experiencia.findMany();
    res.json(dados);
  },

  async buscarPorId(req, res) {
    const { id } = req.params;
    const dado = await prisma.experiencia.findUnique({
      where: { id: Number(id) },
    });
    if (!dado) return res.status(404).json({ mensagem: "Experiência não encontrada" });
    res.json(dado);
  },

  async criar(req, res) {
    const dado = await prisma.experiencia.create({ data: req.body });
    res.status(201).json(dado);
  },

  async atualizar(req, res) {
    const { id } = req.params;
    const dadoAtualizado = await prisma.experiencia.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(dadoAtualizado);
  },

  async deletar(req, res) {
    const { id } = req.params;
    await prisma.experiencia.delete({ where: { id: Number(id) } });
    res.json({ mensagem: "Experiência excluída" });
  },
};
