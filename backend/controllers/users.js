const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const generateToken = require('../utils/generateToken.js');
const User = require("../models/userModel");

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body


  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const result = await User.create({
    name,
    email,
    password,
  })

  if (result) {
    res.status(201).json({
      message: "User created!",
      result
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      userId: user._id,
      name: user.name,
      email: user.email,
      expiresIn: 3600,
      token: generateToken({ email: user.email, userId: user._id }),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})


module.exports = {
  userLogin,
  createUser
};
