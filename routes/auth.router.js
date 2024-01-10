const express = require("express");
const User = require("../model/user.model");
const CryptoJs = require("crypto-js");

const router = express.Router();

router.route("/register").post(async (req, res) => {
  try {
    const { username, phonenumber, password, email } = req.body;

    const userData = {
      username: username,
      phonenumber: phonenumber,
      password: CryptoJs.AES.encrypt(
        password,
        process.env.PASSWORD_SECRET_KEY
      ).toString(),
      email: email,
    };

    const newUser = new User(userData);
    const saveUserData = await newUser.save();
    res.status(201).json(saveUserData);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
    console.log(err);
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const { phonenumber, password } = req.body;
    const user = await User.findOne({ phonenumber: phonenumber });

    !user && res.status(401).json({ message: "Invalid Mobile Number" });

    const decodedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(CryptoJs.enc.Utf8);

    decodedPassword !== password &&
      res.status(401).json({ message: "Incorrect Password" });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
