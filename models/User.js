const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: String,
  Email: String,
  Age: Number,
});

module.exports = mongoose.model("users", userSchema);
