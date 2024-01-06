const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/dbconfig");
const hotelRouter = require("./routes/hotel.router");
const hotelDataAddToDBRouter = require("./routes/dataimport.router");

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

app.use("/api/hoteldata", hotelDataAddToDBRouter);

app.use("/api/hotels", hotelRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});
app.listen(PORT || process.env.PORT, () => {
  console.log(`Listening on port 3500`);
});
