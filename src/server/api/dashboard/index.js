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
    const user = await prisma.user.findMany({
      where: { email: res.locals.user.email },
    });
    const transaction = await prisma.transaction.findMany({
      where:{user_id: res.locals.user.user_id}
    })
    const data ={user,transaction}
    res.json(data);
    console.log(user)
  } catch (err) {
    next(err);
  }
});