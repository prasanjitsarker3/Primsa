import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const RelationQuery = async () => {
  //   const relationQuery = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //       // Include User And Post gets

  //       // include: {
  //       //   posts: true,
  //       // },
  //     })
  //     .posts();

  //   console.log(relationQuery);

  //   //   --Relation Filtering

  //   const publishedPostUser = await prisma.user.findMany({
  //     include: {
  //       posts: {
  //         where: {
  //           published: true,
  //         },
  //       },
  //     },
  //   });
  //   console.dir(publishedPostUser, { depth: Infinity });

  const postFilteringData = await prisma.post.findMany({
    where: {
      // Using condition Filtering AND , OR, NOT
      NOT: [
        {
          title: "Python",
        },
        {
          published: true,
        },
      ],
    },
  });
  console.log("Filter Data:", postFilteringData);
};
RelationQuery();
