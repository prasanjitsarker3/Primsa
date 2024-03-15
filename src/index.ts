import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Bikeing",
  //       content: "Dhaka To Rangpor",
  //       authorName: "Kholil",
  //     },
  //   });
  //   console.log(result);
  //   const allData = await prisma.post.findMany();
  //   console.log(allData);
  //   const singleData = await prisma.post.findFirstOrThrow({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   const uniqeData = await prisma.post.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   console.log(uniqeData);
  //Data created And Created Many
  //   const createdMany = await prisma.post.createMany({
  //     data: [
  //       {
  //         title: "Software Engineering",
  //         content: "Advanced software  ",
  //         authorName: "John Doe",
  //       },
  //       {
  //         title: "Cybersecurity Trends",
  //         content: "Latest advancements in ",
  //         authorName: "Jane Smith",
  //       },
  //       {
  //         title: "Cloud Computing ",
  //         content: "Explore cloud computing ",
  //         authorName: "David Johnson",
  //       },
  //       {
  //         title: "Data Science Insights",
  //         content: "Analyzing big data for  ",
  //         authorName: "Emily Brown",
  //       },
  //       {
  //         title: "Mobile App Development",
  //         content: "Creating innovative  ",
  //         authorName: "Michael Wilson",
  //       },
  //       {
  //         title: "Web Development Best ",
  //         content: "Optimizing web development ",
  //         authorName: "Sarah Martinez",
  //       },
  //       {
  //         title: "Augmented Reality ",
  //         content: "Exploring the potential  ",
  //         authorName: "Daniel Jackson",
  //       },
  //       {
  //         title: "5G Networks ",
  //         content: "The future of high-speed  ",
  //         authorName: "Lisa Taylor",
  //       },
  //       {
  //         title: "Internet of Things ",
  //         content: "Connecting devices   ",
  //         authorName: "Kevin Lee",
  //       },
  //       {
  //         title: "Quantum Computing ",
  //         content: "Revolutionizing computation   ",
  //         authorName: "Olivia Garcia",
  //       },
  //       {
  //         title: "Virtual Reality ",
  //         content: "Immersive VR experiences   ",
  //         authorName: "Matthew Anderson",
  //       },
  //       {
  //         title: "Blockchain ",
  //         content: "Implementing secure ",
  //         authorName: "Sophia Brown",
  //       },
  //       {
  //         title: "Agile Methodologies ",
  //         content: "Adopting agile practices ",
  //         authorName: "William Johnson",
  //       },
  //       {
  //         title: "Tech Startups Success Stories",
  //         content: "Insights into successful",
  //         authorName: "Emma Davis",
  //       },
  //       {
  //         title: "Big Data Analytics Strategies",
  //         content: "Harnessing the power of",
  //         authorName: "Ryan Wilson",
  //       },
  //       {
  //         title: "Artificial Intelligence Ethics",
  //         content: "Addressing ethical c",
  //         authorName: "Ava Thompson",
  //       },
  //       {
  //         title: "Future of Autonomous Vehicles",
  //         content: "Advancements and c",
  //         authorName: "Lucas Hernandez",
  //       },
  //       {
  //         title: "Robotics in Healthcare",
  //         content: "Applications of robotics ",
  //         authorName: "Isabella Garcia",
  //       },
  //     ],
  //   });
  //   console.log(createdMany);
  // Updated Data
  //   const singleUpdated = await prisma.post.update({
  //     where: {
  //       id: 3,
  //     },
  //     data: {
  //       authorName: "Monir Ahamed",
  //     },
  //   });
  //   console.log(singleUpdated);
  //Many Update data
  //   const manyUpdateData = await prisma.post.updateMany({
  //     where: {
  //       title: "Title -2",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(manyUpdateData);
  //   const singleDataDelete = await prisma.post.delete({
  //     where: {
  //       id: 4,
  //     },
  //   });
  //   console.log(singleDataDelete);
  //   const manyDeleted = await prisma.post.deleteMany({
  //     where: {
  //       published: true,
  //     },
  //   });
  //   console.log(manyDeleted);
  //Jodi database a data thake tahole update or created new data
  //   const upsertData = await prisma.post.upsert({
  //     where: {
  //       id: 3,
  //     },
  //     update: {
  //       title: "Programming",
  //     },
  //     create: {
  //       title: "Programmer",
  //       content: "Gaming Development with C++",
  //       authorName: "Monir Ahamed",
  //     },
  //   });
  //   console.log(upsertData);
  //   const findUniqueData = await prisma.post.findUniqueOrThrow({
  //     where: {
  //       id: 3,
  //     },
  //     select: {
  //       id: true,
  //       title: true,
  //       createAt: true,
  //     },
  //   });
  //   console.log(findUniqueData);

  //   Pagination and limition data

  //   const offSetData = await prisma.post.findMany({
  //     skip: 0,
  //     take: 5,
  //   });
  //   console.log(offSetData);

  //   const cursorPagination = await prisma.post.findMany({
  //     skip: 5,
  //     take: 3,
  //     cursor: {
  //       id: 15,
  //     },
  //   });
  //   console.log(cursorPagination);
  //Sorting Data

  const sortData = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      published: true,
    },
  });
  console.log(sortData);
};

main();
