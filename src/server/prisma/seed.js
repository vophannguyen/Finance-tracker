const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
const seed = async () => {
  await prisma.user.upsert({
    where: {
      email: "nguyenvo@example.com",
    },
    update: {},
    create: {
      name: "Nguyen Vo",
      email: "nguyenvo@example.com",
      password_hash: "123456",
    },
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
