const express = require("express");

const Category = require("../model/category.model.js");

const categories = require("../data/categories");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    // await Category.remove();
    const categoriesInDB = await Category.insertMany(categories.data);
    console.log("Here");
    res.json(categoriesInDB);
  } catch (error) {
    console.log(error);
    res.json({ message: "Could not add Categories to DB" });
  }
});

module.exports = router;
