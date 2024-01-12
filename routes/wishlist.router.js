const express = require("express");
const Wishlist = require("../model/whislist.model");
const verifyUser = require("../middleware/verifyUser");

const router = express.Router();

router.route("/").post(verifyUser, async (req, res) => {
  const newWishlist = new Wishlist(req.body);
  try {
    const savedWishlist = await newWishlist.save();
    res.status(201).send(savedWishlist);
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Failed to wishlist" });
  }
});

router.route("/:id").delete(verifyUser, async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.param.id);
    res.json({ message: "Hotel Deleted from Wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Could not delete hotel from wishlist" });
  }
});

router.route("/").get(verifyUser, async (req, res) => {
  try {
    const wishlist = await Wishlist.find({});
    wishlist
      ? res.json(wishlist)
      : res.json({ message: "No items found in wishlist" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
