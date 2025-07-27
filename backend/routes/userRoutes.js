// backend/routes/userRoutes.js
const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  await user.save();
  res.json(user);
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
