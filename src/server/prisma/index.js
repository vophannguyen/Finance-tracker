const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
let prisma = new PrismaClient();

// Hash user password before saving to database
prisma = prisma.$extends({
  query: {
    user: {
      async create({ args, query }) {
        const password = await bcrypt.hash(args.data.password_hash, 10);
        args.data.password_hash = password;
        return query(args);
      },
      async upsert({ args, query }) {
        const password = await bcrypt.hash(args.create.password_hash, 10);
        args.create.password_hash = password;
        return query(args);
      },
      async createMany({ args, query }) {
        for(i=0;i<args.data.length;i++)
        {
          const password = await bcrypt.hash(args.data[i].password_hash, 10);
          args.data[i].password_hash = password;
          console.log(args)
        }
        return query(args);
      },
    },
  },
});

module.exports = prisma;
