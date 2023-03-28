const User = require("../model/userSchema");

const user_post_create = (req, res) => {
  const user = new User(req.body);
  user.save().status(200);
};

module.exports = user_post_create;
