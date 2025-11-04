import { prisma } from "../config/db.js";

export const experienciaController = {
  async listar(req, res) {
    const dados = await prisma.experiencia.findMany();
    res.json(dados);
  },

  async criar(req, res) {
    const dado = await prisma.experiencia.create({ data: req.body });
    res.status(201).json(dado);
  },

  async atualizar(req, res) {
    const { id } = req.params;
    const dado = await prisma.experiencia.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(dado);
  },

  async deletar(req, res) {
    const { id } = req.params;
    await prisma.experiencia.delete({ where: { id: Number(id) } });
    res.json({ message: "Experiência excluída" });
  },
};

