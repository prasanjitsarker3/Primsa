import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DataCreate = async () => {
  //Create User Data
  //   const createUserData = await prisma.user.createMany({
  //     data: [
  //       {
  //         userName: "Kholil Ahamed",
  //         email: "kholil123@gmail.com",
  //         role: "user",
  //       },
  //       {
  //         userName: "JaneDoe",
  //         email: "janedoe@example.com",
  //         role: "user",
  //       },
  //       {
  //         userName: "JohnSmith",
  //         email: "johnsmith@example.com",
  //         role: "user",
  //       },
  //       {
  //         userName: "AliceWonderland",
  //         email: "alice@example.com",
  //         role: "user",
  //       },
  //       {
  //         userName: "BobBuilder",
  //         email: "bob@example.com",
  //         role: "user",
  //       },
  //     ],
  //   });
  //   console.log("Create User:", createUserData);

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "Programmer",
  //     userId: 1,
  //   },
  // });

  // console.log("Crate Profile: ", createProfile);

  //   const createCategory = await prisma.category.createMany({
  //     data: [
  //       {
  //         name: "Web Dev",
  //       },
  //       {
  //         name: "Mobile App Dev",
  //       },
  //       {
  //         name: "Data Science",
  //       },
  //       {
  //         name: "Machine Learning",
  //       },
  //       {
  //         name: "UI/UX Design",
  //       },
  //     ],
  //   });
  //   console.log("Create Category:", createCategory);

  const createPost = await prisma.post.create({
    data: {
      title: "Python",
      content: "Machine  Learning",
      authorId: 3,
      postCategory: {
        create: {
            //Id by 
          categoryId: 4,
          //connect by
          //   category: {
          //     connect: {
          //       id: 3,
          //     },
          //   },
        },
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log("Category: ", createPost);
};

DataCreate();
