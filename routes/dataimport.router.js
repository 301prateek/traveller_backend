const express = require("express");

const Hotel = require("../model/hotel.model.js");

const hotels = require("../data/hotels");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const hotelsInDB = await Hotel.insertMany(hotels.data);
    console.log("Here");
    res.json(hotelsInDB);
  } catch (error) {
    console.log(error);
    res.json({ message: "Could not add data to DB" });
  }
});

module.exports = router;
