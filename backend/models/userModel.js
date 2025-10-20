const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  reputation: { type: Number, default: 0 },
  badges: [String],
});

module.exports = mongoose.model("User", userSchema);
