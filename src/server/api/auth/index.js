const { ServerError } = require("../../errors");
const prisma = require("../../prisma");
const jwt = require("./jwt");
const bcrypt = require("bcrypt");
const router = require("express").Router();
module.exports = router;

/** Creates new account and returns token */
router.post("/register", async (req, res, next) => {
  try {
    const { email=username, password } = req.body;

    // Check if username and password provided
    if (!username || !password) {
      throw new ServerError(400, "Username and password required.");
    }

    // Check if account already exists
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user) {
      throw new ServerError(
        400,
        `Account with username ${email} already exists.`
      );
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: { username, password },
    });

    const token = jwt.sign({ email: newUser.email });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

/** Returns token for account if credentials valid */
router.post("/login", async (req, res, next) => {
  try {
    const { email, password_hash} = req.body;

    // Check if username and password provided
    if (!email || !password_hash) {
      throw new ServerError(400, "Username and password required.");
    }

    // Check if account exists
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new ServerError(
        400,
        `Account with username ${email} does not exist.`
      );
    }

    // Check if password is correct
    const passwordValid = await bcrypt.compare(password_hash, user.password_hash);
    if (!passwordValid) {
      throw new ServerError(401, "Invalid password.");
    }

    const token = jwt.sign({ email: user.email });
    res.json({ token ,user});
  } catch (err) {
    next(err);
  }
});
