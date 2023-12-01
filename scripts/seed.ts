const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Videography" },
      ],
    });
    console.log("success");
  } catch (error) {
    console.log("Error seeding the database Categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
