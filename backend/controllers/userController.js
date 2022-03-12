const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json("Message: Register User");
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json("Message: Login User");
});

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json("Message: Get User");
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
