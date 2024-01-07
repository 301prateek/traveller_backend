const express = require("express");
const router = express();

const Hotel = require("../model/hotel.model");

router.route("/").get(async (req, res) => {
  const hotelCategory = req.query.category;
  try {
    // await Hotel.remove();
    let hotels;
    if (hotelCategory) {
      hotels = await Hotel.find({ category: hotelCategory });
    } else {
      hotels = await Hotel.find({});
    }
    hotels
      ? res.json(hotels)
      : res.status(404).json({ message: "No data found" });
  } catch (error) {}
});

module.exports = router;
