import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "user2",
  //       email: "user@gmail.com",
  //       role: UserRole.user,
  //     },
  //   });

  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "this is bio.......",
  //       userId: 1,
  //     },
  //   });

  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: "programming",
  //     },
  //   });

  const createPost = await prisma.post.create({
    data: {
      title: "this is title 5",
      content: "this is content of the post no 5",
      authorId: 1,
      postCategory: {
        create: [
          {
            categoryId: 5,
          },
          {
            categoryId: 7,
          },
          {
            categoryId: 8,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};

main();
