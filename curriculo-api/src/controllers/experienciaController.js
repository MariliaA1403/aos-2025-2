import { prisma } from "../config/db.js";

export const experienciaController = {
  async listar(req, res) {
    const dados = await prisma.experience.findMany();
    res.json(dados);
  },
  async criar(req, res) {
    const dado = await prisma.experience.create({ data: req.body });
    res.status(201).json(dado);
  },
  async atualizar(req, res) {
    const { id } = req.params;
    const dado = await prisma.experience.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(dado);
  },
  async deletar(req, res) {
    const { id } = req.params;
    await prisma.experience.delete({ where: { id: Number(id) } });
    res.json({ message: "Experiência excluída" });
  },
};
