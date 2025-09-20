const { ServerError } = require("../../errors");
const prisma = require("../../prisma");

const router = require("express").Router();
module.exports = router;
/** User must be logged in to access tasks. */
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});
router.get("/", async (req, res, next) => {
  try {
    const expense = await prisma.transaction.findMany({
      where: {
        user_id: res.locals.user.user_id,
        type: "expense",
      },
    });
    const category = await prisma.category.findMany({
      where: {
        user_id: res.locals.user.user_id,
      },
    });

    console.log(expense);
    res.json({ expense, category });
  } catch (err) {
    next(err);
  }
});
