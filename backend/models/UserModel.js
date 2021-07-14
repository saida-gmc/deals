const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  adress: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
});
module.exports = User = model("user", userSchema);
