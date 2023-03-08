const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

async function main() {
  // const newLink = await prisma.link.create({
  //   data: {
  //     description: "description_test",
  //     url: "www.test.com"
  //   }
  // });
  const allLinks = await prisma.link.findMany();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    prisma.$disconnect;
  });
