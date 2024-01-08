const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/dbconfig");

const hotelDataAddToDBRouter = require("./routes/dataimport.router");
const categoriesDataAddToDBRouter = require("./routes/categoryimport.router");

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singleHotelRouter = require("./routes/singleHotel.router");

let corsOptions = {
  origin: [
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:3500",
  ],
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
require("dotenv").config();

const PORT = 3500;

connectDB();

app.get("/api", (req, res) => {
  res.send("Hello!");
});

app.use("/api/categoriesData", categoriesDataAddToDBRouter);
app.use("/api/hoteldata", hotelDataAddToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});
app.listen(PORT || process.env.PORT, () => {
  console.log(`Listening on port - ${PORT}`);
});
