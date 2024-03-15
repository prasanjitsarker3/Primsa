import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const StartAndEndFiltering = async () => {
  //   const startWithData = await prisma.post.findMany({
  //     where: {
  //       title: {
  //         // startsWith: "P",
  //         // contains: "P",
  //         // endsWith: "r",
  //         equals: "Python",
  //       },
  //     },
  //   });
  //   console.log(startWithData);

  //   const postTitleArray = ["Coder", "Programming"];
  //   const arrayByFiltering = await prisma.post.findMany({
  //     where: {
  //       title: {
  //         in: postTitleArray,
  //       },
  //     },
  //   });

  //   console.log("Array Filtering:", arrayByFiltering);

  const nestedInDepthAllDataFromTable = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(nestedInDepthAllDataFromTable, { depth: Infinity });
};
StartAndEndFiltering();
