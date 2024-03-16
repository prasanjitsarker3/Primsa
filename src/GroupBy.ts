import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const GroupByData = async () => {
  const groupUser = await prisma.post.groupBy({
    by: "published",
    _count: {
      published: true,
    },
    having: {
      published: true,
    },
  });
  console.log(groupUser);
};

GroupByData();
