const express = require("express");
const Category = require("../model/category.model.js");
const categories = require("../data/categories");

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (err) {
    res.status(404).json({ message: "Could not find categories" });
  }
});

module.exports = router