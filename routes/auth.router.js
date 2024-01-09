const express = require("express");
const User = require("../model/user.model");

const router = express.Router();

router.route("/register").post(async (req, res) => {
  try {
    const { username, phonenumber, password, email } = req.body;

    const userData = {
      username: username,
      phonenumber: phonenumber,
      password: password,
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

module.exports = router;
