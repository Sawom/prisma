import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "okey",
  //       content: "onekgula content",
  //       authorName: "sawom",
  //     },
  //   });

  const allposts = await prisma.post.findMany();
  console.log(allposts);
};

main();
