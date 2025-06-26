import { PrismaClient } from "@prisma/client";
// Transaction use hoy zokhn 1ta data field onno tar opr depend hoy
const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "jhankar",
      email: "jkr@ph.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 3,
    },
    data: {
      age: 30,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updateData);
};

batchTransaction();
