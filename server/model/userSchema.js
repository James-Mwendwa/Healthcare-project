const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },
});

module.exports = mongoose.model("User", userSchema);
