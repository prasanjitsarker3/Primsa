import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const TransactionData = async () => {
  //Batch By Transaction

  //   const createUser = prisma.user.create({
  //     data: {
  //       userName: "Dipok",
  //       email: "dipok123@gmail.com",
  //       age: 26,
  //     },
  //   });
  //   const updateUser = prisma.user.update({
  //     where: {
  //       id: 5,
  //     },
  //     data: {
  //       age: 37,
  //     },
  //   });

  //   const [userData, updatedData] = await prisma.$transaction([
  //     createUser,
  //     updateUser,
  //   ]);

  // Interactive by transaction

  const result = await prisma.$transaction(async (transactionClient) => {
    const getAllPost = await transactionClient.post.findMany({
      where: {
        published: true,
      },
    });

    const updateUser = await transactionClient.user.update({
      where: {
        id: 8,
      },
      data: {
        age: 33,
      },
    });

    return {
      getAllPost,
      updateUser,
    };
  });

  console.log(result);
};

TransactionData();
