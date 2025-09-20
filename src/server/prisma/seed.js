const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
const seed = async () => {
  // Users
  await prisma.user.createMany({
    data: [
      {
        user_id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        password_hash: "hashedpassword1",
        created_at: new Date("2025-09-01T09:00:00Z"),
      },
      {
        user_id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        password_hash: "hashedpassword2",
        created_at: new Date("2025-09-01T09:05:00Z"),
      },
    ],
  })
   // Accounts
  await prisma.account.createMany({
    data: [
      {
        account_id: 1,
        user_id: 1,
        account_name: "Checking Account",
        account_type: "Bank",
        balance: 2500.0,
        created_at: new Date("2025-09-01T10:00:00Z"),
      },
      {
        account_id: 2,
        user_id: 1,
        account_name: "Cash Wallet",
        account_type: "Cash",
        balance: 150.0,
        created_at: new Date("2025-09-01T10:10:00Z"),
      },
      {
        account_id: 3,
        user_id: 2,
        account_name: "Savings Account",
        account_type: "Bank",
        balance: 5000.0,
        created_at: new Date("2025-09-01T10:20:00Z"),
      },
    ],
  })
  // Categories
  await prisma.category.createMany({
    data: [
      { category_id: 1, user_id: 1, name: "Groceries", type: "expense" },
      { category_id: 2, user_id: 1, name: "Salary", type: "income" },
      { category_id: 3, user_id: 1, name: "Rent", type: "expense" },
      { category_id: 4, user_id: 2, name: "Dining Out", type: "expense" },
      { category_id: 5, user_id: 2, name: "Freelance", type: "income" },
    ],
  })
   // Transactions
  await prisma.transaction.createMany({
    data: [
      {
        transaction_id: 1,
        user_id: 1,
        account_id: 1,
        category_id: 2,
        description: "Monthly Salary",
        amount: 3000.0,
        type: "income",
        transaction_date: new Date("2025-09-01"),
        created_at: new Date("2025-09-01T11:00:00Z"),
      },
      {
        transaction_id: 2,
        user_id: 1,
        account_id: 1,
        category_id: 1,
        description: "Walmart groceries",
        amount: 120.5,
        type: "expense",
        transaction_date: new Date("2025-09-02"),
        created_at: new Date("2025-09-02T09:00:00Z"),
      },
      {
        transaction_id: 3,
        user_id: 1,
        account_id: 1,
        category_id: 3,
        description: "Apartment rent",
        amount: 1000.0,
        type: "expense",
        transaction_date: new Date("2025-09-03"),
        created_at: new Date("2025-09-03T09:00:00Z"),
      },
      {
        transaction_id: 4,
        user_id: 2,
        account_id: 3,
        category_id: 5,
        description: "Freelance project",
        amount: 800.0,
        type: "income",
        transaction_date: new Date("2025-09-01"),
        created_at: new Date("2025-09-01T12:00:00Z"),
      },
      {
        transaction_id: 5,
        user_id: 2,
        account_id: 3,
        category_id: 4,
        description: "Restaurant dinner",
        amount: 60.0,
        type: "expense",
        transaction_date: new Date("2025-09-02"),
        created_at: new Date("2025-09-02T12:30:00Z"),
      },
    ],
  })

  // Budgets
  await prisma.budget.createMany({
    data: [
      {
        budget_id: 1,
        user_id: 1,
        category_id: 1,
        limit_amount: 400.0,
        start_date: new Date("2025-09-01"),
        end_date: new Date("2025-09-30"),
        created_at: new Date("2025-09-01T13:00:00Z"),
      },
      {
        budget_id: 2,
        user_id: 1,
        category_id: 3,
        limit_amount: 1000.0,
        start_date: new Date("2025-09-01"),
        end_date: new Date("2025-09-30"),
        created_at: new Date("2025-09-01T13:15:00Z"),
      },
      {
        budget_id: 3,
        user_id: 2,
        category_id: 4,
        limit_amount: 200.0,
        start_date: new Date("2025-09-01"),
        end_date: new Date("2025-09-30"),
        created_at: new Date("2025-09-01T13:30:00Z"),
      },
    ],
  })

  // Export Logs
  await prisma.exportLog.createMany({
    data: [
      { export_id: 1, user_id: 1, file_type: "CSV", created_at: new Date("2025-09-05T08:00:00Z") },
      { export_id: 2, user_id: 1, file_type: "PDF", created_at: new Date("2025-09-06T08:00:00Z") },
      { export_id: 3, user_id: 2, file_type: "CSV", created_at: new Date("2025-09-07T08:00:00Z") },
    ],
  })
}

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
