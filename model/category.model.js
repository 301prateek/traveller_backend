const mongoose = require("mongoose");
// const uuid = require("uuid");

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
