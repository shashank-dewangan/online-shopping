import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';
import { generateToken } from '../utils/generateToken.js';

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
      .status(200);
  } else {
    res.status(401);
    throw new Error(`Entered user or password is invalid`);
  }
});

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
      .status(200);
  } else {
    res.status(401);
    throw new Error(`User Not Found`);
  }
});

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(401);
    throw new Error('User Already Exist');
  }
  const createdUser = await User.create({ name, email, password });

  if (createdUser) {
    res.status(201).json({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid data');
  }
});
