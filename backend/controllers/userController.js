const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// REGISTER USER FUNCTION
const registerUser = asyncHandler(async (req, res) => {
  const {
    username,
    password,
    email,
    firstname,
    lastname,
    address,
    city,
    state,
    zip,
  } = req.body

  if (
    !username ||
    !password ||
    !email ||
    !firstname ||
    !lastname ||
    !address ||
    !city ||
    !state ||
    !zip
  ) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = await User.create({
    username,
    password: hashedPassword,
    email,
    firstname,
    lastname,
    address,
    city,
    state,
    zip,
  })

  if (newUser) {
    res.status(201).json({
      _id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      token: generateToken(newUser._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// UPDATE USER FUNCTION
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId)
  if (!user) {
    res.status(404)
    throw new Error('User not found')
  }

  try {
    const updateUserInfo = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    )
    res.status(200).json(updateUserInfo)
  } catch (error) {
    res.status(400).json({
      message: error,
    })
  }
})

// LOGIN USER FUNCTION
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const newUser = await User.findOne({ email })

  if (newUser && (await bcrypt.compare(password, newUser.password))) {
    res.json({
      _id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      token: generateToken(newUser._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// GET USER FUNCTION
const getUser = asyncHandler(async (req, res) => {
  const allUsers = await User.find()
  res.status(200).json(allUsers)
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getUser,
  updateUser,
}
