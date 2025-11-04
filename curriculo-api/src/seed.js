import 'dotenv/config';
import { prisma } from "./config/db.js";

async function main() {
  // Criando as pessoas
  const marilia = await prisma.pessoa.create({
    data: {
      nome: "Marília Albuquerque",
      email: "marilia@example.com",
      telefone: "(81) 99999-9999",
      resumo: "Estagiária de Infraestrutura apaixonada por inovação e tecnologia.",
    },
  });

  const jose = await prisma.pessoa.create({
    data: {
      nome: "José Cabral",
      email: "jose@example.com",
      telefone: "(81) 97777-7777",
      resumo: "Estudante de Análise e Desenvolvimento de Sistemas com experiência administrativa.",
    },
  });

  // Pegando os IDs das pessoas
  const mariliaId = marilia.id;
  const joseId = jose.id;

  // Criando formações
  await prisma.formacao.createMany({
    data: [
      {
        curso: "Sistemas para Internet",
        instituicao: "Universidade Católica de Pernambuco",
        anoInicio: 2024,
        anoFim: 2026,
        pessoaId: mariliaId,
      },
      {
        curso: "Análise e Desenvolvimento de Sistemas",
        instituicao: "UNINASSAU",
        anoInicio: 2024,
        anoFim: 2025,
        pessoaId: joseId,
      },
    ],
  });

  // Criando experiências
  await prisma.experiencia.createMany({
    data: [
      {
        cargo: "Estagiária de Infraestrutura",
        empresa: "CAV - VisionOne",
        anoInicio: 2025,
        anoFim: 2026,
        pessoaId: mariliaId,
      },
      {
        cargo: "Jovem Aprendiz",
        empresa: "CAV - VisionOne",
        anoInicio: 2025,
        anoFim: 2025,
        pessoaId: mariliaId,
      },
      {
        cargo: "Estagiária de Suporte Técnico",
        empresa: "Secretaria de Desenvolvimento Agrário de PE",
        anoInicio: 2024,
        anoFim: 2025,
        pessoaId: mariliaId,
      },
      {
        cargo: "Assistente Administrativo",
        empresa: "Bargaço Comércio e Turismo LTDA",
        anoInicio: 2025,
        anoFim: 2027,
        pessoaId: joseId,
      },
    ],
  });

  // Criando habilidades
  await prisma.habilidade.createMany({
    data: [
      { nome: "Suporte Técnico", nivel: "Avançado", pessoaId: mariliaId },
      { nome: "Infraestrutura de TI", nivel: "Intermediário", pessoaId: mariliaId },
      { nome: "Redes de Computadores", nivel: "Intermediário", pessoaId: mariliaId },
      { nome: "JavaScript", nivel: "Básico", pessoaId: mariliaId },
      { nome: "Node.js", nivel: "Básico", pessoaId: mariliaId },
      { nome: "Administração", nivel: "Avançado", pessoaId: joseId },
      { nome: "Excel", nivel: "Intermediário", pessoaId: joseId },
      { nome: "Organização de Processos", nivel: "Intermediário", pessoaId: joseId },
      { nome: "Suporte Técnico", nivel: "Avançado", pessoaId: joseId },
    ],
  });

  console.log("✅ Dados inseridos com sucesso!");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
