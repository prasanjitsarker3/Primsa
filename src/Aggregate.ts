import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const AggregateData = async () => {
  //   const avgAge = await prisma.user.aggregate({
  //     _max: {
  //       age: true,
  //     },
  //   });

  const countTitle = await prisma.post.aggregate({
    _count: {
      title: true,
    },
    where: {
      published: true,
    },
  });

  console.log(countTitle);
};
AggregateData();
