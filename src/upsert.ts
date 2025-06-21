import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const updates = async () => {
  const upsertData = await prisma.post.upsert({
    where: {
      id: 10,
    },
    update: {
      authorName: "Fahim",
    },
    create: {
      title: "Title 2",
      content: "content 2",
    },
  });

  console.log(upsertData);
};

updates();
