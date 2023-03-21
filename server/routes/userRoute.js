const router = require("express").Router();
const User = require("../model/userSchema");

router.post("/register", async (req, res) => {
  const user = new User({
    //username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    //res.send(sa);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;
