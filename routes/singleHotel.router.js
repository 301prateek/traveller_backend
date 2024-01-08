const express = require("express");
const router = express();

const Hotel = require("../model/hotel.model");

router.route("/:id").get(async (req, res) => {
  try {
    const { id } = req.params;

    await Hotel.findById(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(204).json({ message: "Hotel not found" });
      });
  } catch (err) {
    res.status(404).json({ message: "No hotel found" });
  }
});

module.exports = router;
