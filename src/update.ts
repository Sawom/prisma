import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const updates = async () => {
  const singleUpdate = await prisma.post.update({
    where: {
      id: 7,
    },
    data: {
      title: "Title 5",
      // content: "Content 4",
      // authorName: "Author 4"
    },
  });

  //   update many
  const updateMany = await prisma.post.updateMany({
    where: {
      title: "Title 2",
    },
    data: {
      published: true,
    },
  });

  console.log(updateMany);
};

updates();
