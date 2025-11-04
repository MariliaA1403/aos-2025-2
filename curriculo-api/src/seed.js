import { prisma } from "./config/db.js";

async function main() {
  await prisma.pessoa.createMany({
    data: [
      {
        nome: "Marília Albuquerque",
        email: "marilia@example.com",
        telefone: "(81) 99999-9999",
        resumo: "Desenvolvedora full stack apaixonada por inovação e tecnologia.",
      },
      {
        nome: "João Silva",
        email: "joao@example.com",
        telefone: "(81) 98888-8888",
        resumo: "Engenheiro de software com foco em soluções web escaláveis.",
      },
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
