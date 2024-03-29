const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  phonenumber: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, requiredL: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
