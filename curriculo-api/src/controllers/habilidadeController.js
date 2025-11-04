import { prisma } from "../config/db.js";

export const habilidadeController = {
  async listar(req, res) {
    const dados = await prisma.skill.findMany();
    res.json(dados);
  },
  async criar(req, res) {
    const dado = await prisma.skill.create({ data: req.body });
    res.status(201).json(dado);
  },
  async atualizar(req, res) {
    const { id } = req.params;
    const dado = await prisma.skill.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(dado);
  },
  async deletar(req, res) {
    const { id } = req.params;
    await prisma.skill.delete({ where: { id: Number(id) } });
    res.json({ message: "Habilidade excluída" });
  },
};
