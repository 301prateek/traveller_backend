const express = require("express");
const router = express();

const Hotel = require("../model/hotel.model");

router.route("/").get(async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    hotels
      ? res.json(hotels)
      : res.status(404).json({ message: "No data found" });
  } catch (error) {}
});

module.exports = router;
