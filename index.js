const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

const run = async () => {
  //   console.log("RUN");
  try {
    // const result = await prisma.user.create({
    //   data: {
    //     username: "John",
    //     password: "1234",
    //   },
    // });

    // const result = await prisma.category.createMany({
    //   data: [{ name: "Food" }, { name: "Transport" }],
    // });

    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: "Starbucks",
    //     date: new Date("2025-09-10"),
    //     amount: 20,
    //     remark: "Coffee",
    //     userId: 1,
    //     categoryId: 1,
    //   },
    // });

    // create a new user and a new category from model Transaction
    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: "Tesco",
    //     amount: 60,
    //     date: new Date("2025-09-11"),
    //     user: {
    //       create: {
    //         username: "Jack",
    //         password: "1234",
    //       },
    //     },
    //     category: {
    //       create: {
    //         name: "Grocery",
    //       },
    //     },
    //   },
    // });

    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: "Safari World",
    //     amount: 500,
    //     date: new Date("2025-09-12"),
    //     user: {
    //       create: {
    //         username: "Jane",
    //         password: "1234",
    //       },
    //     },
    //     category: {
    //       create: {
    //         name: "Travel",
    //       },
    //     },
    //   },
    //   include: {
    //     user: true,
    //     category: true,
    //   },
    // });

    // const result = await prisma.user.create({
    //   data: {
    //     username: "Max",
    //     password: "1234",
    //     transactions: {
    //       create: [
    //         {
    //           payee: "7-11",
    //           amount: 10,
    //           date: new Date("2025-09-11"),
    //           categoryId: 3,
    //         },
    //         {
    //           payee: "CJ",
    //           amount: 10,
    //           date: new Date("2025-09-11"),
    //           categoryId: 1,
    //         },
    //       ],
    //     },
    //   },
    //   include: {
    //     transactions: true,
    //   },
    // });

    // const result = await prisma.user.create({
    //   data: {
    //     username: "Manuel",
    //     password: "1234",
    //     transactions: {
    //       create: {
    //         payee: "7-11",
    //         amount: 15,
    //         date: new Date("2025-09-11"),
    //         category: {
    //           create: {
    //             name: "Beverage",
    //           },
    //         },
    //       },
    //     },
    //   },
    //   include: {
    //     transactions: true,
    //   },
    // });

    // const result = await prisma.user.update({
    //   data: {
    //     password: "654",
    //   },
    //   where: {
    //     id: 1,
    //   },
    // });

    // updatemany

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

run();
