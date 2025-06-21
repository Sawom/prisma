import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent api: 1ta table er oprdepend kore onno table er info dekhano
  const result = await prisma.user
    .findUnique({
      where: {
        id: 3,
      },
    }).profile();

    console.log(result);
};

relationalQueries();
