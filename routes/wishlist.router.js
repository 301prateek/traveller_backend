const express = require("express");
const Wishlist = require("../model/whislist.model");

const router = express.Router();

router.route("/").post(async (req, res) => {
  const newWishlist = new Wishlist(req.body);
  try {
    const savedWishlist = await newWishlist.save();
    res.status(201).send(savedWishlist);
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Failed to wishlist" });
  }
});

router.route("/").delete(async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.param.id);
    res.json({ message: "Hotel Deleted from Wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Could not delete hotel from wishlist" });
  }
});

module.exports = router;
